// Livery of the train, painted on one small canvas (after the 1995 Stock in
// the reference photos): white sides over a blue skirt, red doors, lit
// windows, grey roof, dark underframe; a red cab end with a black window
// band, headlights and an amber destination blind.
import * as THREE from 'three';
import { makeCanvas, OSD_FONT } from './canvas.js';
import { drawSymbol } from './symbol.js';

const W = 512, H = 256;
// regions in pixels: [x, y, w, h]
export const TRAIN_UV = {
  side: [0, 0, 512, 160],        // one car side: u along the car, v underframe → roof edge
  front: [0, 164, 150, 92],      // cab end with headlights
  rear: [154, 164, 150, 92],     // cab end with tail lights
  roof: [310, 170, 30, 30], dark: [350, 170, 30, 30], lamp: [390, 170, 30, 30], tail: [430, 170, 30, 30],
};
// heights (metres above platform level) that the side strip spans
export const SIDE_Y = [-0.78, 1.5];

let canvas = null, ctx = null, texture = null;

const yOf = (m) => 160 - ((m - SIDE_Y[0]) / (SIDE_Y[1] - SIDE_Y[0])) * 160;

function windowPane(x, w, y0, y1) {
  const g = ctx.createLinearGradient(0, yOf(y1), 0, yOf(y0));
  g.addColorStop(0, '#fff6d6'); g.addColorStop(0.55, '#e9dba4'); g.addColorStop(1, '#8c8468');
  ctx.fillStyle = '#1b1c1e'; ctx.fillRect(x - 2, yOf(y1) - 2, w + 4, yOf(y0) - yOf(y1) + 4);
  ctx.fillStyle = g; ctx.fillRect(x, yOf(y1), w, yOf(y0) - yOf(y1));
  ctx.fillStyle = 'rgba(40,40,60,0.55)';                         // grab poles and seat backs
  ctx.fillRect(x + w * 0.3, yOf(y1), 2, yOf(y0) - yOf(y1));
  ctx.fillRect(x, yOf(y0 + 0.16), w, yOf(y0) - yOf(y0 + 0.16));
}

function paintSide() {
  const m = 512 / 8.5;                                            // px per metre along the car
  ctx.fillStyle = '#15161a'; ctx.fillRect(0, yOf(-0.05), W, 160 - yOf(-0.05));           // underframe
  for (const [a, b] of [[0.9, 2.3], [6.2, 7.6]]) {                // bogies
    ctx.fillStyle = '#26282c'; ctx.fillRect(a * m, yOf(-0.25), (b - a) * m, yOf(-0.7) - yOf(-0.25));
    for (const wx of [a + 0.35, b - 0.35]) { ctx.fillStyle = '#3a3c40'; ctx.beginPath(); ctx.arc(wx * m, yOf(-0.48), 0.27 * 70, 0, 7); ctx.fill(); }
  }
  ctx.fillStyle = '#f2f2ee'; ctx.fillRect(0, 0, W, yOf(0.42));   // white body
  ctx.fillStyle = '#0c2a8e'; ctx.fillRect(0, yOf(0.42), W, yOf(-0.05) - yOf(0.42));       // blue skirt
  ctx.fillStyle = '#9da2a6'; ctx.fillRect(0, 0, W, yOf(1.42));   // cantrail, grey like the roof
  // bays: [start, width, kind]
  const bays = [[0.25, 0.62, 'door1'], [1.05, 1.3, 'win'], [2.5, 1.3, 'door2'], [3.95, 0.6, 'win'], [4.7, 0.5, 'win'], [5.35, 1.3, 'door2'], [6.8, 1.3, 'win'], [8.2, 0.0, '']];
  for (const [x0, w, kind] of bays) {
    if (kind === 'win') windowPane(x0 * m, w * m, 0.72, 1.3);
    else if (kind) {
      ctx.fillStyle = '#d5231d'; ctx.fillRect(x0 * m, yOf(1.42), w * m, yOf(-0.05) - yOf(1.42));
      const leaves = kind === 'door2' ? 2 : 1;
      for (let i = 0; i < leaves; i++) {
        const lx = (x0 + (w / leaves) * i) * m, lw = (w / leaves) * m;
        windowPane(lx + lw * 0.2, lw * 0.6, 0.62, 1.3);
        ctx.fillStyle = 'rgba(0,0,0,0.5)'; ctx.fillRect(lx, yOf(1.42), 1.5, yOf(-0.05) - yOf(1.42));
      }
      ctx.fillStyle = '#e7c21c'; ctx.fillRect(x0 * m, yOf(-0.02), w * m, 3);   // door sill
    }
  }
  drawSymbol(ctx, 4.6 * m, yOf(0.2) - 6, 12, { name: '' });                     // roundel on the skirt line
  ctx.fillStyle = 'rgba(60,45,25,0.16)';                                        // brake dust
  for (let i = 0; i < 260; i++) ctx.fillRect(Math.random() * W, yOf(0.5) + Math.random() * (160 - yOf(0.5)), 2, 2 + Math.random() * 5);
}

