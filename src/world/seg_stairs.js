// A flight of stairs in a sloping tiled passage, up or down, with a
// landing at each end and handrails on both walls.
import { PASSAGE, straightFrames, sweep, framePoint } from './sweep.js';
import { lampsAlong, portalLamp } from './decor.js';
import { atlasRect, atlasFlat } from '../tex/atlas.js';
import { clamp } from '../util/rng.js';

const RISE = 0.16, GOING = 0.3, LAND = 1.6;

// Steps between z0 and z0 + n*GOING. dir = +1 climbs, -1 descends.
// Returns nothing; emits treads and risers across the full passage width.
export function buildSteps(b, z0, n, dir, hw = PASSAGE.W / 2, y0 = 0, o = null) {
  const tread = atlasRect('stairTread'), riser = atlasRect('riser');
  for (let i = 0; i < n; i++) {
    const za = z0 + i * GOING, zb = za + GOING;
    const y = y0 + (dir > 0 ? (i + 1) * RISE : -i * RISE);
    // tread: the nosing (top edge of the cell) is on the downhill edge
    for (let k = 0; k < 2; k++) {
      const xa = -hw + hw * k, xb = xa + hw;
      if (dir > 0) b.quad('atlas', [xb, y, zb], [xa, y, zb], [xa, y, za], [xb, y, za], [0, 1, 0], tread, o);
      else b.quad('atlas', [xa, y, za], [xb, y, za], [xb, y, zb], [xa, y, zb], [0, 1, 0], tread, o);
    }
    if (dir > 0) b.quad('atlas', [-hw, y - RISE, za], [hw, y - RISE, za], [hw, y, za], [-hw, y, za], [0, 0, -1], riser, o);
    else b.quad('atlas', [-hw, y - RISE, zb], [hw, y - RISE, zb], [hw, y, zb], [-hw, y, zb], [0, 0, 1], riser, o);
  }
}

// A sloping rail (thin box) from (z0,y0) to (z1,y1) at lateral x.
export function slopeRail(b, x, z0, y0, z1, y1, r = 0.025, cell = 'rubber', o = null) {
  const uv = atlasFlat(cell);
  const a = [x - r, y0 + r, z0], c = [x + r, y0 + r, z0], d = [x + r, y1 + r, z1], e = [x - r, y1 + r, z1];
  b.quad('atlas', a, c, d, e, [0, 1, 0], uv, o);
  const side = x > 0 ? -1 : 1;
  const xi = x + side * r;
  b.quad('atlas', [xi, y0 - r, z0], [xi, y0 + r, z0], [xi, y1 + r, z1], [xi, y1 - r, z1], [side, 0, 0], uv, o);
}

export const stairs = {
  type: 'stairs',
  // env.dir may force the direction (+1 up, -1 down)
  plan(rng, env) {
    const dir = env.dir || (rng.chance(0.5) ? 1 : -1);
    const n = env.steps || rng.pick([14, 16, 18, 20]);
    const run = n * GOING, rise = n * RISE * dir, len = LAND * 2 + run;
    return {
      p: { dir, n, run, rise, len, lights: { dark: rng.chance(0.04 + 0.04 * (env.wrong || 0)), faulty: rng.chance(0.25) ? rng.int(0, 2) : -1 } },
      exits: [{ x: 0, y: rise, z: len, yaw: 0 }],
      box: [-1.9, Math.min(0, rise) - 0.4, 0, 1.9, Math.max(0, rise) + 3.3, len],
    };
  },

  build(ctx) {
    const { b, p } = ctx;
    const yAt = (z) => clamp((z - LAND) / p.run, 0, 1) * p.rise;
    // frames at the landings' ends and along the flight
    const zs = [0, LAND];
    const nf = Math.round(p.run / 0.9);
    for (let i = 1; i <= nf; i++) zs.push(LAND + (p.run * i) / nf);
    zs.push(p.len);
    const frames = zs.map((z) => ({ x: 0, y: yAt(z), z, yaw: 0 }));
    const sw = sweep(b, frames, PASSAGE, { floor: null });
    for (const c of sw.cells) c.surface = 'stone';
    const hw = PASSAGE.W / 2, floor = atlasRect('floor');
    for (let k = 0; k < 3; k++) {
      const xa = -hw + k, xb = xa + 1;
      b.quad('atlas', [xa, 0, 0], [xb, 0, 0], [xb, 0, LAND], [xa, 0, LAND], [0, 1, 0], floor);
      b.quad('atlas', [xa, p.rise, p.len - LAND], [xb, p.rise, p.len - LAND], [xb, p.rise, p.len], [xa, p.rise, p.len], [0, 1, 0], floor);
    }
    buildSteps(b, LAND, p.n, p.dir);
    for (const x of [-hw + 0.09, hw - 0.09]) {
      slopeRail(b, x, LAND - 0.3, 0.95, LAND + p.run + 0.3, p.rise + 0.95);
    }
    b.addPortal(0, 0, 0, 0); b.addPortal(0, p.rise, p.len, 0);
    portalLamp(b, frames[0], PASSAGE.crown);
    lampsAlong(b, frames, sw.dist, PASSAGE.crown, p.lights);
    return { cells: sw.cells, walls: sw.walls, items: [], frames };
  },
};

export { RISE, GOING, LAND, framePoint };
