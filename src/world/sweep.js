// Cross-section profiles and the path sweep used by every passage-like
// segment (corridor, bend, stairs, escalator shaft, cross-passage).
//
// Local frame of a segment: entry portal at the origin, path heading +Z,
// +Y up. NOTE: facing +Z, +X is on the walker's LEFT.
import { CFG } from '../config.js';

// Horseshoe profile: vertical walls up to `spring`, elliptical vault to `crown`.
// Returns points from the floor at -W/2 over the crown to the floor at +W/2,
// each with an inward normal and v = developed height / total (0 floor, 1 crown).
export function horseshoe(W = CFG.passW, spring = CFG.passSpring, crown = CFG.passCrown, arcSegs = 5, wallSegs = 2) {
  const half = [];
  const A = W / 2, B = crown - spring;
  for (let i = 0; i <= wallSegs; i++) half.push({ x: -A, y: (spring * i) / wallSegs, nx: 1, ny: 0 });
  for (let i = 1; i <= arcSegs; i++) {
    const a = (Math.PI / 2) * (i / arcSegs);
    const x = -A * Math.cos(a), y = spring + B * Math.sin(a);
    let nx = -x / (A * A), ny = -(y - spring) / (B * B);
    const l = Math.hypot(nx, ny) || 1;
    half.push({ x, y, nx: nx / l, ny: ny / l });
  }
  let s = 0;
  half[0].s = 0;
  for (let i = 1; i < half.length; i++) {
    s += Math.hypot(half[i].x - half[i - 1].x, half[i].y - half[i - 1].y);
    half[i].s = s;
  }
  const pts = half.map((p) => ({ ...p, v: p.s / s }));
  for (let i = half.length - 2; i >= 0; i--) {
    const p = half[i];
    pts.push({ x: -p.x, y: p.y, nx: -p.nx, ny: p.ny, s: p.s, v: p.s / s });
  }
  pts.W = W; pts.crown = crown; pts.spring = spring; pts.len = s;
  return pts;
}

export const PASSAGE = horseshoe();

// Straight frames along +Z. yFn(z) gives the floor height (default flat).
export function straightFrames(len, step = 1, yFn = null) {
  const n = Math.max(1, Math.round(len / step));
  const out = [];
  for (let i = 0; i <= n; i++) {
    const z = (len * i) / n;
    out.push({ x: 0, y: yFn ? yFn(z) : 0, z, yaw: 0 });
  }
  return out;
}

// Circular arc turning by `angle` radians (positive = towards +X) with radius R.
export function arcFrames(R, angle, step = 1) {
  const sgn = Math.sign(angle) || 1, A = Math.abs(angle);
  const n = Math.max(2, Math.round((R * A) / step));
  const out = [];
  for (let i = 0; i <= n; i++) {
    const t = (A * i) / n;
    out.push({ x: sgn * R * (1 - Math.cos(t)), y: 0, z: R * Math.sin(t), yaw: sgn * t });
  }
  return out;
}

// Append frames `b` (given in the frame of the last frame of `a`) to `a`.
export function chainFrames(a, b) {
  const l = a[a.length - 1];
  const c = Math.cos(l.yaw), s = Math.sin(l.yaw);
  const out = a.slice();
  for (let i = 1; i < b.length; i++) {
    const f = b[i];
    out.push({ x: l.x + f.x * c + f.z * s, y: l.y + f.y, z: l.z - f.x * s + f.z * c, yaw: l.yaw + f.yaw });
  }
  return out;
}

// Point on a frame: lateral offset px, height py.
export function framePoint(f, px, py) {
  return [f.x + Math.cos(f.yaw) * px, f.y + py, f.z - Math.sin(f.yaw) * px];
}

export function frameNormal(f, nx, ny) {
  return [Math.cos(f.yaw) * nx, ny, -Math.sin(f.yaw) * nx];
}