function paintEnd(x0, lights) {
  const [, y0, w, h] = TRAIN_UV.front;
  ctx.fillStyle = '#d5231d'; ctx.fillRect(x0, y0, w, h);
  ctx.fillStyle = '#9da2a6'; ctx.fillRect(x0, y0, w, h * 0.06);
  ctx.fillStyle = '#101113'; ctx.fillRect(x0 + w * 0.06, y0 + h * 0.2, w * 0.88, h * 0.34);      // window band
  ctx.fillStyle = '#2a2f36';
  for (const [a, b] of [[0.09, 0.36], [0.41, 0.59], [0.64, 0.91]]) ctx.fillRect(x0 + w * a, y0 + h * 0.23, w * (b - a), h * 0.28);
  ctx.fillStyle = '#101113'; ctx.fillRect(x0 + w * 0.3, y0 + h * 0.07, w * 0.4, h * 0.11);       // blind box
  ctx.fillStyle = '#101113'; ctx.fillRect(x0, y0 + h * 0.86, w, h * 0.14);                       // buffer beam
  for (const fx of [0.16, 0.84]) {
    ctx.fillStyle = lights; ctx.beginPath(); ctx.arc(x0 + w * fx, y0 + h * 0.7, h * 0.055, 0, 7); ctx.fill();
    ctx.fillStyle = '#55120f'; ctx.beginPath(); ctx.arc(x0 + w * (fx < 0.5 ? fx + 0.09 : fx - 0.09), y0 + h * 0.7, h * 0.04, 0, 7); ctx.fill();
  }
}

function ensure() {
  if (canvas) return;
  canvas = makeCanvas(W, H);
  ctx = canvas.getContext('2d');
  ctx.fillStyle = '#15161a'; ctx.fillRect(0, 0, W, H);
  paintSide();
  paintEnd(TRAIN_UV.front[0], '#fff4c8');
  paintEnd(TRAIN_UV.rear[0], '#ff2a1a');
  const flat = (r, c) => { ctx.fillStyle = c; ctx.fillRect(r[0] - 3, r[1] - 3, r[2] + 6, r[3] + 6); };
  flat(TRAIN_UV.roof, '#8d9296'); flat(TRAIN_UV.dark, '#131417'); flat(TRAIN_UV.lamp, '#fff6d8'); flat(TRAIN_UV.tail, '#ff2a1a');
  texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.NoColorSpace;
  texture.anisotropy = 2;
}

export function trainTexture() { ensure(); return texture; }

// Write the destination on the front blind (amber dot-matrix lettering).
export function setBlind(text) {
  ensure();
  const [x0, y0, w, h] = TRAIN_UV.front;
  ctx.fillStyle = '#0b0a08'; ctx.fillRect(x0 + w * 0.31, y0 + h * 0.08, w * 0.38, h * 0.09);
  ctx.fillStyle = '#ffb21e'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  let size = h * 0.1;
  ctx.font = `400 ${size}px ${OSD_FONT}`;
  const wt = ctx.measureText(text).width;
  if (wt > w * 0.36) { size *= (w * 0.36) / wt; ctx.font = `400 ${size}px ${OSD_FONT}`; }
  ctx.fillText(text, x0 + w * 0.5, y0 + h * 0.128);
  texture.needsUpdate = true;
}

// uv rect [u0, v0, u1, v1] of a region (v0 = bottom).
export function trainRect(name) {
  const [x, y, w, h] = TRAIN_UV[name];
  return [(x + 0.5) / W, 1 - (y + h - 0.5) / H, (x + w - 0.5) / W, 1 - (y + 0.5) / H];
}
