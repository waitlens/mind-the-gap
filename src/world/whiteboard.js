// The staff whiteboard as an object in the station: screwed to a passage
// wall with a marker tray under it, or standing on a flip-chart easel at
// the end of a platform or in the corner of a junction hall. The writing is
// one piece on the segment's sign sheet; the frame, tray, pens and legs are
// a couple of dozen quads from the shared atlas (no extra draw calls).
import { atlasFlat } from '../tex/atlas.js';
import { framePoint } from './sweep.js';
import { drawThoughtBoard } from '../tex/whiteboard.js';
import { RNG, hash32 } from '../util/rng.js';

export const BOARD_PX = [240, 180];             // 4 : 3, like the boards
const ALU = { tint: [0.9, 0.92, 0.95] };
const PENS = [[0.14, 0.22, 0.78], [0.82, 0.13, 0.1], [0.09, 0.09, 0.11]];
const MATT = { tint: [0.9, 0.9, 0.9] };         // keeps the white surface from burning out on tape

// Whiteboards and newspapers were added after the rest of the dressing: they
// draw their random numbers from a stream of their own, so everything else in a
// seeded station stays exactly where it was.
export function extraRng(ctx) {
  return ctx.rng2 || (ctx.rng2 = new RNG(hash32(ctx.node ? ctx.node.seed : 1, 4242)));
}

// What READ shows, and what the tests can see.
export function boardItem(pos, th) {
  return {
    ...pos, r: 4.6, label: 'read whiteboard', title: 'STAFF WHITEBOARD', text: th.caption,
    board: { tier: th.tier, clue: th.clue, says: th.says ?? -1, lie: !!th.lie },
  };
}

// Draw the board's face on the segment's sign sheet; returns its uv rect.
// (Segments with a crowded sheet do this early, before the small pieces.)
export const paintBoard = (ctx, th) => ctx.sheet.add(BOARD_PX[0], BOARD_PX[1], (c, w, h) => drawThoughtBoard(c, w, h, th, extraRng(ctx)));

// On a passage wall. f = frame on the path, side = which wall, s = the
// wall's distance from the centreline. Stands 5 cm proud of the wall, which
// keeps its top clear of the vault where the lining starts to lean in.
export function wallBoard(ctx, f, side, s, th) {
  const { b } = ctx;
  const W = 1.0, H = 0.75, y0 = 0.84;
  const uv = paintBoard(ctx, th);
  const [px, , pz] = framePoint(f, 0, 0);
  b.place(px, f.y, pz, f.yaw);
  const xf = side * (s - 0.05), xw = side * (s + 0.03), zl = side > 0 ? -W / 2 : W / 2;
  b.quad('sheet', [xf, y0, zl], [xf, y0, -zl], [xf, y0 + H, -zl], [xf, y0 + H, zl], [-side, 0, 0], uv, MATT);
  const metal = atlasFlat('metal'), front = side > 0 ? 'x' : 'X';
  b.box('atlas', Math.min(xf, xw), y0, -W / 2, Math.max(xf, xw), y0 + H, W / 2, metal, ALU, 'yYzZ');       // the frame's edges
  const xt = side * (s - 0.125);
  b.box('atlas', Math.min(xt, xw), y0 - 0.045, -W * 0.4, Math.max(xt, xw), y0 - 0.015, W * 0.4, metal, ALU, `yYzZ${front}`);   // marker tray
  const xm = side * (s - 0.09);
  PENS.forEach((tint, i) => {
    const z = -0.3 + i * 0.17 + (i === 2 ? 0.16 : 0);
    b.box('atlas', xm - 0.011, y0 - 0.015, z, xm + 0.011, y0 + 0.007, z + 0.125, atlasFlat('white'), { tint }, 'xXYzZ');
  });
  b.setXf(null);
  const c = framePoint(f, xf, y0 + H / 2);
  return boardItem({ x: c[0], y: c[1], z: c[2], n: [-side * Math.cos(f.yaw), side * Math.sin(f.yaw)] }, th);
}

