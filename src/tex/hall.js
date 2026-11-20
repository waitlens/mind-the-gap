// The ticket hall. Walls after a Leslie Green hall (the Belsize Park
// photograph and Historic England's description, REFERENCES.md): cream
// tiles laid upright in stack bond over a bottle-green skirting, a moulded
// green frieze band at head height, cream plaster above. And the pieces of
// the gate line (after the Golders Green and West Kensington photographs):
// the yellow reader pad, a grey paddle, the little display that shows an
// arrow or a cross, the numbered end of a stanchion; ticket machines; the
// old ticket window behind its shutter. Type and shapes only.
import { makeCanvas, canvasTexture, HEAD_FONT, BODY_FONT, OSD_FONT, fitText, grime, shade } from './canvas.js';
import { drawSymbol } from './symbol.js';
import { RNG } from '../util/rng.js';

export const HALL_TEX = { uPeriod: 3, height: 3.4 };      // metres per repeat along the wall; floor to ceiling
const GREEN = '#1e4a35', GREEN_HI = '#3f7a5c', CREAM = '#e9e1c4';

function paintWall(c, S) {
  const r = new RNG(1907), py = S / HALL_TEX.height, Y = (m) => S - m * py;     // y of a height in metres
  c.fillStyle = '#e4dcc2'; c.fillRect(0, 0, S, S);                             // plaster
  // tiles: upright, stack bond, from the skirting to the frieze
  const cols = 40, tw = S / cols, th = 0.15 * py;
  c.fillStyle = '#b9b29a'; c.fillRect(0, Y(1.72), S, Y(0.2) - Y(1.72));
  for (let j = 0; j < 10; j++) for (let i = 0; i < cols; i++) {
    c.fillStyle = shade(CREAM, r.range(-0.06, 0.04));
    c.fillRect(i * tw + 0.5, Y(0.2 + (j + 1) * 0.152) + 0.5, tw - 1, th - 1);
    c.fillStyle = 'rgba(255,255,255,0.14)'; c.fillRect(i * tw + 1, Y(0.2 + (j + 1) * 0.152) + 1, tw - 2, 2);
  }
  // skirting, and the frieze: two rails and a band of moulded leaves between
  const glaze = (y0, y1, col) => { c.fillStyle = col; c.fillRect(0, Y(y1), S, Y(y0) - Y(y1)); c.fillStyle = 'rgba(255,255,255,0.16)'; c.fillRect(0, Y(y1), S, Math.max(1, (Y(y0) - Y(y1)) * 0.2)); };
  glaze(0, 0.2, GREEN);
  glaze(1.72, 1.78, GREEN); glaze(1.98, 2.05, GREEN);
  c.fillStyle = '#2a5d45'; c.fillRect(0, Y(1.98), S, Y(1.78) - Y(1.98));
  const n = 12, mw = S / n, cy = (Y(1.98) + Y(1.78)) / 2, mh = (Y(1.78) - Y(1.98)) * 0.42;
  for (let i = 0; i < n; i++) {
    const cx = (i + 0.5) * mw;
    c.fillStyle = GREEN; c.beginPath(); c.ellipse(cx, cy, mw * 0.2, mh, 0, 0, 7); c.fill();                    // the fruit
    c.fillStyle = GREEN_HI; c.beginPath(); c.ellipse(cx - mw * 0.05, cy - mh * 0.25, mw * 0.08, mh * 0.4, 0, 0, 7); c.fill();
    for (const s of [-1, 1]) {                                                                                 // a leaf either side
      c.fillStyle = GREEN_HI; c.beginPath(); c.moveTo(cx + s * mw * 0.22, cy + mh * 0.7);
      c.quadraticCurveTo(cx + s * mw * 0.5, cy, cx + s * mw * 0.3, cy - mh * 0.9); c.quadraticCurveTo(cx + s * mw * 0.3, cy, cx + s * mw * 0.22, cy + mh * 0.7); c.fill();
    }
    c.fillStyle = 'rgba(0,0,0,0.22)'; c.fillRect(i * mw, Y(1.98), 1, Y(1.78) - Y(1.98));
  }
  // grime: darker towards the ceiling and along the skirting
  const g = c.createLinearGradient(0, 0, 0, S);
  g.addColorStop(0, 'rgba(30,24,12,0.3)'); g.addColorStop(0.35, 'rgba(30,24,12,0.04)'); g.addColorStop(0.9, 'rgba(30,24,12,0)'); g.addColorStop(1, 'rgba(30,24,12,0.25)');
  c.fillStyle = g; c.fillRect(0, 0, S, S);
  grime(c, 0, 0, S, S, 1907, 0.8, false);
}

