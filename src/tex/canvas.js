// Canvas helpers shared by all procedural textures.
import * as THREE from 'three';
import { RNG } from '../util/rng.js';

export const HEAD_FONT = "'Hammersmith One', 'Gill Sans', 'Trebuchet MS', sans-serif";
export const BODY_FONT = "'Cabin', 'Gill Sans', 'Trebuchet MS', sans-serif";
export const OSD_FONT = "'VT323', 'Courier New', monospace";

export function makeCanvas(w, h) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  return c;
}

// Wait for the locally bundled web fonts so canvas text uses them.
export async function loadFonts() {
  if (!document.fonts || !document.fonts.load) return;
  const wanted = ["400 32px 'Hammersmith One'", "400 32px 'Cabin'", "700 32px 'Cabin'", "400 32px 'VT323'"];
  try {
    await Promise.race([
      Promise.all(wanted.map((f) => document.fonts.load(f, 'Way out 0123'))),
      new Promise((r) => setTimeout(r, 2500)),
    ]);
  } catch { /* fall back to system sans */ }
}

export function canvasTexture(canvas, { repeatU = false, repeatV = false, mip = true } = {}) {
  const t = new THREE.CanvasTexture(canvas);
  t.colorSpace = THREE.NoColorSpace;
  t.wrapS = repeatU ? THREE.RepeatWrapping : THREE.ClampToEdgeWrapping;
  t.wrapT = repeatV ? THREE.RepeatWrapping : THREE.ClampToEdgeWrapping;
  t.generateMipmaps = mip;
  t.minFilter = mip ? THREE.LinearMipmapLinearFilter : THREE.LinearFilter;
  t.magFilter = THREE.LinearFilter;
  t.anisotropy = 2;
  t.needsUpdate = true;
  return t;
}

export function hexToRgb(hex) {
  const n = parseInt(hex.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

// Shift a hex colour's brightness by amt (-1..1) and return a css string.
export function shade(hex, amt) {
  const [r, g, b] = hexToRgb(hex);
  const f = (v) => Math.max(0, Math.min(255, Math.round(amt >= 0 ? v + (255 - v) * amt : v * (1 + amt))));
  return `rgb(${f(r)},${f(g)},${f(b)})`;
}

// Sprinkle grime: speckles, drips and a soft darkening towards the bottom.
// drips = false leaves out the long thin run-marks: on wall tiling they read
// as stray vertical lines once the picture is scaled down and scanlined.
export function grime(ctx, x, y, w, h, seed = 1, strength = 1, drips = true) {
  const r = new RNG(seed);
  ctx.save();
  ctx.beginPath(); ctx.rect(x, y, w, h); ctx.clip();
  const n = Math.floor((w * h) / 900 * strength);
  for (let i = 0; i < n; i++) {
    const a = r.range(0.02, 0.09) * strength;
    ctx.fillStyle = r.chance(0.75) ? `rgba(30,24,14,${a})` : `rgba(255,255,240,${a * 0.6})`;
    const s = r.range(1, 5);
    ctx.fillRect(x + r.range(0, w), y + r.range(0, h), s, s * r.range(0.5, drips ? 3 : 1.4));
  }
  for (let i = 0; drips && i < Math.floor((w / 90) * strength); i++) {
    const dx = x + r.range(0, w), dy = y + r.range(0, h * 0.7), len = r.range(h * 0.05, h * 0.35);
    const g = ctx.createLinearGradient(0, dy, 0, dy + len);
    g.addColorStop(0, `rgba(40,30,15,${0.10 * strength})`); g.addColorStop(1, 'rgba(40,30,15,0)');
    ctx.fillStyle = g; ctx.fillRect(dx, dy, r.range(2, 7), len);
  }
  ctx.restore();
}

// Fit text into maxW by shrinking the font; returns the font size used.
export function fitText(ctx, text, maxW, size, font = HEAD_FONT, weight = 400) {
  let s = size;
  ctx.font = `${weight} ${s}px ${font}`;
  const w = ctx.measureText(text).width;
  if (w > maxW) { s = Math.max(6, Math.floor((s * maxW) / w)); ctx.font = `${weight} ${s}px ${font}`; }
  return s;
}

// Word-wrap text into lines no wider than maxW (font must already be set).
export function wrapLines(ctx, text, maxW) {
  const out = [];
  for (const para of String(text).split('\n')) {
    let line = '';
    for (const word of para.split(' ')) {
      const t = line ? `${line} ${word}` : word;
      if (ctx.measureText(t).width > maxW && line) { out.push(line); line = word; } else line = t;
    }
    out.push(line);
  }
  return out;
}

// Arrow with a plain shaft and chevron head, pointing along `dir`
// ('left' | 'right' | 'up' | 'down' | 'back'), centred at cx,cy.
export function drawArrow(ctx, cx, cy, size, dir, color) {
  const rot = { right: 0, down: Math.PI / 2, left: Math.PI, up: -Math.PI / 2, back: Math.PI / 2 }[dir] ?? 0;
  ctx.save();
  ctx.translate(cx, cy); ctx.rotate(rot);
  ctx.strokeStyle = color; ctx.lineWidth = size * 0.16; ctx.lineCap = 'butt'; ctx.lineJoin = 'miter';
  ctx.beginPath();
  ctx.moveTo(-size * 0.5, 0); ctx.lineTo(size * 0.46, 0);
  ctx.moveTo(size * 0.1, -size * 0.38); ctx.lineTo(size * 0.48, 0); ctx.lineTo(size * 0.1, size * 0.38);
  ctx.stroke();
  ctx.restore();
}
