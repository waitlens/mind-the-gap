// The way out: Hampstead's ticket hall. At the real station the emergency
// stairs begin with a straight flight down from "the back corner of the
// ticket hall"; here that flight is the last climb. Then the hall — a
// Leslie Green booking hall, cream and bottle-green — with the gate line
// across it, and beyond the gates an arch, a few steps, and daylight.
// The gates do not take your card the first time (game/gates.js).
// Dimensions and sources: REFERENCES.md.
import { PASSAGE, sweep, skirted, headwall, outsized } from './sweep.js';
import { buildRoom } from './room.js';
import { buildSteps, slopeRail, stepZ, stepY } from './seg_stairs.js';
import { portalLamp, sill } from './decor.js';
import { atlasRect, atlasFlat } from '../tex/atlas.js';
import { HALL_TEX } from '../tex/hall.js';
import { buildGateline } from './gateline.js';
import { fitHall } from './hall_fit.js';
import { gateLayerVisible, gateTouch, gateTick } from '../game/gates.js';
import { GATES } from '../game/scripts.js';
import { clamp } from '../util/rng.js';

const UP = 12, LAND = 1.2, TOP = 0.6, OUT = 4;
export const HALL = { x0: -4.5, x1: 6.5, depth: 10, H: 3.4 };
HALL.rise = stepY(0, UP, 1);                       // the hall's floor above the way in
HALL.z0 = stepZ(LAND, UP) + TOP; HALL.z1 = HALL.z0 + HALL.depth;
HALL.zg = HALL.z0 + 4.6;                           // the gate line
HALL.zOut = HALL.z1 + 0.8; HALL.zEnd = stepZ(HALL.zOut, OUT) + 1.3;
HALL.top = HALL.rise + stepY(0, OUT, 1);           // street level

// A flight in a passage between za and zb: returns the sweep (cells, walls).
function flight(b, za, zStep, n, zb, ya) {
  const run = stepZ(0, n), yb = ya + stepY(0, n, 1);
  const yAt = (z) => ya + clamp((z - zStep) / run, 0, 1) * (yb - ya);
  const zs = [za, zStep];
  for (let i = 1, nf = Math.max(1, Math.round(run / 0.9)); i <= nf; i++) zs.push(zStep + (run * i) / nf);
  zs.push(zb);
  const sw = sweep(b, zs.map((z) => ({ x: 0, y: yAt(z), z, yaw: 0 })), skirted(PASSAGE), { floor: null, u0: za });
  for (const c of sw.cells) c.surface = 'stone';
  // landings and steps share the same x breakpoints (no T-junctions between them)
  const hw = PASSAGE.W / 2, fx = -hw - 0.03, fw = PASSAGE.W + 0.06, floor = atlasRect('floor'), top = zStep + run;
  b.grid('atlas', [fx, ya, za], [fw, 0, 0], [0, 0, zStep - za], 3, 2, [0, 1, 0], floor, null, true);
  b.grid('atlas', [fx, yb, top], [fw, 0, 0], [0, 0, zb - top], 3, 2, [0, 1, 0], floor, null, true);
  buildSteps(b, zStep, n, 1, [0, 1, 2, 3].map((i) => fx + fw * (i / 3)), ya);
  for (const x of [-hw + 0.09, hw - 0.09]) slopeRail(b, x, zStep - 0.3, ya + 0.95, top + 0.3, yb + 0.95);
  return sw;
}

export const exit = {
  type: 'exit',
  sheetSize: 1024,
  layerVisible: gateLayerVisible,
  plan() {
    return { p: {}, exits: [], box: [HALL.x0 - 0.4, -0.4, 0, HALL.x1 + 0.4, HALL.top + 3.5, HALL.zEnd + 0.2] };
  },

  build(ctx) {
    const { b, node } = ctx, { x0, x1, H, rise, z0, z1, zg, zOut, zEnd, top } = HALL, hw = PASSAGE.W / 2;
    // --- the last flight up, into the corner of the hall
    const sIn = flight(b, 0, LAND, UP, z0, 0);
    b.addPortal(0, 0, 0, 0);
    portalLamp(b, { x: 0, y: 0, z: 0, yaw: 0 }, PASSAGE.crown);
    // --- the hall
    const room = buildRoom(b, {
      x0, x1, z0, z1, H, y: rise, layer: 'hall', uv: (x, y) => [x / HALL_TEX.uPeriod, 0.003 + (0.994 * y) / HALL_TEX.height],
      portals: [{ wall: 'S', at: 0 }, { wall: 'N', at: 0 }], ceilOpts: { tint: [0.96, 0.95, 0.9] },
    });
    for (const z of [z0, z1]) sill(b, { x: 0, y: rise, z, yaw: 0 }, 1.56);
    // --- through the arch: a few steps up to the street, and daylight
    const sOut = flight(b, z1, zOut, OUT, zEnd, rise);
    const day = atlasFlat('daylight');
    headwall(b, { x: 0, y: top, z: zEnd - 0.02, yaw: 0 }, outsized(PASSAGE), null, -1, 'atlas', () => [(day[0] + day[2]) / 2, (day[1] + day[3]) / 2], { emit: 2 });
    b.addLight(0, top + 1.6, zEnd - 0.6, 1.9, 10, false, [1, 1, 1]);
    b.addLight(0, rise + 1.5, z1 - 1.2, 1.0, 8.5, false, [1, 1, 1]);          // daylight reaching into the hall
    // --- the gate line, and everything else in the hall
    const gl = buildGateline(ctx, rise, zg, x0, x1, (game, it, nd) => gateTouch(game, nd));
    const fit = fitHall(ctx, HALL, gl);
    // --- what can be walked on, and into
    const cells = [...sIn.cells, ...room.cells, ...sOut.cells];
    const walls = [...sIn.walls, ...room.walls, ...sOut.walls, [-hw, zEnd - 0.4, hw, zEnd - 0.4], ...gl.walls, ...fit.walls];
    if (node.gateState !== 'go') walls.push(...gl.shut);
    else for (const it of gl.items) if (it.reader !== undefined) it.hidden = true;
    const lvl = { y0: rise - 0.5, y1: rise + 0.7 };
    const zones = [
      { x0, x1, z0: z0 + 0.5, z1: zg - 1.1, ...lvl, fire: (game) => game.director.setHint(GATES.approach, 7) },
      { x0, x1, z0, z1, ...lvl, once: false, fire: (game, nd) => gateTick(game, nd) },
      { x0, x1, z0: zg + 1.1, z1, ...lvl, fire: (game) => game.director.setHint(GATES.out, 6) },
      { x0: -hw, x1: hw, z0: zOut + 0.4, z1: zEnd, y0: rise - 0.5, y1: top + 0.7, fire: (game) => game.director.win() },
    ];
    return { cells, walls, items: [...gl.items, ...fit.items], extra: { zones, shut: gl.shut } };
  },
};
