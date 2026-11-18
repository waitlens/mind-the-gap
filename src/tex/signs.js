// Wayfinding signs. The genuine "Way out" sign follows one fixed standard
// (black sentence-case lettering on a yellow panel, one plain arrow); the
// station's false signs each break that standard in exactly one way.
import { SIGN } from '../config.js';
import { HEAD_FONT, BODY_FONT, fitText, drawArrow, shade } from './canvas.js';

// defect → what changes. `level` is how subtle it is (0 obvious … 2 subtle).
// Genuine signs are yellow and black (either way round), say "Way out" in
// sentence case in plain block lettering, and have one arrow.
export const WAYOUT_DEFECTS = {
  exit: { level: 0, text: 'Exit' },
  in: { level: 0, text: 'Way in' },
  question: { level: 0, text: 'Way out?' },
  no: { level: 0, text: 'No way out' },
  red: { level: 0, text: 'Way out', bg: '#b3261e', fg: SIGN.white },
  blue: { level: 1, text: 'Way out', bg: SIGN.blue, fg: SIGN.white },
  caps: { level: 1, text: 'WAY OUT' },
  mirror: { level: 1, text: 'Way out', mirror: true },
  arrow2: { level: 1, text: 'Way out', arrow2: true },
  pale: { level: 1, text: 'Way out', bg: '#cfe08a', fg: SIGN.black },
  serif: { level: 2, text: 'Way out', font: "Georgia, 'Times New Roman', serif" },
  title: { level: 2, text: 'Way Out' },
  cut: { level: 2, text: 'Way cut' },
  wav: { level: 2, text: 'Wav out' },
  oul: { level: 2, text: 'Way oul' },
  wide: { level: 2, text: 'Way  out' },
  flip: { level: 2, text: 'Way out', flipArrow: true },
};

// What the caption card says when the player reads the sign.
export function wayOutCaption(defect, dir, inverted = false) {
  const d = defect ? WAYOUT_DEFECTS[defect] : null;
  const arrow = { left: '←', right: '→', up: '↑', down: '↓' }[dir] || '';
  const text = d ? d.text : 'Way out';
  let note = inverted ? ' (yellow on black)' : ' (black on yellow)';
  if (d && d.bg === SIGN.blue) note = ' (white on blue)';
  else if (d && d.bg === '#b3261e') note = ' (white on red)';
  else if (d && d.bg) note = ' (black on pale green)';
  else if (d && d.mirror) note = ' (the lettering is back to front)';
  else if (d && d.arrow2) return `↔ ${text}`;
  else if (d && d.flipArrow) note = ' (the arrow points the other way)';
  else if (d && d.font) note = ' (the lettering has serifs)';
  return dir === 'left' ? `${arrow} ${text}${note}` : `${text} ${arrow}${note}`;
}

// dir: 'left' | 'right' | 'up'. Returns nothing; draws into (0,0,w,h).
// inverted: yellow lettering on black (the small plates in the frieze).
export function drawWayOut(ctx, w, h, { dir = 'up', defect = null, inverted = false } = {}) {
  const d = defect ? WAYOUT_DEFECTS[defect] : {};
  const bg = d.bg || (inverted ? SIGN.black : SIGN.yellow), fg = d.fg || (inverted ? SIGN.yellow : SIGN.black);
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  // back-lit panel: slightly brighter in the middle
  const g = ctx.createLinearGradient(0, 0, 0, h);
  g.addColorStop(0, 'rgba(0,0,0,0.10)'); g.addColorStop(0.5, 'rgba(255,255,255,0.10)'); g.addColorStop(1, 'rgba(0,0,0,0.12)');
  ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = shade('#222222', 0); ctx.lineWidth = Math.max(2, h * 0.04); ctx.strokeRect(1, 1, w - 2, h - 2);
  const text = d.text || 'Way out';
  const as = h * 0.56;                       // arrow size
  const arrowLeft = dir !== 'right';
  const ax = arrowLeft ? h * 0.52 : w - h * 0.52;
  const tx0 = arrowLeft ? h * 1.0 : h * 0.3, tx1 = arrowLeft ? w - h * 0.3 : w - h * 1.0;
  let adir = dir;
  if (d.flipArrow) adir = { left: 'right', right: 'left', up: 'down' }[dir];
  drawArrow(ctx, ax, h / 2, as, adir, fg);
  if (d.arrow2) drawArrow(ctx, ax, h / 2, as, { left: 'right', right: 'left', up: 'down' }[dir], fg);
  ctx.fillStyle = fg; ctx.textBaseline = 'middle';
  fitText(ctx, text, tx1 - tx0, h * 0.62, d.font || HEAD_FONT);
  ctx.save();
  if (d.mirror) {
    ctx.translate((tx0 + tx1) / 2, 0); ctx.scale(-1, 1); ctx.textAlign = 'center';
    ctx.fillText(text, 0, h * 0.53);
  } else {
    ctx.textAlign = arrowLeft ? 'left' : 'right';
    ctx.fillText(text, arrowLeft ? tx0 : tx1, h * 0.53);
  }
  ctx.restore();
}

