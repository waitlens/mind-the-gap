// What stands in the ticket hall besides the gate line: lights, the yellow
// and black Way out signs, the clock, two ticket machines and the old ticket
// window (shuttered) on the far side of the gates, the roundel by the way to
// the street, the staff whiteboard with one last thought, and the gates of
// the street entrance folded back.
import { lamp, hangingSign } from './decor.js';
import { atlasRect, atlasFlat } from '../tex/atlas.js';
import { dynRect } from '../tex/dynamic.js';
import { drawWayOut, drawPlate } from '../tex/signs.js';
import { drawMachine, drawTicketWindow, drawHallRoundel } from '../tex/hall.js';
import { easelBoard, extraRng } from './whiteboard.js';
import { finalThought } from '../game/thoughts.js';
import { GATES } from '../game/scripts.js';

export function fitHall(ctx, HALL, gl) {
  const { b, sheet, env } = ctx, { x0, x1, H, rise: y, z0, z1, zg, zOut } = HALL, r = extraRng(ctx);
  const items = [], walls = [];
  // --- sign-sheet pieces (the whiteboard's face is painted by easelBoard)
  const wo = sheet.add(250, 56, (c, w, h) => drawWayOut(c, w, h, { dir: 'up' }));
  const back = sheet.add(250, 56, (c, w, h) => drawPlate(c, w, h, 'To the trains', { sub: 'Northern line' }));
  const machines = ['cash', 'cards'].map((k) => sheet.add(110, 232, (c, w, h) => drawMachine(c, w, h, k)));
  const windowUV = sheet.add(160, 200, drawTicketWindow), roundel = sheet.add(200, 90, drawHallRoundel);
  // --- lights: six battens under the ceiling
  for (const lx of [-2.3, 1.0, 4.3]) for (const lz of [z0 + 2.4, z0 + 7.3]) lamp(b, { x: lx, y, z: lz, yaw: Math.PI / 2 }, H - 0.02, { power: 0.8, radius: 7.5 });
  // --- Way out: hanging before the gates, and again over the arch to the street
  const hang = hangingSign(b, 'sheet', { x: 0, y, z: z0 + 2.2, yaw: 0 }, 2.55, 1.7, 0.38, wo, back, { emit: 1.25 });
  items.push({ ...hang, r: 8, cone: 0.94, n: [0, -1], label: 'read sign', title: 'SIGN', text: GATES.wayout });
  const zn = z1 - 0.03, north = (uv, cx, y0, w, h, o) => {
    b.quad(o && o.layer ? o.layer : 'sheet', [cx + w / 2, y + y0, zn], [cx - w / 2, y + y0, zn], [cx - w / 2, y + y0 + h, zn], [cx + w / 2, y + y0 + h, zn], [0, 0, -1], uv, o && o.opts);
    return { x: cx, y: y + y0 + h / 2, z: zn, n: [0, -1] };
  };
  items.push({ ...north(wo, 0, 2.86, 1.7, 0.38, { opts: { emit: 1.25 } }), r: 9, cone: 0.94, label: 'read sign', title: 'SIGN', text: GATES.wayout });
  north(roundel, -2.9, 1.25, 1.2, 0.54);
  items.push({
    ...north(dynRect('clock'), 2.6, 2.15, 0.62, 0.62, { layer: 'dyn', opts: { emit: 1.05 } }), r: 9, cone: 0.95,
    label: 'look at clock', title: 'CLOCK', text: 'The clock is keeping time. It is morning.',
  });
  // --- beyond the gates, along the right-hand wall as you leave: two machines and the old ticket window
  const west = (uv, zc, y0, w, h, depth) => {
    const xf = x0 + depth;
    if (depth > 0.05) b.box('atlas', x0, y, zc - w / 2, xf, y + y0 + h, zc + w / 2, atlasFlat('steelDark'), null, 'YzZ');
    b.quad('sheet', [xf + 0.004, y + y0, zc + w / 2], [xf + 0.004, y + y0, zc - w / 2], [xf + 0.004, y + y0 + h, zc - w / 2], [xf + 0.004, y + y0 + h, zc + w / 2], [1, 0, 0], uv);
    if (depth > 0.05) walls.push([xf, zc - w / 2, xf, zc + w / 2], [x0, zc - w / 2, xf, zc - w / 2], [x0, zc + w / 2, xf, zc + w / 2]);
    return { x: xf, y: y + y0 + h / 2, z: zc, n: [1, 0] };
  };
  machines.forEach((uv, i) => items.push({ ...west(uv, zg + 1.9 + i * 1.02, 0, 0.9, 1.9, 0.5), r: 4, label: 'read machine', title: 'TICKET MACHINE', text: GATES.machine }));
  items.push({ ...west(windowUV, zg + 4.45, 0.5, 1.3, 1.62, 0.03), r: 5, label: 'read tiles', title: 'TICKET WINDOW', text: GATES.window });
  // --- one last thought for the day, on the right beyond the gates
  const e = easelBoard(ctx, x1 - 1.0, zg + 2.9, 1.15, finalThought(r, env.station || 'Hampstead', GATES.thought), y);
  items.push(e.item); walls.push(...e.walls);
  // --- the street entrance's own gates, folded back either side of the arch
  const g = atlasRect('gate');
  for (const s of [-1, 1]) {
    const x = s * (1.5 - 0.06);
    b.quad('cut', [x, y, z1 + 0.05], [x, y, z1 + 0.7], [x, y + 2.3, z1 + 0.7], [x, y + 2.3, z1 + 0.05], [-s, 0, 0], g, { emit: 0.25 });
  }
  // the attendant's box: what READ says of it
  for (const it of gl.items) if (it.booth) it.text = GATES.booth;
  return { items, walls, zOut };
}
