// Fittings of the emergency stairs at Hampstead, after the photograph and
// the description in REFERENCES.md: black modern treads with a yellow
// nosing, mesh panels in white-painted frames round the central pillar, the
// white plate that says how many steps there are, the green "Emergency
// stairs" plate, and the sheets of paper taped to the pillar that number
// the landings. Type and shapes only.
import { HEAD_FONT, BODY_FONT, HAND_FONT, fitText, wrapLines, grime } from './canvas.js';
import { RNG } from '../util/rng.js';

// A tread seen from above. The nosing is the top edge of the picture.
export function drawTread(c, w, h) {
  const r = new RNG(320);
  c.fillStyle = '#232427'; c.fillRect(0, 0, w, h);
  c.fillStyle = 'rgba(255,255,255,0.06)';                          // raised studs
  for (let y = h * 0.3; y < h; y += 5) for (let x = (Math.round(y / 5) % 2) * 2.5; x < w; x += 5) c.fillRect(x, y, 2, 2);
  const nh = h * 0.24;
  c.fillStyle = '#e3bd17'; c.fillRect(0, 0, w, nh);
  c.fillStyle = 'rgba(0,0,0,0.22)'; for (let x = 0; x < w; x += 3) c.fillRect(x, 1, 1, nh - 2);   // ribbed
  for (let i = 0; i < 26; i++) { c.fillStyle = `rgba(30,26,18,${r.range(0.15, 0.5)})`; c.fillRect(r.range(0, w), r.range(0, nh), r.range(1, 5), r.range(1, 3)); }   // scuffs
  c.fillStyle = 'rgba(0,0,0,0.35)'; c.fillRect(0, nh, w, 1.5);
}

// One panel of the cage round the central pillar: expanded-metal mesh in a
// white-painted steel frame, darkness behind it.
export function drawCorePanel(c, w, h) {
  c.fillStyle = '#101112'; c.fillRect(0, 0, w, h);
  c.strokeStyle = '#4d5054'; c.lineWidth = 1.1;
  const s = w / 7;
  c.save(); c.beginPath(); c.rect(0, 0, w, h); c.clip();
  for (let x = -h; x < w + h; x += s) {
    c.beginPath(); c.moveTo(x, 0); c.lineTo(x + h * 0.5, h); c.stroke();
    c.beginPath(); c.moveTo(x + h * 0.5, 0); c.lineTo(x, h); c.stroke();
  }
  c.restore();
  const f = Math.max(3, w * 0.09);
  c.fillStyle = '#cfccbf';
  c.fillRect(0, 0, f, h); c.fillRect(w - f, 0, f, h); c.fillRect(0, 0, w, f * 0.8); c.fillRect(0, h - f * 0.8, w, f * 0.8); c.fillRect(0, h * 0.5 - f * 0.3, w, f * 0.6);
  c.fillStyle = 'rgba(0,0,0,0.25)'; c.fillRect(f, 0, 1, h); c.fillRect(w - f - 1, 0, 1, h);
  grime(c, 0, 0, w, h, 99, 0.8, true);
}

// The number of a landing: a sheet of paper taped to the pillar. A printed
// numeral — or, where the count has gone wrong, one written by hand.
export function drawLandingLabel(c, w, h, text, hand = false) {
  c.fillStyle = hand ? '#e6e0cc' : '#f1eee3'; c.fillRect(0, 0, w, h);
  c.strokeStyle = 'rgba(0,0,0,0.25)'; c.lineWidth = 1; c.strokeRect(0.5, 0.5, w - 1, h - 1);
  c.fillStyle = hand ? '#1f3fae' : '#141414'; c.textAlign = 'center'; c.textBaseline = 'middle';
  fitText(c, text, w * 0.8, h * 0.62, hand ? HAND_FONT : HEAD_FONT);
  c.save(); c.translate(w / 2, h * 0.54); if (hand) c.rotate(-0.06);
  c.fillText(text, 0, 0);
  c.restore();
  c.fillStyle = 'rgba(190,170,110,0.75)';                           // tape
  for (const [x, y] of [[0, 0], [w - w * 0.22, 0], [0, h - h * 0.1], [w - w * 0.22, h - h * 0.1]]) c.fillRect(x, y, w * 0.22, h * 0.1);
}

// White plate in a grey frame, dark blue lettering, set left as on the real
// one: "This stairway has over 320 steps / Do not use except in an emergency".
export function drawStairSign(c, w, h, paras) {
  const f = Math.max(2, w * 0.035);
  c.fillStyle = '#7b8084'; c.fillRect(0, 0, w, h);
  c.fillStyle = '#f4f3ec'; c.fillRect(f, f, w - 2 * f, h - 2 * f);
  c.fillStyle = '#16205e'; c.textAlign = 'left'; c.textBaseline = 'alphabetic';
  let size = h * 0.13, lines;
  for (;;) {
    c.font = `400 ${size}px ${BODY_FONT}`;
    lines = paras.flatMap((p, i) => (i ? [''] : []).concat(wrapLines(c, p, w - 2 * f - w * 0.12)));
    const need = lines.reduce((a, ln) => a + (ln ? size * 1.16 : size * 0.5), 0);
    if (need < h - 2 * f - h * 0.1 || size < 5) break;
    size *= 0.94;
  }
  let y = f + h * 0.06 + size;
  c.strokeStyle = '#16205e'; c.lineWidth = size * 0.03;
  for (const ln of lines) { if (ln) { c.fillText(ln, f + w * 0.06, y); c.strokeText(ln, f + w * 0.06, y); y += size * 1.16; } else y += size * 0.5; }
  grime(c, f, f, w - 2 * f, h - 2 * f, paras[0].length * 13, 0.35, false);
}

// The green plate over it.
export function drawGreenPlate(c, w, h, lines) {
  const f = Math.max(2, w * 0.035);
  c.fillStyle = '#7b8084'; c.fillRect(0, 0, w, h);
  c.fillStyle = '#0b8a43'; c.fillRect(f, f, w - 2 * f, h - 2 * f);
  c.fillStyle = '#fff'; c.textAlign = 'left'; c.textBaseline = 'alphabetic';
  const size = Math.min((h - 2 * f) / (lines.length * 1.25), h * 0.36);
  c.font = `700 ${size}px ${BODY_FONT}`;
  lines.forEach((ln, i) => c.fillText(ln, f + w * 0.07, f + size * (1.05 + i * 1.15), w - 2 * f - w * 0.12));
}
