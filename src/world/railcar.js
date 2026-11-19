// One car of the standing train, to the dimensions of the 1995 Stock (TfL
// information sheet, see REFERENCES.md): 17.77 m over body ends, 2.63 m wide,
// double doors 1.406 m and single doors 0.703 m wide, measured positions.
// Built straight into the platform segment's geometry (layer 'car', self-lit),
// in the segment's own coordinates: `xc` is the car's centre line, `ps` the
// side the platform is on (-1 | +1), z0 its rear end, fy its floor level.
// Windows and open doorways are real openings: you see the platform from
// inside and the lit saloon from outside.
import { carRect, carFlat, LIVERY_Y } from '../tex/car.js';
import { trainRect } from '../tex/train.js';

export const CAR = { len: 17.77, gap: 0.25, half: 1.315, inner: 1.2, doorHead: 1.88, endDoor: 0.66 };

// Profile stations from the floor to the crown: [y, inner x, outer x, outer y].
const ST = [
  [0.00, 1.20, 1.315, 0.00], [0.85, 1.20, 1.315, 0.85], [1.05, 1.20, 1.315, 1.05], [1.38, 1.16, 1.275, 1.40],
  [1.60, 1.07, 1.19, 1.63], [1.72, 1.00, 1.12, 1.76], [1.88, 0.83, 0.95, 1.94], [1.98, 0.62, 0.74, 2.06],
  [2.05, 0.34, 0.42, 2.14], [2.07, 0.0, 0.0, 2.175],
];
const K_SILL = 1, K_WTOP = 4, K_DOOR = 6, N = ST.length - 1;

// Where things are along a car, from its rear end (z = 0). The driving
// motor car has its cab at the far end instead of the second single door.
export function carLayout(type) {
  const dm = type === 'dm';
  return {
    type, cab: dm ? 15.9 : 0,
    doors: [{ z: 0.97, w: 0.703 }, { z: 6.11, w: 1.406 }, { z: 11.66, w: 1.406 }].concat(dm ? [] : [{ z: 16.80, w: 0.703 }]),
    windows: [[1.85, 3.23], [3.45, 4.82], [7.40, 8.79], [8.99, 10.37], [12.95, 14.32], dm ? [14.54, 15.70] : [14.54, 15.92]],
    // rows of seats: [from, to, seats, tip-up]
    benches: [[1.52, 5.15, 7], [7.12, 8.14, 2, true], [8.14, 9.70, 3], [9.70, 10.72, 2, true], dm ? [12.62, 15.74, 6] : [12.62, 16.25, 7]],
  };
}

// Stretches of solid wall along a car of length `len` once `holes` are cut.
function solids(len, holes) {
  const out = [];
  let z = 0;
  for (const [a, c] of holes.slice().sort((p, q) => p[0] - q[0])) { if (a > z + 1e-6) out.push([z, a]); z = Math.max(z, c); }
  if (z < len - 1e-6) out.push([z, len]);
  return out;
}

const hole = (d) => [d.z - d.w / 2, d.z + d.w / 2];

