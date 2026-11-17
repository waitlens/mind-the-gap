// The station symbol of this (fictional) network: a ring broken by two
// notches, crossed by a lozenge-ended bar that carries the station name.
// Deliberately NOT the real roundel: different proportions, a pointed bar,
// a notched ring and shifted colours (see REFERENCES.md).
import { SYMBOL } from '../config.js';
import { HEAD_FONT, fitText } from './canvas.js';

// Draw centred at (cx, cy); R = outer radius of the ring. The bar is 2.6 R
// wide. opts: { name, defect, ring, bar, text }
// defect: null | 'tilt' | 'double' | 'solid' | 'swap' | 'gap' | 'low' | 'mirror'
export function drawSymbol(ctx, cx, cy, R, opts = {}) {
  let ring = opts.ring || SYMBOL.ring, bar = opts.bar || SYMBOL.bar;
  const defect = opts.defect || null;
  if (defect === 'swap') [ring, bar] = [bar, ring];
  const barH = R * 0.44, L = R * 1.3;
  const mid = R * 0.81, thick = R * 0.38;
  ctx.save();
  ctx.translate(cx, cy);
  if (defect === 'tilt') ctx.rotate(-0.09);

  // ring, in two arcs so the bar sits in a notch
  const notch = defect === 'solid' ? 0 : Math.asin(Math.min(0.95, (barH / 2 + R * 0.07) / mid));
  ctx.strokeStyle = ring; ctx.lineWidth = thick; ctx.lineCap = 'butt';
  const arcs = defect === 'gap'
    ? [[Math.PI + notch, Math.PI * 1.62], [Math.PI * 1.74, 2 * Math.PI - notch], [notch, Math.PI - notch]]
    : [[Math.PI + notch, 2 * Math.PI - notch], [notch, Math.PI - notch]];
  for (const [a0, a1] of arcs) { ctx.beginPath(); ctx.arc(0, 0, mid, a0, a1); ctx.stroke(); }
  if (defect === 'double') {
    ctx.lineWidth = thick * 0.3;
    for (const [a0, a1] of arcs) { ctx.beginPath(); ctx.arc(0, 0, mid * 0.52, a0 - 0.2, a1 + 0.2); ctx.stroke(); }
  }

  // lozenge-ended bar
  const by = defect === 'low' ? R * 0.2 : 0;
  ctx.fillStyle = bar;
  ctx.beginPath();
  ctx.moveTo(-L, by); ctx.lineTo(-L + barH / 2, by - barH / 2); ctx.lineTo(L - barH / 2, by - barH / 2);
  ctx.lineTo(L, by); ctx.lineTo(L - barH / 2, by + barH / 2); ctx.lineTo(-L + barH / 2, by + barH / 2);
  ctx.closePath(); ctx.fill();

  if (opts.name) {
    const name = String(opts.name).toUpperCase();
    ctx.fillStyle = opts.text || SYMBOL.text;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    fitText(ctx, name, (L - barH * 0.55) * 2, barH * 0.66, HEAD_FONT);
    if (defect === 'mirror') ctx.scale(-1, 1);
    ctx.fillText(name, 0, by + barH * 0.04);
  }
  ctx.restore();
}

// Name board: the symbol on a pale enamel panel with a thin frame.
export function drawNameBoard(ctx, w, h, name, opts = {}) {
  ctx.fillStyle = SYMBOL.panel; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#1b1b1b'; ctx.lineWidth = Math.max(2, h * 0.02); ctx.strokeRect(1, 1, w - 2, h - 2);
  const R = Math.min(h * 0.4, w / 2.9);
  drawSymbol(ctx, w / 2, h / 2, R, { name, ...opts });
}

export const SYMBOL_DEFECTS = ['tilt', 'double', 'solid', 'swap', 'gap', 'low', 'mirror'];
