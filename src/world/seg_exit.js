// The dead end used when the generator has nowhere left to go.
// (The way out itself — the ticket hall and its gate line — is seg_hall.js.)
import { PASSAGE, sweep, headwall, outsized } from './sweep.js';
import { portalLamp } from './decor.js';
import { atlasRect } from '../tex/atlas.js';
import { drawPlate } from '../tex/signs.js';

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
