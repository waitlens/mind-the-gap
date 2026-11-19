// The free paper somebody left behind: lying on a platform bench, or on the
// floor beside one where it slid off. A dozen quads on the segment's sign
// sheet — a sheet of newsprint that has been folded once and sat on, with
// the inside pages showing along two edges and one corner curling up.
import { atlasFlat } from '../tex/atlas.js';
import { drawFrontPage } from '../tex/paper.js';
import { extraRng } from './whiteboard.js';

export const PAPER_PX = [150, 194];            // tabloid: about 3 : 4
const W = 0.31, H = 0.4, NX = 3, NZ = 4;
const NEWSPRINT = { tint: [0.8, 0.78, 0.72] };

// Draw the front page on the segment's sign sheet; returns its uv rect.
export const paintPaper = (ctx, story) => ctx.sheet.add(PAPER_PX[0], PAPER_PX[1], (c, w, h) => drawFrontPage(c, w, h, story, extraRng(ctx)));

// Lay the paper at (x, y, z) in the segment, y = the surface it lies on.
// Turned by `yaw`, the top of the page points along (sin yaw, cos yaw), so
// it reads the right way up from the other side. opts.floor: trodden flat.
// Returns the READ item.
export function layPaper(ctx, x, y, z, yaw, story, uv, opts = {}) {
  const { b } = ctx, r = extraRng(ctx);
  const lift = opts.floor ? 0.006 : 0.004, rough = opts.floor ? 0.005 : 0.009;
  // heights of the crumpled sheet: a ridge along the fold, a curled corner
  const hgt = [];
  const corner = [r.pick([0, NX]), r.pick([0, NZ])];
  for (let j = 0; j <= NZ; j++) {
    hgt.push([]);
    for (let i = 0; i <= NX; i++) {
      let v = lift + r.range(0, rough);
      if (j === NZ / 2) v += opts.floor ? 0.004 : 0.012;
      if (i === corner[0] && j === corner[1]) v += opts.floor ? 0.012 : 0.04;
      hgt[j].push(v);
    }
  }
  b.place(x, y, z, yaw);
  // (seen from -Z looking along +Z, the reader's left is +X)
  const px = (i) => W / 2 - (W * i) / NX, pz = (j) => -H / 2 + (H * j) / NZ;
  const du = uv[2] - uv[0], dv = uv[3] - uv[1];
  for (let j = 0; j < NZ; j++) {
    for (let i = 0; i < NX; i++) {
      b.quad('sheet', [px(i), hgt[j][i], pz(j)], [px(i + 1), hgt[j][i + 1], pz(j)], [px(i + 1), hgt[j + 1][i + 1], pz(j + 1)], [px(i), hgt[j + 1][i], pz(j + 1)],
        [0, 1, 0], [uv[0] + (du * i) / NX, uv[1] + (dv * j) / NZ, uv[0] + (du * (i + 1)) / NX, uv[1] + (dv * (j + 1)) / NZ], opts.floor ? { tint: [0.86, 0.85, 0.82] } : null);
    }
  }
  // the inside pages, slipped a little way out from under the front
  const sx = r.range(0.008, 0.022) * r.sign(), sz = -r.range(0.008, 0.02), e = 0.002;
  b.quad('atlas', [W / 2 + sx, e, -H / 2 + sz], [-W / 2 + sx, e, -H / 2 + sz], [-W / 2 + sx, e, H / 2 + sz], [W / 2 + sx, e, H / 2 + sz], [0, 1, 0], atlasFlat('white'), NEWSPRINT);
  b.setXf(null);
  return {
    x, y: y + 0.02, z, n: opts.n || [0, 0], r: 3.4, cone: 0.86,
    label: 'read newspaper', title: 'NEWSPAPER', text: story.caption, paper: { tier: story.tier, clue: story.clue, floor: !!opts.floor },
  };
}
