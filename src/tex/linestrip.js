// The whole Northern line as one long horizontal strip (north on the left),
// in the manner of the in-car line diagrams: every station a tick, every
// interchange a ring, both northern branches, both central branches and
// both southern ends — and a marker for where you are.
// Also the platform direction sign ("Northbound platform 1").
import { HEAD_FONT, BODY_FONT, fitText, drawArrow } from './canvas.js';
import { SECTIONS, SPUR, INTERCHANGE, dirWord, platformNo } from '../game/line.js';

const INK = '#16213f', BOX = '#1c3f94', PANEL = '#f6f6f1';

// Label leaning away from its tick: up-right above the line, down-right below.
function label(ctx, name, x, y, up, size, o = {}) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(up ? -0.87 : 0.87);          // ≈ 50°
  ctx.font = `400 ${size}px ${HEAD_FONT}`;
  ctx.textBaseline = 'middle'; ctx.textAlign = 'left';
  const words = name.split(' ');
  let lines = [name];
  if (name.length > 12 && words.length > 1) {
    let best = 1, bd = Infinity;
    for (let k = 1; k < words.length; k++) {
      const d = Math.abs(words.slice(0, k).join(' ').length - words.slice(k).join(' ').length);
      if (d < bd) { bd = d; best = k; }
    }
    lines = [words.slice(0, best).join(' '), words.slice(best).join(' ')];
  }
  const dx = size * 0.9;
  if (o.current) {
    const wt = Math.max(...lines.map((l) => ctx.measureText(l).width));
    ctx.fillStyle = BOX; ctx.fillRect(dx - size * 0.35, -size * 0.62 * lines.length, wt + size * 0.7, size * 1.24 * lines.length);
  }
  ctx.fillStyle = o.current ? '#fff' : o.odd ? '#7a0f18' : INK;
  lines.forEach((l, k) => ctx.fillText(l, dx, (k - (lines.length - 1) / 2) * size * 1.05));
  ctx.restore();
}

