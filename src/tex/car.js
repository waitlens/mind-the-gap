// Finishes of the standing train (1995 Stock as refurbished 2013–15, after
// the TfL information sheet and the photographs in REFERENCES.md): the
// "Barman" moquette — royal blue with darker and lighter blue arcs and
// blocks and small red and turquoise rings — dark blue grab poles, black
// armrests, ivory panels, a speckled pale-grey floor that is dark grey in
// the doorways; and the outside in the same red, white and blue as the
// train that runs through (tex/train.js). One 512 x 512 canvas, painted once.
import { makeCanvas, canvasTexture, HEAD_FONT, BODY_FONT } from './canvas.js';
import { drawSymbol } from './symbol.js';
import { RNG } from '../util/rng.js';

const S = 512;
// name: [x, y, w, h] in pixels
const REG = {
  moquette: [0, 0, 128, 128], floor: [128, 0, 64, 64], floorDark: [192, 0, 64, 64], panel: [256, 0, 64, 64],
  ceiling: [320, 0, 64, 64], light: [384, 0, 64, 32], plinth: [384, 32, 64, 32], pole: [448, 0, 24, 64], black: [480, 0, 24, 64],
  louvre: [128, 64, 128, 32], steel: [128, 96, 64, 32], glass: [192, 96, 64, 32],
  doorIn: [0, 128, 64, 160], doorOut: [64, 128, 64, 160], endDoor: [128, 128, 64, 160], livery: [192, 128, 32, 160],
  roof: [224, 128, 32, 32], under: [224, 160, 32, 32], red: [224, 192, 32, 32], hoarding: [224, 224, 32, 64],
  alarm: [256, 128, 48, 48], priority: [304, 128, 48, 48], warning: [352, 128, 48, 48], logo: [400, 128, 96, 48],
  displayBox: [256, 176, 96, 32], number: [352, 176, 96, 32], seatEnd: [256, 208, 64, 80],
};
// heights (m above the car floor) spanned by the livery column, bottom → top
export const LIVERY_Y = [-0.62, 1.78];
const IVORY = '#e9e4d0', BLUE = '#1b2f86';

function speckle(c, x, y, w, h, r, n, cols) {
  for (let i = 0; i < n; i++) { c.fillStyle = r.pick(cols); c.fillRect(x + r.range(0, w - 1), y + r.range(0, h - 1), r.range(0.8, 1.8), r.range(0.8, 1.8)); }
}

// The moquette: a 4 x 4 repeat of abstracted landmarks (wheel, tower,
// dome, bridge), tone on tone, with the odd red or turquoise ring.
function moquette(c, x0, y0, w, h, r) {
  c.fillStyle = '#2247a8'; c.fillRect(x0, y0, w, h);
  const n = 4, cw = w / n, dark = '#162f78', mid = '#2d5cc4', pale = '#4a7ad8';
  for (let j = 0; j < n; j++) for (let i = 0; i < n; i++) {
    const cx = x0 + (i + 0.5) * cw, cy = y0 + (j + 0.5) * cw, k = (i + j * 2) % 4, s = cw * 0.36;
    c.lineWidth = cw * 0.13; c.strokeStyle = (i + j) % 2 ? dark : mid; c.fillStyle = (i + j) % 2 ? mid : dark;
    if (k === 0) { c.beginPath(); c.arc(cx, cy, s, 0.3, Math.PI * 1.7); c.stroke(); }                         // the wheel
    else if (k === 1) { c.fillRect(cx - s * 0.35, cy - s, s * 0.7, s * 2); c.fillStyle = pale; c.fillRect(cx - s * 0.2, cy - s * 0.8, s * 0.4, s * 0.4); }   // the clock tower
    else if (k === 2) { c.beginPath(); c.arc(cx, cy + s * 0.4, s, Math.PI, 0); c.fill(); c.fillRect(cx - s * 0.1, cy - s * 1.0, s * 0.2, s * 0.5); }         // the dome
    else { c.fillRect(cx - s, cy - s * 0.7, s * 0.45, s * 1.5); c.fillRect(cx + s * 0.55, cy - s * 0.7, s * 0.45, s * 1.5); c.fillRect(cx - s, cy, s * 2, s * 0.22); }   // the bridge
    if ((i * 3 + j * 5) % 7 === 0) { c.strokeStyle = (i + j) % 2 ? '#d8364a' : '#35b9cf'; c.lineWidth = cw * 0.07; c.beginPath(); c.arc(cx + s * 0.9, cy - s * 0.9, s * 0.3, 0, 7); c.stroke(); }
  }
  speckle(c, x0, y0, w, h, r, 900, ['rgba(255,255,255,0.07)', 'rgba(0,0,20,0.12)']);                         // the weave
}

