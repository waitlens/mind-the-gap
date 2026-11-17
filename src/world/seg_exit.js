// The true way out: a last flight of stairs climbing into daylight, and
// the dead end used when the generator has nowhere left to go.
import { PASSAGE, sweep, headwall, outsized, skirted } from './sweep.js';
import { portalLamp, lamp, hangingSign } from './decor.js';
import { buildSteps, slopeRail, stepZ, stepY } from './seg_stairs.js';
import { atlasRect, atlasFlat } from '../tex/atlas.js';
import { drawWayOut, drawPlate } from '../tex/signs.js';
import { clamp } from '../util/rng.js';

const LAND0 = 3, LAND1 = 5.2, STEPS = 24;

export const exit = {
  type: 'exit',
  plan() {
    const run = stepZ(0, STEPS), rise = stepY(0, STEPS, 1), len = stepZ(LAND0, STEPS) + LAND1;
    return {
      p: { run, rise, len },
      exits: [],
      box: [-1.9, -0.4, 0, 1.9, rise + 3.3, len],
    };
  },

  build(ctx) {
    const { b, p, sheet } = ctx;
    const yAt = (z) => clamp((z - LAND0) / p.run, 0, 1) * p.rise;
    const zs = [0, 1.5, LAND0];
    const nf = Math.round(p.run / 0.9);
    for (let i = 1; i <= nf; i++) zs.push(LAND0 + (p.run * i) / nf);
    zs.push(p.len - 2.2, p.len);
    const frames = zs.map((z) => ({ x: 0, y: yAt(z), z, yaw: 0 }));
    const sw = sweep(b, frames, skirted(PASSAGE), { floor: null });   // walls reach below the steps
    for (const c of sw.cells) c.surface = 'stone';
    const hw = PASSAGE.W / 2, floor = atlasRect('floor');
    // (a little wider than the passage: the floor runs under the wall base)
    // landings and steps share the same x breakpoints and meet at exactly
    // the same coordinates (no T-junctions between them)
    const fx = -hw - 0.03, fw = PASSAGE.W + 0.06, top = stepZ(LAND0, STEPS);
    b.grid('atlas', [fx, 0, 0], [fw, 0, 0], [0, 0, LAND0], 3, 3, [0, 1, 0], floor, null, true);
    b.grid('atlas', [fx, p.rise, top], [fw, 0, 0], [0, 0, p.len - top], 3, 4, [0, 1, 0], floor, null, true);
    buildSteps(b, LAND0, STEPS, 1, [0, 1, 2, 3].map((i) => fx + fw * (i / 3)));
    for (const x of [-hw + 0.09, hw - 0.09]) slopeRail(b, x, LAND0 - 0.3, 0.95, LAND0 + p.run + 0.3, p.rise + 0.95);
    // daylight: the far end of the passage is simply white
    // (set 2 cm inside the end of the passage, so the lining and the floor
    // run past it instead of meeting it edge to edge)
    const end = { x: 0, y: p.rise, z: p.len - 0.02, yaw: 0 };
    const day = atlasFlat('daylight');
    headwall(b, end, outsized(PASSAGE), null, -1, 'atlas', () => [(day[0] + day[2]) / 2, (day[1] + day[3]) / 2], { emit: 2 });
    b.addLight(0, p.rise + 1.6, p.len - 0.6, 2.4, 11, false, [1, 1, 1]);
    b.addLight(0, p.rise + 1.2, p.len - 3.5, 1.2, 9, false, [1, 1, 1]);
    // the open gate, folded back against both walls
    const g = atlasRect('gate');
    for (const s of [-1, 1]) {
      const x = s * (hw - 0.06), z = top + 0.3;
      b.quad('cut', [x, p.rise, z], [x, p.rise, z + 0.7], [x, p.rise + 2.3, z + 0.7], [x, p.rise + 2.3, z], [-s, 0, 0], g, { emit: 0.25 });
    }
    // the gate line: two steel ticket gates with yellow card readers, their
    // paddles standing open
    const gz0 = top + 1.5, gz1 = gz0 + 1.0, gateWalls = [];
    const steel = atlasFlat('metal'), y0 = p.rise;
    for (const cx of [-0.5, 0.5]) {
      b.box('atlas', cx - 0.11, y0, gz0, cx + 0.11, y0 + 0.98, gz1, steel, null, 'xXYzZ');
      b.quad('atlas', [cx - 0.08, y0 + 0.985, gz0 + 0.08], [cx + 0.08, y0 + 0.985, gz0 + 0.08], [cx + 0.08, y0 + 0.985, gz0 + 0.26], [cx - 0.08, y0 + 0.985, gz0 + 0.26],
        [0, 1, 0], atlasFlat('yellow'), { emit: 1.1 });                                   // the reader
      b.quad('atlas', [cx + 0.06, y0 + 0.7, gz0 - 0.005], [cx - 0.06, y0 + 0.7, gz0 - 0.005], [cx - 0.06, y0 + 0.82, gz0 - 0.005], [cx + 0.06, y0 + 0.82, gz0 - 0.005],
        [0, 0, -1], atlasFlat('white'), { emit: 1.7, tint: [0.15, 1, 0.3] });             // green arrow lamp
      for (const sx of [-1, 1]) {                                                         // red paddles, folded open
        const px = cx + sx * 0.125;
        b.quad('atlas', [px, y0 + 0.25, gz0 + 0.5], [px, y0 + 0.25, gz0 + 0.9], [px, y0 + 0.85, gz0 + 0.9], [px, y0 + 0.85, gz0 + 0.5], [sx, 0, 0], atlasFlat('white'), { tint: [0.85, 0.12, 0.1] });
      }
      gateWalls.push([cx - 0.11, gz0, cx - 0.11, gz1], [cx + 0.11, gz0, cx + 0.11, gz1], [cx - 0.11, gz0, cx + 0.11, gz0], [cx - 0.11, gz1, cx + 0.11, gz1]);
    }
    b.addPortal(0, 0, 0, 0);
    portalLamp(b, frames[0], PASSAGE.crown);
    lamp(b, { x: 0, y: yAt(LAND0 + p.run * 0.3), z: LAND0 + p.run * 0.3, yaw: 0 }, PASSAGE.crown - 0.04, {});
    // one last, perfectly ordinary sign
    const wo = sheet.add(250, 56, (c, w, h) => drawWayOut(c, w, h, { dir: 'up' }));
    const back = sheet.add(250, 56, (c, w, h) => drawPlate(c, w, h, 'No entry'));
    const pos = hangingSign(b, 'sheet', { x: 0, y: 0, z: LAND0 - 0.6, yaw: 0 }, 2.1, 1.7, 0.38, wo, back, { emit: 1.3 });
    const items = [{ ...pos, r: 8, cone: 0.94, label: 'read sign', title: 'SIGN', text: 'Way out ↑ (black on yellow)' }];
    const walls = sw.walls.concat([[-hw, p.len - 0.4, hw, p.len - 0.4]], gateWalls);
    const lvl = { y0: p.rise - 0.6, y1: p.rise + 0.6 };
    const zones = [
      { x0: -hw, x1: hw, z0: gz0 + 0.2, z1: gz1, ...lvl, fire: (game) => { game.audio.sfx('touchOut'); game.director.setHint('Golders Green. The air is cold and smells of rain.', 6); } },
      { x0: -hw, x1: hw, z0: gz1 + 0.9, z1: p.len, ...lvl, fire: (game) => game.director.win() },
    ];
    return { cells: sw.cells, walls, items, frames, extra: { zones } };
  },
};

