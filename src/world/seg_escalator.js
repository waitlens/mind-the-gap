// Escalator shaft: an inclined barrel vault with two (stopped) escalators,
// a central deck with uplighters and a rank of small adverts up each wall.
import { PASSAGE, horseshoe, sweep, headwall } from './sweep.js';
import { portalLamp, lamp, sill } from './decor.js';
import { slopeRail } from './seg_stairs.js';
import { atlasRect, atlasFlat } from '../tex/atlas.js';
import { drawPoster } from '../tex/posters.js';
import { drawPlate } from '../tex/signs.js';
import { clamp } from '../util/rng.js';

const W = 5.4, HW = W / 2, SPRING = 1.2, CROWN = 3.7;
const SHAFT = horseshoe(W, SPRING, CROWN);
const LAND = 3.6, RUNIN = 1.2, SLOPE = Math.tan(Math.PI / 6);
const LANES = [-0.95, 0.95], LANE_HW = 0.5, BAL = 0.92;   // balustrade height above the steps

export const escalator = {
  type: 'escalator',
  sheetSize: 512,
  plan(rng, env) {
    const dir = env.dir || (rng.chance(0.5) ? 1 : -1);
    const run = rng.pick([9.6, 12, 14.4]);
    const rise = run * SLOPE * dir, len = LAND * 2 + run;
    return {
      p: { dir, run, rise, len, faulty: rng.chance(0.3) ? rng.int(0, 3) : -1 },
      exits: [{ x: 0, y: rise, z: len, yaw: 0 }],
      box: [-HW - 0.4, Math.min(0, rise) - 0.5, 0, HW + 0.4, Math.max(0, rise) + 4.3, len],
    };
  },

  build(ctx) {
    const { b, p, sheet, rng } = ctx;
    const z0 = LAND, z1 = LAND + p.run;
    const yAt = (z) => clamp((z - z0) / p.run, 0, 1) * p.rise;
    const zs = [0, LAND - RUNIN, z0];
    const nf = Math.round(p.run / 1.2);
    for (let i = 1; i <= nf; i++) zs.push(z0 + (p.run * i) / nf);
    zs.push(z1 + RUNIN, p.len);
    const frames = zs.map((z) => ({ x: 0, y: yAt(z), z, yaw: 0 }));
    sweep(b, frames, SHAFT, { floor: null });
    // (ring walls keep the lining's own corner points: their outer edge must
    // match the shaft lining vertex for vertex)
    headwall(b, frames[0], SHAFT, PASSAGE, 1, 'tile');
    headwall(b, frames[frames.length - 1], SHAFT, PASSAGE, -1, 'tile');

    const up = [0, 1, 0], floor = atlasRect('floor'), deck = atlasRect('deck'), steel = atlasFlat('metal');
    // landings
    for (const [za, zb, y] of [[0, LAND - RUNIN, 0], [z1 + RUNIN, p.len, p.rise]]) {
      // (a little wider than the shaft: the floor runs under the wall base)
      b.grid('atlas', [-HW - 0.04, y, za], [W + 0.08, 0, 0], [0, 0, zb - za], 5, 2, up, floor, null, true);
    }
    // lanes: flat run-in plates, comb, then the steps
    const going = 0.4, n = Math.round(p.run / going), rise = p.rise / n;
    const sz = (i) => (i === n ? z1 : z0 + i * going), sy = (k) => (k === n ? p.rise : k * rise);
    const tread = atlasRect('tread'), riser = atlasFlat('steelDark'), comb = atlasRect('comb');
    for (const lx of LANES) {
      const xa = lx - LANE_HW, xb = lx + LANE_HW;
      for (const [za, zb, y] of [[LAND - RUNIN, z0, 0], [z1, z1 + RUNIN, p.rise]]) {
        b.quad('atlas', [xa, y, za], [xb, y, za], [xb, y, zb], [xa, y, zb], up, deck);
      }
      b.quad('atlas', [xa, 0.003, z0 - 0.25], [xb, 0.003, z0 - 0.25], [xb, 0.003, z0], [xa, 0.003, z0], up, comb);
      b.quad('atlas', [xb, p.rise + 0.003, z1 + 0.25], [xa, p.rise + 0.003, z1 + 0.25], [xa, p.rise + 0.003, z1], [xb, p.rise + 0.003, z1], up, comb);
      // steps: every shared edge uses the very same numbers (sz / sy), so
      // treads, risers and the plates at both ends meet without a crack
      for (let i = 0; i < n; i++) {
        const za = sz(i), zb = sz(i + 1);
        const y = sy(rise > 0 ? i + 1 : i), yn = sy(rise > 0 ? i : i + 1);
        b.quad('atlas', [xa, y, za], [xb, y, za], [xb, y, zb], [xa, y, zb], up, tread);
        const zr = rise > 0 ? za : zb;
        b.quad('atlas', [xa, yn, zr], [xb, yn, zr], [xb, y, zr], [xa, y, zr], [0, 0, rise > 0 ? -1 : 1], riser);
      }
    }
    // sills under the foot of both headwalls, and where the landings'
    // paving meets the lane plates (they are cut differently)
    sill(b, frames[0], HW + 0.04); sill(b, frames[frames.length - 1], HW + 0.04);
    sill(b, { x: 0, y: 0, z: LAND - RUNIN, yaw: 0 }, HW);
    sill(b, { x: 0, y: p.rise, z: z1 + RUNIN, yaw: 0 }, HW);
    // balustrades, decks and handrails between and beside the lanes
    const edges = [-HW, LANES[0] - LANE_HW, LANES[0] + LANE_HW, LANES[1] - LANE_HW, LANES[1] + LANE_HW, HW];
    const za = LAND - RUNIN, zb = z1 + RUNIN;
    const segs = [[za, z0, 0, 0], [z0, z1, 0, p.rise], [z1, zb, p.rise, p.rise]];
    for (const [sa, sb, ya, yb] of segs) {
      for (let k = 0; k < 6; k += 2) {              // deck tops (wall-lane, lane-lane, lane-wall)
        const xa = edges[k], xb = edges[k + 1];
        b.quad('atlas', [xa, ya + BAL, sa], [xb, ya + BAL, sa], [xb, yb + BAL, sb], [xa, yb + BAL, sb], up, deck);
      }
      for (const [x, nx] of [[edges[1], 1], [edges[2], -1], [edges[3], 1], [edges[4], -1]]) { // panels facing the lanes
        b.quad('atlas', [x, ya, sa], [x, yb, sb], [x, yb + BAL, sb], [x, ya + BAL, sa], [nx, 0, 0], steel);
        // a skirt below the panel: its bottom edge would otherwise only just
        // touch the inner corners of the steps
        b.quad('atlas', [x, ya - 0.3, sa], [x, yb - 0.3, sb], [x, yb, sb], [x, ya, sa], [nx, 0, 0], atlasFlat('steelDark'));
        slopeRail(b, x + nx * 0.03, sa, ya + BAL + 0.04, sb, yb + BAL + 0.04, 0.04);
      }
    }
    for (let k = 0; k < 6; k += 2) {                // deck end faces
      const xa = edges[k], xb = edges[k + 1];
      // (same corner points as the lane panels; the sills cover the floor seam)
      b.quad('atlas', [xa, 0, za], [xb, 0, za], [xb, BAL, za], [xa, BAL, za], [0, 0, -1], steel);
      b.quad('atlas', [xa, p.rise, zb], [xb, p.rise, zb], [xb, p.rise + BAL, zb], [xa, p.rise + BAL, zb], [0, 0, 1], steel);
    }
    // "Stand on the right" plates on the central deck, facing both ways
    const sor = sheet.add(150, 46, (c, w, h) => drawPlate(c, w, h, 'Stand on the right', { bg: '#0019a8' }));
    for (let i = 0; i < 3; i++) {
      const z = z0 + p.run * (0.2 + 0.3 * i), y = yAt(z) + BAL;
      b.quad('sheet', [0.24, y + 0.02, z], [-0.24, y + 0.02, z], [-0.24, y + 0.17, z], [0.24, y + 0.17, z], [0, 0, -1], sor);
      b.quad('sheet', [-0.24, y + 0.02, z + 0.01], [0.24, y + 0.02, z + 0.01], [0.24, y + 0.17, z + 0.01], [-0.24, y + 0.17, z + 0.01], [0, 0, 1], sor);
    }
    // uplighters on the central deck
    const nUp = Math.max(2, Math.round(p.run / 3.2));
    for (let i = 0; i < nUp; i++) {
      const z = z0 + (p.run * (i + 0.5)) / nUp, y = yAt(z) + BAL;
      const flick = p.faulty === i;
      b.box('atlas', -0.04, y, z - 0.04, 0.04, y + 1.25, z + 0.04, atlasFlat('steelDark'), null, 'xXzZ');
      b.box('atlas', -0.2, y + 1.25, z - 0.2, 0.2, y + 1.36, z + 0.2, atlasRect('uplight'), { emit: 1.5, flick }, 'xXzZY');
      b.addLight(0, y + 2.2, z, 0.5, 8, flick, [1, 0.95, 0.82]);
    }
    for (const [z, y] of [[1.6, 0], [p.len - 1.6, p.rise]]) lamp(b, { x: 0, y, z, yaw: Math.PI / 2 }, CROWN - 0.1, { power: 0.6 });
    b.addPortal(0, 0, 0, 0); b.addPortal(0, p.rise, p.len, 0);
    portalLamp(b, frames[0], PASSAGE.crown);
    // small framed adverts climbing both walls
    const ads = [];
    for (let i = 0; i < 4; i++) ads.push(sheet.add(84, 116, (c, w, h) => drawPoster(c, w, h, rng, rng.chance(Math.min(0.6, (ctx.env.wrong || 0) * 0.15)))));
    const wallAt = (h) => HW * Math.cos(Math.asin(clamp((h - SPRING) / (CROWN - SPRING), 0, 1)));
    let k = 0;
    for (let z = z0 + 0.8; z < z1 - 0.4; z += 1.5, k++) {
      const y = yAt(z), dy = SLOPE * Math.sign(p.rise) * 0.27;
      for (const s of [-1, 1]) {
        const xb = s * (wallAt(1.55) - 0.04), xt = s * (wallAt(2.3) - 0.04);
        b.quad('sheet', [xb, y + 1.55 - dy * s, z - 0.27 * s], [xb, y + 1.55 + dy * s, z + 0.27 * s], [xt, y + 2.3 + dy * s, z + 0.27 * s], [xt, y + 2.3 - dy * s, z - 0.27 * s],
          [-s, 0, 0], ads[(k + (s > 0 ? 2 : 0)) % 4]);
      }
    }
    // collision
    const cells = [
      { ax: 0, az: 0, bx: 0, bz: za, hw: HW, ya: 0, yb: 0 },
      { ax: 0, az: zb, bx: 0, bz: p.len, hw: HW, ya: p.rise, yb: p.rise },
    ];
    const walls = [[-HW, 0, -HW, za], [HW, 0, HW, za], [-HW, zb, -HW, p.len], [HW, zb, HW, p.len]];
    const pw = PASSAGE.W / 2;
    for (const z of [0, p.len]) walls.push([-HW, z, -pw, z], [pw, z, HW, z]);
    for (const lx of LANES) {
      for (const [sa, sb, ya, yb] of segs) cells.push({ ax: lx, az: sa, bx: lx, bz: sb, hw: LANE_HW, ya, yb, surface: 'metal' });
      walls.push([lx - LANE_HW, za, lx - LANE_HW, zb], [lx + LANE_HW, za, lx + LANE_HW, zb]);
    }
    for (let j = 0; j < 6; j += 2) walls.push([edges[j], za, edges[j + 1], za], [edges[j], zb, edges[j + 1], zb]);
    return { cells, walls, items: [], frames };
  },
};
