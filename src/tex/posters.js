// Procedural posters, staff notices and the service whiteboard.
// Everything is drawn from shapes and type — no photographs.
import { HEAD_FONT, BODY_FONT, fitText, wrapLines, grime } from './canvas.js';
import { POSTERS, POSTERS_ODD } from '../game/scripts.js';

const PALETTES = [
  ['#0f3057', '#f2a541', '#f5efe0'], ['#7a1f2b', '#f0d9a8', '#1c1c1c'], ['#1d5c4b', '#f3e9c6', '#e86a33'],
  ['#e9dcc0', '#b3261e', '#14213d'], ['#2b2b3a', '#e3b23c', '#f4f1e6'], ['#c5522b', '#f6e7c8', '#253a5e'],
  ['#3d6e8e', '#f4e4b8', '#1b2a38'], ['#efe6cf', '#1f5a3a', '#8c2f45'],
];

function art(ctx, w, h, r, pal, odd) {
  const [bg, a, b] = pal;
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  const kind = r.int(0, 4);
  if (kind === 0) {            // sun over sea
    ctx.fillStyle = a; ctx.beginPath(); ctx.arc(w * 0.5, h * 0.4, w * 0.24, 0, 7); ctx.fill();
    ctx.fillStyle = b;
    for (let i = 0; i < 5; i++) ctx.fillRect(0, h * (0.46 + i * 0.045), w, h * 0.02);
    ctx.fillRect(0, h * 0.66, w, h * 0.34);
  } else if (kind === 1) {     // rays
    ctx.save(); ctx.translate(w * 0.5, h * 0.62);
    for (let i = 0; i < 14; i++) {
      ctx.fillStyle = i % 2 ? a : b; ctx.beginPath(); ctx.moveTo(0, 0);
      const a0 = Math.PI + (i / 14) * Math.PI, a1 = Math.PI + ((i + 1) / 14) * Math.PI;
      ctx.lineTo(Math.cos(a0) * w * 2, Math.sin(a0) * w * 2); ctx.lineTo(Math.cos(a1) * w * 2, Math.sin(a1) * w * 2); ctx.fill();
    }
    ctx.restore();
    ctx.fillStyle = bg; ctx.fillRect(0, h * 0.62, w, h * 0.38);
  } else if (kind === 2) {     // tunnel rings
    for (let i = 6; i > 0; i--) {
      ctx.fillStyle = i % 2 ? a : b; ctx.beginPath(); ctx.arc(w * 0.5, h * 0.42, (w * 0.42 * i) / 6, 0, 7); ctx.fill();
    }
    ctx.fillStyle = '#0b0b0b'; ctx.beginPath(); ctx.arc(w * 0.5, h * 0.42, w * 0.06, 0, 7); ctx.fill();
  } else if (kind === 3) {     // hills
    ctx.fillStyle = a; ctx.beginPath(); ctx.moveTo(0, h * 0.6);
    ctx.bezierCurveTo(w * 0.3, h * 0.3, w * 0.5, h * 0.7, w, h * 0.38); ctx.lineTo(w, h); ctx.lineTo(0, h); ctx.fill();
    ctx.fillStyle = b; ctx.beginPath(); ctx.moveTo(0, h * 0.72);
    ctx.bezierCurveTo(w * 0.4, h * 0.5, w * 0.7, h * 0.85, w, h * 0.62); ctx.lineTo(w, h); ctx.lineTo(0, h); ctx.fill();
  } else {                     // blocks
    ctx.fillStyle = a; ctx.fillRect(w * 0.12, h * 0.14, w * 0.5, h * 0.42);
    ctx.fillStyle = b; ctx.fillRect(w * 0.4, h * 0.3, w * 0.48, h * 0.36);
  }
  if (odd) {                   // a figure that should not be in the picture
    ctx.fillStyle = 'rgba(8,8,8,0.92)';
    const fx = w * r.range(0.25, 0.75), fy = h * 0.62, s = h * 0.12;
    ctx.beginPath(); ctx.ellipse(fx, fy - s * 1.25, s * 0.2, s * 0.24, 0, 0, 7); ctx.fill();
    ctx.beginPath(); ctx.moveTo(fx - s * 0.32, fy); ctx.lineTo(fx - s * 0.22, fy - s); ctx.lineTo(fx + s * 0.22, fy - s); ctx.lineTo(fx + s * 0.32, fy); ctx.fill();
  }
}