// Platform frieze: a white enamel strip above the tiles with the station
// name in blue capitals and a small yellow-on-black "Way out" plate.
// opts: { arrow: 'left' | 'right' | null, note: small text at the far left }
export function drawFrieze(ctx, w, h, name, opts = {}) {
  ctx.fillStyle = '#f7f6ee'; ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#2b2d2f'; ctx.fillRect(0, 0, w, Math.max(1, h * 0.07)); ctx.fillRect(0, h - Math.max(1, h * 0.07), w, Math.max(1, h * 0.07));
  ctx.fillStyle = 'rgba(0,0,0,0.25)'; ctx.fillRect(w - 1, 0, 1, h);                 // joint between panels
  const pw = opts.arrow ? h * 2.7 : 0;
  ctx.fillStyle = '#0019a8'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  try { ctx.letterSpacing = `${(h * 0.035).toFixed(1)}px`; } catch { /* older browsers */ }
  fitText(ctx, name.toUpperCase(), (w - pw) * 0.62, h * 0.56, HEAD_FONT);
  ctx.fillText(name.toUpperCase(), (w - pw) * 0.5, h * 0.53);
  try { ctx.letterSpacing = '0px'; } catch { /* ignore */ }
  if (opts.note) { ctx.font = `400 ${h * 0.24}px ${BODY_FONT}`; ctx.textAlign = 'left'; ctx.fillText(opts.note, h * 0.3, h * 0.52); }
  if (opts.arrow) {
    ctx.save(); ctx.translate(w - pw - h * 0.25, h * 0.2);
    drawWayOut(ctx, pw, h * 0.6, { dir: opts.arrow, inverted: true });
    ctx.restore();
  }
}

// The station name fired into the wall tiles: dark serif capitals with
// centred dots between the words, on the cream tiling (seven courses high).
export function drawTiledName(ctx, w, h, name, theme) {
  const rows = 7, th = h / rows, tw = th * 3;
  ctx.fillStyle = theme.grout; ctx.fillRect(0, 0, w, h);
  for (let r = 0; r < rows; r++) {
    for (let x = (r % 2 ? -tw / 2 : 0); x < w; x += tw) {
      ctx.fillStyle = shade(theme.ground, ((r * 7 + Math.round(x / tw) * 13) % 9) / 100 - 0.05);
      ctx.fillRect(x + 0.5, r * th + 0.5, tw - 1, th - 1);
    }
  }
  const text = `\u00b7 ${name.toUpperCase().split(' ').join(' \u00b7 ')} \u00b7`;
  ctx.fillStyle = theme.letter || theme.skirt; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  const size = th * 5 * 1.36;                       // capitals five courses high
  ctx.font = `700 ${size}px Georgia, 'Times New Roman', serif`;
  const wt = ctx.measureText(text).width;
  ctx.save();
  ctx.translate(w / 2, h * 0.52);
  ctx.scale(Math.min(0.86, (w * 0.96) / wt), 1);    // the real letters are condensed
  ctx.fillText(text, 0, 0);
  ctx.restore();
  for (let r = 1; r < rows; r++) { ctx.fillStyle = 'rgba(255,255,255,0.10)'; ctx.fillRect(0, r * th, w, 1); }   // joints show through the glaze
}

// Small enamel plate: "Platform 2", "No exit", "Staff only"…
export function drawPlate(ctx, w, h, text, { bg = SIGN.blue, fg = SIGN.white, sub = '' } = {}) {
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = fg; ctx.lineWidth = Math.max(1.5, h * 0.03); ctx.strokeRect(h * 0.06, h * 0.06, w - h * 0.12, h - h * 0.12);
  ctx.fillStyle = fg; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  fitText(ctx, text, w * 0.84, h * (sub ? 0.4 : 0.52), HEAD_FONT);
  ctx.fillText(text, w / 2, h * (sub ? 0.38 : 0.53));
  if (sub) { fitText(ctx, sub, w * 0.84, h * 0.22, BODY_FONT); ctx.fillText(sub, w / 2, h * 0.72); }
}

// Tiled legend in the Leslie Green style: dark letters fired into cream
// tiles inside a coloured tile frame, with a comet-tailed arrow.
export function drawTileLegend(ctx, w, h, text, theme, dir = null) {
  ctx.fillStyle = theme.ground; ctx.fillRect(0, 0, w, h);
  const tw = h / 5;
  ctx.strokeStyle = theme.grout; ctx.lineWidth = 1;
  for (let x = 0; x < w; x += tw * 2.4) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke(); }
  for (let y = 0; y < h; y += tw) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke(); }
  ctx.strokeStyle = theme.band; ctx.lineWidth = tw * 0.55; ctx.strokeRect(tw * 0.3, tw * 0.3, w - tw * 0.6, h - tw * 0.6);
  ctx.fillStyle = theme.skirt; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  const room = dir ? w * 0.6 : w * 0.8;
  fitText(ctx, text, room, h * 0.42, HEAD_FONT);
  const cx = dir === 'left' ? w * 0.6 : dir === 'right' ? w * 0.4 : w / 2;
  ctx.fillText(text, cx, h * 0.53);
  if (dir) {
    const ax = dir === 'left' ? w * 0.17 : w * 0.83, s = dir === 'left' ? -1 : 1;
    ctx.beginPath(); // comet tail: a tapering wedge behind the arrow head
    ctx.moveTo(ax - s * h * 0.42, h * 0.5); ctx.lineTo(ax + s * h * 0.05, h * 0.42); ctx.lineTo(ax + s * h * 0.05, h * 0.58); ctx.closePath(); ctx.fill();
    ctx.beginPath();
    ctx.moveTo(ax + s * h * 0.2, h * 0.5); ctx.lineTo(ax - s * h * 0.02, h * 0.3); ctx.lineTo(ax - s * h * 0.02, h * 0.7); ctx.closePath(); ctx.fill();
  }
}