let wall = null;
export function hallTexture() {
  if (!wall) { const cv = makeCanvas(512, 512); paintWall(cv.getContext('2d'), 512); wall = canvasTexture(cv, { repeatU: true }); }
  return wall;
}

// The yellow card reader, seen from above (a disc; the corners are clear).
export function drawReader(c, w, h) {
  c.clearRect(0, 0, w, h);
  c.fillStyle = '#2a2c30'; c.beginPath(); c.arc(w / 2, h / 2, w * 0.49, 0, 7); c.fill();
  c.fillStyle = '#f5cf12'; c.beginPath(); c.arc(w / 2, h / 2, w * 0.42, 0, 7); c.fill();
  c.strokeStyle = '#fff'; c.lineWidth = w * 0.07; c.lineCap = 'round';
  for (const k of [0.16, 0.27]) { c.beginPath(); c.arc(w * 0.42, h * 0.56, w * k, -1.1, 0.3); c.stroke(); }   // the "touch here" waves
}

// One leaf of a gate's paddles: a grey rounded flap.
export function drawPaddle(c, w, h, dark = false) {
  c.clearRect(0, 0, w, h);
  c.fillStyle = dark ? '#1c1d20' : '#6e7377'; c.beginPath(); c.roundRect(1, 1, w - 2, h - 2, w * 0.45); c.fill();
  c.strokeStyle = dark ? '#3a3c40' : '#3f4347'; c.lineWidth = 3; c.beginPath(); c.roundRect(3, 3, w - 6, h - 6, w * 0.4); c.stroke();
  c.fillStyle = 'rgba(255,255,255,0.1)'; c.fillRect(w * 0.25, h * 0.12, w * 0.12, h * 0.7);
}

// The display on a gate: 'wait' (amber bar), 'no' (red cross), 'go' (green arrow).
export function drawPod(c, w, h, state) {
  c.fillStyle = '#0a0a0b'; c.fillRect(0, 0, w, h);
  c.lineCap = 'round'; c.lineWidth = w * 0.16;
  if (state === 'no') { c.strokeStyle = '#ff2a1c'; c.beginPath(); c.moveTo(w * 0.25, h * 0.25); c.lineTo(w * 0.75, h * 0.75); c.moveTo(w * 0.75, h * 0.25); c.lineTo(w * 0.25, h * 0.75); c.stroke(); }
  else if (state === 'go') { c.strokeStyle = '#2ee35a'; c.beginPath(); c.moveTo(w * 0.5, h * 0.8); c.lineTo(w * 0.5, h * 0.22); c.moveTo(w * 0.24, h * 0.46); c.lineTo(w * 0.5, h * 0.2); c.lineTo(w * 0.76, h * 0.46); c.stroke(); }
  else { c.strokeStyle = '#ffb21e'; c.beginPath(); c.moveTo(w * 0.28, h * 0.5); c.lineTo(w * 0.72, h * 0.5); c.stroke(); }
}

// The end of a stanchion as you walk up to it: brushed steel, dark top, the gate's number.
export function drawStanchionEnd(c, w, h, number) {
  const g = c.createLinearGradient(0, 0, w, 0);
  g.addColorStop(0, '#8b9094'); g.addColorStop(0.5, '#c3c7ca'); g.addColorStop(1, '#84898d');
  c.fillStyle = g; c.fillRect(0, 0, w, h);
  c.fillStyle = '#2d3034'; c.fillRect(0, 0, w, h * 0.1); c.fillRect(0, h * 0.9, w, h * 0.1);
  c.fillStyle = '#16205e'; c.fillRect(w * 0.14, h * 0.2, w * 0.72, h * 0.2);
  c.fillStyle = '#fff'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.font = `700 ${h * 0.15}px ${BODY_FONT}`;
  c.fillText(String(number), w / 2, h * 0.305);
}

