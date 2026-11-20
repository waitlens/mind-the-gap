// Posters in the manner of the summer of 1924, for the station that closed
// then: flat colour, heavy capitals, a simple emblem — and a hundred years
// of fading, damp and peeling on top. The firms and events are invented
// (see game/scripts.js); everything is drawn from shapes and type.
import { HEAD_FONT, BODY_FONT, fitText, wrapLines, grime } from './canvas.js';

const INKS = [['#7d3327', '#e2d3a8', '#2b3550'], ['#2b3550', '#e0d2ab', '#8a3a2c'], ['#4f5a34', '#e4d7b0', '#6e2f25'], ['#a47a2c', '#efe3bf', '#2b3550']];

const EMBLEM = {
  cup(c, x, y, s, a, b) {
    c.fillStyle = b; c.beginPath(); c.moveTo(x - s * 0.7, y - s * 0.3); c.lineTo(x - s * 0.5, y + s * 0.6); c.lineTo(x + s * 0.5, y + s * 0.6); c.lineTo(x + s * 0.7, y - s * 0.3); c.fill();
    c.strokeStyle = b; c.lineWidth = s * 0.14; c.beginPath(); c.arc(x + s * 0.78, y + s * 0.1, s * 0.28, -1.2, 1.4); c.stroke();
    c.lineWidth = s * 0.08; for (const dx of [-0.25, 0.2]) { c.beginPath(); c.moveTo(x + s * dx, y - s * 0.5); c.quadraticCurveTo(x + s * (dx + 0.25), y - s * 0.8, x + s * dx, y - s * 1.1); c.stroke(); }
  },
  sun(c, x, y, s, a, b) {
    c.fillStyle = b;
    for (let i = 0; i < 12; i++) { const t = (i / 12) * Math.PI * 2; c.beginPath(); c.moveTo(x, y); c.lineTo(x + Math.cos(t - 0.09) * s * 1.3, y + Math.sin(t - 0.09) * s * 1.3); c.lineTo(x + Math.cos(t + 0.09) * s * 1.3, y + Math.sin(t + 0.09) * s * 1.3); c.fill(); }
    c.fillStyle = a; c.beginPath(); c.arc(x, y, s * 0.62, 0, 7); c.fill();
    c.fillStyle = b; c.beginPath(); c.arc(x, y, s * 0.48, 0, 7); c.fill();
  },
  hill(c, x, y, s, a, b) {
    c.fillStyle = b; c.beginPath(); c.moveTo(x - s * 1.5, y + s * 0.7); c.quadraticCurveTo(x - s * 0.4, y - s * 0.9, x + s * 0.3, y + s * 0.1); c.quadraticCurveTo(x + s * 0.9, y - s * 0.5, x + s * 1.5, y + s * 0.7); c.fill();
    c.fillRect(x - s * 0.2, y - s * 0.75, s * 0.1, s * 0.5); c.beginPath(); c.arc(x - s * 0.15, y - s * 0.85, s * 0.3, 0, 7); c.fill();   // a tree on the top
  },
  star(c, x, y, s, a, b) {
    c.fillStyle = b;
    for (const [dx, dy, k] of [[0, 0, 1], [-1.0, -0.5, 0.5], [0.95, -0.6, 0.6], [0.7, 0.6, 0.4]]) {
      c.beginPath();
      for (let i = 0; i < 10; i++) { const t = -Math.PI / 2 + (i / 10) * Math.PI * 2, r = (i % 2 ? 0.4 : 1) * s * k; c.lineTo(x + dx * s + Math.cos(t) * r, y + dy * s + Math.sin(t) * r); }
      c.fill();
    }
  },
  bottle(c, x, y, s, a, b) {
    c.fillStyle = b; c.fillRect(x - s * 0.38, y - s * 0.3, s * 0.76, s * 1.1); c.fillRect(x - s * 0.14, y - s * 0.95, s * 0.28, s * 0.7);
    c.fillStyle = a; c.fillRect(x - s * 0.28, y, s * 0.56, s * 0.45);
  },
};

