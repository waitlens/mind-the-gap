// The passenger lift's own painting (one opaque 1024 x 512 canvas): brushed
// stainless door panels with their little wired-glass windows and yellow
// caution labels, the car's cream wall panels, the steel ends with the
// control panel, ceiling, floor, sill, and everything that lights up — the
// LED strips, the column of position lamps, EXIT, NEXT LIFT. After the
// photographs listed in REFERENCES.md ("The lift, round 4"); wording as
// photographed. Type and shapes only.
import { makeCanvas, canvasTexture, HEAD_FONT, BODY_FONT, OSD_FONT, fitText } from './canvas.js';
import { RNG } from '../util/rng.js';
import { paintLiftSigns } from './lift_signs.js';

const W = 1024, H = 512;
// name: [x, y, w, h] in pixels
export const LIFT_REG = {
  leafF: [0, 0, 96, 448], leafS: [96, 0, 104, 448], wall: [200, 0, 448, 352], end: [648, 0, 104, 448], panel: [752, 0, 104, 448],
  ceil: [856, 0, 168, 216], floor: [856, 216, 96, 96], steel: [952, 216, 72, 48], dark: [952, 264, 72, 48],
  sill: [856, 312, 168, 40], jamb: [856, 352, 168, 24], notice: [856, 376, 80, 64], rail: [936, 376, 88, 24], black: [936, 400, 88, 24],
  head: [200, 352, 448, 40], hood: [200, 392, 448, 56],
  ledClose: [0, 448, 300, 28], ledUp: [0, 480, 240, 28], ledDown: [244, 480, 240, 28],
  plate: [520, 448, 56, 64], lamps: [576, 448, 24, 64], lampOn: [600, 448, 16, 16], arrowUp: [616, 448, 16, 16], arrowDn: [632, 448, 16, 16],
  exit: [600, 464, 48, 24], auto: [648, 448, 104, 64], next: [752, 448, 104, 32], nextOn: [752, 480, 104, 32],
};

// uv rect [u0, v0, u1, v1] of a region (v0 = its bottom edge), inset a little.
export function liftRect(name, inset = 1.5) {
  const [x, y, w, h] = LIFT_REG[name];
  return [(x + inset) / W, 1 - (y + h - inset) / H, (x + w - inset) / W, 1 - (y + inset) / H];
}
// a small patch in the middle of a flat region
export function liftFlat(name) {
  const [x, y, w, h] = LIFT_REG[name];
  return [(x + w * 0.4) / W, 1 - (y + h * 0.6) / H, (x + w * 0.6) / W, 1 - (y + h * 0.4) / H];
}

// Brushed stainless: a soft sheen across, fine grain running up and down.
function steel(c, x, y, w, h, r, tone = 0) {
  const g = c.createLinearGradient(x, 0, x + w, 0);
  const v = (k) => { const q = Math.round(k + tone); return `rgb(${q},${q + 3},${q + 6})`; };
  g.addColorStop(0, v(150)); g.addColorStop(0.3, v(186)); g.addColorStop(0.55, v(166)); g.addColorStop(0.8, v(190)); g.addColorStop(1, v(148));
  c.fillStyle = g; c.fillRect(x, y, w, h);
  for (let i = 0; i < w * 1.6; i++) {
    c.fillStyle = r.chance(0.5) ? `rgba(255,255,255,${r.range(0.02, 0.09)})` : `rgba(20,24,30,${r.range(0.02, 0.08)})`;
    c.fillRect(x + r.range(0, w), y + r.range(0, h), 1, r.range(h * 0.1, h * 0.6));
  }
  // the smears every one of these doors has at hand height
  for (let i = 0; i < 3 && h > 200; i++) {
    c.fillStyle = `rgba(235,238,240,${r.range(0.04, 0.09)})`;
    c.beginPath(); c.ellipse(x + r.range(0.2, 0.8) * w, y + h * r.range(0.4, 0.7), w * r.range(0.15, 0.4), h * r.range(0.02, 0.05), r.range(-0.4, 0.4), 0, 7); c.fill();
  }
}