// A ticket machine's front. kind: 'cards' (touch screen, cards only) | 'cash'.
export function drawMachine(c, w, h, kind) {
  c.fillStyle = '#d9dcdd'; c.fillRect(0, 0, w, h);
  c.fillStyle = '#16205e'; c.fillRect(0, 0, w, h * 0.13);
  c.fillStyle = '#fff'; c.textAlign = 'center'; c.textBaseline = 'middle';
  fitText(c, kind === 'cards' ? 'Tickets · Cards only' : 'Tickets and Oyster', w * 0.86, h * 0.055, HEAD_FONT);
  c.fillText(kind === 'cards' ? 'Tickets · Cards only' : 'Tickets and Oyster', w / 2, h * 0.068);
  c.fillStyle = '#0c0d10'; c.fillRect(w * 0.12, h * 0.19, w * 0.76, h * 0.27);                                   // the screen: out of service
  c.fillStyle = '#ffb21e'; c.font = `400 ${h * 0.045}px ${OSD_FONT}`; c.fillText('Machine closed', w / 2, h * 0.325);
  c.fillStyle = '#2b2e33'; c.fillRect(w * 0.14, h * 0.52, w * 0.3, h * 0.11); c.fillRect(w * 0.56, h * 0.52, w * 0.3, h * 0.05);   // keypad, card slot
  if (kind !== 'cards') { c.fillRect(w * 0.56, h * 0.6, w * 0.3, h * 0.03); c.fillStyle = '#f5cf12'; c.beginPath(); c.arc(w * 0.28, h * 0.72, w * 0.09, 0, 7); c.fill(); }
  c.fillStyle = '#1a1c1f'; c.fillRect(w * 0.2, h * 0.82, w * 0.6, h * 0.1);                                      // where the ticket drops
  c.strokeStyle = '#8d9296'; c.lineWidth = 2; c.strokeRect(1, 1, w - 2, h - 2);
}

// The attendant's box by the gates: "Assistance" over a dark window.
export function drawBooth(c, w, h) {
  c.fillStyle = '#3d4654'; c.fillRect(0, 0, w, h);
  c.fillStyle = '#16205e'; c.fillRect(0, 0, w, h * 0.11);
  c.fillStyle = '#fff'; c.textAlign = 'center'; c.textBaseline = 'middle'; fitText(c, 'Assistance', w * 0.8, h * 0.07, HEAD_FONT); c.fillText('Assistance', w / 2, h * 0.058);
  const g = c.createLinearGradient(0, h * 0.15, 0, h * 0.6);
  g.addColorStop(0, '#11151b'); g.addColorStop(1, '#07090c');
  c.fillStyle = g; c.fillRect(w * 0.08, h * 0.15, w * 0.84, h * 0.45);
  c.fillStyle = 'rgba(255,255,255,0.06)'; c.fillRect(w * 0.14, h * 0.17, w * 0.1, h * 0.4);
  c.fillStyle = '#2b323d'; c.fillRect(w * 0.08, h * 0.62, w * 0.84, h * 0.03);
}

// The old ticket window: TICKETS in tile over an arched opening, shuttered.
export function drawTicketWindow(c, w, h) {
  c.fillStyle = GREEN; c.fillRect(0, 0, w, h);
  c.fillStyle = 'rgba(255,255,255,0.14)'; c.fillRect(0, 0, w, 3);
  c.fillStyle = CREAM; c.fillRect(w * 0.08, h * 0.05, w * 0.84, h * 0.17);
  c.fillStyle = '#17362a'; c.textAlign = 'center'; c.textBaseline = 'middle';
  c.font = `700 ${h * 0.12}px Georgia, 'Times New Roman', serif`; c.fillText('TICKETS', w / 2, h * 0.14, w * 0.78);
  c.fillStyle = '#585d61'; c.beginPath(); c.moveTo(w * 0.14, h * 0.95); c.lineTo(w * 0.14, h * 0.5); c.quadraticCurveTo(w * 0.5, h * 0.2, w * 0.86, h * 0.5); c.lineTo(w * 0.86, h * 0.95); c.fill();
  c.fillStyle = 'rgba(0,0,0,0.3)'; for (let y = h * 0.34; y < h * 0.95; y += h * 0.035) c.fillRect(w * 0.14, y, w * 0.72, 1.5);     // shutter slats
  c.strokeStyle = GREEN_HI; c.lineWidth = w * 0.03; c.beginPath(); c.moveTo(w * 0.14, h * 0.95); c.lineTo(w * 0.14, h * 0.5); c.quadraticCurveTo(w * 0.5, h * 0.2, w * 0.86, h * 0.5); c.lineTo(w * 0.86, h * 0.95); c.stroke();
}

// The roundel over the way out to the street.
export function drawHallRoundel(c, w, h) {
  c.clearRect(0, 0, w, h);
  drawSymbol(c, w / 2, h / 2, h * 0.38, { name: 'Underground' });
}
