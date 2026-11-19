// What is inside a car of the standing train (and bolted to its outside):
// rows of longitudinal seats in moquette with black armrests, the screens
// and dark-blue poles at the ends of each row, the rails overhead, one pole
// on the centre line of every double doorway, line diagrams and advert cards
// along the cove, the scrolling LED displays, the bogies — and what of all
// that the walker can bump into. Positions from the TfL drawing (REFERENCES.md).
import { carRect, carFlat } from '../tex/car.js';
import { dynRow } from '../tex/dynamic.js';
import { CAR, carLayout } from './railcar.js';

const SEAT = { front: 0.68, top: 0.44, back: 0.9 };

// opts as for buildCarShell; art: { strip: uv, ads: [uv, …] } on the segment's sign sheet.
export function fitCar(b, opts, art) {
  const { xc, ps, z0, fy } = opts, lay = carLayout(opts.type), L = CAR.len;
  const P = (x, y, z) => [xc + x, fy + y, z0 + z];
  const moq = carRect('moquette'), blk = carFlat('black'), pole = carRect('pole');
  const SEATS = { emit: 0.92 }, IN = { emit: 1 }, OUT = { emit: 0.72 };
  // square section post between two heights (x, z fixed)
  const upright = (x, z, y0, y1, t = 0.018) => {
    for (const [sx, sz] of [[-1, 0], [1, 0], [0, -1], [0, 1]]) {
      const ax = sz ? t : 0, az = sx ? t : 0;
      b.quad('car', P(x + sx * t - ax, y0, z + sz * t - az), P(x + sx * t + ax, y0, z + sz * t + az), P(x + sx * t + ax, y1, z + sz * t + az), P(x + sx * t - ax, y1, z + sz * t - az), [sx, 0, sz], pole, IN);
    }
  };
  const screens = lay.cab ? [1.52, 5.15, 7.12, 10.72, 12.62] : [1.52, 5.15, 7.12, 10.72, 12.62, 16.25];
  for (const s of [-1, 1]) {
    // --- seats
    for (const [za, zb, n, tip] of lay.benches) {
      const pitch = (zb - za) / n;
      for (let i = 0; i < n; i++) {
        const a = za + i * pitch + 0.03, c = a + pitch - 0.06;
        if (tip) {            // folded up against the wall
          b.quad('car', P(s * 1.13, 0.42, a), P(s * 1.13, 0.42, c), P(s * 1.15, 0.92, c), P(s * 1.15, 0.92, a), [-s, 0, 0], moq, SEATS);
          continue;
        }
        b.quad('car', P(s * SEAT.front, SEAT.top, a), P(s * 1.17, SEAT.top, a), P(s * 1.17, SEAT.top, c), P(s * SEAT.front, SEAT.top, c), [0, 1, 0], moq, SEATS);
        b.quad('car', P(s * 1.14, SEAT.top + 0.02, a), P(s * 1.14, SEAT.top + 0.02, c), P(s * 1.19, SEAT.back, c), P(s * 1.19, SEAT.back, a), [-s, 0.1, 0], moq, SEATS);
      }
      if (tip) continue;
      b.quad('car', P(s * SEAT.front, 0, za), P(s * SEAT.front, 0, zb), P(s * SEAT.front, SEAT.top, zb), P(s * SEAT.front, SEAT.top, za), [-s, 0, 0], carRect('plinth'), { emit: 0.8 });
      for (let i = 0; i <= n; i++) {                       // armrests
        const z = za + i * pitch;
        b.quad('car', P(s * 0.76, 0.665, z - 0.025), P(s * 1.15, 0.665, z - 0.025), P(s * 1.15, 0.665, z + 0.025), P(s * 0.76, 0.665, z + 0.025), [0, 1, 0], blk, { emit: 0.7 });
        b.quad('car', P(s * 0.76, 0.6, z - 0.025), P(s * 0.76, 0.6, z + 0.025), P(s * 0.76, 0.665, z + 0.025), P(s * 0.76, 0.665, z - 0.025), [-s, 0, 0], blk, { emit: 0.5 });
      }
    }
    // --- the screen and pole at each end of a row, and the rail over it
    for (const z of screens) {
      const r = carRect('seatEnd');
      for (const nz of [-1, 1]) b.quad('car', P(s * 0.66, 0, z + nz * 0.012), P(s * 1.19, 0, z + nz * 0.012), P(s * 1.19, 1.3, z + nz * 0.012), P(s * 0.66, 1.3, z + nz * 0.012), [0, 0, nz], r, IN);
      upright(s * 0.7, z, 0, 1.93);
    }
    for (const [a, c] of [[1.52, 5.15], [7.12, 10.72], [12.62, lay.cab ? 15.7 : 16.25]]) {
      const y = 1.87, x = s * 0.72, t = 0.016;
      b.quad('car', P(x - t, y - t, a), P(x + t, y - t, a), P(x + t, y - t, c), P(x - t, y - t, c), [0, -1, 0], pole, IN);
      for (const sx of [-1, 1]) b.quad('car', P(x + sx * t, y - t, a), P(x + sx * t, y - t, c), P(x + sx * t, y + t, c), P(x + sx * t, y + t, a), [sx, 0, 0], pole, IN);
      // --- along the cove above the windows: a line diagram between two advert cards
      const lo = [s * 1.061, 1.592], hi = [s * 0.821, 1.872], mid = (a + c) / 2;
      const card = (uv, zc, len) => {
        const zl = s > 0 ? zc - len / 2 : zc + len / 2, zr = s > 0 ? zc + len / 2 : zc - len / 2;      // reads left to right from inside
        b.quad('sheet', P(lo[0], lo[1], zl), P(lo[0], lo[1], zr), P(hi[0], hi[1], zr), P(hi[0], hi[1], zl), [-s, -0.6, 0], uv, { emit: 0.95 });
      };
      if (art && art.strip) card(art.strip, mid, 1.57);
      if (art && art.ads && art.ads.length) {
        const k = Math.round(a * 3 + (s > 0 ? 1 : 0));
        card(art.ads[k % art.ads.length], mid - 1.2, 0.56);
        card(art.ads[(k + 1) % art.ads.length], mid + 1.2, 0.56);
      }
      // --- the LED display, in a dark box hung under the cove
      const dz = s > 0 ? -0.26 : 0.26;
      b.box('car', xc + Math.min(s * 0.85, s * 0.93), fy + 1.645, z0 + mid - 0.3, xc + Math.max(s * 0.85, s * 0.93), fy + 1.795, z0 + mid + 0.3, carFlat('black'), { emit: 0.5 }, 'xXyzZ');
      b.quad('dyn', P(s * 0.846, 1.68, mid + dz), P(s * 0.846, 1.68, mid - dz), P(s * 0.846, 1.76, mid - dz), P(s * 0.846, 1.76, mid + dz), [-s, 0, 0], dynRow('board2', 2, 0.5), { emit: 1.3 });
    }
    // --- plates: the alarm by each double door (inside), roundel and number (outside)
    for (const d of lay.doors.filter((q) => q.w > 1)) {
      const z = d.z + d.w / 2 + 0.16, h = 0.07;
      const za = s > 0 ? z - h : z + h, zb = s > 0 ? z + h : z - h;
      b.quad('car', P(s * 1.19, 1.2, za), P(s * 1.19, 1.2, zb), P(s * 1.19, 1.34, zb), P(s * 1.19, 1.34, za), [-s, 0, 0], carRect('alarm'), IN);
    }
    const out = (name, zc, len, ya, yb) => {
      const zl = s > 0 ? zc + len / 2 : zc - len / 2, zr = s > 0 ? zc - len / 2 : zc + len / 2;          // reads left to right from outside
      b.quad('car', P(s * 1.322, ya, zl), P(s * 1.322, ya, zr), P(s * 1.322, yb, zr), P(s * 1.322, yb, zl), [s, 0, 0], carRect(name), OUT);
    };
    out('logo', 8.89, 0.56, 0.5, 0.78);
    out('number', lay.cab ? 5.0 : 16.0, 0.44, 0.5, 0.65);
    if (lay.cab) {             // the red of the cab end comes a little way round the sides
      for (const [ya, yb] of [[0, 1.05], [-0.05, 0]]) b.quad('car', P(s * 1.323, ya, 16.35), P(s * 1.323, ya, L), P(s * 1.323, yb, L), P(s * 1.323, yb, 16.35), [s, 0, 0], carFlat('red'), OUT);
    }
  }
  for (const d of lay.doors.filter((q) => q.w > 1)) upright(0, d.z, 0, 2.06);
  // --- bogies and the equipment between them
  const under = carFlat('under');
  for (const [za, zb, hw] of [[2.0, 4.65, 0.85], [13.1, 15.75, 0.85], [6.3, 11.4, 1.05]]) {
    b.box('car', xc - hw, fy - 0.96, z0 + za, xc + hw, fy - 0.6, z0 + zb, under, { emit: 0.16 }, 'xXzZ');
  }
}