// One door panel. The two in the middle carry the window and the label.
function leaf(c, reg, r, fast) {
  const [x, y, w, h] = LIFT_REG[reg];
  steel(c, x, y, w, h, r, fast ? -6 : 4);
  c.fillStyle = 'rgba(0,0,0,0.28)'; c.fillRect(x, y, 2, h); c.fillRect(x + w - 2, y, 2, h);       // the panel's folded edges
  c.fillStyle = 'rgba(255,255,255,0.2)'; c.fillRect(x + 2, y, 1, h);
  if (!fast) return;
  const m = h / 2.12;                                  // px per metre, up the panel
  const wx = x + w * 0.3, ww = w * 0.42, wy = y + h - 1.62 * m, wh = 0.3 * m;
  c.fillStyle = '#23272b'; c.fillRect(wx - 2, wy - 2, ww + 4, wh + 4);
  const g = c.createLinearGradient(0, wy, 0, wy + wh);
  g.addColorStop(0, '#4c545a'); g.addColorStop(1, '#2c3338');
  c.fillStyle = g; c.fillRect(wx, wy, ww, wh);
  c.strokeStyle = 'rgba(200,210,215,0.28)'; c.lineWidth = 0.6;                                    // wired glass
  for (let k = 1; k < 6; k++) { c.beginPath(); c.moveTo(wx + (ww * k) / 6, wy); c.lineTo(wx + (ww * k) / 6, wy + wh); c.stroke(); }
  for (let k = 1; k < 8; k++) { c.beginPath(); c.moveTo(wx, wy + (wh * k) / 8); c.lineTo(wx + ww, wy + (wh * k) / 8); c.stroke(); }
  // "Caution — Obstructing the doors can be dangerous": yellow, under the window
  const ly = wy + wh + 0.07 * m, lh = 0.12 * m, lx = x + w * 0.12, lw = w * 0.78;
  c.fillStyle = '#f6d21c'; c.fillRect(lx, ly, lw, lh);
  c.fillStyle = '#16161a'; c.beginPath(); c.moveTo(lx + 4, ly + lh * 0.48); c.lineTo(lx + 11, ly + lh * 0.48); c.lineTo(lx + 7.5, ly + lh * 0.12); c.fill();
  c.textAlign = 'left'; c.textBaseline = 'middle'; c.font = `700 ${lh * 0.34}px ${BODY_FONT}`; c.fillText('Caution', lx + 14, ly + lh * 0.3);
  c.font = `400 ${lh * 0.2}px ${BODY_FONT}`;
  c.fillText('Obstructing the doors', lx + 4, ly + lh * 0.62, lw - 8); c.fillText('can be dangerous', lx + 4, ly + lh * 0.84, lw - 8);
  c.fillStyle = '#1a8f52'; c.fillRect(x + w * 0.3, y + h - 0.86 * m, w * 0.4, 0.035 * m);          // the small green release label
}

// A long wall of the car: cream panels with dark joints, a slotted steel skirting.
function wall(c, r) {
  const [x, y, w, h] = LIFT_REG.wall, m = h / 2.3;
  c.fillStyle = '#e6e2d2'; c.fillRect(x, y, w, h);
  const g = c.createLinearGradient(0, y, 0, y + h);
  g.addColorStop(0, 'rgba(255,255,255,0.10)'); g.addColorStop(0.55, 'rgba(0,0,0,0)'); g.addColorStop(1, 'rgba(40,30,10,0.16)');
  c.fillStyle = g; c.fillRect(x, y, w, h);
  for (let i = 0; i < 260; i++) { c.fillStyle = `rgba(60,50,30,${r.range(0.02, 0.07)})`; c.fillRect(x + r.range(0, w), y + r.range(0, h), r.range(1, 3), r.range(1, 4)); }
  c.fillStyle = '#2b2c2e';
  for (let k = 0; k <= 4; k++) c.fillRect(x + Math.min(w - 2, (w * k) / 4) - (k ? 1 : 0), y, 2, h);   // four panels
  c.fillRect(x, y + h - 1.08 * m, w, 1.5);                                                        // the joint behind the rail
  // skirting: steel, with a row of slots
  steel(c, x, y + h - 0.16 * m, w, 0.16 * m, r, -20);
  c.fillStyle = '#17181a'; for (let sx = x + 6; sx < x + w - 6; sx += 7) c.fillRect(sx, y + h - 0.12 * m, 2.5, 0.07 * m);
  c.fillStyle = 'rgba(0,0,0,0.35)'; c.fillRect(x, y + h - 0.16 * m, w, 1.5);
}