function doorLeaf(c, x, y, w, h, body, narrow) {
  c.fillStyle = body; c.fillRect(x, y, w, h);
  const wx = x + w * (narrow ? 0.3 : 0.16), ww = w * (narrow ? 0.4 : 0.68), wy = y + h * 0.1, wh = h * (narrow ? 0.5 : 0.42);
  c.fillStyle = '#17191c'; c.beginPath(); c.roundRect(wx - 2, wy - 2, ww + 4, wh + 4, 7); c.fill();
  const g = c.createLinearGradient(0, wy, 0, wy + wh);
  g.addColorStop(0, '#39424a'); g.addColorStop(1, '#14181c');
  c.fillStyle = g; c.beginPath(); c.roundRect(wx, wy, ww, wh, 5); c.fill();
  c.fillStyle = 'rgba(255,255,255,0.14)'; c.fillRect(wx + ww * 0.12, wy + 3, ww * 0.16, wh - 6);
  c.fillStyle = '#131416'; c.fillRect(x, y, 2.5, h); c.fillRect(x + w - 2.5, y, 2.5, h);                     // rubber edges
  c.fillStyle = 'rgba(0,0,0,0.18)'; c.fillRect(x, y + h - 6, w, 6);
}

function paint(c) {
  const r = new RNG(1995);
  const R = (n) => REG[n];
  const flat = (n, col) => { const [x, y, w, h] = R(n); c.fillStyle = col; c.fillRect(x - 2, y - 2, w + 4, h + 4); };
  c.fillStyle = '#3a3b3d'; c.fillRect(0, 0, S, S);
  moquette(c, ...R('moquette'), r);
  flat('floor', '#b4b7b6'); speckle(c, ...R('floor'), r, 700, ['#8f9291', '#d2d5d3', '#a3a6a5', '#6f7272']);
  flat('floorDark', '#35383d'); speckle(c, ...R('floorDark'), r, 600, ['#23262a', '#4b4f55', '#b9a53a', '#5c6067']);
  flat('panel', IVORY); { const [x, y, w, h] = R('panel'); c.fillStyle = 'rgba(0,0,0,0.05)'; c.fillRect(x, y + h - 3, w, 3); c.fillStyle = 'rgba(255,255,255,0.25)'; c.fillRect(x, y, w, 3); }
  flat('ceiling', '#f1efe6'); flat('light', '#fffdf0'); flat('pole', BLUE); flat('black', '#17181b'); flat('steel', '#8d9296');
  flat('glass', '#20262b'); flat('roof', '#8d9296'); flat('under', '#131417'); flat('red', '#d5231d');
  { const [x, y, w, h] = R('pole'); c.fillStyle = 'rgba(255,255,255,0.28)'; c.fillRect(x + w * 0.3, y, w * 0.18, h); }                 // the shine down a pole
  { const [x, y, w, h] = R('plinth'); c.fillStyle = '#4b4f55'; c.fillRect(x - 2, y - 2, w + 4, h + 4); c.fillStyle = '#26282c'; for (let i = 0; i < 9; i++) c.fillRect(x + 8 + i * 5.5, y + 8, 3, h - 16); }
  { const [x, y, w, h] = R('louvre'); c.fillStyle = '#2a2c30'; c.fillRect(x - 2, y - 2, w + 4, h + 4); c.fillStyle = '#0f1012'; for (let i = 0; i < 7; i++) c.fillRect(x, y + 3 + i * 4.2, w, 2.2); }
  { const [x, y, w, h] = R('hoarding'); c.fillStyle = '#11308f'; c.fillRect(x - 2, y - 2, w + 4, h + 4); c.fillStyle = 'rgba(0,0,0,0.25)'; c.fillRect(x, y, 1.5, h); c.fillStyle = 'rgba(255,255,255,0.08)'; c.fillRect(x + 2, y, 2, h); }
  doorLeaf(c, ...R('doorIn'), IVORY, false);
  doorLeaf(c, ...R('doorOut'), '#d5231d', false);
  doorLeaf(c, ...R('endDoor'), IVORY, true);
  // the outside: dark underframe, blue skirt, white side, grey cantrail
  { const [x, y, w, h] = R('livery'), yOf = (m) => y + h - ((m - LIVERY_Y[0]) / (LIVERY_Y[1] - LIVERY_Y[0])) * h;
    c.fillStyle = '#15161a'; c.fillRect(x - 2, yOf(-0.05), w + 4, y + h + 2 - yOf(-0.05));
    c.fillStyle = '#0c2a8e'; c.fillRect(x - 2, yOf(0.45), w + 4, yOf(-0.05) - yOf(0.45));
    c.fillStyle = '#f2f2ee'; c.fillRect(x - 2, yOf(1.7), w + 4, yOf(0.45) - yOf(1.7));
    c.fillStyle = '#9da2a6'; c.fillRect(x - 2, y - 2, w + 4, yOf(1.7) - y + 2); }
  // small plates
  { const [x, y, w, h] = R('alarm'); c.fillStyle = '#c8201c'; c.fillRect(x, y, w, h); c.fillStyle = '#fff'; c.font = `700 9px ${BODY_FONT}`; c.textAlign = 'center'; c.fillText('Emergency', x + w / 2, y + 13); c.fillText('alarm', x + w / 2, y + 23); c.fillStyle = '#7a1210'; c.fillRect(x + w * 0.3, y + h * 0.58, w * 0.4, h * 0.28); }
  { const [x, y, w, h] = R('priority'); c.fillStyle = '#1b2f86'; c.fillRect(x, y, w, h); c.fillStyle = '#fff'; c.font = `700 9px ${BODY_FONT}`; c.textAlign = 'center'; c.fillText('Priority', x + w / 2, y + 20); c.fillText('seat', x + w / 2, y + 31); }
  { const [x, y, w, h] = R('warning'); c.fillStyle = IVORY; c.fillRect(x, y, w, h); c.fillStyle = '#f2c81e'; c.beginPath(); c.moveTo(x + w / 2, y + 5); c.lineTo(x + w - 6, y + h - 7); c.lineTo(x + 6, y + h - 7); c.fill(); c.fillStyle = '#111'; c.fillRect(x + w / 2 - 2, y + 18, 4, 13); c.fillRect(x + w / 2 - 2, y + 34, 4, 4); }
  { const [x, y, w, h] = R('logo'); c.fillStyle = '#f2f2ee'; c.fillRect(x - 2, y - 2, w + 4, h + 4); drawSymbol(c, x + w / 2, y + h / 2, h * 0.36, { name: 'Underground' }); }
  { const [x, y, w, h] = R('displayBox'); c.fillStyle = '#1b1c1f'; c.fillRect(x - 2, y - 2, w + 4, h + 4); c.fillStyle = '#0a0a0b'; c.fillRect(x + 4, y + 5, w - 8, h - 10); }
  { const [x, y, w, h] = R('number'); c.fillStyle = '#f2f2ee'; c.fillRect(x - 2, y - 2, w + 4, h + 4); c.fillStyle = '#16171a'; c.font = `400 22px ${HEAD_FONT}`; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText('52607', x + w / 2, y + h / 2 + 1); c.textBaseline = 'alphabetic'; }
  // the screen at the end of a row of seats: ivory panel, glass above
  { const [x, y, w, h] = R('seatEnd'); c.fillStyle = IVORY; c.fillRect(x - 2, y - 2, w + 4, h + 4); c.fillStyle = '#93a3a8'; c.fillRect(x + 5, y + 5, w - 10, h * 0.45); c.fillStyle = 'rgba(255,255,255,0.35)'; c.fillRect(x + 9, y + 7, 5, h * 0.45 - 4); c.fillStyle = '#1b2f86'; c.fillRect(x + 3, y + 3, w - 6, 2.5); }
}

let texture = null;
export function carTexture() {
  if (!texture) {
    const cv = makeCanvas(S, S);
    paint(cv.getContext('2d'));
    texture = canvasTexture(cv);
  }
  return texture;
}

// uv rect [u0, v0, u1, v1] of a region (v0 = bottom), inset by `e` texels.
export function carRect(name, e = 1.5) {
  const [x, y, w, h] = REG[name];
  return [(x + e) / S, 1 - (y + h - e) / S, (x + w - e) / S, 1 - (y + e) / S];
}
// A flat-colour sample from the middle of a region.
export function carFlat(name) {
  const [x, y, w, h] = REG[name];
  return [(x + w * 0.4) / S, 1 - (y + h * 0.6) / S, (x + w * 0.6) / S, 1 - (y + h * 0.4) / S];
}
