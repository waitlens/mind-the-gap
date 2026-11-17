// The platform line diagram, after the ones on the track-side wall at
// Camden Town and Kennington: header ("Northern line" / "Southbound platform
// 2"), then a vertical black line with a tick per station, a circle at each
// interchange, this station in a blue box, line-colour bars beside the
// interchange names and the branches side by side.
import { HEAD_FONT, BODY_FONT, fitText } from './canvas.js';
import { INTERCHANGE, LINE_COLORS, dirWord, platformNo } from '../game/line.js';

const INK = '#16213f', BOX = '#1c3f94', PANEL = '#f6f6f1';

// rows a list of sections needs (a split needs a row of elbows before it,
// and one after it when the branches rejoin)
function countRows(sections) {
  let n = 0;
  for (const s of sections) n += s.type === 'trunk' ? s.stations.length : Math.max(s.left.length, s.right.length) + (s.rejoin ? 1 : 0) + (s.spur ? 0.6 : 0);
  return n;
}

function interchangeMarks(ctx, name, x, y, side, u, lo, hi) {
  const lines = INTERCHANGE[name];
  if (!lines) return;
  let px = x;
  for (const l of lines.slice(0, 5)) {
    const bw = l === 'rail' ? u * 1.5 : u * 2.0, bh = u * 0.62;
    const bx = side < 0 ? px - bw : px;
    if (bx < lo || bx + bw > hi) break;          // no room left on the panel
    if (l === 'rail') {             // National Rail: the red double arrow, simplified
      ctx.strokeStyle = LINE_COLORS.rail; ctx.lineWidth = Math.max(1, u * 0.2); ctx.lineJoin = 'miter';
      ctx.beginPath();
      ctx.moveTo(bx, y - bh * 0.42); ctx.lineTo(bx + bw, y - bh * 0.42); ctx.lineTo(bx, y + bh * 0.42); ctx.lineTo(bx + bw, y + bh * 0.42);
      ctx.stroke();
    } else {
      ctx.fillStyle = LINE_COLORS[l]; ctx.fillRect(bx, y - bh / 2, bw, bh);
    }
    px += side * (bw + u * 0.45);
  }
}

// One station: tick or circle on the line at (x, y) and its label on `side`.
function station(ctx, name, x, y, side, u, o = {}) {
  const lw = Math.max(2, u * 0.42);
  const inter = !!INTERCHANGE[name] || o.circle;
  ctx.strokeStyle = '#000'; ctx.fillStyle = '#000'; ctx.lineWidth = lw;
  if (o.terminus) { ctx.beginPath(); ctx.moveTo(x - u * 0.7, y); ctx.lineTo(x + u * 0.7, y); ctx.stroke(); }
  if (inter) {
    ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(x, y, u * 0.55, 0, 7); ctx.fill();
    ctx.lineWidth = Math.max(1.5, u * 0.26); ctx.beginPath(); ctx.arc(x, y, u * 0.55, 0, 7); ctx.stroke();
  } else if (!o.terminus) {
    ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + side * u * 0.85, y); ctx.stroke();
  }
  const tx = x + side * u * 1.35;
  ctx.textAlign = side < 0 ? 'right' : 'left'; ctx.textBaseline = 'middle';
  // long names go on two lines, as on the real diagrams ("King's Cross / St. Pancras")
  let lines = [name];
  if (name.length > 17 && name.includes(' ')) {
    const words = name.split(' ');
    let best = 1, bd = Infinity;
    for (let i = 1; i < words.length; i++) {
      const d = Math.abs(words.slice(0, i).join(' ').length - words.slice(i).join(' ').length);
      if (d < bd) { bd = d; best = i; }
    }
    lines = [words.slice(0, best).join(' '), words.slice(best).join(' ')];
  }
  let size = u * (lines.length > 1 ? 1.0 : 1.18);
  const room = (o.room || 1e9) - u * 1.5;
  ctx.font = `400 ${size}px ${HEAD_FONT}`;
  let wText = Math.max(...lines.map((l) => ctx.measureText(l).width));
  if (wText > room) { size *= room / wText; ctx.font = `400 ${size}px ${HEAD_FONT}`; wText = room; }
  const dy = lines.length > 1 ? size * 0.52 : 0;
  if (o.current) {
    const bx = side < 0 ? tx - wText - u * 0.5 : tx - u * 0.5;
    const bh = lines.length > 1 ? u * 2.5 : u * 1.8;
    ctx.fillStyle = BOX; ctx.fillRect(bx, y - bh / 2, wText + u, bh);
    ctx.fillStyle = '#fff';
  } else ctx.fillStyle = o.odd ? '#5a0d14' : INK;
  if (!(o.current && o.blank)) lines.forEach((l, i) => ctx.fillText(l, tx, y + u * 0.06 + (lines.length > 1 ? (i ? dy : -dy) : 0)));
  interchangeMarks(ctx, name, tx + side * (wText + u * (o.current ? 1.1 : 0.7)), y, side, u, o.lo ?? -1e9, o.hi ?? 1e9);
}

