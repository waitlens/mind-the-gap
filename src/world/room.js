// A flat-ceilinged tiled hall (junction concourse, landings) with standard
// passage portals cut into its walls.
import { PASSAGE, headwall, boxAround } from './sweep.js';
import { atlasRect } from '../tex/atlas.js';

const V_TOP = (h) => 0.004 + (h / 3.63) * 0.992;

// Plain tiled wall from point p0 to p1 (x,z pairs), height H, facing normal n.
export function plainWall(b, p0, p1, H, n, layer = 'tile', u0 = 0, o) {
  const len = Math.hypot(p1[0] - p0[0], p1[1] - p0[1]);
  if (len < 0.01) return;
  const nu = Math.max(1, Math.round(len)), nv = 3;
  b.grid(layer, [p0[0], 0, p0[1]], [p1[0] - p0[0], 0, p1[1] - p0[1]], [0, H, 0], nu, nv, n,
    [u0 / 6, 0.004, (u0 + len) / 6, V_TOP(H)], o);
}

// opts: { x0, x1, z0, z1, H, portals: [{ wall: 'S'|'N'|'W'|'E', at }], floor, ceil }
// `at` is the portal centre along the wall (x for S/N, z for W/E).
// Returns { cells, walls } in local coordinates.
export function buildRoom(b, opts) {
  const { x0, x1, z0, z1, H } = opts;
  const portals = opts.portals || [];
  const walls = [];
  const half = 2.0; // half-width of the headwall piece round a portal
  const sides = {
    S: { a: [x0, z0], b: [x1, z0], n: [0, 0, 1], yaw: 0, facing: 1, pt: (t) => [t, z0], t0: x0, t1: x1 },
    N: { a: [x0, z1], b: [x1, z1], n: [0, 0, -1], yaw: 0, facing: -1, pt: (t) => [t, z1], t0: x0, t1: x1 },
    W: { a: [x0, z0], b: [x0, z1], n: [1, 0, 0], yaw: Math.PI / 2, facing: 1, pt: (t) => [x0, t], t0: z0, t1: z1 },
    E: { a: [x1, z0], b: [x1, z1], n: [-1, 0, 0], yaw: Math.PI / 2, facing: -1, pt: (t) => [x1, t], t0: z0, t1: z1 },
  };
  for (const key of Object.keys(sides)) {
    const s = sides[key];
    const ps = portals.filter((p) => p.wall === key).sort((p, q) => p.at - q.at);
    let cur = s.t0, solidFrom = s.t0;
    for (const p of ps) {
      const a = Math.max(s.t0, p.at - half), c = Math.min(s.t1, p.at + half);
      if (a > cur + 0.01) plainWall(b, s.pt(cur), s.pt(a), H, s.n, 'tile', cur);
      const [fx, fz] = s.pt(p.at);
      const outer = boxAround(PASSAGE, c - a, H);
      headwall(b, { x: fx, y: 0, z: fz, yaw: s.yaw }, outer, PASSAGE, s.facing, 'tile');
      cur = c;
      // collision: solid up to the portal's edge, open across the portal
      walls.push([...s.pt(solidFrom), ...s.pt(p.at - PASSAGE.W / 2)]);
      solidFrom = p.at + PASSAGE.W / 2;
    }
    if (s.t1 > cur + 0.01) plainWall(b, s.pt(cur), s.pt(s.t1), H, s.n, 'tile', cur);
    walls.push([...s.pt(solidFrom), ...s.pt(s.t1)]);
  }
  // floor and ceiling
  const nx = Math.max(1, Math.round(x1 - x0)), nz = Math.max(1, Math.round(z1 - z0));
  b.grid('atlas', [x0, 0, z0], [x1 - x0, 0, 0], [0, 0, z1 - z0], nx, nz, [0, 1, 0], opts.floor || atlasRect('floor'), null, true);
  b.grid('atlas', [x0, H, z0], [x1 - x0, 0, 0], [0, 0, z1 - z0], nx, nz, [0, -1, 0], opts.ceil || atlasRect('concrete'), null, true);
  const cx = (x0 + x1) / 2;
  const cells = [{ ax: cx, az: z0, bx: cx, bz: z1, hw: (x1 - x0) / 2, ya: 0, yb: 0 }];
  return { cells, walls: walls.filter((w) => Math.hypot(w[2] - w[0], w[3] - w[1]) > 0.01) };
}
