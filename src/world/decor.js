// Decoration helpers shared by the segment builders: fluorescent battens,
// wall-mounted flat panels (posters, signs) and a few small props.
import { atlasRect, atlasFlat } from '../tex/atlas.js';
import { framePoint } from './sweep.js';

const LAMP = () => atlasRect('lamp');
const HOUSING = () => atlasFlat('metal');

// One fluorescent batten hanging just under height y at frame f.
// Registers a baked light unless opts.noLight. opts.flick marks the faulty tube.
export function lamp(b, f, y, opts = {}) {
  const len = opts.len || 1.25, w = 0.14, off = opts.x || 0;
  const [cx, , cz] = framePoint(f, off, 0);
  b.place(cx, f.y + y, cz, f.yaw);
  const e = opts.dead ? 0.12 : 1.9;
  const o = { emit: e, flick: !!opts.flick, tint: [1, 1, 0.94] };
  // tube face (down) and housing sides
  b.quad('atlas', [-w / 2, -0.07, -len / 2], [w / 2, -0.07, -len / 2], [w / 2, -0.07, len / 2], [-w / 2, -0.07, len / 2], [0, -1, 0], LAMP(), o);
  b.box('atlas', -w / 2, -0.07, -len / 2, w / 2, 0, len / 2, HOUSING(), { emit: opts.dead ? 0.1 : 0.75, flick: !!opts.flick }, 'xXzZ');
  b.setXf(null);
  if (!opts.noLight && !opts.dead) {
    b.addLight(cx, f.y + y - 0.25, cz, opts.power || 1.0, opts.radius || 7.5, !!opts.flick, [1, 0.98, 0.92]);
  }
}

// Battens along a swept path. Leaves the joints to the portal lamps.
//   plan.dark   → all tubes dead (only the joints are lit)
//   plan.faulty → index of the flickering tube (or -1)
export function lampsAlong(b, frames, dist, crown, plan = {}) {
  const total = dist[dist.length - 1] - dist[0];
  const n = Math.max(0, Math.round(total / 4.4) - 1);
  const placed = [];
  for (let k = 1; k <= n; k++) {
    const target = dist[0] + (total * k) / (n + 1);
    let i = 0;
    while (i < dist.length - 1 && dist[i] < target) i++;
    const f = frames[i];
    lamp(b, f, crown - 0.04, { dead: !!plan.dark, flick: plan.faulty === k - 1 });
    placed.push(f);
  }
  return placed;
}

// The batten that sits on a joint between two segments (drawn by the child).
export function portalLamp(b, f, crown) {
  lamp(b, f, crown - 0.04, { noLight: true });
}

// Flat panel on a wall. `f` is a frame on the path, side = -1 | +1 (which
// wall), `s` the lateral distance of the wall from the centreline, y0 the
// bottom edge, w/h the size. The panel faces the centreline.
// uv = [u0,v0,u1,v1]. Returns the world-ish local centre for interactables.
export function wallPanel(b, layer, f, side, s, y0, w, h, uv, o, lift = 0.02) {
  const x = side * (s - lift);
  // panel runs along the path direction; keep text reading left→right for the viewer
  const a = [x, y0, side > 0 ? -w / 2 : w / 2];
  const c = [x, y0, side > 0 ? w / 2 : -w / 2];
  const [px, , pz] = framePoint(f, 0, 0);
  b.place(px, f.y, pz, f.yaw);
  b.quad(layer, a, c, [c[0], y0 + h, c[2]], [a[0], y0 + h, a[2]], [-side, 0, 0], uv, o);
  b.setXf(null);
  const centre = framePoint(f, x, y0 + h / 2);
  return { x: centre[0], y: centre[1], z: centre[2] };
}

// A thin frame (four bars) round a wall panel, drawn from the atlas.
export function panelFrame(b, f, side, s, y0, w, h, cell = 'steelDark', t = 0.035) {
  const uv = atlasFlat(cell);
  wallPanel(b, 'atlas', f, side, s, y0 - t, w + 2 * t, t, uv, null, 0.03);
  wallPanel(b, 'atlas', f, side, s, y0 + h, w + 2 * t, t, uv, null, 0.03);
  const [px, , pz] = framePoint(f, 0, 0);
  b.place(px, f.y, pz, f.yaw);
  const x = side * (s - 0.03);
  for (const zz of [-w / 2 - t, w / 2]) {
    b.quad('atlas', [x, y0, zz], [x, y0, zz + t], [x, y0 + h, zz + t], [x, y0 + h, zz], [-side, 0, 0], uv);
  }
  b.setXf(null);
}

// Panel hanging across the passage (perpendicular to the path), visible from
// both directions. uvFront faces walkers coming along +Z (i.e. it faces -Z).
export function hangingSign(b, layer, f, y0, w, h, uvFront, uvBack, o, x = 0) {
  const [px, , pz] = framePoint(f, x, 0);
  b.place(px, f.y, pz, f.yaw);
  // facing -Z: viewer looks along +Z, their left is +X, so text starts at +X
  b.quad(layer, [w / 2, y0, -0.03], [-w / 2, y0, -0.03], [-w / 2, y0 + h, -0.03], [w / 2, y0 + h, -0.03], [0, 0, -1], uvFront, o);
  if (uvBack) b.quad(layer, [-w / 2, y0, 0.03], [w / 2, y0, 0.03], [w / 2, y0 + h, 0.03], [-w / 2, y0 + h, 0.03], [0, 0, 1], uvBack, o);
  const edge = atlasFlat('signBack');
  b.box('atlas', -w / 2, y0, -0.03, w / 2, y0 + h, 0.03, edge, null, 'xXyY');
  // two hangers up to the vault
  for (const hx of [-w * 0.35, w * 0.35]) b.box('atlas', hx - 0.012, y0 + h, -0.012, hx + 0.012, y0 + h + 0.5, 0.012, edge, null, 'xXzZ');
  b.setXf(null);
  return { x: px, y: f.y + y0 + h / 2, z: pz };
}
