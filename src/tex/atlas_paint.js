// Painters for the structural atlas cells. Each gets (ctx, w, h, rng) with
// the origin at the cell's top-left corner.
import { HEAD_FONT } from './canvas.js';

function speckle(ctx, w, h, r, n, dark = 0.12, light = 0.08) {
  for (let i = 0; i < n; i++) {
    ctx.fillStyle = r.chance(0.6) ? `rgba(0,0,0,${r.range(0.02, dark)})` : `rgba(255,255,255,${r.range(0.02, light)})`;
    const s = r.range(1, 3.5);
    ctx.fillRect(r.range(0, w), r.range(0, h), s, s);
  }
}
const fill = (ctx, w, h, c) => { ctx.fillStyle = c; ctx.fillRect(0, 0, w, h); };

export const PAINT = {
  // terrazzo paving slabs, 4 per metre
  floor(ctx, w, h, r) {
    fill(ctx, w, h, '#77746b');
    const n = 4, s = w / n;
    for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
      const v = r.range(-10, 10);
      ctx.fillStyle = `rgb(${132 + v},${129 + v},${118 + v})`;
      ctx.fillRect(i * s + 1, j * s + 1, s - 2, s - 2);
    }
    speckle(ctx, w, h, r, 900, 0.2, 0.14);
    ctx.fillStyle = 'rgba(40,34,24,0.10)'; // worn walking line
    ctx.fillRect(w * 0.2, 0, w * 0.6, h);
  },
  floorDark(ctx, w, h, r) {
    fill(ctx, w, h, '#3d3c39');
    const n = 4, s = w / n;
    for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
      const v = r.range(-6, 6);
      ctx.fillStyle = `rgb(${74 + v},${72 + v},${68 + v})`;
      ctx.fillRect(i * s + 1, j * s + 1, s - 2, s - 2);
    }
    speckle(ctx, w, h, r, 700, 0.2, 0.08);
  },
  concrete(ctx, w, h, r) { fill(ctx, w, h, '#a9a493'); speckle(ctx, w, h, r, 900, 0.1, 0.07); },
  // offset blister paving: flat-topped domes, each row offset from the next
  tactile(ctx, w, h, r) {
    fill(ctx, w, h, '#c9a94a');
    speckle(ctx, w, h, r, 500, 0.12, 0.06);
    const n = 6, s = w / n;
    for (let j = 0; j < n; j++) for (let i = -1; i < n; i++) {
      const x = (i + 0.5 + (j % 2 ? 0.5 : 0)) * s, y = (j + 0.5) * s;
      ctx.fillStyle = 'rgba(70,50,10,0.45)'; ctx.beginPath(); ctx.arc(x + 1, y + 1.5, s * 0.27, 0, 7); ctx.fill();
      ctx.fillStyle = '#e2c566'; ctx.beginPath(); ctx.arc(x, y, s * 0.25, 0, 7); ctx.fill();
    }
  },
  yellow(ctx, w, h, r) { fill(ctx, w, h, '#e2b81e'); speckle(ctx, w, h, r, 700, 0.22, 0.05); },
  white(ctx, w, h) { fill(ctx, w, h, '#ffffff'); },
  black(ctx, w, h) { fill(ctx, w, h, '#0b0b0b'); },
  blackout(ctx, w, h) { fill(ctx, w, h, '#000000'); },
  navy(ctx, w, h, r) { fill(ctx, w, h, '#14213d'); speckle(ctx, w, h, r, 200, 0.1, 0.04); },
  cream(ctx, w, h, r) { fill(ctx, w, h, '#e6dfc6'); speckle(ctx, w, h, r, 500, 0.08, 0.05); },
  signBack(ctx, w, h, r) { fill(ctx, w, h, '#2a2c2e'); speckle(ctx, w, h, r, 200, 0.1, 0.05); },
  metal(ctx, w, h, r) {
    fill(ctx, w, h, '#9aa0a3');
    for (let y = 0; y < h; y++) { ctx.fillStyle = `rgba(${r.chance(0.5) ? '255,255,255' : '0,0,0'},${r.range(0, 0.07)})`; ctx.fillRect(0, y, w, 1); }
  },
  steelDark(ctx, w, h, r) {
    fill(ctx, w, h, '#3b3f42');
    for (let y = 0; y < h; y++) { ctx.fillStyle = `rgba(${r.chance(0.5) ? '255,255,255' : '0,0,0'},${r.range(0, 0.06)})`; ctx.fillRect(0, y, w, 1); }
  },
  wood(ctx, w, h, r) {
    fill(ctx, w, h, '#6b4526');
    for (let i = 0; i < 90; i++) {
      ctx.fillStyle = `rgba(${r.chance(0.5) ? '30,15,5' : '190,140,90'},${r.range(0.03, 0.12)})`;
      ctx.fillRect(0, r.range(0, h), w, r.range(1, 3));
    }
    for (let j = 1; j < 4; j++) { ctx.fillStyle = 'rgba(20,10,4,0.55)'; ctx.fillRect(0, (j * h) / 4 - 1, w, 2); }
  },
  rubber(ctx, w, h, r) { fill(ctx, w, h, '#161616'); speckle(ctx, w, h, r, 200, 0.2, 0.08); },
  // escalator step: grooved tread with yellow demarcation at the edges
  tread(ctx, w, h) {
    fill(ctx, w, h, '#5c6063');
    for (let x = 0; x < w; x += 4) { ctx.fillStyle = '#2c2f31'; ctx.fillRect(x, 0, 2, h); }
    ctx.fillStyle = '#d9b21c'; ctx.fillRect(0, 0, w, 7); ctx.fillRect(0, 0, 6, h); ctx.fillRect(w - 6, 0, 6, h);
  },
  // stair tread seen from above: stone with a white nosing strip (top edge of the cell)
  stairTread(ctx, w, h, r) {
    fill(ctx, w, h, '#6f6c64'); speckle(ctx, w, h, r, 700, 0.18, 0.1);
    ctx.fillStyle = '#d9d5c4'; ctx.fillRect(0, 0, w, 16);
    ctx.fillStyle = '#2b2b2b'; for (let x = 0; x < w; x += 8) ctx.fillRect(x, 4, 4, 8);
  },
  riser(ctx, w, h, r) { fill(ctx, w, h, '#4a4843'); speckle(ctx, w, h, r, 300, 0.2, 0.06); },
  // track bed: oily concrete with a sleeper across the middle
  ballast(ctx, w, h, r) {
    fill(ctx, w, h, '#1f1d1a'); speckle(ctx, w, h, r, 1400, 0.3, 0.1);
    ctx.fillStyle = '#2e2a24'; ctx.fillRect(0, h * 0.36, w, h * 0.28);
    ctx.fillStyle = 'rgba(0,0,0,0.4)'; ctx.fillRect(0, h * 0.62, w, 3);
  },
  rail(ctx, w, h, r) {
    fill(ctx, w, h, '#4b3a2c');
    ctx.fillStyle = '#c9ced1'; ctx.fillRect(0, h * 0.3, w, h * 0.4);
    ctx.fillStyle = 'rgba(255,255,255,0.5)'; ctx.fillRect(0, h * 0.45, w, h * 0.08);
    speckle(ctx, w, h, r, 300, 0.2, 0.1);
  },
  grille(ctx, w, h) {
    fill(ctx, w, h, '#55585a');
    ctx.fillStyle = '#101010';
    for (let y = 12; y < h - 12; y += 9) ctx.fillRect(12, y, w - 24, 5);
    ctx.strokeStyle = '#2a2c2e'; ctx.lineWidth = 4; ctx.strokeRect(4, 4, w - 8, h - 8);
  },
  // platform edge legend, painted on the coping (4 cells wide)
  mindgap(ctx, w, h, r) {
    fill(ctx, w, h, '#3a3936'); speckle(ctx, w, h, r, 1500, 0.2, 0.08);
    ctx.fillStyle = '#e9e5d6';
    ctx.font = `400 ${h * 0.62}px ${HEAD_FONT}`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText('MIND THE GAP', w / 2, h * 0.54);
    speckle(ctx, w, h, r, 1200, 0.3, 0.02); // worn paint
  },
  // white coping line at the platform edge
  edge(ctx, w, h, r) { fill(ctx, w, h, '#e3dfd0'); speckle(ctx, w, h, r, 900, 0.25, 0.04); },
  // trackside wall: sooty lining with cable runs
  cable(ctx, w, h, r) {
    fill(ctx, w, h, '#23211e'); speckle(ctx, w, h, r, 700, 0.3, 0.07);
    const ys = [0.18, 0.26, 0.34, 0.5, 0.56, 0.74, 0.8];
    ys.forEach((f, i) => {
      ctx.fillStyle = ['#0c0c0c', '#3b3b3b', '#141414', '#54301a', '#0c0c0c', '#2c2c2c', '#101010'][i];
      ctx.fillRect(0, h * f, w, i % 3 === 0 ? 7 : 4);
      ctx.fillStyle = 'rgba(255,255,255,0.12)'; ctx.fillRect(0, h * f, w, 1);
    });
    ctx.fillStyle = '#3a3a3a'; ctx.fillRect(w * 0.5 - 3, h * 0.12, 6, h * 0.76); // bracket
  },
  // running tunnel lining: dark segmental rings
  soot(ctx, w, h, r) {
    fill(ctx, w, h, '#141311'); speckle(ctx, w, h, r, 900, 0.3, 0.06);
    ctx.fillStyle = 'rgba(0,0,0,0.5)'; ctx.fillRect(w * 0.5 - 2, 0, 4, h);
    ctx.fillStyle = 'rgba(255,255,255,0.05)'; ctx.fillRect(w * 0.5 + 2, 0, 2, h);
    for (let j = 1; j < 4; j++) { ctx.fillStyle = 'rgba(0,0,0,0.4)'; ctx.fillRect(0, (j * h) / 4, w, 2); }
  },
  // fluorescent batten: bright tube in a grey trough
  lamp(ctx, w, h) {
    fill(ctx, w, h, '#8d9294');
    const g = ctx.createLinearGradient(0, h * 0.2, 0, h * 0.8);
    g.addColorStop(0, '#dfe8e4'); g.addColorStop(0.5, '#ffffff'); g.addColorStop(1, '#dfe8e4');
    ctx.fillStyle = g; ctx.fillRect(6, h * 0.22, w - 12, h * 0.56);
    ctx.fillStyle = '#6c7072'; ctx.fillRect(0, 0, 6, h); ctx.fillRect(w - 6, 0, 6, h);
  },
  speaker(ctx, w, h) {
    fill(ctx, w, h, '#cfcabb');
    ctx.fillStyle = '#2a2a2a';
    for (let y = 20; y < h - 16; y += 8) for (let x = 20 + ((y / 8) % 2) * 4; x < w - 16; x += 8) ctx.fillRect(x, y, 3, 3);
    ctx.strokeStyle = '#8a8676'; ctx.lineWidth = 5; ctx.strokeRect(6, 6, w - 12, h - 12);
  },
  comb(ctx, w, h) { fill(ctx, w, h, '#d9b21c'); ctx.fillStyle = '#2c2f31'; for (let x = 0; x < w; x += 6) ctx.fillRect(x, h * 0.3, 3, h * 0.7); },
  deck(ctx, w, h, r) { fill(ctx, w, h, '#7d8386'); speckle(ctx, w, h, r, 500, 0.12, 0.1); ctx.fillStyle = 'rgba(0,0,0,0.25)'; ctx.fillRect(0, 0, w, 3); },
  uplight(ctx, w, h) {
    const g = ctx.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, '#fff8e0'); g.addColorStop(0.35, '#f0e0b0'); g.addColorStop(1, '#6d6455');
    ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
  },
  daylight(ctx, w, h) {
    const g = ctx.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, '#ffffff'); g.addColorStop(1, '#f1f6ff');
    ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
  },
};
