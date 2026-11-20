// Painted lettering, notices and fittings of the deep-level shelter. The
// directions ("Underhill Street entrance", "Buck Street entrance"), the map
// heading ("Camden Town deep shelter") and the Ministry of Works' warning
// about smoking are recorded at the real shelter (REFERENCES.md); their exact
// layouts, and the shelterers' rules, are written here in the manner of the
// time. Everything is drawn from type and shapes.
import { HEAD_FONT, BODY_FONT, fitText, wrapLines, drawArrow, grime } from './canvas.js';

// A bunk seen from above or below: angle-iron frame, diamond wire mesh you
// can see through (the sheet layer is alpha-tested).
export function drawBunkMesh(c, w, h) {
  c.clearRect(0, 0, w, h);
  c.strokeStyle = '#3d3f3c'; c.lineWidth = 1.3;
  const step = h / 5;
  c.save(); c.beginPath(); c.rect(2, 2, w - 4, h - 4); c.clip();
  for (let x = -h; x < w + h; x += step) {
    c.beginPath(); c.moveTo(x, 0); c.lineTo(x + h, h); c.stroke();
    c.beginPath(); c.moveTo(x + h, 0); c.lineTo(x, h); c.stroke();
  }
  c.restore();
  c.strokeStyle = '#4a2a22'; c.lineWidth = 5; c.strokeRect(2.5, 2.5, w - 5, h - 5);          // red-oxide frame
  c.strokeStyle = 'rgba(255,220,190,0.18)'; c.lineWidth = 1; c.strokeRect(1.5, 1.5, w - 3, h - 3);
  c.fillStyle = '#4a2a22'; c.fillRect(w / 2 - 2, 0, 4, h);                                   // cross member
}

// Railings round the stair-head, and the chain across it.
export function drawRailing(c, w, h) {
  c.clearRect(0, 0, w, h);
  c.fillStyle = '#2f3330';
  c.fillRect(0, 0, w, h * 0.07); c.fillRect(0, h * 0.5, w, h * 0.05);
  for (let i = 0; i <= 8; i++) c.fillRect((w - 4) * (i / 8), 0, i % 4 === 0 ? 5 : 2.5, h);
}

// Black stencilled lettering straight on the paintwork. arrow: 'left' | 'right' | null.
export function drawStencil(c, w, h, text, arrow = null) {
  c.clearRect(0, 0, w, h);
  c.fillStyle = 'rgba(214,206,180,0.92)'; c.fillRect(0, 0, w, h);                            // a patch of fresher paint
  c.fillStyle = '#1b1a17'; c.textBaseline = 'middle'; c.textAlign = 'center';
  const aw = arrow ? h * 0.9 : 0;
  const size = fitText(c, text, w - aw - h * 0.5, h * 0.62, BODY_FONT, 700);
  const cx = arrow === 'left' ? (w + aw) / 2 : arrow === 'right' ? (w - aw) / 2 : w / 2;
  c.fillText(text, cx, h * 0.54);
  // the bridges of a stencil: thin unpainted bars through the letters
  c.fillStyle = 'rgba(214,206,180,0.95)';
  const tw = c.measureText(text).width;
  for (let x = cx - tw / 2 + size * 0.33; x < cx + tw / 2; x += size * 0.62) c.fillRect(x, h * 0.54 - size * 0.08, 1.3, size * 0.5);
  if (arrow) drawArrow(c, arrow === 'left' ? aw * 0.55 : w - aw * 0.55, h / 2, h * 0.6, arrow, '#1b1a17');
  grime(c, 0, 0, w, h, text.length * 31 + 5, 0.7, false);
}

// White enamel direction plate, black letters and arrow.
export function drawEnamel(c, w, h, text, arrow = null) {
  c.fillStyle = '#ecebe2'; c.fillRect(0, 0, w, h);
  c.strokeStyle = '#161616'; c.lineWidth = Math.max(2, h * 0.06); c.strokeRect(2, 2, w - 4, h - 4);
  c.fillStyle = '#161616'; c.textBaseline = 'middle'; c.textAlign = 'center';
  const aw = arrow ? h * 1.0 : 0;
  fitText(c, text.toUpperCase(), w - aw - h * 0.6, h * 0.5, HEAD_FONT);
  c.fillText(text.toUpperCase(), arrow === 'left' ? (w + aw) / 2 : arrow === 'right' ? (w - aw) / 2 : w / 2, h * 0.55);
  if (arrow) drawArrow(c, arrow === 'left' ? aw * 0.6 : w - aw * 0.6, h / 2, h * 0.62, arrow, '#161616');
  for (const [x, y] of [[0.03, 0.14], [0.97, 0.14], [0.03, 0.86], [0.97, 0.86]]) { c.fillStyle = '#8b8a80'; c.beginPath(); c.arc(w * x, h * y, 2, 0, 7); c.fill(); }
  grime(c, 0, 0, w, h, text.length * 17 + 3, 0.6, false);
}

