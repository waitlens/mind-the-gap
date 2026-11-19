// The station whiteboard: "Thought for the day", written in marker pen by
// whoever is on duty. Aluminium frame, wiped-white surface, the station name
// and date across the top, a few lines of handwriting, a doodle and a
// signature. Drawn from strokes and type at runtime (see game/thoughts.js
// for the words).
import { HAND_FONT, wrapLines, grime } from './canvas.js';
import { INK } from '../game/thoughts.js';

// A marker line through the given points, with a slightly unsteady hand.
function pen(ctx, pts, r, col, lw, j = 0.5, close = false) {
  ctx.strokeStyle = col; ctx.lineWidth = lw; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
  ctx.beginPath();
  pts.forEach(([x, y], i) => {
    const px = x + r.range(-j, j), py = y + r.range(-j, j);
    if (i) ctx.lineTo(px, py); else ctx.moveTo(px, py);
  });
  if (close) ctx.closePath();
  ctx.stroke();
}

const ring = (cx, cy, rx, ry = rx, a0 = 0, a1 = Math.PI * 2, n = 14) => {
  const out = [];
  for (let i = 0; i <= n; i++) { const a = a0 + ((a1 - a0) * i) / n; out.push([cx + Math.cos(a) * rx, cy + Math.sin(a) * ry]); }
  return out;
};

// Handwriting: one word at a time, each a touch off the line, off size and
// off straight. Returns the width used. align: 'left' | 'right' | 'center'.
function hand(ctx, text, x, y, size, col, r, { slope = 0, bold = false, align = 'left' } = {}) {
  ctx.fillStyle = col; ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
  // (a marker is thicker than the font's own stroke: outline every word, so
  // the writing survives the camcorder at phone size)
  ctx.strokeStyle = col; ctx.lineJoin = 'round'; ctx.lineWidth = size * (bold ? 0.075 : 0.05);
  const words = String(text).split(' ').map((word) => {
    const s = size * r.range(0.96, 1.04);
    ctx.font = `400 ${s}px ${HAND_FONT}`;
    return { word, s, w: ctx.measureText(word).width };
  });
  const gap = size * 0.27;
  const total = words.reduce((a, q) => a + q.w, 0) + gap * (words.length - 1);
  let cx = align === 'right' ? x - total : align === 'center' ? x - total / 2 : x;
  const x0 = cx;
  for (const q of words) {
    ctx.font = `400 ${q.s}px ${HAND_FONT}`;
    ctx.save();
    ctx.translate(cx, y + (cx - x0) * slope + r.range(-0.035, 0.035) * size);
    ctx.rotate(slope + r.range(-0.03, 0.03));
    ctx.fillText(q.word, 0, 0);
    ctx.strokeText(q.word, 0, 0);
    ctx.restore();
    cx += q.w + gap;
  }
  return total;
}

