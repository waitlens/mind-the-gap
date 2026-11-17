// Helpers for automated tests and screenshots (window.__game.debug).
import * as THREE from 'three';
import { toWorld, toLocal } from '../world/collide.js';
import { CFG } from '../config.js';

export function installDebug(api, game) {
  const p = game.player, world = game.world;

  const place = (node, lx, lz, pathYaw, ly = 0) => {
    const [x, y, z] = toWorld(node, lx, ly, lz);
    world.current = node;
    world.refresh(true);
    p.spawn(x, y, z, node.yaw + (pathYaw || 0));
    p.loc = null;
    return api.debug.info();
  };

  api.debug = {
    // Hold movement input (mz forward, mx strafe) until changed.
    input(mx = 0, mz = 0, run = false) { game.input.kmx = mx; game.input.kmz = mz; game.input.krun = !!run; },
    // Turn the camera by (yaw, pitch) radians.
    look(dyaw = 0, dpitch = 0) { p.yaw += dyaw; p.pitch += dpitch; },
    face(yaw, pitch = 0) { p.yaw = yaw; p.pitch = pitch; },
    tp(x, y, z) { p.pos.x = x; p.pos.y = y; p.pos.z = z; p.eyeY = y + 1.62; },
    // Jump to the start of the node n steps ahead (following exit `branch`).
    advance(n = 1, branch = 0) {
      let node = world.current;
      for (let i = 0; i < n; i++) {
        const e = node.exits[Math.min(branch, node.exits.length - 1)];
        if (!e) break;
        if (!e.child) world.expand(node, node.exits.indexOf(e));
        if (!e.child) break;
        node = e.child;
      }
      return place(node, 0, 0.6, 0);
    },
    // Jump ahead to the next node of a given type (searching along exit 0).
    seek(type, max = 60, branch = 0) {
      let node = world.current;
      for (let i = 0; i < max; i++) {
        const e = node.exits[Math.min(branch, node.exits.length - 1)];
        if (!e) return null;
        if (!e.child) world.expand(node, node.exits.indexOf(e));
        if (!e.child) return null;
        node = e.child;
        world.current = node; world.refresh(true);
        if (node.def.type === type) return place(node, 0, 0.6, 0);
      }
      return null;
    },
    // Stand at a local position inside the current node.
    at(lx, lz, pathYaw = 0, ly = 0) { return place(world.current, lx, lz, pathYaw, ly); },
    info() {
      const n = world.current;
      return {
        type: n.def.type, id: n.id, yaw: +n.yaw.toFixed(2), pos: [n.pos.x, n.pos.y, n.pos.z].map((v) => +v.toFixed(1)),
        exits: n.exits.length, nodes: world.nodes.size, station: n.env.station, idx: n.env.idx,
        plan: n.env.stretch ? n.env.stretch.plan.join(',') : '',
        items: n.built ? n.built.items.map((i) => i.label || i.title || '?') : [],
      };
    },
    // Count pixels where the void shows through the geometry (cracks,
    // pinholes, missing faces): renders one frame with a magenta clear
    // colour and counts what is left of it. 0 means watertight.
    voidPixels(detail = false) {
      const r = game.renderer, gl = r.gl;
      const old = gl.getClearColor(new THREE.Color());
      gl.setClearColor(0xff00ff, 1);
      gl.setRenderTarget(r.target);
      gl.render(game.scene, game.camera);
      const buf = new Uint8Array(r.iw * r.ih * 4);
      gl.readRenderTargetPixels(r.target, 0, 0, r.iw, r.ih, buf);
      gl.setRenderTarget(null);
      gl.setClearColor(old, 1);
      let n = 0;
      const hits = [];
      for (let i = 0; i < buf.length; i += 4) {
        if (buf[i] > 180 && buf[i + 1] < 90 && buf[i + 2] > 180) {
          n++;
          if (detail && hits.length < 400) {
            // where the ray through this pixel meets the plane z = detail.z (world)
            const px = (i / 4) % r.iw, py = Math.floor(i / 4 / r.iw);
            const v = new THREE.Vector3(((px + 0.5) / r.iw) * 2 - 1, ((py + 0.5) / r.ih) * 2 - 1, 0.5).unproject(game.camera);
            // (or the horizontal plane y = detail.y)
            const c = game.camera.position;
            const t = detail.y !== undefined ? (detail.y - c.y) / (v.y - c.y) : ((detail.z ?? 0) - c.z) / (v.z - c.z);
            hits.push([c.x + (v.x - c.x) * t, c.y + (v.y - c.y) * t, c.z + (v.z - c.z) * t].map((q) => +q.toFixed(3))
              .concat([px, py, buf[i], buf[i + 1], buf[i + 2]]));
          }
        }
      }
      return detail ? { n, hits } : n;
    },
    // What is under render-target pixel (px, py) (origin bottom-left)?
    pick(px, py) {
      const r = game.renderer;
      const ray = new THREE.Raycaster();
      ray.setFromCamera(new THREE.Vector2(((px + 0.5) / r.iw) * 2 - 1, ((py + 0.5) / r.ih) * 2 - 1), game.camera);
      const hits = ray.intersectObjects(game.scene.children, true).slice(0, 3);
      return hits.map((h) => {
        const node = [...world.nodes.values()].find((m) => m.built && m.built.group === h.object.parent);
        const [qx, qz] = node ? toLocal(node, h.point.x, h.point.z) : [h.point.x, h.point.z];
        const l = { x: qx, y: h.point.y - (node ? node.pos.y : 0), z: qz };
        return { layer: h.object.name, node: node ? node.def.type : '?', d: +h.distance.toFixed(3), local: [l.x, l.y, l.z].map((q) => +q.toFixed(3)), uv: h.uv ? [+h.uv.x.toFixed(4), +h.uv.y.toFixed(4)] : null, face: h.faceIndex };
      });
    },
    // Plan and build everything within n joints of the player (tests only).
    buildAll(n = 12) {
      const keep = [CFG.ahead, CFG.sight];
      CFG.ahead = n; CFG.sight = 1e6;
      world.refresh(true);
      [CFG.ahead, CFG.sight] = keep;
      return [...world.nodes.values()].filter((m) => m.built).map((m) => m.def.type);
    },
    // Walk a virtual camera through every built node, look in many
    // directions from each spot and add up the void pixels (see voidPixels).
    scanVoid(yaws = 8, pitches = [-0.5, 0, 0.45]) {
      const cam = game.camera, far = cam.far;
      cam.far = 600; cam.updateProjectionMatrix();
      const out = { views: 0, total: 0, worst: null, byType: {} };
      for (const node of world.nodes.values()) {
        if (!node.built) continue;
        for (const c of node.built.cells) {
          for (const t of [0.25, 0.75]) {
            const [x, y, z] = toWorld(node, c.ax + (c.bx - c.ax) * t, c.ya + (c.yb - c.ya) * t, c.az + (c.bz - c.az) * t);
            for (let k = 0; k < yaws; k++) {
              for (const pitch of pitches) {
                const yaw = (k / yaws) * Math.PI * 2 + 0.11;
                // (nudged off the exact centreline and off dead level: a player's
                // camera is never mathematically exact, and exact poses hit
                // degenerate cases in software rasterisers)
                cam.position.set(x + 0.0137, y + 1.6071, z - 0.0093); cam.rotation.set(pitch + 0.013, yaw, 0.007); cam.updateMatrixWorld(true);
                const n = api.debug.voidPixels();
                out.views++; out.total += n;
                if (n) out.byType[node.def.type] = (out.byType[node.def.type] || 0) + n;
                if (n && (!out.worst || n > out.worst.n)) out.worst = { n, type: node.def.type, id: node.id, cam: [cam.position.x, cam.position.y, cam.position.z, cam.rotation.x, cam.rotation.y, cam.rotation.z] };
              }
            }
          }
        }
      }
      cam.far = far; cam.updateProjectionMatrix();
      return out;
    },
    // Restart with a forced list of segment types (for tests / screenshots).
    plan(list, seed = 7, wrong = 0) { game.reset(seed, list, wrong); return api.debug.info(); },
    // Jump to the next junction and commit to its right (or wrong) branch.
    take(correct = true) {
      if (world.current.def.type !== 'junction' && !api.debug.seek('junction', 80)) return null;
      const j = world.current;
      const exit = correct ? j.p.correct : 1 - j.p.correct;
      const kind = j.p.kind;
      if (!j.exits[exit].child) world.expand(j, exit);
      const child = j.exits[exit].child;
      world.current = child; world.refresh(true);
      const [x, y, z] = toWorld(child, 0, 0, 4.2);
      p.spawn(x, y, z, child.yaw);
      game.director.commit(child);
      return { kind, exit, progress: game.story.progress, wrong: game.story.wrong, plan: child.env.stretch.plan.join(',') };
    },
    force(kind, level) { game.story.forceKind = kind || null; game.story.forceLevel = level; },
    // Force the segments behind every junction branch (after the gate passage).
    branch(list) { game.story.testBranch = list || null; },
    setProgress(v) { game.story.progress = v; game.state.progress = v; },
    setWrong(v) { game.story.wrong = v; game.state.wrong = v; },
    say(text, chime = 'rise') { game.director.announcer.say({ text, chime }); },
    glitch(s = 1) { game.director.events.glitch(s); },
    use() { game.director.scan(); game.director.use(true); return game.state.reading; },
    freeze(on = true) { game.frozen = on; },
    story: () => ({ progress: game.story.progress, wrong: game.story.wrong, log: game.story.log }),
  };
}
