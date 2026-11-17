// The endless station: a lazily generated graph of segments. Nodes near the
// player are planned and built; nodes further than a few joints away are torn
// down again, and whole branches are forgotten once a gate closes behind you.
import * as THREE from 'three';
import { GeoBuilder } from './builder.js';
import { RNG, hash32 } from '../util/rng.js';
import { CFG } from '../config.js';
import { makeWorldMaterial } from '../render/materials.js';

let nextId = 1;

function worldBox(box, pos, yaw) {
  const c = Math.cos(yaw), s = Math.sin(yaw);
  let x0 = Infinity, x1 = -Infinity, z0 = Infinity, z1 = -Infinity;
  for (const [x, z] of [[box[0], box[2]], [box[3], box[2]], [box[0], box[5]], [box[3], box[5]]]) {
    const wx = pos.x + x * c + z * s, wz = pos.z - x * s + z * c;
    x0 = Math.min(x0, wx); x1 = Math.max(x1, wx); z0 = Math.min(z0, wz); z1 = Math.max(z1, wz);
  }
  return [x0, pos.y + box[1], z0, x1, pos.y + box[4], z1];
}

function overlaps(a, b, m = 0.25) {
  return a[0] < b[3] - m && a[3] > b[0] + m && a[1] < b[4] - m && a[4] > b[1] + m && a[2] < b[5] - m && a[5] > b[2] + m;
}

export class World {
  // hooks: { choose(node, exitIndex, attempt, rng) → {def, env} | null,
  //          textures(layer, node) → THREE.Texture, makeSheet(node) → sheet | null,
  //          onBuilt(node), onDisposed(node) }
  constructor(scene, hooks) {
    this.scene = scene;
    this.hooks = hooks;
    this.nodes = new Map();
    this.current = null;
    this.buildQueue = [];
    this.stats = { built: 0, planned: 0, deadEnds: 0 };
  }

  clear() {
    for (const n of this.nodes.values()) this.unbuild(n);
    this.nodes.clear();
    this.current = null;
    this.buildQueue.length = 0;
  }

  // Create the root node from a segment definition.
  start(def, env, seed) {
    this.clear();
    const rng = new RNG(seed);
    const plan = def.plan(rng, env);
    const node = this._make(def, plan, env, { x: 0, y: 0, z: 0 }, 0, null, -1, seed);
    this.current = node;
    this.refresh(true);
    return node;
  }

  _make(def, plan, env, pos, yaw, parent, exitIndex, seed) {
    const node = {
      id: nextId++, def, p: plan.p, env, seed, pos, yaw, parent, exitIndex,
      exits: plan.exits.map((e) => ({ ...e, child: null })),
      box: worldBox(plan.box, pos, yaw), built: null, dist: Infinity,
      flick: { value: 1 }, phase: (seed % 1000) / 10,
      // rough length of the node along the path (for the sight distance)
      span: plan.exits.reduce((m, e) => Math.max(m, Math.hypot(e.x, e.z)), 0) || 6,
    };
    this.nodes.set(node.id, node);
    this.stats.planned++;
    return node;
  }

  exitPose(node, i) {
    const e = node.exits[i], c = Math.cos(node.yaw), s = Math.sin(node.yaw);
    return {
      pos: { x: node.pos.x + e.x * c + e.z * s, y: node.pos.y + e.y, z: node.pos.z - e.x * s + e.z * c },
      yaw: node.yaw + e.yaw,
    };
  }

  _fits(box, parent) {
    for (const n of this.nodes.values()) {
      if (n === parent) continue;
      if (overlaps(box, n.box)) return false;
    }
    return true;
  }

  // Plan the child behind exit i of node (tries alternatives until one fits).
  expand(node, i) {
    const exit = node.exits[i];
    if (exit.child || exit.sealed) return exit.child;
    const { pos, yaw } = this.exitPose(node, i);
    for (let attempt = 0; attempt < 14; attempt++) {
      const seed = hash32(node.seed, i * 31 + attempt * 977 + 1);
      const rng = new RNG(seed);
      const pick = this.hooks.choose(node, i, attempt, rng);
      if (!pick) break;
      const plan = pick.def.plan(rng, pick.env);
      const box = worldBox(plan.box, pos, yaw);
      if (!pick.force && !this._fits(box, node)) continue;
      exit.child = this._make(pick.def, plan, pick.env, pos, yaw, node, i, seed);
      return exit.child;
    }
    this.stats.deadEnds++;
    return null;
  }

