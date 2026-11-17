// Things that fire because of where the player is standing: entering a new
// station, committing to a junction branch, reaching the way out.
import { toLocal } from '../world/collide.js';

export function checkTriggers(game, dt) {
  const world = game.world, node = world.current, st = game.state;
  if (!node) return;
  const env = node.env;
  if (env.station && st.station !== env.station) st.station = env.station;
  const b = node.built;
  if (!b || !b.extra) return;
  const [lx, lz] = toLocal(node, game.player.pos.x, game.player.pos.z);
  const ly = game.player.pos.y - node.pos.y;
  // segment-specific trigger zones: { x0, x1, z0, z1, once, fire(game, node, zone) }
  if (b.extra.zones) {
    for (const z of b.extra.zones) {
      if (z.done) continue;
      if (lx >= z.x0 && lx <= z.x1 && lz >= z.z0 && lz <= z.z1 && (z.y0 === undefined || (ly >= z.y0 && ly <= z.y1))) {
        if (z.once !== false) z.done = true;
        z.fire(game, node, z, dt);
      }
    }
  }
}