// opts: { current: station name, ghosts: [[name, a, b], …] drawn as extra ticks }
export function drawStrip(ctx, w, h, opts = {}) {
  const { edgware, barnet, charingX, bank, morden, battersea } = SECTIONS;
  ctx.fillStyle = PANEL; ctx.fillRect(0, 0, w, h);
  const fr = Math.max(2, h * 0.03);
  ctx.strokeStyle = '#5f6467'; ctx.lineWidth = fr; ctx.strokeRect(fr / 2, fr / 2, w - fr, h - fr);
  // title block (bottom right, where the diagram is empty)
  ctx.fillStyle = '#000'; ctx.fillRect(w * 0.845, h * 0.7, w * 0.14, h * 0.2);
  ctx.fillStyle = '#fff'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  fitText(ctx, 'Northern line', w * 0.125, h * 0.12, HEAD_FONT);
  ctx.fillText('Northern line', w * 0.915, h * 0.805);

  // columns: the northern branches end at Camden Town (column 10), then the
  // Charing Cross branch, Kennington (20) and the Morden branch
  const cCam = barnet.length, cKen = cCam + 1 + charingX.length, cols = cKen + 1 + morden.length;   // 32
  const x0 = w * 0.03, dx = (w * 0.925) / (cols - 1);
  const X = (c) => x0 + c * dx;
  const yU = h * 0.44, yD = h * 0.57, r = Math.max(2, h * 0.022), size = h * 0.054, lw = Math.max(2, h * 0.022);
  const path = (pts) => { ctx.strokeStyle = '#000'; ctx.lineWidth = lw; ctx.lineJoin = 'round'; ctx.beginPath(); pts.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.stroke(); };
  const xe = (i) => X(i + 1);                                                 // Edgware branch (nine stations)
  const xb = (i) => X(i * 0.93);                                              // High Barnet branch (ten)
  path([[xe(0), yU], [X(cols - 1), yU]]);
  path([[xb(0), yD], [X(cCam) - dx * 0.75, yD], [X(cCam), yU]]);
  path([[X(cCam), yU], [X(cCam) + dx * 0.75, yD], [X(cKen) - dx * 0.75, yD], [X(cKen), yU]]);
  path([[X(cKen), yU], [X(cKen) + dx * 0.75, yD], [X(cKen + 2), yD]]);
  // Mill Hill East: a stub up into the gap between the two northern branches
  const spurX = xb(barnet.indexOf(SPUR.at)), spurY = (yU + yD) / 2;
  path([[spurX, yD], [spurX + dx * 0.3, spurY]]);
  path([[spurX + dx * 0.3 - r, spurY], [spurX + dx * 0.3 + r, spurY]]);
  ctx.fillStyle = INK; ctx.textAlign = 'left'; ctx.textBaseline = 'middle'; ctx.font = `400 ${size * 0.82}px ${HEAD_FONT}`;
  ctx.fillText(SPUR.name, spurX + dx * 0.3 + r * 1.8, spurY);

  const cur = opts.current;
  const stop = (name, x, y, up, o = {}) => {
    const big = !!INTERCHANGE[name] || name === cur || name === 'Camden Town' || name === 'Kennington';
    ctx.strokeStyle = '#000'; ctx.lineWidth = lw * 0.7;
    if (big) {
      ctx.fillStyle = name === cur ? BOX : '#fff'; ctx.beginPath(); ctx.arc(x, y, r * 1.35, 0, 7); ctx.fill(); ctx.stroke();
    } else { ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x, y + (up ? -r * 1.6 : r * 1.6)); ctx.stroke(); }
    label(ctx, name, x, y + (up ? -r * 2.2 : r * 2.2), up, size, { current: name === cur, odd: o.odd });
  };
  edgware.forEach((n, i) => stop(n, xe(i), yU, true));
  stop('Camden Town', X(cCam), yU, true);
  charingX.forEach((n, i) => stop(n, X(cCam + 1 + i), yU, true));
  stop('Kennington', X(cKen), yU, true);
  morden.forEach((n, i) => stop(n, X(cKen + 1 + i), yU, true));
  barnet.forEach((n, i) => stop(n, xb(i), yD, false));
  bank.forEach((n, i) => stop(n, X(cCam + 1 + i * 0.94 + 0.2), yD, false));
  battersea.forEach((n, i) => stop(n, X(cKen + 1 + i), yD, false));
  // stations that should not be there
  for (const [name, a] of opts.ghosts || []) {
    const ie = edgware.indexOf(a), ib = barnet.indexOf(a), ik = bank.indexOf(a);
    if (ie >= 0) stop(name, xe(ie + 0.5), yU, true, { odd: true });
    else if (ib >= 0) stop(name, xb(ib + 0.5), yD, false, { odd: true });
    else if (ik >= 0) stop(name, X(cCam + 1 + (ik + 0.5) * 0.94 + 0.2), yD, false, { odd: true });
  }
  // "You are here"
  const all = [[edgware, xe], [['Camden Town'], () => X(cCam)], [charingX, (i) => X(cCam + 1 + i)]];
  for (const [list, fx] of all) {
    const i = list.indexOf(cur);
    if (i < 0) continue;
    const x = fx(i);
    ctx.fillStyle = BOX; ctx.beginPath(); ctx.moveTo(x, yU + r * 2.2); ctx.lineTo(x - r * 1.6, yU + r * 4.6); ctx.lineTo(x + r * 1.6, yU + r * 4.6); ctx.fill();
    ctx.fillRect(x - size * 3.4, yU + r * 4.5, size * 6.8, size * 1.5);
    ctx.fillStyle = '#fff'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.font = `400 ${size}px ${HEAD_FONT}`;
    ctx.fillText('You are here', x, yU + r * 4.5 + size * 0.8);
  }
}

// White direction sign with the line's black stripe:
//   Northern line / Northbound platform 1 →   (+ the principal stations served)
export function drawPlatformSign(ctx, w, h, { dir = 'north', arrow = 'right', list = '' } = {}) {
  ctx.fillStyle = PANEL; ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#000'; ctx.fillRect(0, 0, w, h * 0.24);
  ctx.fillStyle = '#fff'; ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
  ctx.font = `400 ${h * 0.15}px ${HEAD_FONT}`;
  ctx.fillText('Northern line', h * 0.16, h * 0.13);
  const left = arrow !== 'right';
  drawArrow(ctx, left ? h * 0.42 : w - h * 0.42, h * 0.58, h * 0.42, arrow, INK);
  const tx0 = left ? h * 0.8 : h * 0.16, tx1 = left ? w - h * 0.16 : w - h * 0.8;
  const text = `${dirWord(dir)} platform ${platformNo(dir)}`;
  ctx.fillStyle = INK; ctx.textAlign = left ? 'left' : 'right';
  fitText(ctx, text, tx1 - tx0, h * (list ? 0.3 : 0.36), HEAD_FONT);
  ctx.fillText(text, left ? tx0 : tx1, h * (list ? 0.5 : 0.6));
  if (list) { fitText(ctx, list, tx1 - tx0, h * 0.14, BODY_FONT); ctx.fillText(list, left ? tx0 : tx1, h * 0.8); }
  ctx.strokeStyle = '#5f6467'; ctx.lineWidth = Math.max(1.5, h * 0.03); ctx.strokeRect(1, 1, w - 2, h - 2);
}
