// "Poems on the Underground": a wide, pale card with a few lines of verse
// set in a book serif, the poet's name underneath, and the programme's
// title beside a small roundel along the bottom. Type and flat colour only
// (see game/poems.js for the words).
import { HEAD_FONT, SERIF_FONT, grime } from './canvas.js';
import { drawSymbol } from './symbol.js';

// poem: { title, lines, indent, credit, from, paper } (game/poems.js).
// framed: the grey metal frame the Underground puts round its posters.
export function drawPoemPoster(ctx, w, h, poem, r, framed = false) {
  if (framed) {
    const f = Math.max(2, Math.min(w, h) * 0.035);
    ctx.fillStyle = '#62676a'; ctx.fillRect(0, 0, w, h);
    ctx.save(); ctx.translate(f, f);
    ctx.beginPath(); ctx.rect(0, 0, w - 2 * f, h - 2 * f); ctx.clip();
    drawPoemPoster(ctx, w - 2 * f, h - 2 * f, poem, r, false);
    ctx.restore();
    return;
  }
  const ink = '#1b1d24', blue = '#0019a8';
  ctx.fillStyle = poem.paper || '#f6f1e3'; ctx.fillRect(0, 0, w, h);
  // the band along the bottom: roundel and the programme's name
  const bandY = h * 0.815, R = h * 0.062;
  ctx.fillStyle = 'rgba(255,255,255,0.55)'; ctx.fillRect(0, bandY, w, h - bandY);
  ctx.fillStyle = blue; ctx.fillRect(0, bandY, w, Math.max(1, h * 0.012));
  const by = (bandY + h) / 2 + h * 0.006;
  drawSymbol(ctx, w * 0.06 + R * 1.26, by, R);
  ctx.fillStyle = blue; ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
  ctx.font = `400 ${h * 0.082}px ${HEAD_FONT}`;
  ctx.fillText('Poems on the Underground', w * 0.06 + R * 2.9, by + h * 0.004, w * 0.72);
  // the poem: as large as its longest line and the height allow
  const lines = poem.lines, indent = poem.indent || [];
  const top = h * 0.2, bottom = h * 0.67, maxW = w * 0.87, ind = w * 0.045;
  let size = Math.min(h * 0.105, ((bottom - top) / lines.length) / 1.28), block = 0;
  for (let k = 0; k < 12; k++) {
    ctx.font = `400 ${size}px ${SERIF_FONT}`;
    block = Math.max(...lines.map((ln, i) => ctx.measureText(ln).width + (indent.includes(i) ? ind : 0)));
    if (block <= maxW) break;
    size *= Math.max(0.8, (maxW / block) * 0.99);
  }
  const lead = Math.min(size * 1.34, (bottom - top) / lines.length);
  const x0 = Math.max(w * 0.07, (w - block) / 2 - w * 0.02);
  const y0 = top + (bottom - top - lead * lines.length) / 2;
  ctx.fillStyle = ink; ctx.textBaseline = 'alphabetic';
  // title, a size smaller, with "from" in italics for an excerpt
  const ts = Math.max(6, Math.min(size * 0.86, h * 0.075));
  let tx = x0;
  if (poem.from) { ctx.font = `italic 400 ${ts}px ${SERIF_FONT}`; ctx.fillText('from', tx, y0 - ts * 0.55); tx += ctx.measureText('from ').width; }
  ctx.font = `700 ${ts}px ${SERIF_FONT}`;
  ctx.fillText(poem.title, tx, y0 - ts * 0.55, w * 0.92 - tx);
  ctx.font = `400 ${size}px ${SERIF_FONT}`;
  // (small type is thickened a little, or its hairlines vanish on tape)
  ctx.strokeStyle = ink; ctx.lineWidth = size < 15 ? size * 0.035 : 0;
  lines.forEach((ln, i) => {
    const x = x0 + (indent.includes(i) ? ind : 0), y = y0 + lead * (i + 0.78);
    ctx.fillText(ln, x, y);
    if (ctx.lineWidth > 0.1) ctx.strokeText(ln, x, y);
  });
  // the poet
  ctx.font = `italic 400 ${ts}px ${SERIF_FONT}`; ctx.textAlign = 'right';
  ctx.fillText(poem.credit, Math.min(w * 0.94, x0 + Math.max(block, w * 0.5)), Math.min(bandY - ts * 0.45, y0 + lead * lines.length + ts * 1.25), w * 0.86);
  ctx.textAlign = 'left';
  ctx.strokeStyle = 'rgba(20,25,40,0.35)'; ctx.lineWidth = 1; ctx.strokeRect(0.5, 0.5, w - 1, h - 1);
  if (r) grime(ctx, 0, 0, w, h, r.int(1, 99999), 0.35, false);
}