  // Graph neighbours (parent + children).
  neighbours(node) {
    const out = [];
    if (node.parent) out.push(node.parent);
    for (const e of node.exits) if (e.child) out.push(e.child);
    return out;
  }

  // Recompute distances from the current node; plan, build and unbuild.
  // A node is wanted if it is within CFG.ahead joints, or within sight
  // (CFG.sight metres of path) — so long straights never end in a void.
  refresh(sync = false) {
    const R = CFG.ahead, SIGHT = CFG.sight || 46, MAXJ = 7;
    for (const n of this.nodes.values()) { n.dist = Infinity; n.path = Infinity; }
    const queue = [this.current];
    this.current.dist = 0; this.current.path = 0;
    const wanted = (n) => n.dist <= R || (n.path <= SIGHT && n.dist <= MAXJ);
    while (queue.length) {
      const n = queue.shift();
      if (n.dist < R || (n.path < SIGHT && n.dist < MAXJ)) for (let i = 0; i < n.exits.length; i++) this.expand(n, i);
      for (const m of this.neighbours(n)) {
        if (m.dist > n.dist + 1) {
          m.dist = n.dist + 1;
          // metres of path between the player's node and the far side of n
          m.path = n === this.current ? 0 : n.path + (n.span || 8);
          queue.push(m);
        }
      }
    }
    for (const n of this.nodes.values()) {
      if (wanted(n) && !n.built && !this.buildQueue.includes(n)) this.buildQueue.push(n);
      else if (n.built && n.dist > R + 1 && n.path > SIGHT + 10) this.unbuild(n);
    }
    this.buildQueue.sort((a, b) => a.dist - b.dist);
    if (sync) while (this.buildQueue.length) this.build(this.buildQueue.shift());
  }

  // Build at most one queued node per call (spreads the cost over frames).
  pump() {
    while (this.buildQueue.length) {
      const n = this.buildQueue.shift();
      if (!this.nodes.has(n.id) || n.built || n.dist === Infinity) continue;
      this.build(n);
      return true;
    }
    return false;
  }

  build(node) {
    if (node.built) return;
    const b = new GeoBuilder();
    const sheet = this.hooks.makeSheet ? this.hooks.makeSheet(node) : null;
    const ctx = { b, p: node.p, rng: new RNG(hash32(node.seed, 99)), env: node.env, node, sheet, theme: node.env.theme, world: this };
    const res = node.def.build(ctx) || {};
    const geos = b.bake(node.env.ambient || [0.1, 0.105, 0.1]);
    const group = new THREE.Group();
    group.position.set(node.pos.x, node.pos.y, node.pos.z);
    group.rotation.y = node.yaw;
    group.updateMatrix();
    group.matrixAutoUpdate = false;
    const sheetTex = sheet ? sheet.finish() : null;
    for (const layer of Object.keys(geos)) {
      const tex = layer === 'sheet' ? sheetTex : this.hooks.textures(layer, node);
      const mesh = new THREE.Mesh(geos[layer], makeWorldMaterial(tex, node.flick));
      mesh.matrixAutoUpdate = false;
      mesh.name = layer;
      if (layer === 'gate') mesh.visible = !!node.gateShut;   // shown when the gate closes
      if (layer === 'figure') mesh.visible = !node.figureGone;
      group.add(mesh);
    }
    this.scene.add(group);
    group.updateMatrixWorld(true);
    node.built = {
      group, sheetTex, cells: res.cells || [], walls: res.walls || [], items: res.items || [],
      frames: res.frames || null, extra: res.extra || null,
      gate: group.children.find((m) => m.name === 'gate') || null,
      figure: group.children.find((m) => m.name === 'figure') || null,
    };
    if (node.gateShut && node.gateWall) node.built.walls.push(node.gateWall);
    this.stats.built++;
    if (this.hooks.onBuilt) this.hooks.onBuilt(node);
  }

  unbuild(node) {
    if (!node.built) return;
    const { group, sheetTex } = node.built;
    this.scene.remove(group);
    for (const m of group.children) { m.geometry.dispose(); m.material.dispose(); }
    if (sheetTex) sheetTex.dispose();
    if (this.hooks.onDisposed) this.hooks.onDisposed(node);
    node.built = null;
  }

  // Forget a node and everything reachable from it without passing `stop`.
  prune(node, stop) {
    const stack = [node];
    while (stack.length) {
      const n = stack.pop();
      if (!this.nodes.has(n.id)) continue;
      this.unbuild(n);
      this.nodes.delete(n.id);
      for (const m of this.neighbours(n)) if (m !== stop && this.nodes.has(m.id)) stack.push(m);
    }
  }
}