// Sweep `profile` along `frames`.
//   opts.layer    wall layer name (default 'tile')
//   opts.uPeriod  metres of path per texture repeat (default 6)
//   opts.vRange   [v0, v1] of the wall texture (default [0,1])
//   opts.floor    atlas uv rect for the floor, or null to skip the floor
//   opts.u0       starting distance (keeps tile rings continuous)
// Returns { length, cells, walls, dist[] } for collision and decoration.
export function sweep(b, frames, profile, opts = {}) {
  const layer = opts.layer || 'tile';
  const uPeriod = opts.uPeriod || 6;
  const [v0, v1] = opts.vRange || [0.004, 0.996];
  const dist = [opts.u0 || 0];
  for (let i = 1; i < frames.length; i++) {
    const a = frames[i - 1], c = frames[i];
    dist.push(dist[i - 1] + Math.hypot(c.x - a.x, c.z - a.z));
  }
  const cells = [], walls = [];
  const hw = profile.W / 2;
  for (let i = 0; i < frames.length - 1; i++) {
    const f0 = frames[i], f1 = frames[i + 1];
    const u0 = dist[i] / uPeriod, u1 = dist[i + 1] / uPeriod;
    for (let j = 0; j < profile.length - 1; j++) {
      const p = profile[j], q = profile[j + 1];
      const na = frameNormal(f0, p.nx, p.ny), nb = frameNormal(f1, p.nx, p.ny);
      const nc = frameNormal(f1, q.nx, q.ny), nd = frameNormal(f0, q.nx, q.ny);
      const nf = [(na[0] + nc[0]) / 2, (na[1] + nc[1]) / 2, (na[2] + nc[2]) / 2];
      b.quadN(layer, framePoint(f0, p.x, p.y), framePoint(f1, p.x, p.y), framePoint(f1, q.x, q.y), framePoint(f0, q.x, q.y),
        nf, na, nb, nc, nd, [u0, v0 + (v1 - v0) * p.v, u1, v0 + (v1 - v0) * q.v], opts.wallOpts);
    }
    if (opts.floor) {
      const nx = Math.max(1, Math.round(profile.W));
      for (let k = 0; k < nx; k++) {
        const xa = -hw + (profile.W * k) / nx, xb = -hw + (profile.W * (k + 1)) / nx;
        b.quad('atlas', framePoint(f0, xa, 0), framePoint(f0, xb, 0), framePoint(f1, xb, 0), framePoint(f1, xa, 0),
          [0, 1, 0], opts.floor, opts.floorOpts);
      }
    }
    cells.push({ ax: f0.x, az: f0.z, bx: f1.x, bz: f1.z, hw, ya: f0.y, yb: f1.y });
    for (const side of [-1, 1]) {
      const a = framePoint(f0, side * hw, 0), c = framePoint(f1, side * hw, 0);
      walls.push([a[0], a[2], c[0], c[2]]);
    }
  }
  return { length: dist[dist.length - 1] - dist[0], cells, walls, dist };
}

// Rectangle (W x H, floor at y=0) sampled with the same point count as
// `inner`, so the two can be joined by headwall(). Points are found by
// casting rays from the middle; the corners are snapped so nothing is cut.
export function boxAround(inner, W, H, cx = 0) {
  const hw = W / 2, cy = Math.min(1.0, H * 0.4);
  const out = inner.map((p) => {
    const dx = p.x, dy = p.y - cy;
    let t = Infinity;
    if (dx > 1e-6) t = Math.min(t, (hw - cx) / dx); else if (dx < -1e-6) t = Math.min(t, (-hw - cx) / dx);
    if (dy > 1e-6) t = Math.min(t, (H - cy) / dy); else if (dy < -1e-6) t = Math.min(t, -cy / dy);
    return { x: cx + dx * t, y: cy + dy * t };
  });
  const n = out.length;
  out[0] = { x: -hw, y: 0 }; out[n - 1] = { x: hw, y: 0 };
  // snap the points nearest the two top corners onto them
  for (const sx of [-1, 1]) {
    let best = 1, bd = Infinity;
    for (let i = 1; i < n - 1; i++) {
      const d = Math.hypot(out[i].x - sx * hw, out[i].y - H);
      if (d < bd) { bd = d; best = i; }
    }
    out[best] = { x: sx * hw, y: H };
  }
  return out;
}

// Flat end wall filling the ring between an outer and an inner outline that
// have the same number of points (inner may be null for a solid wall).
// `f` is the frame the wall stands on; `facing` = +1 if the visible face
// looks along the frame's +Z, -1 if it looks back along -Z.
// uvFn(x, y) → [u, v] in wall coordinates (default: passage tile mapping).
export function headwall(b, f, outer, inner, facing, layer, uvFn, o) {
  const n = [Math.sin(f.yaw) * facing, 0, Math.cos(f.yaw) * facing];
  const uv = uvFn || ((x, y) => [x / 6, 0.004 + (y / 3.63) * 0.992]);
  const P = (p) => framePoint(f, p.x, p.y);
  const T = (p) => uv(p.x, p.y);
  const N = outer.length;
  const quad = (pa, pb, pc, pd) => b.quadUV(layer, P(pa), P(pb), P(pc), P(pd), n, T(pa), T(pb), T(pc), T(pd), o);
  if (inner) {
    for (let j = 0; j < N - 1; j++) quad(outer[j], outer[j + 1], inner[j + 1], inner[j]);
  } else {
    for (let j = 0; j < Math.floor((N - 1) / 2); j++) quad(outer[j], outer[j + 1], outer[N - 2 - j], outer[N - 1 - j]);
  }
}
