// The gate line across the ticket hall, to the widths in London
// Underground's Station Planning Standards (REFERENCES.md): electric gates
// with 620 mm walkways between 155 mm stanchions, a wide-aisle gate of
// 1,080 mm, a manual gate 1,350 mm wide and 1,300 high, the attendant's
// point 990 x 1,240 x 2,300. Hampstead has six electric gates, one
// wide-aisle and one manual; so has this. The gates are the first electric
// kind (stainless stanchions about 1.9 m long, the yellow reader fitted on
// top at the end you walk up to, a small display that shows a cross or an
// arrow, grey paddles that fold flat against the stanchions).
//
// The displays and the paddles are on sign-sheet layers of their own, so the
// whole line can change at once: 'wait' (amber), 'no' (red crosses), 'go'
// (green arrows, paddles folded back). See game/gates.js.
import { atlasFlat, atlasRect } from '../tex/atlas.js';
import { drawReader, drawPaddle, drawPod, drawStanchionEnd, drawBooth } from '../tex/hall.js';

export const GL = { WALK: 0.62, STAN: 0.155, WIDE: 1.08, MANUAL: 1.35, LEN: 1.9, H: 1.0, GATES: 6, BOOTH: [0.99, 1.24, 2.3], FIRST: -3.385, NUMBER: 41 };

