// Front page of the free morning paper: a red masthead with a blue date
// strap, a big headline, the standfirst, a "photograph" made of a few grey
// shapes under a halftone screen, and columns of greeked text. Type and
// shapes only (see game/paper.js for the words; the title is invented).
import { HEAD_FONT, BODY_FONT, fitText, wrapLines, grime } from './canvas.js';

const DARK = '#2b2b2a', MID = '#8f8f88', LIGHT = '#d9d8cf';

// The pictures: x, y, w, h = the block; drawn in three greys.
const PHOTO = {
  tunnel(c, x, y, w, h) {
    for (let i = 5; i > 0; i--) { c.fillStyle = i % 2 ? MID : LIGHT; c.beginPath(); c.arc(x + w / 2, y + h * 0.56, (w * 0.62 * i) / 5, 0, 7); c.fill(); }
    c.fillStyle = DARK; c.beginPath(); c.arc(x + w / 2, y + h * 0.56, w * 0.1, 0, 7); c.fill();
    c.fillRect(x, y + h * 0.86, w, h * 0.14);
  },
  train(c, x, y, w, h) {
    PHOTO.tunnel(c, x, y, w, h);
    c.fillStyle = LIGHT; c.fillRect(x + w * 0.3, y + h * 0.3, w * 0.4, h * 0.56);
    c.fillStyle = DARK; c.fillRect(x + w * 0.34, y + h * 0.36, w * 0.13, h * 0.2); c.fillRect(x + w * 0.53, y + h * 0.36, w * 0.13, h * 0.2);
    c.fillStyle = '#fff'; c.fillRect(x + w * 0.35, y + h * 0.7, w * 0.07, h * 0.06); c.fillRect(x + w * 0.58, y + h * 0.7, w * 0.07, h * 0.06);
  },
  rain(c, x, y, w, h) {
    c.fillStyle = DARK; c.beginPath(); c.arc(x + w * 0.5, y + h * 0.55, w * 0.3, Math.PI, 0); c.fill();
    c.fillRect(x + w * 0.49, y + h * 0.55, w * 0.025, h * 0.34);
    c.strokeStyle = LIGHT; c.lineWidth = 1;
    for (let i = 0; i < 16; i++) { const rx = x + ((i * 37) % 100) / 100 * w, ry = y + ((i * 53) % 100) / 100 * h * 0.8; c.beginPath(); c.moveTo(rx, ry); c.lineTo(rx - w * 0.04, ry + h * 0.14); c.stroke(); }
  },
  house(c, x, y, w, h) {
    c.fillStyle = LIGHT; c.fillRect(x, y, w, h * 0.5);
    for (let i = 0; i < 3; i++) {
      const hx = x + w * (0.06 + i * 0.31), hw = w * 0.26;
      c.fillStyle = i === 1 ? DARK : '#55554f'; c.fillRect(hx, y + h * 0.42, hw, h * 0.58);
      c.beginPath(); c.moveTo(hx - 1, y + h * 0.42); c.lineTo(hx + hw / 2, y + h * 0.18); c.lineTo(hx + hw + 1, y + h * 0.42); c.fill();
      c.fillStyle = LIGHT; c.fillRect(hx + hw * 0.3, y + h * 0.56, hw * 0.4, h * 0.14);
    }
  },
  fox(c, x, y, w, h) {
    const cx = x + w / 2, cy = y + h * 0.55, s = Math.min(w, h) * 0.36;
    c.fillStyle = DARK;
    c.beginPath(); c.moveTo(cx - s, cy - s * 0.35); c.lineTo(cx - s * 0.75, cy - s * 1.25); c.lineTo(cx - s * 0.25, cy - s * 0.7);
    c.lineTo(cx + s * 0.25, cy - s * 0.7); c.lineTo(cx + s * 0.75, cy - s * 1.25); c.lineTo(cx + s, cy - s * 0.35); c.lineTo(cx, cy + s); c.fill();
    c.fillStyle = LIGHT; for (const e of [-1, 1]) { c.beginPath(); c.arc(cx + e * s * 0.4, cy - s * 0.2, s * 0.11, 0, 7); c.fill(); }
  },
  tiles(c, x, y, w, h) {
    for (let j = 0; j < 6; j++) for (let i = 0; i < 9; i++) {
      c.fillStyle = j === 1 || j === 4 ? DARK : (i + j) % 5 === 0 ? MID : LIGHT;
      c.fillRect(x + (w * (i - (j % 2) * 0.5)) / 8 + 0.5, y + (h * j) / 6 + 0.5, w / 8 - 1, h / 6 - 1);
    }
  },
  clock(c, x, y, w, h) {
    const cx = x + w / 2, cy = y + h / 2, r = Math.min(w, h) * 0.4;
    c.fillStyle = LIGHT; c.beginPath(); c.arc(cx, cy, r, 0, 7); c.fill();
    c.strokeStyle = DARK; c.lineWidth = Math.max(1, r * 0.1); c.beginPath(); c.arc(cx, cy, r, 0, 7); c.stroke();
    c.beginPath(); c.moveTo(cx, cy); c.lineTo(cx, cy - r * 0.7); c.moveTo(cx, cy); c.lineTo(cx + r * 0.45, cy + r * 0.2); c.stroke();
  },
  // a platform, and someone standing a long way down it
  figure(c, x, y, w, h) {
    c.fillStyle = '#6d6d68'; c.fillRect(x, y, w, h);
    c.fillStyle = LIGHT; c.beginPath(); c.moveTo(x, y + h); c.lineTo(x + w * 0.42, y + h * 0.5); c.lineTo(x + w * 0.58, y + h * 0.5); c.lineTo(x + w, y + h); c.fill();
    c.fillStyle = '#0d0d0d'; const fx = x + w * 0.5, fy = y + h * 0.62, s = h * 0.2;
    c.beginPath(); c.ellipse(fx, fy - s * 1.25, s * 0.2, s * 0.24, 0, 0, 7); c.fill();
    c.beginPath(); c.moveTo(fx - s * 0.32, fy); c.lineTo(fx - s * 0.22, fy - s); c.lineTo(fx + s * 0.22, fy - s); c.lineTo(fx + s * 0.32, fy); c.fill();
  },
  // a photograph of this front page (of this front page…)
  paper(c, x, y, w, h) {
    for (let i = 0; i < 4; i++) {
      const k = 0.78 ** i, pw = w * 0.5 * k, ph = h * 0.86 * k, px = x + w / 2 - pw / 2, py = y + h / 2 - ph / 2;
      c.fillStyle = LIGHT; c.fillRect(px, py, pw, ph);
      c.fillStyle = DARK; c.fillRect(px, py, pw, ph * 0.16); c.fillRect(px + pw * 0.1, py + ph * 0.24, pw * 0.8, ph * 0.08);
      c.fillStyle = MID; c.fillRect(px + pw * 0.1, py + ph * 0.4, pw * 0.8, ph * 0.5);
    }
  },
  eye(c, x, y, w, h) {
    const cx = x + w / 2, cy = y + h / 2;
    c.fillStyle = LIGHT; c.beginPath(); c.ellipse(cx, cy, w * 0.4, h * 0.3, 0, 0, 7); c.fill();
    c.fillStyle = MID; c.beginPath(); c.arc(cx, cy, h * 0.24, 0, 7); c.fill();
    c.fillStyle = '#0d0d0d'; c.beginPath(); c.arc(cx, cy, h * 0.12, 0, 7); c.fill();
  },
  blank() {},
};

