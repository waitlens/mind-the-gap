// Cross-passage: the short, low, narrow tunnel that links two platform
// tunnels, with a few steps in the middle and tiled legends on the walls.
import { PASSAGE, horseshoe, sweep, headwall, skirted } from './sweep.js';
import { lamp, portalLamp, wallPanel, sill } from './decor.js';
import { buildSteps, stepZ, stepY } from './seg_stairs.js';
import { atlasRect } from '../tex/atlas.js';
import { drawTileLegend } from '../tex/signs.js';
import { clamp } from '../util/rng.js';

const W = 2.3, CROWN = 2.4;
const NARROW = horseshoe(W, 1.2, CROWN);
const STUB = 1.2;   // full-size stub at each end before the passage narrows
const FLAT = 2.5;   // level floor before and after the steps

export const cross = {
  type: 'cross',
  plan(rng, env) {
    const steps = rng.pick([0, 3, 4, 5]);
    const dir = env.dir || rng.sign();
    const len = stepZ(STUB + FLAT, steps) + FLAT + STUB;
    const rise = stepY(0, steps, dir);
    return {
      p: { steps, dir, len, rise, flick: rng.chance(0.35) },
      exits: [{ x: 0, y: rise, z: len, yaw: 0 }],
      box: [-1.9, Math.min(0, rise) - 0.4, 0, 1.9, Math.max(0, rise) + 3.3, len],
    };
  },

  build(ctx) {
    const { b, p, sheet, theme } = ctx;
    const s0 = STUB + FLAT, s1 = stepZ(s0, p.steps), run = s1 - s0;
    const yAt = (z) => (run > 0 ? clamp((z - s0) / run, 0, 1) : (z >= s0 ? 1 : 0)) * p.rise;
    const mk = (z) => ({ x: 0, y: yAt(z), z, yaw: 0 });
    // full-size stubs at both ends, the narrow passage between two headwalls
    const a = sweep(b, [mk(0), mk(STUB)], PASSAGE, { floor: atlasRect('floor') });
    const zs = [STUB, STUB + 1.25, s0];
    if (run > 0) zs.push(s1);
    zs.push(s1 + 1.25, p.len - STUB);
    const mid = sweep(b, zs.map(mk), skirted(NARROW), { floor: null, u0: STUB });   // walls reach below the steps
    const c = sweep(b, [mk(p.len - STUB), mk(p.len)], PASSAGE, { floor: atlasRect('floor'), u0: p.len - STUB });
    // (ring walls keep the lining's own corner points: their edges must
    // match both linings vertex for vertex)
    headwall(b, mk(STUB), PASSAGE, NARROW, -1, 'tile');
    headwall(b, mk(p.len - STUB), PASSAGE, NARROW, 1, 'tile');
    // floor of the narrow part: flat before and after the steps
    const hw = W / 2, floor = atlasRect('floorDark');
    // (a little wider than the passage: the floor runs under the wall base)
    // Floors and steps share the same x breakpoints and meet at exactly the
    // same coordinates (no T-junctions between them).
    const fx = -hw - 0.03, fw = W + 0.06;
    b.grid('atlas', [fx, 0, STUB], [fw, 0, 0], [0, 0, FLAT], 2, 3, [0, 1, 0], floor, null, true);
    b.grid('atlas', [fx, p.rise, s1], [fw, 0, 0], [0, 0, p.len - STUB - s1], 2, 3, [0, 1, 0], floor, null, true);
    if (p.steps > 0) buildSteps(b, s0, p.steps, p.dir, [0, 1, 2].map((i) => fx + fw * (i / 2)), 0);
    // the stubs' paving is cut differently from the narrow floor: sills
    sill(b, mk(STUB), PASSAGE.W / 2, 'floorDark'); sill(b, mk(p.len - STUB), PASSAGE.W / 2, 'floorDark');
    for (const cell of mid.cells) cell.surface = 'stone';
    b.addPortal(0, 0, 0, 0); b.addPortal(0, p.rise, p.len, 0);
    portalLamp(b, mk(0), PASSAGE.crown);
    lamp(b, mk((s0 + s1) / 2), CROWN - 0.03, { flick: p.flick, power: 0.8, radius: 6, len: 0.9 });
    // tiled legends: where the trains are, and where they are not
    const items = [];
    const texts = [['TO THE TRAINS', -1, STUB + 1.3], ['WAY OUT', 1, p.len - STUB - 1.3]];
    for (const [text, side, z] of texts) {
      const uv = sheet.add(220, 54, (cv, w, h) => drawTileLegend(cv, w, h, text, theme, side > 0 ? 'right' : 'left'));
      const pos = wallPanel(b, 'sheet', mk(z), side, hw, yAt(z) + 0.72, 1.4, 0.345, uv, null, 0.025);
      items.push({ ...pos, r: 4, label: 'read tiles', title: 'TILED LEGEND', text: text === 'WAY OUT' ? 'WAY OUT → (old tiles; they point along the passage)' : '← TO THE TRAINS' });
    }
    // collision: the stubs' side walls, the shoulders, then the narrow walls
    const walls = a.walls.concat(mid.walls, c.walls);
    const ph = PASSAGE.W / 2;
    for (const z of [STUB, p.len - STUB]) walls.push([-ph, z, -hw, z], [hw, z, ph, z]);
    return { cells: a.cells.concat(mid.cells, c.cells), walls, items };
  },
};
