// Wall finishes after the photographs in REFERENCES.md.
//
// 'passage'  (1024 x 512, V = floor → crown over 3.63 m): cream 9 x 3 in tiles
//   in stretcher bond, a dado of the station colour to 0.9 m, two one-tile
//   bands at 1.2 m and 1.45 m, a ring of the colour every 6 m.
// 'platform' (1024 x 1024): the top half is the platform-side wall, floor →
//   crown: dado, two bands, tiles up to the frieze line, then plain cream
//   render crossed by pairs of tile rings. The bottom half is the track-side
//   wall, bed (middle of the image) → crown (bottom edge): black to 1.1 m
//   above the platform with cable runs, then plain cream render and rings.
//   (The two dark edges meet in the middle, so filtering never bleeds a
//   light line into a dark one.)
// U repeats every 6 m along the tunnel.
import { makeCanvas, canvasTexture, shade, grime } from './canvas.js';
import { RNG, hashStr } from '../util/rng.js';

const COLS = 26;                 // tiles per 6 m repeat (≈ 9 in each)
const COURSE = 0.0756;           // height of a tile course, m
export const PLATFORM_TEX = { wall: 6.83, track: 8.02, frieze: 2.75, dado: 0.91, trackDado: 5.7 };

function tile(ctx, x, y, w, h, base, r) {
  ctx.fillStyle = shade(base, r.range(-0.07, 0.05));
  ctx.fillRect(x, y, w, h);
  ctx.fillStyle = 'rgba(255,255,255,0.16)'; ctx.fillRect(x + 1, y + 1, w - 2, Math.max(1, h * 0.18));   // glaze
  ctx.fillStyle = 'rgba(0,0,0,0.10)'; ctx.fillRect(x + 1, y + h - 1.5, w - 2, 1);
  if (r.chance(0.03)) { ctx.fillStyle = r.chance(0.5) ? 'rgba(60,50,35,0.22)' : 'rgba(255,255,255,0.18)'; ctx.fillRect(x + 1, y + 1, w - 2, h - 2); }
}

// Tiled wall from the floor (canvas y = yFloor) up over `height` metres.
// colourAt(row, yMetres, uFrac) → colour, or null to leave the row untiled.
function tiledWall(ctx, size, yFloor, pxPerM, height, theme, r, colourAt) {
  const tw = size / COLS, th = COURSE * pxPerM, rows = Math.ceil(height / COURSE);
  ctx.fillStyle = theme.grout; ctx.fillRect(0, yFloor - height * pxPerM, size, height * pxPerM);
  for (let row = 0; row < rows; row++) {
    const y = yFloor - (row + 1) * th, off = row % 2 ? tw / 2 : 0;
    for (let col = -1; col < COLS; col++) {
      const x = col * tw + off;
      const u = (((x + tw / 2) / size) % 1 + 1) % 1;
      const base = colourAt(row, (row + 0.5) * COURSE, u);
      if (!base) continue;
      tile(ctx, x + 0.5, y + 0.5, tw - 1, th - 1, base, r);
      if (x + tw > size) tile(ctx, x - size + 0.5, y + 0.5, tw - 1, th - 1, base, r);
    }
  }
}

const ROW = (m) => Math.round(m / COURSE);
// distance (in tile lengths) from the nearest ring centre; rings at `at`
const ringDist = (u, at) => Math.min(...at.map((a) => Math.abs(u - a))) * COLS;

function drawPassage(theme) {
  const size = 1024, sizeV = 512, pxPerM = sizeV / 3.63;
  const c = makeCanvas(size, sizeV), ctx = c.getContext('2d');
  const r = new RNG(hashStr(theme.id + 'passage'));
  const bands = [ROW(1.2), ROW(1.45)];
  tiledWall(ctx, size, sizeV, pxPerM, 3.63, theme, r, (row, y, u) => {
    if (y < 0.91) return theme.skirt;
    if (bands.includes(row)) return theme.band;
    if (y > 1.6) { const d = ringDist(u, [0.5]); if (d < 0.5) return theme.band; if (d < 1.05) return theme.accent; }
    return theme.ground;
  });
  const g = ctx.createLinearGradient(0, 0, 0, sizeV);
  g.addColorStop(0, 'rgba(25,20,12,0.4)'); g.addColorStop(0.3, 'rgba(25,20,12,0.1)'); g.addColorStop(0.8, 'rgba(25,20,12,0)'); g.addColorStop(1, 'rgba(25,20,12,0.25)');
  ctx.fillStyle = g; ctx.fillRect(0, 0, size, sizeV);
  grime(ctx, 0, 0, size, sizeV, hashStr(theme.id) + 7, 1.0, false);
  return c;
}