// A typed and printed notice on yellowed paper. lines: [heading, sub, body…]
export function drawPaperNotice(c, w, h, head, sub, body, foot) {
  c.fillStyle = '#e4dcc0'; c.fillRect(0, 0, w, h);
  c.strokeStyle = '#2a2620'; c.lineWidth = 1.5; c.strokeRect(4, 4, w - 8, h - 8);
  c.fillStyle = '#1d1a15'; c.textAlign = 'center'; c.textBaseline = 'alphabetic';
  fitText(c, head, w * 0.84, h * 0.085, HEAD_FONT); c.fillText(head, w / 2, h * 0.13);
  c.fillRect(w * 0.2, h * 0.155, w * 0.6, 1.2);
  fitText(c, sub, w * 0.84, h * 0.12, HEAD_FONT); c.fillText(sub, w / 2, h * 0.29);
  let size = h * 0.062, lines;
  for (;;) {
    c.font = `400 ${size}px ${BODY_FONT}`;
    lines = body.flatMap((t) => wrapLines(c, t, w * 0.8).concat(['']));
    if (lines.length * size * 1.2 < h * 0.5 || size < 5) break;
    size *= 0.93;
  }
  c.textAlign = 'left';
  lines.forEach((ln, i) => c.fillText(ln, w * 0.1, h * 0.39 + i * size * 1.2));
  c.textAlign = 'right'; c.font = `700 ${h * 0.05}px ${BODY_FONT}`; c.fillText(foot, w * 0.9, h * 0.94);
  grime(c, 0, 0, w, h, head.length * 7 + 11, 1.0, true);
}

// The plan of the shelter that hangs on the wall: two parallel tunnels,
// cross-passages, a shaft at either end, the sections lettered.
export function drawShelterMap(c, w, h, here) {
  c.fillStyle = '#e6dfc6'; c.fillRect(0, 0, w, h);
  c.strokeStyle = '#2a2620'; c.lineWidth = 1.5; c.strokeRect(3, 3, w - 6, h - 6);
  c.fillStyle = '#1d1a15'; c.textAlign = 'center'; c.textBaseline = 'alphabetic';
  fitText(c, 'CAMDEN TOWN DEEP SHELTER', w * 0.86, h * 0.12, HEAD_FONT); c.fillText('CAMDEN TOWN DEEP SHELTER', w / 2, h * 0.16);
  const x0 = w * 0.1, x1 = w * 0.9, ya = h * 0.42, yb = h * 0.66, th = h * 0.085;
  c.fillStyle = '#c9c0a2';
  for (const y of [ya, yb]) c.fillRect(x0, y - th / 2, x1 - x0, th);
  for (const f of [0.25, 0.5, 0.75, 1]) c.fillRect(x0 + (x1 - x0) * f - (f === 1 ? th * 0.6 : th * 0.3), ya, th * 0.6, yb - ya);     // cross-passages
  c.strokeStyle = '#1d1a15'; c.lineWidth = 1;
  for (const y of [ya, yb]) c.strokeRect(x0, y - th / 2, x1 - x0, th);
  c.font = `700 ${h * 0.055}px ${BODY_FONT}`;
  'ABCDEFGH'.split('').forEach((s, i) => {
    const x = x0 + (x1 - x0) * ((i % 4) + 0.5) / 4, y = i < 4 ? ya : yb;
    if (s === here) { c.fillStyle = '#a3261c'; c.fillRect(x - th * 0.9, y - th / 2 + 1, th * 1.8, th - 2); c.fillStyle = '#fff'; } else c.fillStyle = '#1d1a15';
    c.fillText(s, x, y + h * 0.02);
  });
  c.fillStyle = '#1d1a15';
  for (const [x, label] of [[x0, 'UNDERHILL ST.'], [x1, 'BUCK ST.']]) {                       // the two shafts
    c.beginPath(); c.arc(x, (ya + yb) / 2, th * 0.75, 0, 7); c.fill();
    c.font = `700 ${h * 0.05}px ${BODY_FONT}`; c.fillText(label, Math.min(w * 0.82, Math.max(w * 0.18, x)), h * 0.86);
  }
  c.font = `400 ${h * 0.045}px ${BODY_FONT}`; c.fillText('UPPER AND LOWER DECKS · 8,000 BUNKS', w / 2, h * 0.27);
  grime(c, 0, 0, w, h, 77, 0.9, true);
}

// A wall telephone in a wooden case: bell gongs, hook, handset, cranked handle.
export function drawTelephone(c, w, h) {
  c.clearRect(0, 0, w, h);
  c.fillStyle = '#4a2f1b'; c.fillRect(w * 0.14, h * 0.06, w * 0.72, h * 0.88);
  c.fillStyle = 'rgba(255,220,170,0.12)'; c.fillRect(w * 0.14, h * 0.06, w * 0.72, 3);
  c.fillStyle = '#17150f';
  for (const fx of [0.36, 0.64]) { c.beginPath(); c.arc(w * fx, h * 0.2, w * 0.11, 0, 7); c.fill(); }      // gongs
  c.fillRect(w * 0.26, h * 0.42, w * 0.48, h * 0.06);                                                       // cradle
  c.fillStyle = '#0d0c0a'; c.beginPath(); c.roundRect(w * 0.02, h * 0.34, w * 0.2, h * 0.5, 6); c.fill();   // handset on its hook
  c.fillRect(w * 0.84, h * 0.5, w * 0.12, h * 0.05); c.beginPath(); c.arc(w * 0.95, h * 0.525, w * 0.05, 0, 7); c.fill();   // crank
  c.fillStyle = '#d8cfae'; c.fillRect(w * 0.3, h * 0.6, w * 0.4, h * 0.2);                                  // card: who to ring
  c.fillStyle = '#1d1a15'; c.font = `700 ${h * 0.05}px ${BODY_FONT}`; c.textAlign = 'center'; c.textBaseline = 'middle';
  c.fillText('WARDEN', w / 2, h * 0.66); c.fillText('1 RING', w / 2, h * 0.74);
}
