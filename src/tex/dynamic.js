// The one animated texture in the game, shared by every dot-matrix
// indicator and every clock: two indicator boards and two clock faces
// (one running forwards, one backwards).
import * as THREE from 'three';
import { makeCanvas, OSD_FONT } from './canvas.js';

const W = 512, H = 256;
const REG = {
  board: [0, 0, 384, 128],     // next-train indicator
  board2: [0, 128, 384, 128],  // alternative board (junction notices)
  clock: [384, 0, 128, 128],   // forwards
  clockBack: [384, 128, 128, 128],
};

let canvas = null, ctx = null, texture = null, dots = null;

function ensure() {
  if (canvas) return;
  canvas = makeCanvas(W, H);
  ctx = canvas.getContext('2d');
  // LED mask: dark grid that turns solid glyphs into dots
  const m = makeCanvas(4, 4), mc = m.getContext('2d');
  mc.fillStyle = 'rgba(0,0,0,0.78)'; mc.fillRect(0, 0, 4, 1); mc.fillRect(0, 0, 1, 4);
  dots = ctx.createPattern(m, 'repeat');
  texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.NoColorSpace;
  texture.generateMipmaps = false;
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
}

export function dynamicTexture() { ensure(); return texture; }

export function dynRect(name) {
  const [x, y, w, h] = REG[name];
  const e = 1;
  return [(x + e) / W, 1 - (y + h - e) / H, (x + w - e) / W, 1 - (y + e) / H];
}

// rows: [{l, r}] up to 3; footer: string (time of day)
function drawBoard(reg, rows, footer) {
  const [x, y, w, h] = REG[reg];
  ctx.save();
  ctx.beginPath(); ctx.rect(x, y, w, h); ctx.clip();
  ctx.fillStyle = '#060504'; ctx.fillRect(x, y, w, h);
  ctx.fillStyle = '#ffab1a';
  ctx.font = `400 30px ${OSD_FONT}`; ctx.textBaseline = 'middle';
  const rh = h / 4;
  rows.slice(0, 3).forEach((r, i) => {
    const cy = y + rh * (i + 0.5) + 2;
    ctx.textAlign = 'left'; ctx.fillText(r.l || '', x + 10, cy, r.r ? w - 110 : w - 20);
    if (r.r) { ctx.textAlign = 'right'; ctx.fillText(r.r, x + w - 10, cy); }
  });
  ctx.textAlign = 'center';
  ctx.fillText(footer || '', x + w / 2, y + rh * 3.5 + 1, w - 20);
  ctx.fillStyle = dots; ctx.fillRect(x, y, w, h);
  ctx.restore();
}

// Analogue platform clock. tod = seconds since midnight (may run backwards).
function drawClock(reg, tod, odd) {
  const [x, y, w, h] = REG[reg];
  const cx = x + w / 2, cy = y + h / 2, R = w * 0.46;
  ctx.save();
  ctx.beginPath(); ctx.rect(x, y, w, h); ctx.clip();
  ctx.fillStyle = '#1a1b1c'; ctx.fillRect(x, y, w, h);
  ctx.fillStyle = odd ? '#e8e2cc' : '#f2efe4'; ctx.beginPath(); ctx.arc(cx, cy, R, 0, 7); ctx.fill();
  ctx.strokeStyle = '#14213d'; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(cx, cy, R - 1.5, 0, 7); ctx.stroke();
  ctx.strokeStyle = '#111';
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * Math.PI * 2, r0 = R * (i % 3 === 0 ? 0.74 : 0.82);
    ctx.lineWidth = i % 3 === 0 ? 4 : 2;
    ctx.beginPath(); ctx.moveTo(cx + Math.sin(a) * r0, cy - Math.cos(a) * r0);
    ctx.lineTo(cx + Math.sin(a) * R * 0.9, cy - Math.cos(a) * R * 0.9); ctx.stroke();
  }
  const hand = (frac, len, lw, col) => {
    const a = frac * Math.PI * 2;
    ctx.strokeStyle = col; ctx.lineWidth = lw; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.moveTo(cx - Math.sin(a) * len * 0.15, cy + Math.cos(a) * len * 0.15);
    ctx.lineTo(cx + Math.sin(a) * len, cy - Math.cos(a) * len); ctx.stroke();
  };
  const t = ((tod % 43200) + 43200) % 43200;
  hand(t / 43200, R * 0.5, 5, '#111');
  hand((t % 3600) / 3600, R * 0.74, 3.5, '#111');
  hand(Math.floor(t % 60) / 60, R * 0.8, 1.6, '#b3261e');
  ctx.fillStyle = '#b3261e'; ctx.beginPath(); ctx.arc(cx, cy, 4, 0, 7); ctx.fill();
  ctx.restore();
}

// s: { rows, footer, rows2, footer2, tod, todBack }
export function drawDynamic(s) {
  ensure();
  drawBoard('board', s.rows || [], s.footer || '');
  drawBoard('board2', s.rows2 || [], s.footer2 || '');
  drawClock('clock', s.tod || 0, false);
  drawClock('clockBack', s.todBack || 0, true);
  texture.needsUpdate = true;
}
