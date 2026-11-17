// A flat-ceilinged tiled hall (the junction concourse) with standard
// passage portals cut into its walls. Every wall is one watertight
// triangulated polygon (see flatwall.js); walls overlap each other, the
// floor and the ceiling by a few centimetres instead of meeting edge to
// edge, so no seam can open between them.
import { PASSAGE } from './sweep.js';
import { flatWall, notchedOutline } from './flatwall.js';
import { atlasRect } from '../tex/atlas.js';

const LAP = 0.05;    // how far walls run past the corners, floor and ceiling
const LIP = 0.004;   // how far a wall overlaps the lining of a passage

// opts: { x0, x1, z0, z1, H, portals: [{ wall: 'S'|'N'|'W'|'E', at }], floor, ceil }
// `at` is the portal centre along the wall (x for S/N, z for W/E).
// Returns { cells, walls } in local coordinates.
export function buildRoom(b, opts) {
  const { x0, x1, z0, z1, H } = opts;
  const portals = opts.portals || [];
  const walls = [];
  // For each side: the frame its wall stands on, which way it faces, how a
  // position t along the wall maps to the frame's lateral coordinate, and
  // the collision end points.
  const sides = {
    S: { f: { x: 0, y: 0, z: z0, yaw: 0 }, facing: 1, lat: (t) => t, t0: x0, t1: x1, pt: (t) => [t, z0] },
    N: { f: { x: 0, y: 0, z: z1, yaw: 0 }, facing: -1, lat: (t) => t, t0: x0, t1: x1, pt: (t) => [t, z1] },
    W: { f: { x: x0, y: 0, z: 0, yaw: Math.PI / 2 }, facing: 1, lat: (t) => -t, t0: z0, t1: z1, pt: (t) => [x0, t] },
    E: { f: { x: x1, y: 0, z: 0, yaw: Math.PI / 2 }, facing: -1, lat: (t) => -t, t0: z0, t1: z1, pt: (t) => [x1, t] },
  };
  for (const key of Object.keys(sides)) {
    const s = sides[key];
    const ps = portals.filter((p) => p.wall === key).sort((p, q) => p.at - q.at);
    const la = s.lat(s.t0 - LAP), lb = s.lat(s.t1 + LAP);
    const notches = ps.map((p) => PASSAGE.map((q) => ({ x: s.lat(p.at) + q.x + q.nx * LIP, y: q.y + q.ny * LIP })));
    const outline = notchedOutline(Math.min(la, lb), Math.max(la, lb), -LAP, H + LAP, notches);
    flatWall(b, s.f, s.facing, outline, {
      layer: 'tile', grid: 1.0,
      // (u is offset so the coloured rings of the tiling fall near the
      // corners, clear of the signs)
      uv: (x, y) => [(x - 3.1) / 6 + 0.5, 0.004 + (0.992 * y) / 3.63],
    });
    // collision: solid up to each portal's edge, open across the portal
    let solidFrom = s.t0;
    for (const p of ps) {
      walls.push([...s.pt(solidFrom), ...s.pt(p.at - PASSAGE.W / 2)]);
      solidFrom = p.at + PASSAGE.W / 2;
    }
    walls.push([...s.pt(solidFrom), ...s.pt(s.t1)]);
  }
  // floor and ceiling (their grid lines up with the floors of the passages)
  const nx = Math.max(1, Math.round(x1 - x0)), nz = Math.max(1, Math.round(z1 - z0));
  b.grid('atlas', [x0, 0, z0], [x1 - x0, 0, 0], [0, 0, z1 - z0], nx, nz, [0, 1, 0], opts.floor || atlasRect('floor'), null, true);
  b.grid('atlas', [x0, H, z0], [x1 - x0, 0, 0], [0, 0, z1 - z0], nx, nz, [0, -1, 0], opts.ceil || atlasRect('concrete'), null, true);
  const cx = (x0 + x1) / 2;
  const cells = [{ ax: cx, az: z0, bx: cx, bz: z1, hw: (x1 - x0) / 2, ya: 0, yb: 0 }];
  return { cells, walls: walls.filter((w) => Math.hypot(w[2] - w[0], w[3] - w[1]) > 0.01) };
}
