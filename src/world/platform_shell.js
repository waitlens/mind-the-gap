// Platform tunnel shell: the big tiled tube, the platform with its edge
// markings, the track in its pit and the two headwalls.
// Canonical layout: path along +Z, platform floor at y = 0 centred near
// x = 0, track on the +X side. `side` = -1 mirrors it.
import { atlasRect, atlasFlat, atlasSub } from '../tex/atlas.js';
import { PASSAGE, headwall } from './sweep.js';

export const PF = {
  cx: 1.4, cy: 1.15, R: 3.25,   // tube centre and radius
  edge: 1.6,                    // platform edge
  bed: -1.05,                   // track bed level
  track: 2.66,                  // track centreline
};
PF.back = PF.cx - Math.sqrt(PF.R * PF.R - PF.cy * PF.cy);          // back wall at floor level
PF.th0 = Math.PI + Math.asin(PF.cy / PF.R);                         // arc start (back wall base)
PF.th1 = -Math.asin((PF.cy - PF.bed) / PF.R);                       // arc end (track bed)
PF.sCrown = PF.R * (PF.th0 - Math.PI / 2);

// x of the tube wall at height y: back wall (dir -1) or trackside wall (+1).
export function wallX(y, dir) {
  const dy = y - PF.cy;
  return PF.cx + dir * Math.sqrt(Math.max(0, PF.R * PF.R - dy * dy));
}

const N_ARC = 18;

function arcPoint(j) {
  const th = PF.th0 + ((PF.th1 - PF.th0) * j) / N_ARC;
  const s = PF.R * (PF.th0 - th);
  const v = s <= PF.sCrown ? s / PF.sCrown : 1 - (s - PF.sCrown) / PF.sCrown;
  return { x: PF.cx + PF.R * Math.cos(th), y: PF.cy + PF.R * Math.sin(th), nx: -Math.cos(th), ny: -Math.sin(th), v: 0.004 + 0.992 * v };
}

export function buildShell(b, L, side) {
  const X = (x) => side * x;
  const arc = [];
  for (let j = 0; j <= N_ARC; j++) arc.push(arcPoint(j));
  const nz = Math.round(L / 1.5);
  // --- tube lining
  for (let i = 0; i < nz; i++) {
    const z0 = (L * i) / nz, z1 = (L * (i + 1)) / nz;
    for (let j = 0; j < N_ARC; j++) {
      const p = arc[j], q = arc[j + 1];
      const np = [X(p.nx), p.ny, 0], nq = [X(q.nx), q.ny, 0];
      const nf = [(np[0] + nq[0]) / 2, (np[1] + nq[1]) / 2, 0];
      b.quadN('ptile', [X(p.x), p.y, z0], [X(p.x), p.y, z1], [X(q.x), q.y, z1], [X(q.x), q.y, z0],
        nf, np, np, nq, nq, [z0 / 6, p.v, z1 / 6, q.v]);
    }
  }
  // --- platform floor in bands from the back wall to the edge
  const up = [0, 1, 0];
  const bands = [
    [PF.back - 0.05, -0.55, atlasRect('floor'), 1], [-0.55, 0.55, atlasRect('floor'), 1],
    [0.55, 0.95, atlasRect('tactile'), 0.5], [0.95, 1.05, atlasFlat('yellow'), 1],
    [1.05, 1.45, atlasSub('floorDark', 0.05, 0.05, 0.45, 0.95), 1], [1.45, PF.edge, atlasFlat('edge'), 1],
  ];
  for (const [xa, xb, uv, step] of bands) {
    const n = Math.round(L / step);
    for (let i = 0; i < n; i++) {
      const z0 = (L * i) / n, z1 = (L * (i + 1)) / n;
      b.quad('atlas', [X(xa), 0, z0], [X(xb), 0, z0], [X(xb), 0, z1], [X(xa), 0, z1], up, uv);
    }
  }
  // "MIND THE GAP" on the coping, facing someone standing on the platform
  const gap = atlasRect('mindgap');
  for (let zc = 4.5; zc < L - 3; zc += 6.5) {
    const h = 0.85 * side;
    b.quad('atlas', [X(1.07), 0.004, zc - h], [X(1.07), 0.004, zc + h], [X(1.43), 0.004, zc + h], [X(1.43), 0.004, zc - h], up, gap);
  }
  // --- platform face and track bed
  const nzb = Math.round(L / 2);
  for (let i = 0; i < nzb; i++) {
    const z0 = (L * i) / nzb, z1 = (L * (i + 1)) / nzb;
    b.quad('atlas', [X(1.56), PF.bed, z0], [X(1.56), PF.bed, z1], [X(1.56), -0.06, z1], [X(1.56), -0.06, z0], [side, 0, 0], atlasRect('riser'));
    b.quad('atlas', [X(1.56), -0.06, z0], [X(PF.edge), -0.06, z0], [X(PF.edge), -0.06, z1], [X(1.56), -0.06, z1], [0, -1, 0], atlasFlat('black'));
    b.quad('atlas', [X(PF.edge), -0.06, z0], [X(PF.edge), -0.06, z1], [X(PF.edge), 0, z1], [X(PF.edge), 0, z0], [side, 0, 0], atlasFlat('edge'));
  }
  const ballast = atlasRect('ballast');
  for (let i = 0; i < Math.round(L); i++) {
    for (const [xa, xb] of [[1.56, 2.75], [2.75, 3.95]]) {
      b.quad('atlas', [X(xa), PF.bed, i], [X(xb), PF.bed, i], [X(xb), PF.bed, i + 1], [X(xa), PF.bed, i + 1], up, ballast);
    }
  }
  // --- four rails: two running rails, the negative rail between them and
  //     the positive rail on the far side (both raised on insulators)
  const rail = atlasRect('rail'), dark = atlasFlat('steelDark');
  const rails = [[PF.track - 0.72, 0.15], [PF.track + 0.72, 0.15], [PF.track, 0.2], [PF.track + 1.08, 0.22]];
  for (const [rx, rh] of rails) {
    for (let z0 = 0; z0 < L; z0 += 3) {
      const z1 = Math.min(L, z0 + 3), y = PF.bed + rh, w = 0.035;
      b.quad('atlas', [X(rx - w), y, z0], [X(rx + w), y, z0], [X(rx + w), y, z1], [X(rx - w), y, z1], up, rail);
      b.quad('atlas', [X(rx - w), PF.bed, z0], [X(rx - w), PF.bed, z1], [X(rx - w), y, z1], [X(rx - w), y, z0], [-side, 0, 0], dark);
    }
  }
  return { arc };
}