// Dead end: a short stub closed by a roller shutter.
export const deadend = {
  type: 'deadend',
  plan() {
    return { p: { len: 3 }, exits: [], box: [-1.9, -0.4, 0, 1.9, 3.3, 3] };
  },
  build(ctx) {
    const { b, p, sheet } = ctx;
    const frames = [{ x: 0, y: 0, z: 0, yaw: 0 }, { x: 0, y: 0, z: 1.5, yaw: 0 }, { x: 0, y: 0, z: p.len, yaw: 0 }];
    const sw = sweep(b, frames, PASSAGE, { floor: atlasRect('floor') });
    const sh = atlasRect('shutter');
    headwall(b, { x: 0, y: 0, z: p.len - 0.02, yaw: 0 }, outsized(PASSAGE), null, -1, 'atlas',
      (x, y) => [sh[0] + (sh[2] - sh[0]) * (x / PASSAGE.W + 0.5), sh[1] + (sh[3] - sh[1]) * (y / PASSAGE.crown)]);
    b.addPortal(0, 0, 0, 0);
    portalLamp(b, frames[0], PASSAGE.crown);
    const uv = sheet.add(200, 60, (c, w, h) => drawPlate(c, w, h, 'No exit', { sub: 'This way is closed' }));
    const z = p.len - 0.05;
    b.quad('sheet', [0.6, 1.3, z], [-0.6, 1.3, z], [-0.6, 1.66, z], [0.6, 1.66, z], [0, 0, -1], uv);
    const items = [{ x: 0, y: 1.48, z, r: 5, label: 'read sign', title: 'SIGN', text: 'No exit. This way is closed.' }];
    return { cells: sw.cells, walls: sw.walls.concat([[-1.5, p.len - 0.3, 1.5, p.len - 0.3]]), items, frames };
  },
};