// The little drawings staff add in the corner. s = half-size in pixels.
const DOODLES = {
  smile(ctx, x, y, s, col, r) {
    pen(ctx, ring(x, y, s), r, col, s * 0.13, 0.4);
    pen(ctx, ring(x, y + s * 0.08, s * 0.55, s * 0.5, 0.25, Math.PI - 0.25, 6), r, col, s * 0.13, 0.3);
    for (const e of [-1, 1]) pen(ctx, [[x + e * s * 0.34, y - s * 0.36], [x + e * s * 0.34, y - s * 0.2]], r, col, s * 0.16, 0.2);
  },
  heart(ctx, x, y, s, col, r) {
    const pts = [];
    for (let i = 0; i <= 18; i++) {
      const t = (i / 18) * Math.PI * 2;
      pts.push([x + s * 0.062 * 16 * Math.sin(t) ** 3, y - s * 0.062 * (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t))]);
    }
    pen(ctx, pts, r, INK.red, s * 0.14, 0.4);
  },
  star(ctx, x, y, s, col, r) {
    const pts = [];
    for (let i = 0; i <= 5; i++) { const a = -Math.PI / 2 + i * ((Math.PI * 4) / 5); pts.push([x + Math.cos(a) * s, y + Math.sin(a) * s]); }
    pen(ctx, pts, r, col, s * 0.12, 0.5);
  },
  sun(ctx, x, y, s, col, r) {
    pen(ctx, ring(x, y, s * 0.5), r, INK.red, s * 0.13, 0.4);
    for (let i = 0; i < 8; i++) { const a = (i / 8) * Math.PI * 2; pen(ctx, [[x + Math.cos(a) * s * 0.7, y + Math.sin(a) * s * 0.7], [x + Math.cos(a) * s, y + Math.sin(a) * s]], r, INK.red, s * 0.12, 0.4); }
  },
  cup(ctx, x, y, s, col, r) {
    pen(ctx, [[x - s * 0.6, y - s * 0.15], [x - s * 0.48, y + s * 0.8], [x + s * 0.38, y + s * 0.8], [x + s * 0.5, y - s * 0.15]], r, col, s * 0.13, 0.4, true);
    pen(ctx, ring(x + s * 0.55, y + s * 0.3, s * 0.3, s * 0.28, -1.3, 1.3, 6), r, col, s * 0.12, 0.3);
    for (const dx of [-0.25, 0.15]) pen(ctx, [[x + s * dx, y - s * 0.35], [x + s * (dx + 0.14), y - s * 0.6], [x + s * dx, y - s * 0.82], [x + s * (dx + 0.12), y - s * 1.05]], r, col, s * 0.09, 0.3);
  },
  train(ctx, x, y, s, col, r) {
    pen(ctx, [[x - s * 0.7, y + s * 0.75], [x - s * 0.7, y - s * 0.35], [x - s * 0.35, y - s * 0.85], [x + s * 0.35, y - s * 0.85], [x + s * 0.7, y - s * 0.35], [x + s * 0.7, y + s * 0.75]], r, col, s * 0.12, 0.4, true);
    pen(ctx, [[x - s * 0.18, y + s * 0.75], [x - s * 0.18, y - s * 0.5], [x + s * 0.18, y - s * 0.5], [x + s * 0.18, y + s * 0.75]], r, col, s * 0.09, 0.3);
    for (const e of [-1, 1]) {
      pen(ctx, [[x + e * s * 0.3, y - s * 0.4], [x + e * s * 0.56, y - s * 0.4], [x + e * s * 0.56, y], [x + e * s * 0.3, y], [x + e * s * 0.3, y - s * 0.4]], r, col, s * 0.08, 0.3);
      pen(ctx, ring(x + e * s * 0.45, y + s * 0.42, s * 0.1), r, INK.red, s * 0.1, 0.2);
    }
  },
  note(ctx, x, y, s, col, r) {
    pen(ctx, ring(x - s * 0.35, y + s * 0.6, s * 0.28, s * 0.2), r, col, s * 0.2, 0.3);
    pen(ctx, [[x - s * 0.1, y + s * 0.6], [x - s * 0.1, y - s * 0.8], [x + s * 0.45, y - s * 0.45]], r, col, s * 0.13, 0.3);
    pen(ctx, [[x + s * 0.75, y + s * 0.5], [x + s * 0.75, y - s * 0.5]], r, INK.red, s * 0.12, 0.3);
    pen(ctx, [[x + s * 0.5, y - s * 0.2], [x + s * 0.75, y - s * 0.55], [x + s, y - s * 0.2]], r, INK.red, s * 0.12, 0.3);
  },
  brolly(ctx, x, y, s, col, r) {
    pen(ctx, [...ring(x, y - s * 0.1, s * 0.9, s * 0.75, Math.PI, Math.PI * 2, 9), [x - s * 0.9, y - s * 0.1]], r, col, s * 0.12, 0.4);
    pen(ctx, [[x, y - s * 0.1], [x, y + s * 0.7], [x - s * 0.12, y + s * 0.9], [x - s * 0.3, y + s * 0.75]], r, col, s * 0.12, 0.3);
  },
  tally(ctx, x, y, s, col, r) {
    for (let g = 0; g < 2; g++) {
      const gx = x - s * 0.95 + g * s * 1.15;
      for (let i = 0; i < 4; i++) pen(ctx, [[gx + i * s * 0.2, y - s * 0.6], [gx + i * s * 0.2, y + s * 0.6]], r, col, s * 0.1, 0.6);
      pen(ctx, [[gx - s * 0.15, y + s * 0.4], [gx + s * 0.75, y - s * 0.4]], r, col, s * 0.1, 0.6);
    }
  },
  query(ctx, x, y, s, col, r) {
    pen(ctx, [...ring(x, y - s * 0.4, s * 0.42, s * 0.42, Math.PI, Math.PI * 2.45, 8), [x, y + s * 0.25]], r, col, s * 0.15, 0.4);
    pen(ctx, [[x, y + s * 0.7], [x, y + s * 0.74]], r, col, s * 0.2, 0.2);
  },
  eye(ctx, x, y, s, col, r) {
    pen(ctx, [...ring(x, y + s * 0.5, s, s * 0.95, Math.PI * 1.17, Math.PI * 1.83, 7), ...ring(x, y - s * 0.5, s, s * 0.95, Math.PI * 0.17, Math.PI * 0.83, 7)], r, col, s * 0.11, 0.3, true);
    pen(ctx, ring(x, y, s * 0.3), r, col, s * 0.12, 0.2);
    pen(ctx, [[x, y - 0.5], [x, y + 0.5]], r, col, s * 0.26, 0.1);
  },
  spiral(ctx, x, y, s, col, r) {
    const pts = [];
    for (let i = 0; i <= 40; i++) { const a = i * 0.42, q = (s * i) / 40; pts.push([x + Math.cos(a) * q, y + Math.sin(a) * q]); }
    pen(ctx, pts, r, col, s * 0.1, 0.3);
  },
  // the arrows on the boards that say which way to go
  left(ctx, x, y, s, col, r) { DOODLES.right(ctx, x, y, -s, col, r); },
  right(ctx, x, y, s, col, r) {
    const lw = Math.abs(s) * 0.2;
    pen(ctx, [[x - s, y], [x + s * 0.9, y]], r, col, lw, 0.5);
    pen(ctx, [[x + s * 0.35, y - Math.abs(s) * 0.55], [x + s, y], [x + s * 0.35, y + Math.abs(s) * 0.55]], r, col, lw, 0.5);
  },
};