// What the walker can stand on and bump into, in the segment's coordinates.
// Returns { cells, walls, doors } — doors: the open doorways' [z centre, width]
// (already widened to what a person needs).
export function carCollision(opts) {
  const { xc, ps, z0, fy } = opts, lay = carLayout(opts.type), L = CAR.len, W = 1.17;
  const zEnd = lay.cab ? lay.cab - 0.05 : L;
  const cells = [{ ax: xc, az: z0, bx: xc, bz: z0 + zEnd, hw: W, ya: fy, yb: fy, surface: 'metal' }];
  const walls = [[xc - ps * W, z0, xc - ps * W, z0 + zEnd]];          // the far side: doors shut
  const doors = [];
  let z = 0;
  for (const d of opts.open ? lay.doors : []) {
    const w = Math.max(d.w - 0.1, 0.95);
    walls.push([xc + ps * W, z0 + z, xc + ps * W, z0 + d.z - w / 2]);
    z = d.z + w / 2;
    doors.push([z0 + d.z, w]);
    // the step across the gap: from inside the car to a pace onto the platform
    cells.push({ ax: xc + ps * 0.9, az: z0 + d.z, bx: xc + ps * (opts.edge + 0.3), bz: z0 + d.z, hw: w / 2 - 0.02, ya: fy, yb: 0, surface: 'metal' });
    if (d.w > 1) walls.push([xc, z0 + d.z, xc, z0 + d.z]);              // the pole in the doorway
  }
  walls.push([xc + ps * W, z0 + z, xc + ps * W, z0 + zEnd]);
  // ends: solid, or open by the width of the door between cars
  const gap = 0.92 / 2;
  for (const [ze, isOpen] of [[0, opts.endOpen[0]], [zEnd, opts.endOpen[1] && !lay.cab]]) {
    if (isOpen) walls.push([xc - W, z0 + ze, xc - gap, z0 + ze], [xc + gap, z0 + ze, xc + W, z0 + ze]);
    else walls.push([xc - W, z0 + ze, xc + W, z0 + ze]);
  }
  // rows of seats
  for (const s of [-1, 1]) {
    for (const [za, zb, , tip] of lay.benches) {
      if (tip) continue;
      const x = xc + s * (SEAT.front - 0.04);
      walls.push([x, z0 + za, x, z0 + zb], [x, z0 + za, xc + s * W, z0 + za], [x, z0 + zb, xc + s * W, z0 + zb]);
    }
  }
  return { cells, walls, doors };
}
