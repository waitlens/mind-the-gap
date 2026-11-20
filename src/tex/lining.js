// Lining of the deep-level shelter tunnels (after the Clapham South
// photographs in REFERENCES.md): bolted segmental rings about half a metre
// wide, each segment a row of deep recessed pans between stiffening ribs,
// bolt heads along the flanges, the whole thing painted cream-white a long
// time ago. One 512 x 512 canvas: U repeats every 3 m of tunnel (six
// rings), V runs up the wall from the deck floor to the flat ceiling.
import { makeCanvas, canvasTexture, grime } from './canvas.js';
import { RNG } from '../util/rng.js';

const S = 512, RINGS = 6, PANS = 8;

function paint(c) {
  const r = new RNG(1942);
  const rw = S / RINGS, ph = S / PANS;
  c.fillStyle = '#d9d2b8'; c.fillRect(0, 0, S, S);
  for (let i = 0; i < RINGS; i++) {
    for (let j = 0; j < PANS; j++) {
      const x = i * rw, y = j * ph, fx = rw * 0.13, fy = ph * 0.11;
      // the pan: recessed, darker, lit from above so its top edge is in shadow
      const tone = r.range(-10, 8);
      c.fillStyle = `rgb(${186 + tone},${178 + tone},${152 + tone})`; c.fillRect(x + fx, y + fy, rw - 2 * fx, ph - 2 * fy);
      const g = c.createLinearGradient(0, y + fy, 0, y + ph - fy);
      g.addColorStop(0, 'rgba(40,32,18,0.42)'); g.addColorStop(0.35, 'rgba(40,32,18,0.08)'); g.addColorStop(1, 'rgba(255,250,230,0.16)');
      c.fillStyle = g; c.fillRect(x + fx, y + fy, rw - 2 * fx, ph - 2 * fy);
      c.fillStyle = 'rgba(30,24,14,0.3)'; c.fillRect(x + fx, y + fy, 2, ph - 2 * fy);
      c.fillStyle = 'rgba(255,250,235,0.22)'; c.fillRect(x + rw - fx - 2, y + fy, 2, ph - 2 * fy);
      // a boss in the middle of the pan (the grout hole)
      c.fillStyle = 'rgba(60,50,34,0.35)'; c.beginPath(); c.arc(x + rw / 2, y + ph / 2, rw * 0.045, 0, 7); c.fill();
    }
    // joint between rings, and the bolts through its flanges
    c.fillStyle = 'rgba(40,32,20,0.55)'; c.fillRect(i * rw - 0.8, 0, 1.6, S);
    for (let j = 0; j < PANS; j++) {
      for (const dx of [-rw * 0.06, rw * 0.06]) {
        const bx = ((i * rw + dx) % S + S) % S, by = (j + 0.5) * ph;
        c.fillStyle = '#6b5a3e'; c.beginPath(); c.arc(bx, by, 2.6, 0, 7); c.fill();
        c.fillStyle = 'rgba(255,245,220,0.35)'; c.beginPath(); c.arc(bx - 0.7, by - 0.7, 1, 0, 7); c.fill();
        if (r.chance(0.3)) {            // a bolt that has wept rust down the paint
          const rg = c.createLinearGradient(0, by, 0, by + ph * 0.9);
          rg.addColorStop(0, 'rgba(120,62,24,0.4)'); rg.addColorStop(1, 'rgba(120,62,24,0)');
          c.fillStyle = rg; c.fillRect(bx - 1.5, by, 3, ph * 0.9);
        }
      }
    }
  }
  // joints between the segments of a ring: every fourth pan, staggered ring to ring
  for (let i = 0; i < RINGS; i++) {
    for (let j = i % 2 ? 2 : 0; j <= PANS; j += 4) { c.fillStyle = 'rgba(40,32,20,0.5)'; c.fillRect(i * rw, j * ph - 0.8, rw, 1.6); }
  }
  // the makers' letters, cast into one pan in a while
  c.fillStyle = 'rgba(70,58,40,0.5)'; c.font = '700 11px sans-serif'; c.textAlign = 'center'; c.textBaseline = 'middle';
  c.fillText('L.P.T.B.', rw * 2.5, ph * 3.5 - 9);
  // old damp towards the floor (bottom of the image), soot towards the ceiling
  const d = c.createLinearGradient(0, 0, 0, S);
  d.addColorStop(0, 'rgba(30,24,14,0.3)'); d.addColorStop(0.3, 'rgba(30,24,14,0.05)'); d.addColorStop(0.75, 'rgba(30,24,14,0.06)'); d.addColorStop(1, 'rgba(34,30,16,0.42)');
  c.fillStyle = d; c.fillRect(0, 0, S, S);
  grime(c, 0, 0, S, S, 4242, 1.1, false);
}

let texture = null;
export function liningTexture() {
  if (!texture) {
    const cv = makeCanvas(S, S);
    paint(cv.getContext('2d'));
    texture = canvasTexture(cv, { repeatU: true });
  }
  return texture;
}
export const LINING = { uPeriod: 3 };