// sections: from route(); opts: { station, dir, odd: Set of names drawn in the wrong ink }
export function drawLineDiagram(ctx, w, h, sections, opts = {}) {
  ctx.fillStyle = PANEL; ctx.fillRect(0, 0, w, h);
  const fr = Math.max(3, w * 0.022);
  ctx.strokeStyle = '#5f6467'; ctx.lineWidth = fr; ctx.strokeRect(fr / 2, fr / 2, w - fr, h - fr);
  const m = w * 0.075;
  ctx.fillStyle = INK; ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
  ctx.font = `400 ${h * 0.03}px ${BODY_FONT}`;
  ctx.fillText('Northern line', m, h * 0.052);
  fitText(ctx, `${dirWord(opts.dir)} platform ${platformNo(opts.dir)}`, w - m * 2, h * 0.047, HEAD_FONT);
  ctx.fillText(`${dirWord(opts.dir)} platform ${platformNo(opts.dir)}`, m, h * 0.102);
  ctx.strokeStyle = '#9aa0a3'; ctx.lineWidth = Math.max(1, h * 0.003);
  ctx.beginPath(); ctx.moveTo(m, h * 0.128); ctx.lineTo(w - m, h * 0.128); ctx.stroke();

  const y0 = h * 0.17, y1 = h * 0.965;
  const rows = countRows(sections);
  const rh = Math.min(h * 0.052, (y1 - y0) / Math.max(1, rows));
  const u = Math.min(rh * 0.6, w * 0.03);           // layout unit ≈ half a text line
  const xL = w * 0.37, xR = w * 0.57;
  const roomL = xL - w * 0.05, roomR = w * 0.95 - xR;
  const lw = Math.max(2, u * 0.42);
  const line = (pts) => { ctx.strokeStyle = '#000'; ctx.lineWidth = lw; ctx.lineJoin = 'round'; ctx.lineCap = 'butt'; ctx.beginPath(); pts.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.stroke(); };
  const odd = opts.odd || new Set();
  let y = y0 + rh * 0.5, first = true;
  const onlyTrunk = sections.length === 1;
  sections.forEach((s, si) => {
    const next = sections[si + 1];
    if (s.type === 'trunk') {
      const side = onlyTrunk || si > 0 ? 1 : -1;      // labels left before a fork, right after one
      const prev = sections[si - 1];
      const ya = prev && prev.rejoin ? y - rh : y, yb = y + rh * (s.stations.length - 1);
      line([[xL, ya], [xL, next ? yb + rh * 0.5 : yb]]);
      s.stations.forEach((name, i) => {
        const cur = first && i === 0;
        station(ctx, name, xL, y, side, u, { current: cur, blank: cur && s.hideCurrent, circle: cur, terminus: !next && i === s.stations.length - 1, odd: odd.has(name), room: side < 0 ? roomL : w * 0.95 - xL, lo: w * 0.045, hi: w * 0.955 });
        y += rh;
      });
      first = false;
    } else {
      const n = Math.max(s.left.length, s.right.length);
      const top = y - rh * 0.5, yEnd = y + rh * (n - 1);
      const lEnd = y + rh * (s.left.length - 1), rEnd = y + rh * (s.right.length - 1);
      // fork: the right-hand branch leaves the line with a rounded elbow
      line([[xL, top], [xL, s.rejoin ? yEnd + rh : lEnd]]);
      line([[xL, top], [xL + u * 0.8, top + rh * 0.12], [xR - u * 0.8, top + rh * 0.12], [xR, top + rh * 0.45], [xR, s.rejoin ? yEnd + rh * 0.45 : rEnd]]);
      if (s.rejoin) line([[xR, yEnd + rh * 0.45], [xR - u * 0.8, yEnd + rh * 0.82], [xL + u * 0.8, yEnd + rh * 0.82], [xL, yEnd + rh]]);
      s.left.forEach((name, i) => station(ctx, name, xL, y + rh * i, -1, u, { terminus: !s.rejoin && i === s.left.length - 1, odd: odd.has(name), room: roomL, lo: w * 0.045, hi: w * 0.955 }));
      s.right.forEach((name, i) => station(ctx, name, xR, y + rh * i, 1, u, { terminus: !s.rejoin && i === s.right.length - 1, odd: odd.has(name), room: roomR, lo: w * 0.045, hi: w * 0.955 }));
      if (s.spur && s.left.includes(s.spur.at)) {        // Mill Hill East: a stub into the gap between the branches
        const sy = y + rh * s.left.indexOf(s.spur.at), ex = (xL + xR) / 2;
        line([[xL, sy + rh * 0.5], [ex - u * 0.6, sy + rh * 0.5], [ex, sy + rh * 0.68], [ex, sy + rh * 1.0]]);
        line([[ex - u * 0.7, sy + rh * 1.0], [ex + u * 0.7, sy + rh * 1.0]]);
        ctx.fillStyle = INK; ctx.textAlign = 'center'; ctx.textBaseline = 'top'; ctx.font = `400 ${u * 0.95}px ${HEAD_FONT}`;
        s.spur.name.replace(' East', '\nEast').split('\n').forEach((t, i) => ctx.fillText(t, ex, sy + rh * 1.12 + i * u * 1.05));
      }
      y = yEnd + rh * (s.rejoin ? 2 : 1);
    }
  });
}
