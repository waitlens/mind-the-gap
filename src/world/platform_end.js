// Platform headwalls. Each is ONE watertight triangulated wall (see
// flatwall.js) with two openings: the passage portal on the platform side
// and the running-tunnel mouth — a symmetric horseshoe arch centred over the
// track, with a brick ring and a short sooty recess that fades to black.
// Canonical layout as in platform_shell.js (track on +X); `side` mirrors it.
import { PF } from './platform_shell.js';
import { PASSAGE } from './sweep.js';
import { flatWall, notchedOutline } from './flatwall.js';
import { atlasRect, atlasFlat, atlasSub } from '../tex/atlas.js';

export const MOUTH = {
  hw: 1.25,       // half-width of the opening
  spring: 0.72,   // height (above the platform) where the round top starts
  ring: 0.2,      // width of the brick ring
  proud: 0.05,    // how far the ring stands out from the wall
  depth: 1.2,     // depth of the recess behind the ring
};
const N_TOP = 12, N_SIDE = 5;

// Horseshoe outline about x = xm with half-width r: left foot → up the side
// → semicircle → down to the right foot. Each point carries the direction
// pointing out of the opening (ox, oy).
function arch(xm, r, foot) {
  const pts = [];
  for (let i = 0; i <= N_SIDE; i++) pts.push({ x: xm - r, y: foot + ((MOUTH.spring - foot) * i) / N_SIDE, ox: -1, oy: 0 });
  for (let i = 1; i < N_TOP; i++) {
    const a = Math.PI * (1 - i / N_TOP);
    pts.push({ x: xm + r * Math.cos(a), y: MOUTH.spring + r * Math.sin(a), ox: Math.cos(a), oy: Math.sin(a) });
  }
  for (let i = N_SIDE; i >= 0; i--) pts.push({ x: xm + r, y: foot + ((MOUTH.spring - foot) * i) / N_SIDE, ox: 1, oy: 0 });
  return pts;
}

// z = wall plane; facing = +1 if the wall looks along +Z (entry end), -1 at
// the far end; portal = false for a blank platform side (the first platform).
export function buildHeadwall(b, z, facing, side, portal = true) {
  const X = (x) => side * x;
  const xm = PF.track, bed = PF.bed;
  // ---- the wall: a rectangle bigger than the tube (the excess is hidden
  //      behind the lining and under the floor), minus the two openings
  const y0 = bed - 0.3, y1 = PF.cy + PF.R + 0.35;
  const notches = [arch(xm, MOUTH.hw + MOUTH.ring * 0.5, y0)];
  // the wall's lip overlaps the passage lining by a few millimetres
  if (portal) notches.push(PASSAGE.map((p) => ({ x: p.x + p.nx * 0.004, y: p.y + p.ny * 0.004 })));
  const outline = notchedOutline(PF.back - 0.45, PF.cx + PF.R + 0.35, y0, y1, notches).map((p) => ({ x: X(p.x), y: p.y }));
  flatWall(b, { x: 0, y: 0, z, yaw: 0 }, facing, outline, {
    layer: 'ptile', grid: 0.6,
    // affine on purpose (no clamping): a clamp would bend the tile courses
    // inside the larger triangles. Below the platform v < 0 samples the dark
    // skirting row. The coloured ring of the tile texture lands over the portal.
    uv: (x, y) => [(x * side + 3) / 6, 0.004 + (0.992 * y) / PF.sCrown],
  });

  // ---- the mouth
  const zf = z + facing * MOUTH.proud;                 // front plane of the ring
  const n = [0, 0, facing];
  // (feet a little below the track bed, so the bed overlaps them)
  const foot = bed - 0.02;
  const inner = arch(xm, MOUTH.hw, foot), outer = arch(xm, MOUTH.hw + MOUTH.ring, foot);
  const brick = [atlasSub('brick', 0, 0, 0.5, 1), atlasSub('brick', 0.5, 0, 1, 1)];
  const sootFlat = atlasFlat('soot');
  for (let k = 0; k < inner.length - 1; k++) {
    const a = inner[k], c = inner[k + 1], d = outer[k + 1], e = outer[k];
    // ring face: bricks radiate, cell bottom (v0) on the inner edge
    b.quad('atlas', [X(a.x), a.y, zf], [X(c.x), c.y, zf], [X(d.x), d.y, zf], [X(e.x), e.y, zf], n, brick[k % 2]);
    // outer reveal, closing the ring back to the wall
    const on = [X((e.ox + d.ox) / 2), (e.oy + d.oy) / 2, 0];
    b.quad('atlas', [X(e.x), e.y, zf], [X(d.x), d.y, zf], [X(d.x), d.y, z], [X(e.x), e.y, z], on, sootFlat);
  }
  // recess: a few sooty rings, each darker than the last, then black.
  // It is a hair wider than the ring's inner edge so the ring overlaps it.
  const throat = arch(xm, MOUTH.hw + 0.006, foot);
  const soot = atlasRect('soot');
  const steps = [[0, 0.22, 0.2], [0.22, 0.55, 0.1], [0.55, MOUTH.depth, 0.04]];
  for (const [d0, d1, emit] of steps) {
    const za = zf - facing * d0, zb = zf - facing * d1;
    for (let k = 0; k < throat.length - 1; k++) {
      const a = throat[k], c = throat[k + 1];
      const inn = [X(-(a.ox + c.ox) / 2), -(a.oy + c.oy) / 2, 0];
      b.quad('atlas', [X(a.x), a.y, za], [X(c.x), c.y, za], [X(c.x), c.y, zb], [X(a.x), a.y, zb], inn, soot, { emit });
    }
    // Track bed and rails running on into the dark. The bed lies 3 mm under
    // the platform's own bed and starts a little way under it (the two are
    // cut differently, so they overlap instead of meeting edge to edge);
    // the rails carry on from exactly where the platform's rails stop.
    const xa = xm - MOUTH.hw - 0.01, xb = xm + MOUTH.hw + 0.01, zu = d0 === 0 ? z + facing * 0.2 : za, yb = bed - 0.003;
    b.quad('atlas', [X(xa), yb, zu], [X(xb), yb, zu], [X(xb), yb, zb], [X(xa), yb, zb], [0, 1, 0], atlasRect('ballast'), { emit: emit * 1.2 });
    const zs = d0 === 0 ? z : za;
    for (const [rx, rh] of PF.rails) {
      const x = xm + rx, y = bed + rh, w = 0.035;
      b.quad('atlas', [X(x - w), y, zs], [X(x + w), y, zs], [X(x + w), y, zb], [X(x - w), y, zb], [0, 1, 0], atlasRect('rail'), { emit: emit * 2.4 });
    }
  }
  // the far end of the recess is simply black
  const zc = zf - facing * MOUTH.depth, top = MOUTH.spring + MOUTH.hw + 0.06, hx = MOUTH.hw + 0.06;
  b.quad('atlas', [X(xm - hx), foot, zc], [X(xm + hx), foot, zc], [X(xm + hx), top, zc], [X(xm - hx), top, zc], n, atlasFlat('blackout'), { emit: 0 });
}
