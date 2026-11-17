// Turns any triangulation of a polygon into a (constrained) Delaunay one by
// flipping interior edges. Ear clipping gives a valid but ugly result —
// long slivers — and slivers are bad twice over: baked vertex lighting
// streaks across them, and a vertex that lies almost on a neighbour's edge
// behaves like a T-junction once the rasteriser snaps it to its sub-pixel
// grid. Delaunay triangles are as fat as the point set allows.
//
// pts: [{x, y}], tris: [[i, j, k]] (any winding). Returns new [[i, j, k]],
// counter-clockwise. Boundary edges (used by one triangle) never move.

const area2 = (a, b, c) => (b.x - a.x) * (c.y - a.y) - (c.x - a.x) * (b.y - a.y);

// > 0 if d lies inside the circumcircle of the counter-clockwise triangle abc
function inCircle(a, b, c, d) {
  const ax = a.x - d.x, ay = a.y - d.y, bx = b.x - d.x, by = b.y - d.y, cx = c.x - d.x, cy = c.y - d.y;
  return (ax * ax + ay * ay) * (bx * cy - cx * by) - (bx * bx + by * by) * (ax * cy - cx * ay) + (cx * cx + cy * cy) * (ax * by - bx * ay);
}

export function delaunayFlip(pts, tris, maxPasses = 60) {
  const N = pts.length;
  const T = tris
    .map(([i, j, k]) => (area2(pts[i], pts[j], pts[k]) >= 0 ? [i, j, k] : [i, k, j]))
    .filter(([i, j, k]) => Math.abs(area2(pts[i], pts[j], pts[k])) > 1e-12);
  for (let pass = 0; pass < maxPasses; pass++) {
    // edge → the (up to two) triangles on it
    const edges = new Map();
    T.forEach((t, ti) => {
      for (let e = 0; e < 3; e++) {
        const a = t[e], b = t[(e + 1) % 3], key = a < b ? a * N + b : b * N + a;
        const list = edges.get(key);
        if (list) list.push(ti); else edges.set(key, [ti]);
      }
    });
    const touched = new Set();
    let flips = 0;
    for (const [key, list] of edges) {
      if (list.length !== 2 || touched.has(list[0]) || touched.has(list[1])) continue;
      const a = Math.floor(key / N), b = key % N;
      const t0 = T[list[0]], t1 = T[list[1]];
      const c = t0.find((v) => v !== a && v !== b), d = t1.find((v) => v !== a && v !== b);
      // orient so that (a, b, c) is counter-clockwise; then d is across ab
      const [p, q] = area2(pts[a], pts[b], pts[c]) > 0 ? [a, b] : [b, a];
      if (inCircle(pts[p], pts[q], pts[c], pts[d]) <= 1e-10) continue;
      // the quad p-d-q-c must be strictly convex for the flip to be legal
      if (area2(pts[c], pts[p], pts[d]) <= 1e-12 || area2(pts[d], pts[q], pts[c]) <= 1e-12) continue;
      T[list[0]] = [c, p, d];
      T[list[1]] = [d, q, c];
      touched.add(list[0]); touched.add(list[1]);
      flips++;
    }
    if (!flips) break;
  }
  return T;
}