// The steel either side of a door, inside the car. One of the two carries
// the panel: a display window, a speaker, the lift's number, the alarm.
function end(c, reg, r, fitted) {
  const [x, y, w, h] = LIFT_REG[reg], m = h / 2.3;
  steel(c, x, y, w, h, r, -4);
  c.fillStyle = 'rgba(0,0,0,0.3)'; c.fillRect(x, y + h - 0.16 * m, w, 1.5);
  if (!fitted) return;
  const px = x + w * 0.16, pw = w * 0.68, Y = (hm) => y + h - hm * m;
  c.strokeStyle = 'rgba(30,34,38,0.7)'; c.lineWidth = 1.2;
  c.strokeRect(px, Y(1.72), pw, 0.2 * m);                                                         // the plate with the window
  c.fillStyle = '#0d0f11'; c.fillRect(px + pw * 0.1, Y(1.68), pw * 0.8, 0.11 * m);
  c.strokeRect(px, Y(1.48), pw, 0.5 * m);                                                         // speaker, number, alarm
  c.fillStyle = '#2a2d30';
  for (let i = 0; i < 6; i++) for (let j = 0; j < 5; j++) { c.beginPath(); c.arc(px + pw * 0.14 + i * pw * 0.085, Y(1.42) + j * 0.03 * m, 0.9, 0, 7); c.fill(); }
  c.fillStyle = '#f4f2ea'; c.fillRect(px + pw * 0.64, Y(1.44), pw * 0.28, 0.1 * m);
  c.fillStyle = '#15171a'; c.textAlign = 'center'; c.textBaseline = 'middle';
  c.font = `700 ${0.035 * m}px ${BODY_FONT}`; c.fillText('LIFT', px + pw * 0.78, Y(1.41)); c.font = `700 ${0.05 * m}px ${BODY_FONT}`; c.fillText('1', px + pw * 0.78, Y(1.37));
  c.fillStyle = '#c0281c'; c.font = `700 ${0.028 * m}px ${BODY_FONT}`; c.fillText('ALARM BUTTON', x + w / 2, Y(1.22), pw * 0.9);
  c.fillStyle = '#3a3d40'; c.beginPath(); c.arc(x + w / 2, Y(1.12), 0.04 * m, 0, 7); c.fill();
  c.fillStyle = '#e9c21a'; c.beginPath(); c.arc(x + w / 2, Y(1.12), 0.028 * m, 0, 7); c.fill();
  c.strokeRect(px, Y(0.92), pw, 0.62 * m);                                                        // the locked cabinet below
  c.fillStyle = '#17181a'; c.beginPath(); c.arc(px + pw * 0.5, Y(0.6), 1.6, 0, 7); c.fill();
}

// Ceiling (2.3 x 2.9 m, seen from below): white panels, two bare tubes across, a round vent.
function ceiling(c, r) {
  const [x, y, w, h] = LIFT_REG.ceil;
  c.fillStyle = '#e9e8e2'; c.fillRect(x, y, w, h);
  for (let i = 0; i < 90; i++) { c.fillStyle = `rgba(50,45,35,${r.range(0.02, 0.06)})`; c.fillRect(x + r.range(0, w), y + r.range(0, h), 2, 2); }
  c.fillStyle = 'rgba(0,0,0,0.25)'; c.fillRect(x, y + h / 2, w, 1); c.fillRect(x + w / 2, y, 1, h);
  for (const fy of [0.3, 0.7]) {
    const ty = y + h * fy;
    const g = c.createRadialGradient(x + w / 2, ty, 2, x + w / 2, ty, w * 0.55);
    g.addColorStop(0, 'rgba(255,255,250,0.9)'); g.addColorStop(1, 'rgba(255,255,250,0)');
    c.fillStyle = g; c.fillRect(x, ty - h * 0.14, w, h * 0.28);
    c.fillStyle = '#9fa3a5'; c.fillRect(x + w * 0.1, ty - 5, w * 0.8, 10);                         // the batten
    c.fillStyle = '#ffffff'; c.fillRect(x + w * 0.13, ty - 2.5, w * 0.74, 5);                      // the tube
  }
  c.fillStyle = '#8f9496'; c.beginPath(); c.arc(x + w * 0.2, y + h * 0.5, 9, 0, 7); c.fill();
  c.strokeStyle = '#4c5052'; c.lineWidth = 1; for (const q of [3, 6]) { c.beginPath(); c.arc(x + w * 0.2, y + h * 0.5, q, 0, 7); c.stroke(); }
}

