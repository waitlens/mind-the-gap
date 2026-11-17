// Global prop/floor atlas: one 1024² canvas of procedurally painted cells,
// shared by every segment (one draw call per segment for all of it).
import { makeCanvas, canvasTexture } from './canvas.js';
import { RNG, hashStr } from '../util/rng.js';
import { PAINT } from './atlas_paint.js';
import { PAINT2 } from './atlas_paint2.js';

const S = 1024, CELL = 128;

// name: [col, row, wCells, hCells]
const CELLS = {
  floor: [0, 0, 1, 1], floorDark: [1, 0, 1, 1], concrete: [2, 0, 1, 1], tactile: [3, 0, 1, 1],
  yellow: [4, 0, 1, 1], white: [5, 0, 1, 1], black: [6, 0, 1, 1], metal: [7, 0, 1, 1],
  wood: [0, 1, 1, 1], rubber: [1, 1, 1, 1], tread: [2, 1, 1, 1], stairTread: [3, 1, 1, 1],
  riser: [4, 1, 1, 1], ballast: [5, 1, 1, 1], rail: [6, 1, 1, 1], grille: [7, 1, 1, 1],
  mindgap: [0, 2, 4, 1], cable: [4, 2, 1, 1], soot: [5, 2, 1, 1], lamp: [6, 2, 1, 1], speaker: [7, 2, 1, 1],
  door: [0, 3, 1, 2], gate: [1, 3, 2, 2], helpPoint: [3, 3, 1, 2], bench: [4, 3, 2, 1],
  extinguisher: [6, 3, 1, 1], cctv: [7, 3, 1, 1],
  figure: [4, 4, 1, 2], shutter: [5, 4, 2, 2], daylight: [7, 4, 1, 1], edge: [7, 5, 1, 1],
  navy: [0, 5, 1, 1], cream: [1, 5, 1, 1], steelDark: [2, 5, 1, 1], signBack: [3, 5, 1, 1],
  comb: [0, 6, 1, 1], deck: [1, 6, 1, 1], uplight: [2, 6, 1, 1], blackout: [3, 6, 1, 1],
  brick: [4, 5, 2, 1],
};

let canvas = null, texture = null;

export function buildAtlasCanvas() {
  if (canvas) return canvas;
  canvas = makeCanvas(S, S);
  const ctx = canvas.getContext('2d');
  // opaque everywhere except inside the few cut-out cells (which clear
  // themselves), so blurred mip levels never turn see-through
  ctx.fillStyle = '#3b3a37'; ctx.fillRect(0, 0, S, S);
  const painters = { ...PAINT, ...PAINT2 };
  for (const [name, [cx, cy, cw, ch]] of Object.entries(CELLS)) {
    const fn = painters[name];
    ctx.save();
    ctx.translate(cx * CELL, cy * CELL);
    ctx.beginPath(); ctx.rect(0, 0, cw * CELL, ch * CELL); ctx.clip();
    if (fn) fn(ctx, cw * CELL, ch * CELL, new RNG(hashStr(name)));
    else { ctx.fillStyle = '#f0f'; ctx.fillRect(0, 0, cw * CELL, ch * CELL); }
    ctx.restore();
  }
  return canvas;
}

export function atlasTexture() {
  if (!texture) texture = canvasTexture(buildAtlasCanvas());
  return texture;
}

// UV rect [u0, v0, u1, v1] of a cell (v0 = bottom of the image), inset a few
// texels so neighbouring cells do not bleed in through filtering.
export function atlasRect(name, inset = 3) {
  const c = CELLS[name];
  if (!c) throw new Error('atlas: unknown cell ' + name);
  const x = c[0] * CELL + inset, y = c[1] * CELL + inset;
  const w = c[2] * CELL - inset * 2, h = c[3] * CELL - inset * 2;
  return [x / S, 1 - (y + h) / S, (x + w) / S, 1 - y / S];
}

// A sub-rectangle of a cell, in fractions of the cell (fx0,fy0 = left,bottom).
export function atlasSub(name, fx0, fy0, fx1, fy1) {
  const r = atlasRect(name);
  return [r[0] + (r[2] - r[0]) * fx0, r[1] + (r[3] - r[1]) * fy0, r[0] + (r[2] - r[0]) * fx1, r[1] + (r[3] - r[1]) * fy1];
}

// A tiny rect in the middle of a flat-colour cell (for untextured surfaces).
export function atlasFlat(name) {
  return atlasSub(name, 0.4, 0.4, 0.6, 0.6);
}