// Greeked text: grey rules in a column, the last line of each paragraph short.
function greek(c, x, y, w, h, r, lh) {
  c.fillStyle = 'rgba(40,40,38,0.62)';
  let para = r.int(3, 6);
  for (let ly = y; ly + lh * 0.5 <= y + h; ly += lh) {
    para--;
    c.fillRect(x, ly, para === 0 ? w * r.range(0.3, 0.75) : w * r.range(0.93, 1), Math.max(1, lh * 0.42));
    if (para === 0) { para = r.int(3, 6); ly += lh * 0.5; }
  }
}

// story: { name, date, issue, head, stand, photo, tier } (game/paper.js)
export function drawFrontPage(ctx, w, h, story, r) {
  const m = w * 0.045, ink = '#161616';
  ctx.fillStyle = story.tier === 2 ? '#ddd7c4' : '#e9e6db'; ctx.fillRect(0, 0, w, h);
  // masthead: white capitals leaning forward on red, blue strap underneath
  const mh = h * 0.135, sh = h * 0.05;
  ctx.fillStyle = '#d21f26'; ctx.fillRect(0, 0, w, mh);
  ctx.save();
  ctx.translate(w / 2, mh * 0.54); ctx.transform(1, 0, -0.16, 1, 0, 0);
  ctx.fillStyle = '#fff'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  fitText(ctx, story.name, w * 0.86, mh * 0.86, HEAD_FONT);
  ctx.fillText(story.name, 0, 0);
  ctx.restore();
  ctx.fillStyle = '#0c2f7a'; ctx.fillRect(0, mh, w, sh);
  ctx.textBaseline = 'middle'; ctx.textAlign = 'left'; ctx.fillStyle = '#fff';
  fitText(ctx, story.date, w * 0.66, sh * 0.72, BODY_FONT, 700);
  ctx.fillText(story.date, m, mh + sh * 0.54, w * 0.7);
  ctx.textAlign = 'right'; ctx.fillStyle = '#ffd329';
  ctx.font = `700 ${sh * 0.72}px ${BODY_FONT}`;
  ctx.fillText('FREE', w - m, mh + sh * 0.54);
  // headline: as big as three lines allow
  const head = story.head.toUpperCase(), top = mh + sh + h * 0.02, maxH = h * 0.235;
  let size = h * 0.125, lines;
  for (;;) {
    ctx.font = `400 ${size}px ${HEAD_FONT}`;
    lines = wrapLines(ctx, head, w - 2 * m);
    if ((lines.length <= 3 && lines.length * size * 0.98 <= maxH && lines.every((ln) => ctx.measureText(ln).width <= w - 2 * m)) || size < 6) break;
    size *= 0.94;
  }
  ctx.fillStyle = ink; ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
  lines.forEach((ln, i) => ctx.fillText(ln, m, top + size * (0.84 + i * 0.98)));
  let y = top + lines.length * size * 0.98 + h * 0.012;
  // standfirst
  const ss = Math.max(5, h * 0.04);
  ctx.font = `700 ${ss}px ${BODY_FONT}`;
  const sl = wrapLines(ctx, story.stand, w - 2 * m).slice(0, 3);
  sl.forEach((ln, i) => ctx.fillText(ln, m, y + ss * (0.85 + i * 1.12)));
  y += sl.length * ss * 1.12 + h * 0.014;
  ctx.fillStyle = ink; ctx.fillRect(m, y, w - 2 * m, Math.max(1, h * 0.004));
  y += h * 0.014;
  // the picture (under a halftone screen), a column beside it, three below
  const pw = (w - 2 * m) * 0.6, ph = Math.min(h * 0.26, (h - y) * 0.55), lh = Math.max(2.4, h * 0.0165);
  ctx.save();
  ctx.beginPath(); ctx.rect(m, y, pw, ph); ctx.clip();
  ctx.fillStyle = MID; ctx.fillRect(m, y, pw, ph);
  (PHOTO[story.photo] || PHOTO.blank)(ctx, m, y, pw, ph);
  ctx.fillStyle = 'rgba(233,230,219,0.28)';
  for (let py = y; py < y + ph; py += 2) for (let px = m + ((py - y) % 4 ? 1 : 0); px < m + pw; px += 2) ctx.fillRect(px, py, 1, 1);
  ctx.restore();
  ctx.strokeStyle = ink; ctx.lineWidth = 0.6; ctx.strokeRect(m, y, pw, ph);
  const gap = w * 0.03, cw3 = (w - 2 * m - 2 * gap) / 3;
  greek(ctx, m + pw + gap, y, w - 2 * m - pw - gap, ph, r, lh);
  const y2 = y + ph + h * 0.02, foot = h * 0.955;
  for (let k = 0; k < 3; k++) greek(ctx, m + k * (cw3 + gap), y2, cw3, foot - y2, r, lh);
  ctx.fillStyle = ink; ctx.font = `700 ${Math.max(4, h * 0.026)}px ${BODY_FONT}`; ctx.textAlign = 'right';
  ctx.fillText(`${story.issue} · Turn to page 2`, w - m, h * 0.985);
  // the fold across the middle, and a morning on a bench
  const fg = ctx.createLinearGradient(0, h * 0.47, 0, h * 0.56);
  fg.addColorStop(0, 'rgba(0,0,0,0)'); fg.addColorStop(0.35, 'rgba(255,255,255,0.3)'); fg.addColorStop(0.5, 'rgba(0,0,0,0.2)'); fg.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = fg; ctx.fillRect(0, h * 0.47, w, h * 0.09);
  grime(ctx, 0, 0, w, h, r.int(1, 99999), story.tier ? 0.8 : 0.45, false);
}