// Returns { headline, strap } so the poster can be "read".
export function drawPoster(ctx, w, h, r, odd = false) {
  const pal = r.pick(PALETTES);
  const [headline, strap] = r.pick(odd ? POSTERS_ODD : POSTERS);
  art(ctx, w, h, r, pal, odd);
  const dark = pal[2];
  ctx.fillStyle = pal[0]; ctx.fillRect(0, h * 0.7, w, h * 0.3);
  ctx.fillStyle = pal[1]; ctx.fillRect(0, h * 0.7, w, h * 0.012);
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillStyle = pal[1] === pal[0] ? dark : pal[1];
  ctx.font = `400 ${h * 0.085}px ${HEAD_FONT}`;
  const lines = wrapLines(ctx, headline, w * 0.86).slice(0, 2);
  lines.forEach((ln, i) => ctx.fillText(ln, w / 2, h * (0.775 + i * 0.085) - (lines.length - 1) * h * 0.02, w * 0.9));
  ctx.fillStyle = pal[2] === pal[0] ? '#fff' : pal[2];
  fitText(ctx, strap, w * 0.84, h * 0.045, BODY_FONT, 700);
  ctx.fillText(strap, w / 2, h * 0.93);
  grime(ctx, 0, 0, w, h, r.int(1, 99999), 0.6);
  return { headline, strap };
}

// Typed staff notice pinned to the wall.
export function drawNotice(ctx, w, h, notice, r) {
  ctx.fillStyle = '#f3f0e4'; ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#14213d'; ctx.fillRect(0, 0, w, h * 0.17);
  ctx.fillStyle = '#fff'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  fitText(ctx, notice.title, w * 0.86, h * 0.1, HEAD_FONT);
  ctx.fillText(notice.title, w / 2, h * 0.09);
  ctx.fillStyle = '#1a1a1a'; ctx.textAlign = 'left'; ctx.textBaseline = 'top';
  let size = h * 0.07;
  let lines;
  for (;;) {
    ctx.font = `400 ${size}px ${BODY_FONT}`;
    lines = wrapLines(ctx, notice.text, w * 0.86);
    if (lines.length * size * 1.25 < h * 0.74 || size < 5) break;
    size *= 0.92;
  }
  lines.forEach((ln, i) => ctx.fillText(ln, w * 0.07, h * 0.22 + i * size * 1.25));
  ctx.fillStyle = '#b3261e';   // drawing pins
  for (const [x, y] of [[0.06, 0.03], [0.94, 0.03]]) { ctx.beginPath(); ctx.arc(w * x, h * y + 2, Math.max(2, w * 0.018), 0, 7); ctx.fill(); }
  if (r) grime(ctx, 0, 0, w, h, r.int(1, 99999), 0.5);
}

// The service-information whiteboard with a handwritten message.
export function drawWhiteboard(ctx, w, h, text, r) {
  ctx.fillStyle = '#b9bcbd'; ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#f7f7f2'; ctx.fillRect(w * 0.03, h * 0.04, w * 0.94, h * 0.92);
  ctx.fillStyle = '#14213d'; ctx.fillRect(w * 0.03, h * 0.04, w * 0.94, h * 0.16);
  ctx.fillStyle = '#fff'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  fitText(ctx, 'Service information', w * 0.8, h * 0.1, HEAD_FONT);
  ctx.fillText('Service information', w / 2, h * 0.125);
  ctx.fillStyle = '#1d2f8a'; ctx.textAlign = 'left'; ctx.textBaseline = 'top';
  let size = h * 0.09, lines;
  for (;;) {
    ctx.font = `italic 400 ${size}px ${BODY_FONT}`;
    lines = wrapLines(ctx, text, w * 0.84);
    if (lines.length * size * 1.3 < h * 0.68 || size < 5) break;
    size *= 0.92;
  }
  lines.forEach((ln, i) => {
    ctx.save();
    ctx.translate(w * 0.08, h * 0.25 + i * size * 1.3);
    ctx.rotate((r ? r.range(-0.02, 0.02) : 0));
    ctx.fillText(ln, 0, 0);
    ctx.restore();
  });
}
