// The "Customer Information" board: a white enamel panel in a grey frame
// with a blue header (roundel and title), the station's rules numbered down
// the page, and a line of small print. Type and flat colour only.
import { SYMBOL } from '../config.js';
import { HEAD_FONT, BODY_FONT, fitText, wrapLines, grime } from './canvas.js';
import { drawSymbol } from './symbol.js';

// info: { title, intro, rules: [..], foot } (game/scripts.js); station = the name in the small print.
export function drawCustomerInfo(ctx, w, h, info, station, r) {
  const f = Math.max(2, w * 0.022), blue = SYMBOL.bar, ink = '#17191f';
  ctx.fillStyle = '#6d7275'; ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = SYMBOL.panel; ctx.fillRect(f, f, w - 2 * f, h - 2 * f);
  // header
  const hh = h * 0.135, R = hh * 0.3;
  ctx.fillStyle = blue; ctx.fillRect(f, f, w - 2 * f, hh);
  ctx.fillStyle = SYMBOL.panel; ctx.beginPath(); ctx.arc(f + hh * 0.62, f + hh / 2, R * 1.42, 0, 7); ctx.fill();
  drawSymbol(ctx, f + hh * 0.62, f + hh / 2, R);
  ctx.fillStyle = '#fff'; ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
  const tx = f + hh * 1.22;
  fitText(ctx, info.title, w - f - tx - w * 0.04, hh * 0.46, HEAD_FONT);
  ctx.fillText(info.title, tx, f + hh * 0.53);
  // intro
  const m = w * 0.075, top = f + hh + h * 0.04;
  ctx.fillStyle = ink; ctx.textBaseline = 'alphabetic';
  const is = fitText(ctx, info.intro, w - 2 * m, h * 0.043, BODY_FONT, 700);
  ctx.fillText(info.intro, m, top + is * 0.8);
  // numbered rules: as large as the panel allows
  const y0 = top + is * 1.7, y1 = h * 0.905, nr = info.rules.length;
  let size = h * 0.047, wrapped, lead, gap, numW;
  for (;;) {
    ctx.font = `400 ${size}px ${BODY_FONT}`;
    numW = size * 1.75; lead = size * 1.2; gap = size * 0.62;
    wrapped = info.rules.map((t) => wrapLines(ctx, t, w - 2 * m - numW));
    const need = wrapped.reduce((a, l) => a + l.length * lead, 0) + gap * (nr - 1);
    if (need <= y1 - y0 || size < 5) break;
    size *= 0.96;
  }
  let y = y0;
  wrapped.forEach((lines, i) => {
    ctx.fillStyle = blue; ctx.beginPath(); ctx.arc(m + size * 0.62, y + lead * 0.48, size * 0.66, 0, 7); ctx.fill();
    ctx.fillStyle = '#fff'; ctx.textAlign = 'center'; ctx.font = `700 ${size * 0.95}px ${BODY_FONT}`;
    ctx.fillText(String(i + 1), m + size * 0.62, y + lead * 0.48 + size * 0.33);
    // (the type is thickened a touch, so it survives the camcorder)
    ctx.fillStyle = ink; ctx.strokeStyle = ink; ctx.lineWidth = size * 0.035; ctx.textAlign = 'left'; ctx.font = `400 ${size}px ${BODY_FONT}`;
    lines.forEach((ln, k) => { ctx.fillText(ln, m + numW, y + lead * (k + 0.78)); ctx.strokeText(ln, m + numW, y + lead * (k + 0.78)); });
    y += lines.length * lead + gap;
  });
  // small print
  ctx.fillStyle = blue; ctx.fillRect(m, h * 0.925, w - 2 * m, Math.max(1, h * 0.004));
  ctx.fillStyle = '#4a4f58';
  fitText(ctx, `${station} · ${info.foot}`, w - 2 * m, h * 0.03, BODY_FONT, 400);
  ctx.fillText(`${station} · ${info.foot}`, m, h * 0.962);
  if (r) grime(ctx, f, f, w - 2 * f, h - 2 * f, r.int(1, 99999), 0.3, false);
}