// spec: [headline, strapline, emblem]; r: RNG. Returns nothing; draws into (0,0,w,h).
export function drawPeriodPoster(c, w, h, spec, r) {
  const [head, strap, emblem] = spec, [ink, paper, second] = r.pick(INKS);
  c.fillStyle = paper; c.fillRect(0, 0, w, h);
  c.strokeStyle = ink; c.lineWidth = Math.max(2, w * 0.025); c.strokeRect(w * 0.05, w * 0.05, w * 0.9, h - w * 0.1);
  c.fillStyle = ink; c.fillRect(w * 0.05, w * 0.05, w * 0.9, h * 0.44);
  (EMBLEM[emblem] || EMBLEM.sun)(c, w / 2, h * 0.27, Math.min(w, h) * 0.17, ink, paper);
  c.fillStyle = ink; c.textAlign = 'center'; c.textBaseline = 'alphabetic';
  let size = h * 0.105, lines;
  for (;;) { c.font = `400 ${size}px ${HEAD_FONT}`; lines = wrapLines(c, head.toUpperCase(), w * 0.8); if (lines.length <= 2 || size < 6) break; size *= 0.92; }
  lines.forEach((ln, i) => c.fillText(ln, w / 2, h * 0.6 + i * size * 1.05, w * 0.84));
  c.fillStyle = second; c.fillRect(w * 0.3, h * 0.6 + lines.length * size * 1.05 - size * 0.55, w * 0.4, Math.max(1, h * 0.008));
  let ss = h * 0.05, sl;
  for (;;) { c.font = `700 ${ss}px ${BODY_FONT}`; sl = wrapLines(c, strap, w * 0.78); if (sl.length <= 3 || ss < 5) break; ss *= 0.92; }
  sl.forEach((ln, i) => c.fillText(ln, w / 2, h * 0.64 + lines.length * size * 1.05 + i * ss * 1.2));
  // a century on the wall: the colour gone out of it, tide marks, a torn corner
  c.fillStyle = 'rgba(214,203,170,0.5)'; c.fillRect(0, 0, w, h);
  for (let i = 0; i < 5; i++) {
    const x = r.range(0, w), y = r.range(0, h), rad = r.range(w * 0.15, w * 0.45);
    const g = c.createRadialGradient(x, y, rad * 0.6, x, y, rad);
    g.addColorStop(0, 'rgba(70,55,30,0)'); g.addColorStop(0.85, 'rgba(70,55,30,0.16)'); g.addColorStop(1, 'rgba(70,55,30,0)');
    c.fillStyle = g; c.fillRect(x - rad, y - rad, rad * 2, rad * 2);
  }
  c.clearRect(0, 0, 0, 0);
  const cx = r.chance(0.5) ? 0 : w, tw = w * r.range(0.18, 0.34), th = h * r.range(0.1, 0.2);
  c.fillStyle = '#b9b094'; c.beginPath(); c.moveTo(cx, 0); c.lineTo(cx === 0 ? tw : w - tw, 0); c.lineTo(cx, th); c.fill();   // paste and wall where it tore
  grime(c, 0, 0, w, h, head.length * 19 + 7, 1.2, true);
}

// A coat of paint over something (the tiled name): streaky, thin in places.
export function paintOver(c, w, h, colour, r, strength = 0.72) {
  c.fillStyle = colour; c.globalAlpha = strength; c.fillRect(0, 0, w, h);
  c.globalAlpha = 1;
  for (let i = 0; i < 40; i++) {
    const y = r.range(0, h), x = r.range(0, w);
    c.fillStyle = `rgba(${r.chance(0.5) ? '255,250,230' : '70,60,40'},${r.range(0.03, 0.09)})`;
    c.fillRect(x, y, r.range(w * 0.1, w * 0.5), r.range(1, 3));
  }
}

// Brickwork filling an archway: stretcher bond, hurriedly pointed, sooty.
export function drawBrickwork(c, w, h, r) {
  c.fillStyle = '#6d6558'; c.fillRect(0, 0, w, h);                       // mortar
  const bh = h / 22, bw = bh * 2.9;
  for (let j = 0; j < 22; j++) {
    for (let x = (j % 2 ? -bw / 2 : 0); x < w; x += bw) {
      const k = r.range(-14, 14);
      c.fillStyle = `rgb(${112 + k},${62 + k * 0.6},${48 + k * 0.5})`;
      c.fillRect(x + 0.8, j * bh + 0.8, bw - 1.6, bh - 1.6);
    }
  }
  const g = c.createLinearGradient(0, 0, 0, h);
  g.addColorStop(0, 'rgba(20,16,10,0.45)'); g.addColorStop(0.4, 'rgba(20,16,10,0.12)'); g.addColorStop(1, 'rgba(20,16,10,0.3)');
  c.fillStyle = g; c.fillRect(0, 0, w, h);
  grime(c, 0, 0, w, h, 1924, 1.0, true);
}