// Headwall at z (facing = +1 looks along +Z, i.e. the wall at the entry
// end; -1 the wall at the far end). Has a real passage portal on the
// platform side and a black running-tunnel mouth over the track.
export function buildHeadwall(b, z, facing, side, portal = true) {
  const X = (x) => side * x;
  const n = [0, 0, facing];
  const uvOf = (x, y) => [x / 6, 0.004 + 0.992 * Math.min(1, Math.max(0, y) / 6.28)];
  // (A) platform-side piece round the portal (x from the back wall to the edge)
  const topY = (x) => PF.cy + Math.sqrt(Math.max(0, PF.R * PF.R - (x - PF.cx) ** 2));
  const cy = 1.0;
  const outer = PASSAGE.map((p) => {
    const dx = p.x, dy = p.y - cy;
    // march along the ray until it leaves the piece (cheap and robust)
    let t = 1;
    for (let k = 0; k < 400; k++) {
      const x = dx * (t + 0.01), y = cy + dy * (t + 0.01);
      const inside = x > -PF.cx - 5 && x < PF.edge && y > 0 && (x - PF.cx) ** 2 + (y - PF.cy) ** 2 < PF.R * PF.R;
      if (!inside) break;
      t += 0.01;
    }
    return { x: dx * t, y: cy + dy * t };
  });
  const last = outer.length - 1;
  outer[0] = { x: PF.back, y: 0 }; outer[last] = { x: PF.edge, y: 0 };
  // snap the point nearest the top corner (edge line meets the vault)
  let best = 1, bd = Infinity;
  for (let i = 1; i < last; i++) { const d = Math.hypot(outer[i].x - PF.edge, outer[i].y - topY(PF.edge)); if (d < bd) { bd = d; best = i; } }
  outer[best] = { x: PF.edge, y: topY(PF.edge) };
  const f = { x: 0, y: 0, z, yaw: 0 };
  const mir = (pts) => (side > 0 ? pts : pts.map((p) => ({ x: -p.x, y: p.y })).reverse());
  headwall(b, f, mir(outer), portal ? mir(PASSAGE.map((p) => ({ x: p.x, y: p.y }))) : null, facing, 'ptile', (x, y) => uvOf(x * side, y));
  // (B) track-side piece: vertical strips from the bed up to the vault
  const x1 = PF.cx + PF.R, cols = 8;
  for (let i = 0; i < cols; i++) {
    const xa = PF.edge + ((x1 - PF.edge) * i) / cols, xb = PF.edge + ((x1 - PF.edge) * (i + 1)) / cols;
    const lo = (x) => Math.max(PF.bed, PF.cy - Math.sqrt(Math.max(0, PF.R * PF.R - (x - PF.cx) ** 2)));
    for (let k = 0; k < 3; k++) {
      const ya0 = lo(xa) + ((topY(xa) - lo(xa)) * k) / 3, ya1 = lo(xa) + ((topY(xa) - lo(xa)) * (k + 1)) / 3;
      const yb0 = lo(xb) + ((topY(xb) - lo(xb)) * k) / 3, yb1 = lo(xb) + ((topY(xb) - lo(xb)) * (k + 1)) / 3;
      b.quadUV('ptile', [X(xa), ya0, z], [X(xb), yb0, z], [X(xb), yb1, z], [X(xa), ya1, z], n,
        uvOf(xa, ya0), uvOf(xb, yb0), uvOf(xb, yb1), uvOf(xa, ya1));
    }
  }
  // running tunnel mouth: a black disc with a soot collar, just proud of the wall
  const mz = z + facing * 0.03, mx = PF.track, my = 0.5, mr = 1.62;
  const black = atlasFlat('blackout'), soot = atlasRect('soot');
  for (let i = 0; i < 14; i++) {
    const a0 = (i / 14) * Math.PI * 2, a1 = ((i + 1) / 14) * Math.PI * 2;
    const P = (r, a, dz) => [X(mx + Math.cos(a) * r), Math.max(PF.bed, my + Math.sin(a) * r), mz + facing * dz];
    b.quad('atlas', [X(mx), my, mz], P(mr, a0, 0), P(mr, a1, 0), [X(mx), my, mz], n, black, { emit: 0 });
    b.quad('atlas', P(mr, a0, 0.01), P(mr + 0.22, a0, 0.01), P(mr + 0.22, a1, 0.01), P(mr, a1, 0.01), n, soot);
  }
}
