// Helpers for automated tests and screenshots (window.__game.debug).
import * as THREE from 'three';
import { toWorld, toLocal, floorIn } from '../world/collide.js';
import { CFG } from '../config.js';
import { preview } from './debug_tex.js';
import { setGates } from './gates.js';
import { liftDebug } from './lifts.js';
import { SP as SP_GEOM, phi as spPhi, lineY as spLineY } from '../world/spiral_geom.js';

// Set pieces reachable with debug.scene(name).
const SCENES = {
  shelter: { plan: ['platform', 'corridor', 'shelter', 'corridor', 'junction'], advance: 2, at: [0, 3.2] },
  ghost: { plan: ['platform', 'corridor', 'ghost', 'corridor', 'junction'], advance: 2, at: [0, 2.2], wrong: 1.4 },
  // the ticket hall at the way out; opts.z: how far in to stand (default: the top of the last flight)
  hall: {
    plan: ['platform', 'corridor', 'exit'], advance: 2, at: [0, 5.2, 0, 1.92], progress: 4, wrong: 2,
    after(d, game, o) { if (o.z !== undefined) d.at(o.x ?? 0, o.z, o.yaw ?? 0, 1.92); },
  },
  // opts.landing = 0 … 19 stands you on that landing of the stairs (0 the foot, 19 the top)
  spiral: {
    plan: ['platform', 'corridor', 'spiral', 'exit'], advance: 2, at: [0, 0.8], progress: 4, wrong: 2,
    after(d, game, o) {
      if (o.landing === undefined) return;
      const n = game.world.current, g = o.landing === 0 ? 0 : o.landing * 18, a = (spPhi(g) + spPhi(g + 1)) / 2 - (o.back ?? 0.12);
      d.at(n.p.dir * 2.0 * Math.sin(a), SP_GEOM.ZC - 2.0 * Math.cos(a), 0, spLineY(g));
      // look along the stairs, turned a little towards the pillar (o.turn: more, or less)
      const t = a + (o.turn ?? 0.75);
      d.face(Math.atan2(-n.p.dir * Math.cos(t), -Math.sin(t)) + n.yaw, o.pitch ?? 0.1);
    },
  },
  // the passenger lift: you stand in the passage before it, looking at its landing.
  // opts.state = 'open' | 'board' | 'ride' | 'arrive' puts it (and you) further on; opts.dir = 1 | -1 picks an up or a down lift
  lift: {
    plan: ['platform', 'corridor', 'lift', 'corridor', 'junction'], advance: 2, at: [0, 0.12],
    after(d, game, o) {
      if (o.dir && d.lift().dir !== o.dir) for (let seed = 8; seed < 40; seed++) { game.reset(seed, this.plan, o.wrong ?? 0, 1); d.advance(2); d.at(0, 0.12); if (d.lift().dir === o.dir) break; }
      if (o.state) d.lift(o.state, o);
    },
  },
  // opts.car = 0 | 1 | 2 stands you inside that car (opts.z: metres from its rear end)
  train: {
    plan: ['platform', 'corridor', 'trainstop', 'corridor', 'junction'], advance: 2, at: [0, 1.5],
    after(d, game, o) {
      if (o.car === undefined) return;
      const n = game.world.current;
      d.at(n.p.side * 3.045, 2.1 + o.car * 18.02 + (o.z ?? 9), o.yaw || 0);
    },
  },
};

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
    // Walk ahead (along exit 0) to the first thing whose READ label contains
    // `label` — 'whiteboard', 'newspaper', 'notice'… — and stand `dist` metres in
    // front of it, looking at it. opts: { max, skip, test(item) }.
    find(label, dist = 1.6, opts = {}) {
      let node = world.current, skip = opts.skip || 0;
      for (let i = 0; i <= (opts.max || 40); i++) {
        world.current = node; world.refresh(true);
        const hits = node.built ? node.built.items.filter((q) => (q.label || '').includes(label) && (!opts.test || opts.test(q))) : [];
        if (hits.length > skip) {
          const it = hits[skip];
          const n = it.n || [-Math.sign(it.x), 0];        // wall fittings face the centreline
          // (stand on whichever floor the thing is on: segments have more than one level)
          const sx = it.x + n[0] * dist, sz = it.z + n[1] * dist, [fx, , fz] = toWorld(node, sx, 0, sz);
          const fl = opts.ly === undefined ? floorIn(node, fx, fz, node.pos.y + it.y - 1.3) : null;
          place(node, sx, sz, 0, fl ? fl.y - node.pos.y : opts.ly || 0);
          const [wx, wy, wz] = toWorld(node, it.x, it.y, it.z);
          const dx = wx - p.pos.x, dz = wz - p.pos.z;
          p.yaw = Math.atan2(-dx, -dz); p.pitch = Math.atan2(wy - p.eyeY, Math.hypot(dx, dz));
          return { type: node.def.type, station: node.env.station, text: it.text, board: it.board, paper: it.paper, correct: node.p.correct };
        }
        skip -= hits.length;
        const e = node.exits[0];
        if (!e) return null;
        if (!e.child) world.expand(node, 0);
        if (!e.child) return null;
        node = e.child;
      }
      return null;
    },
    // Stand at a local position inside the current node.
    at(lx, lz, pathYaw = 0, ly = 0) { return place(world.current, lx, lz, pathYaw, ly); },
    cam() { return game.camera; },
    // The gate line in the ticket hall: put it in a state ('wait' | 'no' | 'go'), or report it.
    gates(state) {
      const n = world.current;
      if (state) setGates(n, state);
      return { state: n.gateState || 'wait', busy: n.gateBusy, touches: n.gateTouches || 0, time: game.state.time, zones: n.built && n.built.extra ? n.built.extra.zones.map((z) => !!z.done) : [] };
    },
    // The lift you are in or nearest to: report it, or put it in a state (see game/lifts.js).
    lift(cmd, opts) { return liftDebug(game, cmd, opts); },
    dirOf() { const n = world.current; return n.p.dir ?? n.p.side ?? 1; },
    // Where the void shows through: every leaking view of scanVoid() with
    // what lies under its first void pixel (layer, segment, local point).
    leaks(origin = world.current) {
      const cam = game.camera, far = cam.far, res = api.debug.scanVoid();
      cam.far = 600; cam.updateProjectionMatrix();
      const rel = (x, z) => toLocal(origin, x, z).map((v) => +v.toFixed(2));
      const out = res.list.map((v) => {
        cam.position.set(v.cam[0], v.cam[1], v.cam[2]); cam.rotation.set(v.cam[3], v.cam[4], v.cam[5]); cam.updateMatrixWorld(true);
        const h = api.debug.voidPixels({ y: 0 }).hits[0];
        const pk = h ? api.debug.pick(h[3], h[4]) : [];
        return { from: v.type, at: rel(v.cam[0], v.cam[2]).concat(+(v.cam[1] - origin.pos.y).toFixed(2)), rot: [+v.cam[3].toFixed(2), +v.cam[4].toFixed(2)], n: v.n, px: h ? [h[3], h[4]] : null, under: pk.slice(0, 2).map((q) => `${q.layer}:${q.node}@${q.local.map((w) => w.toFixed(2)).join(',')} d${q.d.toFixed(1)}`) };
      });
      cam.far = far; cam.updateProjectionMatrix();
      return { total: res.total, byType: res.byType, leaks: out };
    },
    // Paint the void magenta in the live picture (to see a leak in a screenshot).
    showVoid(on = true) { game.renderer.gl.setClearColor(on ? 0xff00ff : 0x000000, 1); },
    // The player's position in the current node's own coordinates.
    local() { const n = world.current, [x, z] = toLocal(n, p.pos.x, p.pos.z); return { x, y: p.pos.y - n.pos.y, z, type: n.def.type }; },
    folds() { return [...world.nodes.values()].filter((n) => n.hiddenByFold).length; },
    // Every node with its bounding box, and whether the fold-cull has hidden it.
    boxes() { return [...world.nodes.values()].map((n) => ({ id: n.id, type: n.def.type, dist: n.dist, built: !!n.built, hidden: !!n.hiddenByFold, box: n.box.map((v) => +v.toFixed(1)) })); },
    items() { const n = world.current; return n.built ? n.built.items.map((i) => ({ label: i.label, x: i.x, y: i.y, z: i.z })) : []; },
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
    // both = true: count back faces too (what a leaking ray passes through
    // on its way out), up to `max` hits.
    pick(px, py, both = false, max = 3) {
      const r = game.renderer;
      const ray = new THREE.Raycaster();
      ray.setFromCamera(new THREE.Vector2(((px + 0.5) / r.iw) * 2 - 1, ((py + 0.5) / r.ih) * 2 - 1), game.camera);
      const mats = [];
      if (both) game.scene.traverse((o) => { if (o.material && o.material.side !== THREE.DoubleSide) { mats.push([o.material, o.material.side]); o.material.side = THREE.DoubleSide; } });
      const hits = ray.intersectObjects(game.scene.children, true).slice(0, max);
      for (const [m, side] of mats) m.side = side;
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
      const out = { views: 0, total: 0, worst: null, byType: {}, list: [] };
      for (const node of world.nodes.values()) {
        if (!node.built) continue;
        // (a segment with hundreds of floor cells — the spiral stairs — is
        // sampled: all of its first and last dozen cells, every eighth between)
        const cs = node.built.cells, stride = Math.max(1, Math.ceil(cs.length / 48));
        for (let ci = 0; ci < cs.length; ci++) {
          if (stride > 1 && ci >= 12 && ci < cs.length - 12 && ci % stride) continue;
          const c = cs[ci];
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
                // (every leaking view, for hunting a leak down: see leaks())
                if (n && out.list.length < 300) out.list.push({ n, type: node.def.type, cam: [cam.position.x, cam.position.y, cam.position.z, cam.rotation.x, cam.rotation.y, cam.rotation.z] });
              }
            }
          }
        }
      }
      cam.far = far; cam.updateProjectionMatrix();
      return out;
    },
    preview,
    // Built segments whose sign sheet ran out of room (should be none).
    overflow() {
      return [...world.nodes.values()].filter((m) => m.built && m.built.sheetOverflow)
        .map((m) => ({ type: m.def.type, n: m.built.sheetOverflow, labels: m.built.items.map((i) => i.label).join(',') }));
    },
    // Every built segment with its whiteboards and newspapers (for counting them).
    census() {
      return [...world.nodes.values()].filter((m) => m.built).map((m) => ({
        key: `${game.state.seed}:${m.id}`, type: m.def.type,
        boards: m.built.items.filter((i) => i.board).map((i) => i.board),
        papers: m.built.items.filter((i) => i.paper).map((i) => i.paper),
      }));
    },
    builtCount() { return [...world.nodes.values()].filter((m) => m.built).length; },
    // Bring the next train forward (it arrives `s` seconds from now).
    train(s = 2) { game.trains.soon(s); return game.trains.schedule(); },
    // Play many games at once: take junctions right and wrong from several
    // seeds, planning well ahead each time, and report anything that should
    // never happen — a segment forced on top of another, a station that does
    // not match the count of right and wrong turns, a sign sheet overflowing.
    fuzz(seeds = 6, takes = 12, first = 1) {
      const out = { takes: 0, planned: -world.stats.planned, forced: 0, folds: 0, overflow: 0, mismatch: 0, exits: 0 };
      world.stats.deadEnds = 0; world.stats.forced.length = 0;
      for (let seed = first; seed < first + seeds; seed++) {
        game.reset(seed);
        let r = seed * 7919, idx = 0;
        for (let i = 0; i < takes; i++) {
          r = (r * 1103515245 + 12345) & 0x7fffffff;
          const ok = seed % 5 === 0 ? false : (r >> 8) % 3 !== 0;
          const t = api.debug.take(ok);
          if (!t) { out.exits++; break; }
          out.takes++; idx = ok ? idx + 1 : Math.max(0, idx - 2);
          const st = world.current.env.stretch;
          if (st.index !== idx || t.progress !== Math.min(idx, CFG.goal)) out.mismatch++;
          api.debug.buildAll(5);
          out.folds = Math.max(out.folds, api.debug.folds());
          for (const n of world.nodes.values()) if (n.built && n.built.sheetOverflow) out.overflow++;
        }
      }
      out.planned += world.stats.planned; out.forced = world.stats.deadEnds; out.clashes = world.stats.forced.slice(0, 3);
      out.errors = game.state.errors;
      game.reset(first);
      return out;
    },
    // Jump to one of the set-piece scenes. Each entry: the forced layout,
    // how many segments to walk in, and where to stand. opts: { seed, wrong }.
    scene(name, opts = {}) {
      const sc = SCENES[name];
      if (!sc) return Object.keys(SCENES);
      api.debug.force(null); api.debug.branch(null);
      game.reset(opts.seed ?? sc.seed ?? 7, sc.plan, opts.wrong ?? sc.wrong ?? 0, sc.progress ?? 1);
      game.director.reset();
      if (sc.advance) api.debug.advance(sc.advance);
      const at = sc.at || [0, 1.2, 0];
      api.debug.at(at[0], at[1], at[2] || 0, at[3] || 0);
      if (sc.after) sc.after(api.debug, game, opts);
      return api.debug.info();
    },
    // How long is a game? Plays perfect runs (always the right branch) from
    // `seeds` seeds and adds up the walk: metres and segments per stretch,
    // and for the whole run. Lengths are along the path (the spiral stairs
    // count as the 129 m you actually walk).
    measure(seeds = 8, first = 100) {
      const len = (n) => (n.def.type === 'spiral' ? 129 : n.def.type === 'exit' ? 19 : n.def.type === 'bend' ? 7.1 : n.exits[0] ? Math.hypot(n.exits[0].x, n.exits[0].z) : 6);
      const runs = [];
      for (let seed = first; seed < first + seeds; seed++) {
        game.reset(seed);
        const stretches = [];
        let node = world.current, cur = { m: 0, n: 0, types: [] }, guard = 0;
        while (node && guard++ < 400) {
          cur.m += len(node); cur.n++; cur.types.push(node.def.type);
          if (node.def.type === 'junction') {
            stretches.push(cur); cur = { m: 0, n: 0, types: [] };
            world.current = node; world.refresh(true);
            const t = api.debug.take(true);
            if (!t) break;
            node = world.current;          // the gate passage
            continue;
          }
          if (!node.exits.length) { stretches.push(cur); break; }
          if (!node.exits[0].child) world.expand(node, 0);
          node = node.exits[0].child;
        }
        runs.push({ seed, metres: Math.round(stretches.reduce((a, q) => a + q.m, 0)), stretches: stretches.map((q) => ({ m: Math.round(q.m), n: q.n, types: q.types.join(' ') })) });
      }
      const avg = (f) => +(runs.reduce((a, r) => a + f(r), 0) / runs.length).toFixed(1);
      const normal = runs.flatMap((r) => r.stretches.slice(0, -1));
      const types = {};
      for (const q of normal) for (const t of q.types.split(' ')) types[t] = (types[t] || 0) + 1;
      game.reset(first);
      return {
        runMetres: avg((r) => r.metres), junctions: avg((r) => r.stretches.length - 1),
        stretchMetres: +(normal.reduce((a, q) => a + q.m, 0) / normal.length).toFixed(1), stretchSegments: +(normal.reduce((a, q) => a + q.n, 0) / normal.length).toFixed(1),
        exitMetres: avg((r) => r.stretches[r.stretches.length - 1].m), types, sample: runs[0].stretches.map((q) => `${q.m}m: ${q.types}`),
      };
    },
    // Restart with a forced list of segment types (for tests / screenshots).
    plan(list, seed = 7, wrong = 0, progress = 0) { game.reset(seed, list, wrong, progress); return api.debug.info(); },
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
    use() { game.director.scan(); game.director.use(true); return game.director.reading ? game.director.reading.text : ''; },
    // Clear the tutorial hints (for clean screenshots).
    hush() { const dr = game.director; dr.hint = ''; dr.hintT = 0; dr.hints.length = 0; dr.announcer.hush(); },
    freeze(on = true) { game.frozen = on; },
    story: () => ({ progress: game.story.progress, wrong: game.story.wrong, log: game.story.log }),
  };
}