// opts: { type, xc, ps, z0, fy, open: bool (platform-side doors), endOpen: [rear, front], edge: distance centre → platform edge }
export function buildCarShell(b, opts) {
  const { xc, ps, z0, fy } = opts, lay = carLayout(opts.type), L = CAR.len;
  const P = (x, y, z) => [xc + x, fy + y, z0 + z];
  const IN = { emit: 1.0 }, LOW = { emit: 0.9 }, OUT = { emit: 0.72 }, DARK = { emit: 0.35 };
  const panel = carFlat('panel'), liv = carRect('livery'), roof = carFlat('roof');
  const vLiv = (y) => liv[1] + ((liv[3] - liv[1]) * (Math.min(LIVERY_Y[1], y) - LIVERY_Y[0])) / (LIVERY_Y[1] - LIVERY_Y[0]);
  const doorHoles = lay.doors.map(hole), winHoles = lay.windows;
  for (const s of [-1, 1]) {
    // --- side walls, inner and outer skin, band by band up the profile
    for (let k = 0; k < N; k++) {
      // (bands are cut at different places along the car — at the doors
      // only, or at doors and windows — so each one laps a few millimetres
      // over the next and under the floor: where two bands merely touched,
      // the joint could leak single pixels of whatever is outside)
      const lap = (a, c) => c + ((c - a) * 0.005) / Math.max(0.05, Math.abs(c - a) + 0.05);
      const [ya0, xia, xoa, yoa] = ST[k], [yb0, xib0, xob, yob0] = ST[k + 1];
      const ya = k === 0 ? -0.02 : ya0, yb = k < N - 1 ? yb0 + 0.004 : yb0, yob = k < N - 1 ? yob0 + 0.004 : yob0;
      const xib = k < N - 1 ? lap(xia, xib0) : xib0;
      const holes = (k < K_DOOR ? doorHoles : []).concat(k >= K_SILL && k < K_WTOP ? winHoles : []);
      const nin = [-s * (yb - ya), xib - xia, 0];
      const lit = k === 7, top = k >= 7;
      for (const [za, zb] of solids(L, holes)) {
        const uvIn = lit ? carRect('light') : top ? carFlat('ceiling') : panel;
        b.quad('car', P(s * xia, ya, za), P(s * xia, ya, zb), P(s * xib, yb, zb), P(s * xib, yb, za), nin, uvIn, lit ? { emit: 2 } : k === 0 ? LOW : IN);
        const uvOut = k >= 5 ? roof : [liv[0], vLiv(yoa), liv[2], vLiv(yob)];
        b.quad('car', P(s * xoa, yoa, za), P(s * xoa, yoa, zb), P(s * xob, yob, zb), P(s * xob, yob, za), [s, 0.2, 0], uvOut, OUT);
      }
    }
    // the skirt below floor level (tucks in towards the bogies)
    b.quad('car', P(s * 1.2, LIVERY_Y[0], 0), P(s * 1.2, LIVERY_Y[0], L), P(s * 1.315, 0, L), P(s * 1.315, 0, 0), [s, 0, 0], [liv[0], vLiv(LIVERY_Y[0]), liv[2], vLiv(0)], OUT);
    // --- doors: shut leaves fill the opening; open ones stand outside the body
    const open = opts.open && s === ps;
    for (const d of lay.doors) {
      const leaves = d.w > 1 ? [[d.z - d.w / 2, d.z, -1], [d.z, d.z + d.w / 2, 1]] : [[d.z - d.w / 2, d.z + d.w / 2, d.z < L / 2 ? 1 : -1]];
      for (const [la, lb, dir] of leaves) {
        const shift = open ? dir * (lb - la) : 0, off = open ? 0.05 : 0.025;
        const za = la + shift, zb = lb + shift;
        for (const [ka, kb] of [[0, 2], [2, 4], [4, 6]]) {
          const A = ST[ka], B = ST[kb], v = (y) => y / ST[K_DOOR][3];
          const face = (name, x0, x1, n, o) => {
            const r = carRect(name), uv = [r[0], r[1] + (r[3] - r[1]) * v(A[3]), r[2], r[1] + (r[3] - r[1]) * v(B[3])];
            b.quad('car', P(s * x0, A[3], za), P(s * x0, A[3], zb), P(s * x1, B[3], zb), P(s * x1, B[3], za), n, uv, o);
          };
          face('doorOut', A[2] + off, B[2] + off, [s, 0, 0], OUT);
          if (!open) face('doorIn', A[2] - 0.02, B[2] - 0.02, [-s, 0, 0], IN);
        }
      }
      // the doorway's rubber-edged jambs and head (they also close the gap
      // between the two skins round a shut door), and a sill plate over the
      // gap to the platform where the door is open
      const jamb = carFlat('black');
      for (const [z, nz] of [[d.z - d.w / 2, 1], [d.z + d.w / 2, -1]]) {
        for (let k = 0; k < K_DOOR; k++) {
          const A = ST[k], B = ST[k + 1];
          b.quad('car', P(s * A[1], A[0], z), P(s * A[2], A[3], z), P(s * B[2], B[3], z), P(s * B[1], B[0], z), [0, 0, nz], jamb, DARK);
        }
      }
      const H = ST[K_DOOR];
      b.quad('car', P(s * H[1], H[0], d.z - d.w / 2), P(s * H[1], H[0], d.z + d.w / 2), P(s * H[2], H[3], d.z + d.w / 2), P(s * H[2], H[3], d.z - d.w / 2), [0, -1, 0], jamb, DARK);
      if (!open) continue;
      const e = opts.edge + 0.03;
      b.quad('car', P(s * 1.2, 0.004, d.z - d.w / 2), P(s * e, 0.004, d.z - d.w / 2), P(s * e, 0.004, d.z + d.w / 2), P(s * 1.2, 0.004, d.z + d.w / 2), [0, 1, 0], carFlat('steel'), { emit: 0.7 });
    }
  }
  // --- floor: pale, dark in the doorways
  const zones = solids(L, doorHoles.map(([a, c]) => [a - 0.12, c + 0.12]));
  const strips = zones.map((z) => [z, 'floor']).concat(doorHoles.map(([a, c]) => [[Math.max(0, a - 0.12), Math.min(L, c + 0.12)], 'floorDark']));
  for (const [[za, zb], name] of strips) {
    for (let z = za; z < zb - 1e-6; z += 1.2) {
      const z1 = Math.min(zb, z + 1.2);
      for (const [xa, xb] of [[-1.215, 0], [0, 1.215]]) b.quad('car', P(xa, 0, z), P(xb, 0, z), P(xb, 0, z1), P(xa, 0, z1), [0, 1, 0], carRect(name), { emit: 0.86 });
    }
  }
  b.quad('car', P(-1.2, LIVERY_Y[0], 0), P(1.2, LIVERY_Y[0], 0), P(1.2, LIVERY_Y[0], L), P(-1.2, LIVERY_Y[0], L), [0, -1, 0], carFlat('under'), { emit: 0.1 });
  // --- the two ends: a wall in strips across the profile, with the door to
  //     the next car (open, shut, or — at the cab — a plain bulkhead)
  const ends = [[0, 1, opts.endOpen[0], 'end'], [L, -1, opts.endOpen[1], lay.cab ? 'cabface' : 'end']];
  if (lay.cab) ends.push([lay.cab, -1, false, 'bulkhead']);
  for (const [z, nz, isOpen, kind] of ends) {
    const zi = z + nz * 0.05, dw = CAR.endDoor / 2;
    for (let k = 0; k < N; k++) {
      const A = ST[k], B = ST[k + 1];
      const parts = isOpen && k < K_DOOR ? [[-1, -dw], [dw, 1]] : [[-1, 1]];
      for (const [fa, fb] of parts) {
        const xa = (f, row) => (Math.abs(f) === 1 ? f * row : f);
        // inside face (not for the cab front, which is seen only from outside)
        if (kind !== 'cabface') b.quad('car', P(xa(fa, A[1]), A[0], zi), P(xa(fb, A[1]), A[0], zi), P(xa(fb, B[1]), B[0], zi), P(xa(fa, B[1]), B[0], zi), [0, 0, nz], k >= 7 ? carFlat('ceiling') : panel, IN);
        if (kind === 'bulkhead') continue;
        if (kind === 'cabface') {
          // the red cab end, from the same painting as the train that runs through
          const r = trainRect('front'), tu = (x) => r[0] + (r[2] - r[0]) * (0.5 + x / (2 * CAR.half)), tv = (y) => r[1] + (r[3] - r[1]) * ((y - LIVERY_Y[0]) / (ST[N][3] - LIVERY_Y[0]));
          b.quadUV('train', P(-A[2], A[3], z), P(A[2], A[3], z), P(B[2], B[3], z), P(-B[2], B[3], z), [0, 0, -nz], [tu(-A[2]), tv(A[3])], [tu(A[2]), tv(A[3])], [tu(B[2]), tv(B[3])], [tu(-B[2]), tv(B[3])], { emit: 0.8 });
        } else b.quad('car', P(xa(fa, A[2]), A[3], z), P(xa(fb, A[2]), A[3], z), P(xa(fb, B[2]), B[3], z), P(xa(fa, B[2]), B[3], z), [0, 0, -nz], carFlat('under'), { emit: 0.5 });
      }
    }
    if (kind === 'cabface') {
      const r = trainRect('front'), tv = (y) => r[1] + (r[3] - r[1]) * ((y - LIVERY_Y[0]) / (ST[N][3] - LIVERY_Y[0]));
      b.quadUV('train', P(-1.2, LIVERY_Y[0], z), P(1.2, LIVERY_Y[0], z), P(1.315, 0, z), P(-1.315, 0, z), [0, 0, -nz], [r[0] + (r[2] - r[0]) * 0.04, tv(LIVERY_Y[0])], [r[2] - (r[2] - r[0]) * 0.04, tv(LIVERY_Y[0])], [r[2], tv(0)], [r[0], tv(0)], { emit: 0.8 });
    } else if (!isOpen || kind === 'bulkhead') {
      // a shut door: narrow window to the next car, or the plain cab door
      const r = carRect(kind === 'bulkhead' ? 'doorIn' : 'endDoor');
      b.quad('car', P(nz * -dw, 0, zi + nz * 0.01), P(nz * dw, 0, zi + nz * 0.01), P(nz * dw, CAR.doorHead, zi + nz * 0.01), P(nz * -dw, CAR.doorHead, zi + nz * 0.01), [0, 0, nz], r, { emit: 0.94 });
    }
  }
  return lay;
}

export { ST as CAR_PROFILE, K_WTOP, K_DOOR };
