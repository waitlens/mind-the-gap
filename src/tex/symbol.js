// The roundel: a red ring crossed by a blue bar carrying the name in white
// capitals. Proportions measured from station photographs (REFERENCES.md):
// with R the ring's outer radius, the inner radius is 0.63 R, the bar is
// 2.52 R long and 0.56 R high, and the capitals are 0.55 of the bar's height.
// Drawn at runtime; no logo file is shipped.
import { SYMBOL } from '../config.js';
import { HEAD_FONT, fitText } from './canvas.js';

// Draw centred at (cx, cy); R = outer radius of the ring.
// opts: { name, defect, ring, bar, text, frame }
// defect (for stations that have gone wrong):
//   null | 'tilt' | 'double' | 'solid' | 'swap' | 'gap' | 'low' | 'mirror'
export function drawSymbol(ctx, cx, cy, R, opts = {}) {
  let ring = opts.ring || SYMBOL.ring, bar = opts.bar || SYMBOL.bar;
  const defect = opts.defect || null;
  if (defect === 'swap') [ring, bar] = [bar, ring];
  const barH = R * 0.56, L = R * 1.26;
  const mid = R * 0.815, thick = R * 0.37;
  ctx.save();
  ctx.translate(cx, cy);
  if (defect === 'tilt') ctx.rotate(-0.07);

  // ring (the bar is painted over it)
  ctx.strokeStyle = ring; ctx.lineWidth = thick; ctx.lineCap = 'butt';
  if (defect === 'solid') {            // the 1908 version: a solid disc
    ctx.fillStyle = ring; ctx.beginPath(); ctx.arc(0, 0, R, 0, Math.PI * 2); ctx.fill();
  } else if (defect === 'gap') {
    for (const [a0, a1] of [[-Math.PI * 0.86, -Math.PI * 0.2], [-Math.PI * 0.08, Math.PI * 1.02]]) { ctx.beginPath(); ctx.arc(0, 0, mid, a0, a1); ctx.stroke(); }
  } else {
    ctx.beginPath(); ctx.arc(0, 0, mid, 0, Math.PI * 2); ctx.stroke();
  }
  if (defect === 'double') { ctx.lineWidth = thick * 0.32; ctx.beginPath(); ctx.arc(0, 0, mid * 0.5, 0, Math.PI * 2); ctx.stroke(); }
  if (opts.frame) {                    // silhouette roundels have a dark rim
    ctx.strokeStyle = '#2a211c'; ctx.lineWidth = Math.max(1, R * 0.03);
    for (const r of [R, R * 0.63]) { ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.stroke(); }
  }

  // bar
  const by = defect === 'low' ? R * 0.22 : 0;
  ctx.fillStyle = bar;
  ctx.fillRect(-L, by - barH / 2, L * 2, barH);
  if (opts.frame) { ctx.strokeStyle = '#2a211c'; ctx.lineWidth = Math.max(1, R * 0.035); ctx.strokeRect(-L, by - barH / 2, L * 2, barH); }

  if (opts.name) {
    const name = String(opts.name).toUpperCase();
    ctx.fillStyle = opts.text || SYMBOL.text;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    // Hammersmith One's capitals are ≈ 0.7 em high: 0.55 barH cap height → 0.78 barH em
    const size = barH * 0.78;
    try { ctx.letterSpacing = `${(size * 0.05).toFixed(1)}px`; } catch { /* older browsers */ }
    fitText(ctx, name, L * 2 - barH * 0.5, size, HEAD_FONT);
    if (defect === 'mirror') ctx.scale(-1, 1);
    ctx.fillText(name, 0, by + barH * 0.05);
    try { ctx.letterSpacing = '0px'; } catch { /* ignore */ }
  }
  ctx.restore();
}

// Name board: the roundel on a white enamel panel in a grey frame, as on
// platform walls (portrait panel) and the track-side wall (small square).
export function drawNameBoard(ctx, w, h, name, opts = {}) {
  ctx.fillStyle = SYMBOL.panel; ctx.fillRect(0, 0, w, h);
  const f = Math.max(2, Math.min(w, h) * 0.035);
  ctx.strokeStyle = '#6d7275'; ctx.lineWidth = f; ctx.strokeRect(f / 2, f / 2, w - f, h - f);
  const R = Math.min((w * 0.9) / 2.52, h * 0.38);
  drawSymbol(ctx, w / 2, h / 2, R, { name, ...opts });
}

export const SYMBOL_DEFECTS = ['tilt', 'double', 'solid', 'swap', 'gap', 'low', 'mirror'];
