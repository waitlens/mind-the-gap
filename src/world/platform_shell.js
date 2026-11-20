// Platform tunnel shell: the big tiled tube, the platform with its edge
// markings, the track in its pit and the two headwalls.
// Canonical layout: path along +Z, platform floor at y = 0 centred near
// x = 0, track on the +X side. `side` = -1 mirrors it.
import { atlasRect, atlasFlat, atlasSub } from '../tex/atlas.js';

export const PF = {
  cx: 1.8, cy: 1.15, R: 3.6,    // tube centre and radius
  edge: 1.6,                    // platform edge
  bed: -1.05,                   // track bed level
  // rails as [offset from the track centreline, height above the bed]:
  // two running rails, the negative rail between them, the positive rail
  // on the far side (both conductor rails raised on insulators)
  rails: [[-0.72, 0.15], [0.72, 0.15], [0, 0.2], [1.08, 0.22]],
};
PF.back = PF.cx - Math.sqrt(PF.R * PF.R - PF.cy * PF.cy);          // back wall at floor level
PF.th0 = Math.PI + Math.asin(PF.cy / PF.R);                         // arc start (back wall base)
PF.th1 = -Math.asin((PF.cy - PF.bed) / PF.R);                       // arc end (track bed)
PF.sCrown = PF.R * (PF.th0 - Math.PI / 2);
PF.wallBed = PF.cx + Math.sqrt(PF.R * PF.R - (PF.cy - PF.bed) ** 2);   // trackside wall at bed level
PF.track = (PF.edge + PF.wallBed) / 2;                                  // track centreline: mid-way, so the tunnel mouth is symmetric

// x of the tube wall at height y: back wall (dir -1) or trackside wall (+1).
export function wallX(y, dir) {
  const dy = y - PF.cy;
  return PF.cx + dir * Math.sqrt(Math.max(0, PF.R * PF.R - dy * dy));
}

// The lining is built in two runs that meet at the crown: the platform-side
// wall (texture v 0.5 → 1) and the track-side wall (v 0 at the crown → 0.5 at
// the bed). See tex/tiles.js for the texture layout.
const N_BACK = 9, N_TRACK = 10;
const sTrack = PF.R * (Math.PI / 2 - PF.th1);

function arcRun(th0, th1, n, vOf) {
  const out = [];
  for (let j = 0; j <= n; j++) {
    const th = th0 + ((th1 - th0) * j) / n;
    out.push({ x: PF.cx + PF.R * Math.cos(th), y: PF.cy + PF.R * Math.sin(th), nx: -Math.cos(th), ny: -Math.sin(th), v: vOf(th) });
  }
  return out;
}

export function buildShell(b, L, side) {
  const X = (x) => side * x;
  const back = arcRun(PF.th0, Math.PI / 2, N_BACK, (th) => 0.502 + 0.496 * ((PF.R * (PF.th0 - th)) / PF.sCrown));
  const track = arcRun(Math.PI / 2, PF.th1, N_TRACK, (th) => 0.002 + 0.496 * ((PF.R * (Math.PI / 2 - th)) / sTrack));
  const nz = Math.round(L / 1.5);
  // --- tube lining
  for (const arc of [back, track]) {
    for (let i = 0; i < nz; i++) {
      const z0 = (L * i) / nz, z1 = (L * (i + 1)) / nz;
      for (let j = 0; j < arc.length - 1; j++) {
        const p = arc[j], q = arc[j + 1];
        const np = [X(p.nx), p.ny, 0], nq = [X(q.nx), q.ny, 0];
        const nf = [(np[0] + nq[0]) / 2, (np[1] + nq[1]) / 2, 0];
        b.quadN('ptile', [X(p.x), p.y, z0], [X(p.x), p.y, z1], [X(q.x), q.y, z1], [X(q.x), q.y, z0],
          nf, np, np, nq, nq, [z0 / 6, p.v, z1 / 6, q.v]);
      }
    }
  }
  // --- platform floor in bands from the back wall to the edge. Every band
  //     uses the same half-metre steps, so neighbouring bands share all
  //     their vertices (bands with different steps left T-junctions along
  //     the lines between them, i.e. pinholes).
  const up = [0, 1, 0];
  const half = (name, k, fx0 = 0, fx1 = 1) => atlasSub(name, fx0, k ? 0.5 : 0, fx1, k ? 1 : 0.5);
  const bands = [
    [PF.back - 0.05, -0.55, (k) => half('floor', k)], [-0.55, 0.55, (k) => half('floor', k)],
    [0.55, 0.95, () => atlasRect('tactile')], [0.95, 1.05, () => atlasFlat('yellow')],
    // (the coping overhangs the platform's face by 4 mm: seen from the track
    // side — from inside a standing train — a top that merely met the face
    // along its edge leaked single pixels)
    [1.05, 1.45, (k) => half('floorDark', k, 0.05, 0.45)], [1.45, PF.edge + 0.004, () => atlasFlat('edge')],
  ];
  const nf = Math.round(L / 0.5);
  for (const [xa, xb, uvOf] of bands) {
    for (let i = 0; i < nf; i++) {
      const z0 = (L * i) / nf, z1 = (L * (i + 1)) / nf;
      b.quad('atlas', [X(xa), 0, z0], [X(xb), 0, z0], [X(xb), 0, z1], [X(xa), 0, z1], up, uvOf(i % 2));
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
    // (the bed runs a little way in under the platform face, so the face
    // stands on it instead of meeting it edge to edge)
    for (const [xa, xb] of [[1.5, PF.track], [PF.track, PF.wallBed + 0.12]]) {
      b.quad('atlas', [X(xa), PF.bed, i], [X(xb), PF.bed, i], [X(xb), PF.bed, i + 1], [X(xa), PF.bed, i + 1], up, ballast);
    }
  }
  // --- four rails
  const rail = atlasRect('rail'), dark = atlasFlat('steelDark');
  for (const [off, rh] of PF.rails) {
    const rx = PF.track + off;
    for (let z0 = 0; z0 < L; z0 += 3) {
      const z1 = Math.min(L, z0 + 3), y = PF.bed + rh, w = 0.035;
      b.quad('atlas', [X(rx - w), y, z0], [X(rx + w), y, z0], [X(rx + w), y, z1], [X(rx - w), y, z1], up, rail);
      b.quad('atlas', [X(rx - w), PF.bed, z0], [X(rx - w), PF.bed, z1], [X(rx - w), y, z1], [X(rx - w), y, z0], [-side, 0, 0], dark);
    }
  }
  return { back, track };
}