// y: floor level; zg: the line's centre along the path; x0, x1: the hall's side walls.
// Returns { items, walls (always there), shut (walls that go when the gates open), walkways: [x centre, …] }.
export function buildGateline(ctx, y, zg, x0, x1, touch) {
  const { b, sheet } = ctx, items = [], walls = [], shut = [], walkways = [];
  const steel = atlasFlat('metal'), dark = atlasFlat('steelDark'), za = zg - GL.LEN / 2, zb = zg + GL.LEN / 2;
  const uv = {
    reader: sheet.add(48, 48, drawReader), leaf: sheet.add(40, 120, (c, w, h) => drawPaddle(c, w, h)), wide: sheet.add(56, 150, (c, w, h) => drawPaddle(c, w, h, true)),
    wait: sheet.add(32, 32, (c, w, h) => drawPod(c, w, h, 'wait')), no: sheet.add(32, 32, (c, w, h) => drawPod(c, w, h, 'no')), go: sheet.add(32, 32, (c, w, h) => drawPod(c, w, h, 'go')),
    booth: sheet.add(110, 250, drawBooth),
  };
  // --- stanchions: the first GATES + 1 make the electric gates; one more closes the wide aisle
  const xs = [];
  for (let k = 0; k <= GL.GATES; k++) xs.push(GL.FIRST + k * (GL.WALK + GL.STAN));
  xs.push(xs[GL.GATES] + GL.STAN + GL.WIDE);
  xs.forEach((x, k) => {
    const end = sheet.add(30, 110, (c, w, h) => drawStanchionEnd(c, w, h, GL.NUMBER + k));
    b.box('atlas', x, y, za + 0.02, x + GL.STAN, y + 0.1, zb - 0.02, dark, null, 'xXzZ');                       // plinth
    b.box('atlas', x, y + 0.1, za, x + GL.STAN, y + GL.H, zb, steel, { tint: [0.92, 0.94, 0.96] }, 'xXY');      // the stainless body
    b.quad('sheet', [x + GL.STAN, y + 0.1, za], [x, y + 0.1, za], [x, y + GL.H, za], [x + GL.STAN, y + GL.H, za], [0, 0, -1], end);
    b.quad('sheet', [x, y + 0.1, zb], [x + GL.STAN, y + 0.1, zb], [x + GL.STAN, y + GL.H, zb], [x, y + GL.H, zb], [0, 0, 1], end);
    // (the walker is a little narrower than the gap between the steel: 9 cm of play)
    const ca = x + 0.035, cb = x + GL.STAN - 0.035;
    walls.push([ca, za, ca, zb], [cb, za, cb, zb], [ca, za, cb, za], [ca, zb, cb, zb]);
    if (k === xs.length - 1) return;
    // the walkway on this stanchion's far side: its reader is here, at the end you walk up to
    const wide = k === GL.GATES, w = wide ? GL.WIDE : GL.WALK, xa = x + GL.STAN, xb = xa + w, cx = x + GL.STAN / 2, zr = za + 0.2;
    walkways.push((xa + xb) / 2);
    b.quad('atlas', [xa, y + 0.004, za], [xb, y + 0.004, za], [xb, y + 0.004, zb], [xa, y + 0.004, zb], [0, 1, 0], atlasFlat('rubber'));   // ribbed floor plate
    b.box('atlas', cx - 0.07, y + GL.H, zr - 0.07, cx + 0.07, y + GL.H + 0.03, zr + 0.07, dark, null, 'xXzZ');
    b.quad('sheet', [cx + 0.075, y + GL.H + 0.032, zr - 0.075], [cx - 0.075, y + GL.H + 0.032, zr - 0.075], [cx - 0.075, y + GL.H + 0.032, zr + 0.075], [cx + 0.075, y + GL.H + 0.032, zr + 0.075], [0, 1, 0], uv.reader, { emit: 0.9 });
    // the display on its post, facing whoever walks up (and the same from the street side)
    b.box('atlas', cx - 0.035, y + GL.H, zr + 0.16, cx + 0.035, y + GL.H + 0.2, zr + 0.23, dark, null, 'xXY');
    for (const [layer, u] of [['sheet:gWait', uv.wait], ['sheet:gNo', uv.no], ['sheet:gGo', uv.go]]) {
      b.quad(layer, [cx + 0.035, y + GL.H + 0.1, zr + 0.159], [cx - 0.035, y + GL.H + 0.1, zr + 0.159], [cx - 0.035, y + GL.H + 0.2, zr + 0.159], [cx + 0.035, y + GL.H + 0.2, zr + 0.159], [0, 0, -1], u, { emit: 1.7 });
      b.quad(layer, [cx - 0.035, y + GL.H + 0.1, zr + 0.231], [cx + 0.035, y + GL.H + 0.1, zr + 0.231], [cx + 0.035, y + GL.H + 0.2, zr + 0.231], [cx - 0.035, y + GL.H + 0.2, zr + 0.231], [0, 0, 1], u, { emit: 1.7 });
    }
    // paddles: shut across the walkway, or folded back along the stanchions
    const lw = w / 2 - 0.015, y0 = y + (wide ? 0.15 : 0.2), y1 = y + (wide ? 1.45 : 1.12), pu = wide ? uv.wide : uv.leaf;
    for (const [hx, s] of [[xa, 1], [xb, -1]]) {
      for (const nz of [-1, 1]) b.quad('sheet:padShut', [hx, y0, zg + nz * 0.012], [hx + s * lw, y0, zg + nz * 0.012], [hx + s * lw, y1, zg + nz * 0.012], [hx, y1, zg + nz * 0.012], [0, 0, nz], pu);
      b.quad('sheet:padOpen', [hx + s * 0.02, y0, zg], [hx + s * 0.02, y0, zg + lw], [hx + s * 0.02, y1, zg + lw], [hx + s * 0.02, y1, zg], [s, 0, 0], pu);
    }
    shut.push([xa - 0.04, zg, xb + 0.04, zg]);
    items.push({ x: cx, y: y + GL.H + 0.04, z: zr, r: 2.3, cone: 0.72, n: [0, -1], label: 'touch card on reader', title: '', text: '', reader: k, onRead: touch });
  });
  // --- the manual gate (kept locked) and the attendant's point, with screens to the walls
  const xm = xs[xs.length - 1] + GL.STAN, xe = xm + GL.MANUAL, [bw, bd, bh] = GL.BOOTH, xbooth = xe + 0.2;
  const bar = (xa, xb, h = 1.3) => {
    b.box('atlas', xa, y, zg - 0.02, xb, y + h, zg + 0.02, steel, { tint: [0.6, 0.63, 0.66] }, 'xXYzZ');
    walls.push([xa, zg, xb, zg]);
  };
  for (const nz of [-1, 1]) b.quad('cut', [xm, y + 0.05, zg + nz * 0.01], [xe, y + 0.05, zg + nz * 0.01], [xe, y + 1.3, zg + nz * 0.01], [xm, y + 1.3, zg + nz * 0.01], [0, 0, nz], atlasRect('gate'), { emit: 0.3 });
  b.box('atlas', xm, y + 1.28, zg - 0.025, xe, y + 1.33, zg + 0.025, dark, null, 'xXyYzZ');
  b.box('atlas', xe, y, zg - 0.04, xe + 0.06, y + 1.36, zg + 0.04, dark, null, 'xXYzZ');
  walls.push([xm, zg, xe + 0.06, zg]);
  bar(x0, xs[0]); bar(xe + 0.06, xbooth); bar(xbooth + bw, x1);
  b.box('atlas', xbooth, y, zg - bd / 2, xbooth + bw, y + bh, zg + bd / 2, dark, { tint: [0.75, 0.82, 0.95] }, 'xXY');
  b.quad('sheet', [xbooth + bw, y, zg - bd / 2], [xbooth, y, zg - bd / 2], [xbooth, y + bh, zg - bd / 2], [xbooth + bw, y + bh, zg - bd / 2], [0, 0, -1], uv.booth);
  b.quad('sheet', [xbooth, y, zg + bd / 2], [xbooth + bw, y, zg + bd / 2], [xbooth + bw, y + bh, zg + bd / 2], [xbooth, y + bh, zg + bd / 2], [0, 0, 1], uv.booth);
  walls.push([xbooth, zg - bd / 2, xbooth + bw, zg - bd / 2], [xbooth, zg + bd / 2, xbooth + bw, zg + bd / 2], [xbooth, zg - bd / 2, xbooth, zg + bd / 2], [xbooth + bw, zg - bd / 2, xbooth + bw, zg + bd / 2]);
  items.push({ x: xbooth + bw / 2, y: y + 1.5, z: zg - bd / 2, r: 3.5, n: [0, -1], label: 'look in', title: 'ASSISTANCE', text: '', booth: true });
  return { items, walls, shut, walkways };
}