function small(c, r) {
  let [x, y, w, h] = LIFT_REG.floor;                                                              // grey sheet floor, scuffed
  c.fillStyle = '#6f7375'; c.fillRect(x, y, w, h);
  for (let i = 0; i < 500; i++) { c.fillStyle = r.chance(0.5) ? `rgba(20,20,22,${r.range(0.04, 0.14)})` : `rgba(210,212,214,${r.range(0.03, 0.1)})`; c.fillRect(x + r.range(0, w), y + r.range(0, h), r.range(1, 4), r.range(1, 3)); }
  [x, y, w, h] = LIFT_REG.steel; steel(c, x, y, w, h, r);
  [x, y, w, h] = LIFT_REG.dark; c.fillStyle = '#16181a'; c.fillRect(x, y, w, h);
  [x, y, w, h] = LIFT_REG.black; c.fillStyle = '#0c0c0d'; c.fillRect(x, y, w, h);
  [x, y, w, h] = LIFT_REG.rail; steel(c, x, y, w, h, r, 10);
  c.fillStyle = 'rgba(255,255,255,0.35)'; c.fillRect(x, y + 3, w, 3); c.fillStyle = 'rgba(0,0,0,0.3)'; c.fillRect(x, y + h - 4, w, 4);
  // sill (1.4 m across, the doorway's depth up the image): brass, with the door tracks, and the gap between car and landing
  [x, y, w, h] = LIFT_REG.sill;
  const g = c.createLinearGradient(0, y, 0, y + h); g.addColorStop(0, '#a58c4e'); g.addColorStop(0.5, '#c9b06a'); g.addColorStop(1, '#9c8446');
  c.fillStyle = g; c.fillRect(x, y, w, h);
  c.fillStyle = '#1c1a14'; for (const f of [0.14, 0.26, 0.7, 0.82]) c.fillRect(x, y + h * f, w, 2);
  c.fillStyle = '#050505'; c.fillRect(x, y + h * 0.47, w, h * 0.09);
  c.fillStyle = 'rgba(40,30,10,0.75)'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.font = `700 5px ${BODY_FONT}`; c.fillText('O T I S', x + w / 2, y + h * 0.37);
  // the lining of a doorway from landing to car: steel reveal, the dark slot the doors run in, steel again
  [x, y, w, h] = LIFT_REG.jamb;
  steel(c, x, y, w, h, r, -14);
  c.fillStyle = '#0b0c0d'; c.fillRect(x + w * 0.3, y, w * 0.52, h);
}

let tex = null;
export function buildLiftCanvas() {
  const cv = makeCanvas(W, H), c = cv.getContext('2d'), r = new RNG(1907);
  c.fillStyle = '#8f9396'; c.fillRect(0, 0, W, H);
  leaf(c, 'leafF', r, true); leaf(c, 'leafS', r, false);
  wall(c, r); end(c, 'end', r, false); end(c, 'panel', r, true); ceiling(c, r); small(c, r);
  paintLiftSigns(c, LIFT_REG, { steel, r, fitText, HEAD_FONT, BODY_FONT, OSD_FONT });
  return cv;
}
export function liftTexture() {
  if (!tex) tex = canvasTexture(buildLiftCanvas());
  return tex;
}