// Plain cream render with soft stains (the vault and the track-side wall).
function render(ctx, x, y, w, h, r) {
  ctx.fillStyle = '#e4dcc0'; ctx.fillRect(x, y, w, h);
  for (let i = 0; i < 26; i++) {
    const cx = x + r.range(0, w), cy = y + r.range(0, h), rad = r.range(30, 120);
    for (const ox of [-w, 0, w]) {
      const st = ctx.createRadialGradient(cx + ox, cy, 0, cx + ox, cy, rad);
      st.addColorStop(0, `rgba(60,48,26,${r.range(0.04, 0.1)})`); st.addColorStop(1, 'rgba(60,48,26,0)');
      ctx.fillStyle = st; ctx.fillRect(cx + ox - rad, cy - rad, rad * 2, rad * 2);
    }
  }
}

function drawPlatform(theme) {
  const size = 1024, half = 512, T = PLATFORM_TEX;
  const c = makeCanvas(size, size), ctx = c.getContext('2d');
  const r = new RNG(hashStr(theme.id + 'platform'));
  const pw = half / T.wall;                    // px per metre, platform-side half
  const rings = [0.25, 0.75], ringW = 0.16 * (size / 6), ringGap = 0.38 * (size / 6);
  const paintRings = (y0, h) => {
    for (const u of rings) for (const s of [-1, 1]) {
      const x = u * size + s * ringGap / 2 - ringW / 2;
      ctx.fillStyle = theme.band; ctx.fillRect(x, y0, ringW, h);
      ctx.fillStyle = 'rgba(255,255,255,0.10)'; ctx.fillRect(x, y0, 2, h);
      ctx.fillStyle = 'rgba(0,0,0,0.25)'; for (let yy = y0; yy < y0 + h; yy += COURSE * pw * 3) ctx.fillRect(x, yy, ringW, 1);
    }
  };
  // --- top half: platform-side wall
  render(ctx, 0, 0, size, half, r);
  paintRings(0, half - T.frieze * pw);
  const bands = [ROW(1.2), ROW(1.45)];
  tiledWall(ctx, size, half, pw, T.frieze, theme, r, (row, y, u) => {
    if (y < T.dado) return theme.skirt;
    if (bands.includes(row)) return theme.band;
    if (ringDist(u, rings.flatMap((q) => [q - 0.032, q + 0.032])) < 0.55) return theme.band;   // rings carry on down the tiles
    return theme.ground;
  });
  // --- bottom half: track-side wall, crown at the bottom edge
  const pt = half / T.track;                   // px per metre
  const Y = (arcFromCrown) => size - arcFromCrown * pt;
  render(ctx, 0, half, size, half, r);
  paintRings(Y(T.trackDado), T.trackDado * pt);
  ctx.fillStyle = '#17181a'; ctx.fillRect(0, half, size, Y(T.trackDado) - half);             // black dado down to the bed
  ctx.fillStyle = theme.band; ctx.fillRect(0, Y(3.6) - 3, size, 6);                           // thin line at frieze height
  const cables = [[0.25, 6, '#0b0b0b'], [0.42, 4, '#3a3a3a'], [0.6, 7, '#101010'], [0.78, 4, '#4a2c1a'], [1.0, 5, '#0c0c0c']];
  for (const [d, wdt, col] of cables) {
    const y = Y(T.trackDado + d);
    ctx.fillStyle = col; ctx.fillRect(0, y, size, wdt);
    ctx.fillStyle = 'rgba(255,255,255,0.13)'; ctx.fillRect(0, y, size, 1);
  }
  for (let x = 40; x < size; x += 170) { ctx.fillStyle = '#2c2d2f'; ctx.fillRect(x, Y(T.trackDado + 1.1), 5, 1.0 * pt); }   // brackets
  grime(ctx, 0, half, size, half, hashStr(theme.id) + 3, 0.8, false);
  // soot towards both crowns, wear near the platform floor
  const g = ctx.createLinearGradient(0, 0, 0, half);
  g.addColorStop(0, 'rgba(25,20,12,0.38)'); g.addColorStop(0.35, 'rgba(25,20,12,0.1)'); g.addColorStop(0.85, 'rgba(25,20,12,0)'); g.addColorStop(1, 'rgba(25,20,12,0.22)');
  ctx.fillStyle = g; ctx.fillRect(0, 0, size, half);
  const g2 = ctx.createLinearGradient(0, size, 0, half);
  g2.addColorStop(0, 'rgba(25,20,12,0.38)'); g2.addColorStop(0.4, 'rgba(25,20,12,0.12)'); g2.addColorStop(1, 'rgba(25,20,12,0.05)');
  ctx.fillStyle = g2; ctx.fillRect(0, half, size, half);
  grime(ctx, 0, 0, size, half, hashStr(theme.id) + 7, 1.0, false);
  return c;
}

export function drawTiles(theme, kind = 'passage') {
  return kind === 'platform' ? drawPlatform(theme) : drawPassage(theme);
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
