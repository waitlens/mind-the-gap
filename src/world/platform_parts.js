// Small shared pieces for dressing the platform tunnel: panels that hug the
// curved lining, and the bench.
import { PF, wallX } from './platform_shell.js';
import { atlasRect, atlasFlat } from '../tex/atlas.js';

// Flat panel on the tube wall between heights y0 and y1 (fine for anything
// up to about a metre and a half tall). dir = -1 platform-side wall, +1
// track-side wall. The text reads the right way round for either `side`.
export function arcPanel(b, layer, side, dir, zc, w, y0, y1, uv, o, lift = 0.04) {
  return curvedPanel(b, layer, side, dir, zc, w, y0, y1, uv, o, lift, 1);
}

// The same, bent to follow the wall in n strips — for tall panels (line
// diagrams, adverts), which in the real stations are curved with the lining.
export function curvedPanel(b, layer, side, dir, zc, w, y0, y1, uv, o, lift = 0.05, n = 4) {
  const s = (-dir * side * w) / 2;
  const X = (y) => side * (wallX(y, dir) - dir * lift);
  for (let k = 0; k < n; k++) {
    const ya = y0 + ((y1 - y0) * k) / n, yb = y0 + ((y1 - y0) * (k + 1)) / n;
    const va = uv[1] + ((uv[3] - uv[1]) * k) / n, vb = uv[1] + ((uv[3] - uv[1]) * (k + 1)) / n;
    const xa = X(ya), xb = X(yb);
    // facing normal: the lining's own inward normal at the strip's mid-height
    const dy = (ya + yb) / 2 - PF.cy;
    const nx = (-dir * Math.sqrt(Math.max(0, PF.R * PF.R - dy * dy))) / PF.R;
    b.quad(layer, [xa, ya, zc + s], [xa, ya, zc - s], [xb, yb, zc - s], [xb, yb, zc + s], [side * nx, -dy / PF.R, 0], [uv[0], va, uv[2], vb], o);
  }
  const ym = (y0 + y1) / 2;
  return { x: X(ym), y: ym, z: zc };
}

// Dark timber slat bench on a black frame, against the platform-side wall.
export function bench(b, side, zc, walls) {
  const X = (x) => side * x;
  const x0 = PF.back + 0.14, x1 = PF.back + 0.6, z0 = zc - 0.9, z1 = zc + 0.9;
  const wood = atlasRect('bench'), leg = atlasFlat('steelDark');
  const lo = Math.min(X(x0), X(x1)), hi = Math.max(X(x0), X(x1));
  b.box('cut', lo, 0.4, z0, hi, 0.46, z1, wood, null, 'xXyYzZ');                       // seat
  const bx = X(x0 + 0.02), bx2 = X(x0 + 0.07);
  b.box('cut', Math.min(bx, bx2), 0.56, z0, Math.max(bx, bx2), 0.95, z1, wood, null, 'xXYzZ'); // back rest
  for (const z of [z0 + 0.12, zc, z1 - 0.12]) b.box('atlas', lo + 0.05, 0, z - 0.03, hi - 0.05, 0.4, z + 0.03, leg, null, 'xXzZ');
  walls.push([X(x1 + 0.05), z0, X(x1 + 0.05), z1], [X(x0), z0, X(x1 + 0.05), z0], [X(x0), z1, X(x1 + 0.05), z1]);
}
