// Helpers for automated tests and screenshots (window.__game.debug).
import { toWorld } from '../world/collide.js';

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
    setProgress(v) { game.story.progress = v; game.state.progress = v; },
    setWrong(v) { game.story.wrong = v; game.state.wrong = v; },
    say(text, chime = 'rise') { game.director.announcer.say({ text, chime }); },
    glitch(s = 1) { game.director.events.glitch(s); },
    use() { game.director.scan(); game.director.use(true); return game.state.reading; },
    freeze(on = true) { game.frozen = on; },
    story: () => ({ progress: game.story.progress, wrong: game.story.wrong, log: game.story.log }),
  };
}
