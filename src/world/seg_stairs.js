// A flight of stairs in a sloping tiled passage, up or down, with a
// landing at each end and handrails on both walls.
import { PASSAGE, straightFrames, sweep, framePoint, skirted } from './sweep.js';
import { lampsAlong, portalLamp } from './decor.js';
import { atlasRect, atlasFlat } from '../tex/atlas.js';
import { clamp } from '../util/rng.js';

const RISE = 0.16, GOING = 0.3, LAND = 1.6;

// Where step i starts (i = n is the end of the flight) and the height of
// level k. Everything that touches the steps must use these, so that
// shared edges get bit-identical coordinates.
export const stepZ = (z0, i) => z0 + i * GOING;
export const stepY = (y0, k, dir) => y0 + k * RISE * dir;

// Steps between z0 and stepZ(z0, n). dir = +1 climbs, -1 descends.
// `xs` are the x breakpoints across the flight; treads AND risers are cut at
// every one of them (and the adjoining landings should be too): a riser that
// spans a seam between two treads is a T-junction, and T-junctions leak
// pinholes of the void behind the stairs.
export function buildSteps(b, z0, n, dir, xs = [-1.5, -0.5, 0.5, 1.5], y0 = 0, o = null) {
  const tread = atlasRect('stairTread'), riser = atlasRect('riser');
  for (let i = 0; i < n; i++) {
    const za = stepZ(z0, i), zb = stepZ(z0, i + 1);
    // going up, tread i is one level above the start; going down it is level i
    const y = stepY(y0, dir > 0 ? i + 1 : i, dir), yn = stepY(y0, dir > 0 ? i : i + 1, dir);
    for (let k = 0; k < xs.length - 1; k++) {
      const xa = xs[k], xb = xs[k + 1];
      // tread: the nosing (top edge of the cell) is on the downhill edge
      if (dir > 0) b.quad('atlas', [xb, y, zb], [xa, y, zb], [xa, y, za], [xb, y, za], [0, 1, 0], tread, o);
      else b.quad('atlas', [xa, y, za], [xb, y, za], [xb, y, zb], [xa, y, zb], [0, 1, 0], tread, o);
      // riser: under the tread's front edge (going up), or dropping from its
      // far edge to the next tread (going down)
      if (dir > 0) b.quad('atlas', [xa, yn, za], [xb, yn, za], [xb, y, za], [xa, y, za], [0, 0, -1], riser, o);
      else b.quad('atlas', [xa, yn, zb], [xb, yn, zb], [xb, y, zb], [xa, y, zb], [0, 0, 1], riser, o);
    }
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
    const run = stepZ(0, n), rise = stepY(0, n, dir), len = stepZ(LAND, n) + LAND;
    return {
      p: { dir, n, run, rise, len, lights: { dark: rng.chance(0.04 + 0.04 * (env.wrong || 0)), faulty: rng.chance(0.25) ? rng.int(0, 2) : -1 } },
      exits: [{ x: 0, y: rise, z: len, yaw: 0 }],
      box: [-1.9, Math.min(0, rise) - 0.4, 0, 1.9, Math.max(0, rise) + 3.3, len],
    };
  },

  build(ctx) {
    const { b, p } = ctx;
    const top = stepZ(LAND, p.n);                 // where the flight ends
    const yAt = (z) => clamp((z - LAND) / p.run, 0, 1) * p.rise;
    // frames at the landings' ends and along the flight
    const zs = [0, LAND];
    const nf = Math.round(p.run / 0.9);
    for (let i = 1; i < nf; i++) zs.push(LAND + (p.run * i) / nf);
    zs.push(top, p.len);
    const frames = zs.map((z) => ({ x: 0, y: yAt(z), z, yaw: 0 }));
    const sw = sweep(b, frames, skirted(PASSAGE), { floor: null });   // walls reach below the steps
    for (const c of sw.cells) c.surface = 'stone';
    const hw = PASSAGE.W / 2, floor = atlasRect('floor');
    for (let k = 0; k < 3; k++) {
      const xa = -hw + k, xb = xa + 1;
      b.quad('atlas', [xa, 0, 0], [xb, 0, 0], [xb, 0, LAND], [xa, 0, LAND], [0, 1, 0], floor);
      b.quad('atlas', [xa, p.rise, top], [xb, p.rise, top], [xb, p.rise, p.len], [xa, p.rise, p.len], [0, 1, 0], floor);
    }
    buildSteps(b, LAND, p.n, p.dir);
    for (const x of [-hw + 0.09, hw - 0.09]) {
      slopeRail(b, x, LAND - 0.3, 0.95, top + 0.3, p.rise + 0.95);
    }
    b.addPortal(0, 0, 0, 0); b.addPortal(0, p.rise, p.len, 0);
    portalLamp(b, frames[0], PASSAGE.crown);
    lampsAlong(b, frames, sw.dist, PASSAGE.crown, p.lights);
    return { cells: sw.cells, walls: sw.walls, items: [], frames };
  },
};

export { RISE, GOING, LAND, framePoint };
