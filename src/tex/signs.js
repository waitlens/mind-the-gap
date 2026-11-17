// Wayfinding signs. The genuine "Way out" sign follows one fixed standard
// (black sentence-case lettering on a yellow panel, one plain arrow); the
// station's false signs each break that standard in exactly one way.
import { SIGN } from '../config.js';
import { HEAD_FONT, BODY_FONT, fitText, drawArrow, shade } from './canvas.js';

// defect → what changes. `level` is how subtle it is (0 obvious … 2 subtle).
export const WAYOUT_DEFECTS = {
  in: { level: 0, text: 'Way in' },
  question: { level: 0, text: 'Way out?' },
  blue: { level: 0, text: 'Way out', bg: SIGN.blue, fg: SIGN.white },
  no: { level: 0, text: 'No way out' },
  invert: { level: 1, text: 'Way out', bg: SIGN.black, fg: SIGN.yellow },
  caps: { level: 1, text: 'WAY OUT' },
  mirror: { level: 1, text: 'Way out', mirror: true },
  arrow2: { level: 1, text: 'Way out', arrow2: true },
  pale: { level: 1, text: 'Way out', bg: '#cfe08a' },
  title: { level: 2, text: 'Way Out' },
  cut: { level: 2, text: 'Way cut' },
  wav: { level: 2, text: 'Wav out' },
  oul: { level: 2, text: 'Way oul' },
  wide: { level: 2, text: 'Way  out' },
  flip: { level: 2, text: 'Way out', flipArrow: true },
};

// What the caption card says when the player reads the sign.
export function wayOutCaption(defect, dir) {
  const d = defect ? WAYOUT_DEFECTS[defect] : null;
  const arrow = { left: '←', right: '→', up: '↑', down: '↓' }[dir] || '';
  const text = d ? d.text : 'Way out';
  let note = '';
  if (d && d.bg === SIGN.blue) note = ' (white on blue)';
  else if (d && d.bg === SIGN.black) note = ' (yellow on black)';
  else if (d && d.bg) note = ' (pale green)';
  else if (d && d.mirror) note = ' (the lettering is back to front)';
  else if (d && d.arrow2) return `↔ ${text}`;
  else if (d && d.flipArrow) note = ' (the arrow points the other way)';
  else note = d ? '' : ' (black on yellow)';
  return dir === 'left' ? `${arrow} ${text}${note}` : `${text} ${arrow}${note}`;
}

// dir: 'left' | 'right' | 'up'. Returns nothing; draws into (0,0,w,h).
export function drawWayOut(ctx, w, h, { dir = 'up', defect = null } = {}) {
  const d = defect ? WAYOUT_DEFECTS[defect] : {};
  const bg = d.bg || SIGN.yellow, fg = d.fg || SIGN.black;
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
  fitText(ctx, text, tx1 - tx0, h * 0.62, HEAD_FONT);
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

// White-on-blue direction sign with a line-colour strip:  "Tallow line →"
export function drawDirection(ctx, w, h, { text, sub = '', dir = 'up', color = '#888' } = {}) {
  ctx.fillStyle = SIGN.blue; ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = color; ctx.fillRect(0, h * 0.82, w, h * 0.18);
  ctx.fillStyle = 'rgba(255,255,255,0.85)'; ctx.fillRect(0, h * 0.8, w, Math.max(1, h * 0.02));
  const arrowLeft = dir !== 'right';
  const as = h * 0.46, ax = arrowLeft ? h * 0.5 : w - h * 0.5;
  drawArrow(ctx, ax, h * 0.4, as, dir, SIGN.white);
  const tx0 = arrowLeft ? h * 0.95 : h * 0.3, tx1 = arrowLeft ? w - h * 0.3 : w - h * 0.95;
  ctx.fillStyle = SIGN.white; ctx.textBaseline = 'middle'; ctx.textAlign = arrowLeft ? 'left' : 'right';
  const size = fitText(ctx, text, tx1 - tx0, h * (sub ? 0.36 : 0.46), HEAD_FONT);
  ctx.fillText(text, arrowLeft ? tx0 : tx1, h * (sub ? 0.28 : 0.41));
  if (sub) {
    ctx.font = `400 ${Math.min(size * 0.62, h * 0.22)}px ${BODY_FONT}`;
    ctx.fillText(sub, arrowLeft ? tx0 : tx1, h * 0.6, tx1 - tx0);
  }
}

// Platform frieze: a continuous line-coloured strip carrying the station name.
export function drawFrieze(ctx, w, h, name, color, repeats = 2) {
  ctx.fillStyle = SIGN.white; ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = color; ctx.fillRect(0, h * 0.14, w, h * 0.72);
  ctx.fillStyle = '#fff'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.font = `400 ${h * 0.5}px ${HEAD_FONT}`;
  const light = ['#f2c500', '#f3a9bb', '#8f979c'].includes(color);
  ctx.fillStyle = light ? '#14213d' : '#fff';
  for (let i = 0; i < repeats; i++) ctx.fillText(name.toUpperCase(), (w * (i + 0.5)) / repeats, h * 0.52, (w / repeats) * 0.9);
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