// th: { head, date, title, text, sign, ink, doodle, tier } (game/thoughts.js)
export function drawThoughtBoard(ctx, w, h, th, r) {
  // aluminium frame with plastic corner caps
  const f = Math.max(3, h * 0.034);
  const g = ctx.createLinearGradient(0, 0, 0, h);
  g.addColorStop(0, '#c9cdd0'); g.addColorStop(0.5, '#a9aeb2'); g.addColorStop(1, '#8d9296');
  ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#4b4f53';
  for (const [x, y] of [[0, 0], [w - f * 1.5, 0], [0, h - f * 1.5], [w - f * 1.5, h - f * 1.5]]) ctx.fillRect(x, y, f * 1.5, f * 1.5);
  // the surface: white, never quite clean
  ctx.fillStyle = '#f7f7f3'; ctx.fillRect(f, f, w - 2 * f, h - 2 * f);
  ctx.save();
  ctx.beginPath(); ctx.rect(f, f, w - 2 * f, h - 2 * f); ctx.clip();
  for (let i = 0; i < 5; i++) {              // where the last thought was wiped off
    const y = h * r.range(0.3, 0.85), x = w * r.range(0.05, 0.5);
    pen(ctx, [[x, y], [x + w * r.range(0.2, 0.45), y + h * r.range(-0.06, 0.06)]], r, `rgba(40,60,140,${r.range(0.025, 0.05)})`, h * r.range(0.05, 0.11), 2);
  }
  if (th.tier > 0) hand(ctx, 'Be kind to each other', w * 0.1, h * 0.62, h * 0.13, 'rgba(30,45,110,0.11)', r, { slope: -0.03 });
  // station name and "Thought for the day", underlined
  const head = th.head || '';
  let hs = h * 0.125;
  ctx.font = `400 ${hs}px ${HAND_FONT}`;
  const hw = ctx.measureText(head).width + hs * 0.4 * head.split(' ').length;
  if (hw > w * 0.84) hs *= (w * 0.84) / hw;
  const used = hand(ctx, head, w / 2, f + h * 0.135, hs, INK.black, r, { bold: true, align: 'center' });
  pen(ctx, [[w / 2 - used / 2 - 2, f + h * 0.16], [w / 2, f + h * 0.168], [w / 2 + used / 2 + 2, f + h * 0.158]], r, INK.black, Math.max(1, h * 0.011), 0.5);
  const ts = h * 0.088, ty = f + h * 0.27;
  const tw = hand(ctx, th.title || 'Thought for the day', w * 0.07, ty, ts, th.tier === 2 ? INK.black : INK.red, r, { bold: true });
  const squiggle = [];
  for (let x = 0; x <= tw; x += ts * 0.45) squiggle.push([w * 0.07 + x, ty + ts * 0.2 + ((squiggle.length % 2) ? 1 : -1) * ts * 0.05]);
  pen(ctx, squiggle, r, th.tier === 2 ? INK.black : INK.red, Math.max(1, h * 0.008), 0.3);
  // the date fits whatever room the title has left
  let ds = h * 0.07;
  ctx.font = `400 ${ds}px ${HAND_FONT}`;
  const room = w * 0.93 - (w * 0.07 + tw) - ts * 0.6, dw = ctx.measureText(th.date || '').width * 1.12;
  if (dw > room) ds *= Math.max(0.6, room / dw);
  hand(ctx, th.date || '', w * 0.935, ty, ds, INK.blue, r, { align: 'right' });
  // the thought itself: as big as fits
  const top = f + h * 0.33, bottom = h * 0.8, maxW = w * 0.84;
  let size = h * (th.text.length < 14 ? 0.24 : 0.15), lines;      // (one word can shout)
  for (;;) {
    ctx.font = `400 ${size * 1.05}px ${HAND_FONT}`;
    lines = wrapLines(ctx, th.text, maxW);
    if (lines.length * size * 1.08 <= bottom - top || size < 6) break;
    size *= 0.94;
  }
  const lead = Math.min(size * 1.22, (bottom - top) / lines.length);
  const y0 = top + (bottom - top - lead * lines.length) / 2 + size * 0.82;
  lines.forEach((ln, i) => hand(ctx, ln, w * 0.08 + r.range(0, w * 0.015), y0 + i * lead, size, th.ink || INK.blue, r, { slope: r.range(-0.012, 0.012) }));
  // signature (bottom right, climbing a little) and the doodle (bottom left)
  let ss = h * 0.085;
  ctx.font = `400 ${ss}px ${HAND_FONT}`;
  const sw = ctx.measureText(`– ${th.sign}`).width * 1.15;
  if (sw > w * 0.6) ss *= (w * 0.6) / sw;
  hand(ctx, `– ${th.sign}`, w * 0.93, h * 0.925, ss, th.tier === 2 ? INK.red : th.ink === INK.black ? INK.blue : INK.black, r, { slope: -0.04, align: 'right' });
  const d = DOODLES[th.doodle];
  if (d) d(ctx, w * 0.15, h * 0.875, h * 0.058, th.tier === 2 ? INK.red : INK.green, r);
  ctx.restore();
  ctx.strokeStyle = 'rgba(60,64,68,0.55)'; ctx.lineWidth = 1; ctx.strokeRect(f - 0.5, f - 0.5, w - 2 * f + 1, h - 2 * f + 1);
  grime(ctx, f, f, w - 2 * f, h - 2 * f, r.int(1, 99999), 0.22, false);
}
