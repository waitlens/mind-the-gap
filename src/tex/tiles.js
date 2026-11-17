// Glazed wall tiling in the Leslie Green manner: small oblong tiles in
// stretcher bond on a cream ground, a dark skirting, a coloured dado band and
// coloured rings that loop over the vault at intervals. One texture per
// colour scheme; U repeats every 6 m along the tunnel, V runs floor → crown.
import { makeCanvas, canvasTexture, shade, grime } from './canvas.js';
import { RNG, hashStr } from '../util/rng.js';

const COLS = 26; // tiles per 6 m repeat (≈ 9 in each)

// kind: 'passage' (developed height ≈ 3.6 m) or 'platform' (≈ 5.6 m)
const LAYOUT = {
  passage: { rows: 48, skirt: 2, band: [14, 15], thin: [13, 16], ringFrom: 17, ringHalf: 0.5, frieze: null },
  platform: { rows: 72, skirt: 2, band: [13, 15], thin: [12, 16], ringFrom: 17, ringHalf: 1.0, frieze: null },
};

function drawTile(ctx, x, y, w, h, base, r) {
  ctx.fillStyle = shade(base, r.range(-0.07, 0.05));
  ctx.fillRect(x, y, w, h);
  // glaze: light top edge, darker bottom edge
  ctx.fillStyle = 'rgba(255,255,255,0.16)';
  ctx.fillRect(x + 1, y + 1, w - 2, Math.max(1, h * 0.18));
  ctx.fillStyle = 'rgba(0,0,0,0.10)';
  ctx.fillRect(x + 1, y + h - 2, w - 2, 1);
  if (r.chance(0.035)) { // chipped / replaced tile
    ctx.fillStyle = r.chance(0.5) ? 'rgba(60,50,35,0.25)' : 'rgba(255,255,255,0.2)';
    ctx.fillRect(x + 1, y + 1, w - 2, h - 2);
  }
}

export function drawTiles(theme, kind = 'passage', size = 1024, sizeV = 512) {
  const lay = LAYOUT[kind];
  const c = makeCanvas(size, sizeV);
  const ctx = c.getContext('2d');
  const r = new RNG(hashStr(theme.id + kind));
  const tw = size / COLS, th = sizeV / lay.rows;
  ctx.fillStyle = theme.grout;
  ctx.fillRect(0, 0, size, sizeV);
  for (let row = 0; row < lay.rows; row++) {
    const y = sizeV - (row + 1) * th; // row 0 at the floor (bottom of the canvas)
    const off = row % 2 ? tw / 2 : 0;
    for (let col = -1; col < COLS; col++) {
      const x = col * tw + off;
      const centre = ((x + tw / 2) / size + 1) % 1; // 0..1 along the repeat
      const dRing = Math.abs(centre - 0.5) * COLS;   // distance from ring centre in tiles
      let base = theme.ground;
      if (row < lay.skirt) base = theme.skirt;
      else if (row >= lay.band[0] && row <= lay.band[1]) base = theme.band;
      else if (lay.thin.includes(row)) base = theme.accent;
      else if (lay.frieze && lay.frieze.includes(row)) base = theme.band;
      else if (row >= lay.ringFrom) {
        if (dRing < lay.ringHalf) base = theme.band;
        else if (dRing < lay.ringHalf + 0.55) base = theme.accent;
      }
      drawTile(ctx, x + 0.5, y + 0.5, tw - 1, th - 1, base, r);
      if (x + tw > size) drawTile(ctx, x - size + 0.5, y + 0.5, tw - 1, th - 1, base, r);
    }
  }
  // soot towards the crown, scuffs near the floor
  const g = ctx.createLinearGradient(0, 0, 0, sizeV);
  g.addColorStop(0, 'rgba(25,20,12,0.42)');
  g.addColorStop(0.3, 'rgba(25,20,12,0.12)');
  g.addColorStop(0.8, 'rgba(25,20,12,0.0)');
  g.addColorStop(1, 'rgba(25,20,12,0.28)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, sizeV);
  grime(ctx, 0, 0, size, sizeV, hashStr(theme.id) + 7, 1.1);
  return c;
}

const cache = new Map();

// Shared, cached texture for a theme. kind = 'passage' | 'platform'.
export function tileTexture(theme, kind = 'passage') {
  const key = theme.id + ':' + kind;
  let t = cache.get(key);
  if (!t) {
    t = canvasTexture(drawTiles(theme, kind), { repeatU: true });
    cache.set(key, t);
  }
  return t;
}
