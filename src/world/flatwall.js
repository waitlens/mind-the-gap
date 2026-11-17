// Flat walls with openings, built as ONE triangulated polygon.
//
// Earlier, end walls were assembled from separately tessellated pieces whose
// shared edges had different vertices (T-junctions). The rasteriser then
// leaves hairline pinholes along such a seam, which showed up as thin dark
// dashed lines flickering on the tiles. Here a wall is a single simple
// polygon (openings are notches cut up from its bottom edge) triangulated by
// earcut, so every interior edge is shared by exactly two triangles.
// Where a wall meets another surface at a corner it should OVERLAP it
// slightly (oversize the outline) instead of relying on edges that match.
import * as THREE from 'three';
import { framePoint } from './sweep.js';
import { hash32 } from '../util/rng.js';
import { delaunayFlip } from './delaunay.js';

function insidePolygon(pts, x, y) {
  let inside = false;
  for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
    const a = pts[i], b = pts[j];
    if ((a.y > y) !== (b.y > y) && x < ((b.x - a.x) * (y - a.y)) / (b.y - a.y) + a.x) inside = !inside;
  }
  return inside;
}

function distToOutline(pts, x, y) {
  let best = Infinity;
  for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
    const a = pts[i], b = pts[j];
    const dx = b.x - a.x, dy = b.y - a.y;
    const l2 = dx * dx + dy * dy;
    let t = l2 > 0 ? ((x - a.x) * dx + (y - a.y) * dy) / l2 : 0;
    t = t < 0 ? 0 : t > 1 ? 1 : t;
    best = Math.min(best, Math.hypot(x - (a.x + dx * t), y - (a.y + dy * t)));
  }
  return best;
}

// Rectangle x0..x1, y0..y1 with openings cut up from the bottom edge.
// Each notch is a list of points from its left foot, up and over, to its
// right foot (x ascending overall); feet are dropped to y0. Returns the
// outline as one closed polygon.
export function notchedOutline(x0, x1, y0, y1, notches = []) {
  const out = [{ x: x0, y: y0 }];
  for (const n of notches.slice().sort((a, b) => a[0].x - b[0].x)) {
    out.push({ x: n[0].x, y: y0 });
    for (const p of n) if (p.y > y0 + 1e-6) out.push({ x: p.x, y: p.y });
    out.push({ x: n[n.length - 1].x, y: y0 });
  }
  out.push({ x: x1, y: y0 }, { x: x1, y: y1 }, { x: x0, y: y1 });
  // drop repeated points
  return out.filter((p, i) => i === 0 || Math.hypot(p.x - out[i - 1].x, p.y - out[i - 1].y) > 1e-6);
}

// Build the polygon `outline` ({x, y} in the plane of frame f: x lateral,
// y up) as a wall whose visible face looks along f's +Z (facing = 1) or
// -Z (facing = -1).
//   opts.layer   geometry layer (default 'tile')
//   opts.uv      (x, y) → [u, v]
//   opts.grid    spacing of extra interior vertices for the baked lighting
//   opts.keep    (x, y) → bool: only place interior vertices where true
//   opts.o       vertex options (tint / emit)
export function flatWall(b, f, facing, outline, opts = {}) {
  const layer = opts.layer || 'tile';
  const uv = opts.uv || ((x, y) => [x / 6, 0.004 + (Math.max(0, y) / 3.63) * 0.992]);
  const n = [Math.sin(f.yaw) * facing, 0, Math.cos(f.yaw) * facing];
  const g = opts.grid ?? 1.1;
  // Long straight edges get intermediate points (so no triangle has to span
  // the whole wall). They are nudged 0.7 mm off the line, alternately in and
  // out: exactly collinear points would be dropped by the triangulator.
  const pts = [];
  outline.forEach((p, i) => {
    const q = outline[(i + 1) % outline.length];
    pts.push({ x: p.x, y: p.y });
    const len = Math.hypot(q.x - p.x, q.y - p.y);
    const k = g > 0 && len > 1.5 * g ? Math.ceil(len / g) : 1;
    for (let m = 1; m < k; m++) {
      const t = m / k, off = (m % 2 ? 0.0007 : -0.0007) / len;
      pts.push({ x: p.x + (q.x - p.x) * t - (q.y - p.y) * off, y: p.y + (q.y - p.y) * t + (q.x - p.x) * off });
    }
  });
  const holes = [];
  if (g > 0) {
    let xa = Infinity, xb = -Infinity, ya = Infinity, yb = -Infinity;
    for (const p of pts) { xa = Math.min(xa, p.x); xb = Math.max(xb, p.x); ya = Math.min(ya, p.y); yb = Math.max(yb, p.y); }
    const nx = Math.max(1, Math.round((xb - xa) / g)), ny = Math.max(1, Math.round((yb - ya) / g));
    for (let i = 1; i < nx; i++) {
      for (let j = 1; j < ny; j++) {
        // Stagger alternate rows and jitter every point: no three interior
        // vertices may be exactly collinear, or the triangulator can leave a
        // vertex sitting on another triangle's edge (a T-junction → pinholes).
        const jx = (hash32(i * 73 + 11, j * 151 + 5) / 4294967296 - 0.5) * 0.3;
        const jy = (hash32(i * 199 + 3, j * 37 + 17) / 4294967296 - 0.5) * 0.3;
        const x = xa + ((xb - xa) * (i + (j % 2 ? 0.25 : -0.25) + jx)) / nx, y = ya + ((yb - ya) * (j + jy)) / ny;
        if (opts.keep && !opts.keep(x, y)) continue;
        if (!insidePolygon(pts, x, y) || distToOutline(pts, x, y) < g * 0.3) continue;
        holes.push([new THREE.Vector2(x, y)]);   // a one-point "hole" is a Steiner point
      }
    }
  }
  const contour = pts.map((p) => new THREE.Vector2(p.x, p.y));
  const ears = THREE.ShapeUtils.triangulateShape(contour, holes);
  const all = contour.concat(holes.map((h) => h[0]));   // (after the call: it may drop a repeated end point)
  const tris = delaunayFlip(all, ears);                  // same vertices, well-shaped triangles
  const P = (v) => framePoint(f, v.x, v.y);
  for (const [i, j, k] of tris) {
    const a = all[i], c = all[j], d = all[k];
    b.tri(layer, P(a), P(c), P(d), n, uv(a.x, a.y), uv(c.x, c.y), uv(d.x, d.y), opts.o);
  }
  return tris.length;
}