// A thin square strut between two points (legs of the easel).
function strut(b, p, q, t, uv, o) {
  for (const [sx, sz] of [[-1, 0], [1, 0], [0, -1], [0, 1]]) {
    const ax = sz !== 0 ? t : 0, az = sx !== 0 ? t : 0;
    const at = (v, k) => [v[0] + sx * t + k * ax, v[1], v[2] + sz * t + k * az];
    b.quad('atlas', at(p, -1), at(p, 1), at(q, 1), at(q, -1), [sx, 0, sz], uv, o);
  }
}

// Free-standing, on a three-legged easel. (x, z) = where it stands in the
// segment, y = floor level; turned by `yaw` it faces (-sin yaw, -cos yaw).
// Returns { item, walls }: the walls keep the walker from going through it.
export function easelBoard(ctx, x, z, yaw, th, y = 0, face = null) {
  const { b } = ctx;
  const W = 0.9, H = 0.675, yb = 0.9, LEAN = 0.2;            // leans back 1 in 5
  const uv = face || paintBoard(ctx, th);
  const zAt = (h) => -0.22 + (h - yb) * LEAN;                // the board's plane
  const yt = yb + H * 0.98, zb = zAt(yb), zt = zAt(yt);
  b.place(x, y, z, yaw);
  // (seen from the front, the reader's left is +X: the text starts there)
  b.quad('sheet', [W / 2, yb, zb], [-W / 2, yb, zb], [-W / 2, yt, zt], [W / 2, yt, zt], [0, LEAN, -0.98], uv, MATT);
  const metal = atlasFlat('metal'), dark = atlasFlat('signBack'), k = 0.016;
  b.quad('atlas', [-W / 2, yb, zb + k], [W / 2, yb, zb + k], [W / 2, yt, zt + k], [-W / 2, yt, zt + k], [0, -LEAN, 0.98], dark);   // its back
  b.quad('atlas', [-W / 2, yt, zt], [W / 2, yt, zt], [W / 2, yt, zt + k], [-W / 2, yt, zt + k], [0, 1, 0], metal, ALU);
  for (const s of [-1, 1]) {
    b.quad('atlas', [s * W / 2, yb, zb], [s * W / 2, yb, zb + k], [s * W / 2, yt, zt + k], [s * W / 2, yt, zt], [s, 0, 0], metal, ALU);
    strut(b, [s * 0.37, 0, zAt(0) + 0.045], [s * 0.37, 1.64, zAt(1.64) + 0.045], 0.016, metal, ALU);       // front legs
  }
  strut(b, [0, 1.5, zAt(1.5) + 0.06], [0, 0, 0.38], 0.016, metal, ALU);                                    // back leg
  // the ledge the board rests on, and the pens left on it
  b.box('atlas', -W * 0.47, yb - 0.03, zb - 0.085, W * 0.47, yb, zb + 0.02, metal, ALU, 'xXyYzZ');
  PENS.forEach((tint, i) => {
    const px = -0.3 + i * 0.17 + (i === 2 ? 0.2 : 0);
    b.box('atlas', px, yb, zb - 0.07, px + 0.125, yb + 0.022, zb - 0.048, atlasFlat('white'), { tint }, 'xXYzZ');
  });
  b.setXf(null);
  const c = Math.cos(yaw), sn = Math.sin(yaw);
  const out = (lx, lz) => [x + lx * c + lz * sn, z - lx * sn + lz * c];
  const [cx, cz] = out(0, (zb + zt) / 2);
  const corners = [out(-0.45, -0.43), out(0.45, -0.43), out(0.45, 0.4), out(-0.45, 0.4)];
  const walls = corners.map((p, i) => [...p, ...corners[(i + 1) % 4]]);
  return { item: boardItem({ x: cx, y: y + (yb + yt) / 2, z: cz, n: [-sn, -c] }, th), walls };
}
