// Painters for the prop atlas cells (doors, gates, benches, the figure…).
import { BODY_FONT, HEAD_FONT } from './canvas.js';

const fill = (ctx, w, h, c) => { ctx.fillStyle = c; ctx.fillRect(0, 0, w, h); };

export const PAINT2 = {
  // grey staff door with a small blue notice and a kick plate (1 x 2 cells)
  door(ctx, w, h, r) {
    fill(ctx, w, h, '#2c2e30');
    ctx.fillStyle = '#6f7577'; ctx.fillRect(6, 6, w - 12, h - 8);
    ctx.fillStyle = 'rgba(0,0,0,0.18)'; ctx.fillRect(6, 6, 4, h - 8); ctx.fillRect(w - 10, 6, 4, h - 8);
    ctx.fillStyle = '#9aa0a3'; ctx.fillRect(10, h - 44, w - 20, 38);       // kick plate
    ctx.fillStyle = '#1d2f66'; ctx.fillRect(w * 0.2, h * 0.2, w * 0.6, h * 0.1);
    ctx.fillStyle = '#fff'; ctx.font = `700 ${h * 0.036}px ${BODY_FONT}`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText('STAFF ONLY', w / 2, h * 0.235); ctx.fillText('No public access', w / 2, h * 0.275);
    ctx.fillStyle = '#c8cccf'; ctx.fillRect(w - 28, h * 0.5, 12, 26);        // handle
    ctx.fillStyle = '#101010'; ctx.beginPath(); ctx.arc(w - 22, h * 0.5 + 38, 3, 0, 7); ctx.fill();
    for (let i = 0; i < 60; i++) { ctx.fillStyle = `rgba(0,0,0,${r.range(0.03, 0.12)})`; ctx.fillRect(r.range(6, w - 8), r.range(6, h), 2, r.range(2, 12)); }
  },
  // collapsible lattice gate (transparent between the bars) — 2 x 2 cells
  gate(ctx, w, h) {
    ctx.clearRect(0, 0, w, h);
    ctx.strokeStyle = '#17181a'; ctx.lineWidth = 5; ctx.lineCap = 'butt';
    const n = 10, dx = w / n;
    for (let i = 0; i <= n; i++) { ctx.beginPath(); ctx.moveTo(i * dx, 0); ctx.lineTo(i * dx, h); ctx.stroke(); }
    ctx.lineWidth = 3.5; ctx.strokeStyle = '#202224';
    const rows = 5, dy = h / rows;
    for (let j = 0; j < rows; j++) for (let i = 0; i < n; i++) {
      ctx.beginPath(); ctx.moveTo(i * dx, j * dy); ctx.lineTo((i + 1) * dx, (j + 1) * dy); ctx.stroke();
      ctx.beginPath(); ctx.moveTo((i + 1) * dx, j * dy); ctx.lineTo(i * dx, (j + 1) * dy); ctx.stroke();
    }
    ctx.fillStyle = '#17181a'; ctx.fillRect(0, 0, w, 8); ctx.fillRect(0, h - 8, w, 8);
  },
  // passenger help point: a round-topped panel with two buttons (1 x 2 cells)
  helpPoint(ctx, w, h) {
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = '#d9d9d2';
    ctx.beginPath(); ctx.arc(w / 2, w / 2, w / 2 - 6, Math.PI, 0); ctx.lineTo(w - 6, h - 6); ctx.lineTo(6, h - 6); ctx.closePath(); ctx.fill();
    ctx.fillStyle = '#14213d'; ctx.fillRect(16, h * 0.1, w - 32, h * 0.13);
    ctx.fillStyle = '#fff'; ctx.font = `400 ${h * 0.07}px ${HEAD_FONT}`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText('Help point', w / 2, h * 0.17);
    const btn = (y, c, label) => {
      ctx.fillStyle = '#8a8a84'; ctx.beginPath(); ctx.arc(w / 2, y, w * 0.2, 0, 7); ctx.fill();
      ctx.fillStyle = c; ctx.beginPath(); ctx.arc(w / 2, y, w * 0.15, 0, 7); ctx.fill();
      ctx.fillStyle = '#222'; ctx.font = `700 ${h * 0.04}px ${BODY_FONT}`; ctx.fillText(label, w / 2, y + w * 0.3);
    };
    btn(h * 0.4, '#1f8a3c', 'Information'); btn(h * 0.66, '#c9281c', 'Emergency');
    ctx.fillStyle = '#333'; for (let x = 28; x < w - 24; x += 8) ctx.fillRect(x, h * 0.86, 4, h * 0.06);
  },
  // bench front: slatted seat and back in dark timber on steel legs (2 x 1 cells)
  bench(ctx, w, h, r) {
    ctx.clearRect(0, 0, w, h);
    for (let j = 0; j < 5; j++) {
      ctx.fillStyle = `rgb(${88 + r.int(-8, 8)},${56 + r.int(-6, 6)},${30 + r.int(-5, 5)})`;
      ctx.fillRect(0, j * (h / 5) + 2, w, h / 5 - 4);
      ctx.fillStyle = 'rgba(255,255,255,0.10)'; ctx.fillRect(0, j * (h / 5) + 2, w, 2);
    }
    ctx.fillStyle = '#3b3f42'; for (const x of [0.08, 0.5, 0.92]) ctx.fillRect(w * x - 4, 0, 8, h);
  },
  extinguisher(ctx, w, h) {
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = '#b8b8b0'; ctx.fillRect(14, 4, w - 28, h - 8);
    ctx.fillStyle = '#c0281e'; ctx.fillRect(22, 12, w - 44, h - 24);
    ctx.fillStyle = '#fff'; ctx.font = `700 ${h * 0.12}px ${BODY_FONT}`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText('FIRE', w / 2, h * 0.4); ctx.fillText('POINT', w / 2, h * 0.56);
  },
  cctv(ctx, w, h) {
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = '#d6d6cf'; ctx.fillRect(w * 0.12, h * 0.3, w * 0.7, h * 0.34);
    ctx.fillStyle = '#111'; ctx.beginPath(); ctx.arc(w * 0.78, h * 0.47, h * 0.13, 0, 7); ctx.fill();
    ctx.fillStyle = '#35f'; ctx.beginPath(); ctx.arc(w * 0.76, h * 0.45, h * 0.035, 0, 7); ctx.fill();
    ctx.fillStyle = '#8a8a84'; ctx.fillRect(w * 0.3, h * 0.05, w * 0.08, h * 0.26);
    ctx.fillStyle = '#c0281e'; ctx.beginPath(); ctx.arc(w * 0.2, h * 0.38, 4, 0, 7); ctx.fill();
  },
  // a standing figure, far away: just a soft dark shape (1 x 2 cells)
  figure(ctx, w, h) {
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = '#050505';
    ctx.beginPath(); ctx.ellipse(w / 2, h * 0.1, w * 0.13, h * 0.065, 0, 0, 7); ctx.fill();   // head
    ctx.beginPath();                                                                           // coat
    ctx.moveTo(w * 0.5, h * 0.15);
    ctx.bezierCurveTo(w * 0.86, h * 0.17, w * 0.8, h * 0.5, w * 0.76, h * 0.98);
    ctx.lineTo(w * 0.24, h * 0.98);
    ctx.bezierCurveTo(w * 0.2, h * 0.5, w * 0.14, h * 0.17, w * 0.5, h * 0.15);
    ctx.fill();
  },
  // arch ring of the running-tunnel portal: sooty engineering-brick
  // voussoirs, six across; the bottom of the cell is the inner edge (2 x 1)
  brick(ctx, w, h, r) {
    fill(ctx, w, h, '#1d1a17');
    const n = 6, bw = w / n;
    for (let i = 0; i < n; i++) {
      const v = r.int(-10, 10);
      ctx.fillStyle = `rgb(${138 + v},${86 + v},${66 + v})`;
      ctx.fillRect(i * bw + 2, 3, bw - 4, h - 6);
      ctx.fillStyle = 'rgba(255,220,190,0.10)'; ctx.fillRect(i * bw + 2, 3, bw - 4, 4);
    }
    const g = ctx.createLinearGradient(0, 0, 0, h);          // soot thickens towards the opening
    g.addColorStop(0, 'rgba(10,8,6,0.08)'); g.addColorStop(1, 'rgba(10,8,6,0.55)');
    ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < 260; i++) { ctx.fillStyle = `rgba(0,0,0,${r.range(0.04, 0.16)})`; ctx.fillRect(r.range(0, w), r.range(0, h), r.range(1, 4), r.range(1, 6)); }
  },
  // roller shutter (2 x 2 cells)
  shutter(ctx, w, h, r) {
    fill(ctx, w, h, '#6a6f72');
    for (let y = 0; y < h; y += 12) {
      ctx.fillStyle = `rgba(255,255,255,${r.range(0.06, 0.14)})`; ctx.fillRect(0, y, w, 3);
      ctx.fillStyle = 'rgba(0,0,0,0.3)'; ctx.fillRect(0, y + 9, w, 3);
    }
    for (let i = 0; i < 120; i++) { ctx.fillStyle = `rgba(30,20,10,${r.range(0.03, 0.1)})`; ctx.fillRect(r.range(0, w), r.range(0, h), r.range(2, 10), r.range(4, 30)); }
    ctx.fillStyle = '#2a2c2e'; ctx.fillRect(0, h - 14, w, 14);
  },
};
