// A deep-level station's passenger lift (REFERENCES.md, "The lift, round
// 4"). A short tiled landing, the lift straight ahead: stainless doors
// under a steel hood with an LED strip, a column of position lamps beside
// them. You go in by one door and out by the other, 9.2 m (Chalk Farm's
// lifts) or 11.4 m (Mornington Crescent's) higher or lower.
//
// The segment holds the car twice, once at each level, directly above one
// another: when the doors have shut the rider is moved from one copy to the
// other (game/lifts.js), and since the two are alike nothing shows.
// Local frame: the way in at the origin heading +Z; the way out at z = LEN,
// `rise` above (or below).
import { PASSAGE, sweep, outsized } from './sweep.js';
import { flatWall } from './flatwall.js';
import { lamp, portalLamp, hangingSign } from './decor.js';
import { atlasRect } from '../tex/atlas.js';
import { liftRect, liftFlat } from '../tex/lift.js';
import { drawLiftsSign } from '../tex/lift_signs.js';
import { drawPoster } from '../tex/posters.js';
import { drawPlate } from '../tex/signs.js';
import { LIFT, zface, buildCar, buildDoorway, buildLeaves, carCollision } from './lift_car.js';
import { liftLayerVisible } from '../game/lifts.js';
import { LIFT_TEXT } from '../game/scripts.js';

const DW = LIFT.DOOR_W / 2;
const RISE = { 'Chalk Farm': 9.2, 'Mornington Crescent': 11.4 };

// End wall of a landing with the doorway cut in it (a little smaller than
// the steel lining that passes through it, so the wall laps over the lining).
function landingWall(b, z, facing, y) {
  const hw = DW - 0.006, top = LIFT.DOOR_H - 0.006, pass = outsized(PASSAGE, 0.05), n = pass.length;
  const outline = [{ x: pass[0].x, y: -0.06 }, { x: -hw, y: -0.06 }, { x: -hw, y: top }, { x: hw, y: top }, { x: hw, y: -0.06 }, { x: pass[n - 1].x, y: -0.06 }];
  for (let i = n - 1; i >= 0; i--) if (pass[i].y > 0.01) outline.push({ x: pass[i].x, y: pass[i].y });
  flatWall(b, { x: 0, y, z, yaw: 0 }, facing, outline, { layer: 'tile', grid: 0.7 });
}

// What is fixed to a landing wall. `facing` as for the wall; positions are
// given as the person looking at the wall sees them (vx: metres to the right
// of the door's centre line). entry: the side you board from.
function fittings(b, z, facing, y, entry) {
  const steel = liftFlat('steel'), X = (vx) => facing * vx, zp = (d) => z + facing * d;      // d: how far proud of the wall
  const box = (v0, v1, y0, y1, d, faces) => b.box('lift', Math.min(X(v0), X(v1)), y + y0, Math.min(z, zp(d)), Math.max(X(v0), X(v1)), y + y1, Math.max(z, zp(d)), steel, null, faces);
  const plate = (layer, v0, v1, y0, y1, uv, o, d = 0.012) => zface(b, layer, X(v0), X(v1), y + y0, y + y1, zp(d), facing, uv, o);
  // architrave: two jambs and a head, 9 cm wide and 3 cm proud
  const H = LIFT.DOOR_H;
  box(DW, DW + 0.09, -0.02, H + 0.09, 0.03, 'xXzZ'); box(-DW - 0.09, -DW, -0.02, H + 0.09, 0.03, 'xXzZ'); box(-DW, DW, H, H + 0.09, 0.03, 'yzZ');
  // the hood, with its LED strip (lit on a layer of its own) and the lift's number
  box(-0.85, 0.85, H + 0.09, H + 0.3, 0.12, 'xXyY');
  plate('lift', -0.85, 0.85, H + 0.09, H + 0.3, liftRect('hood'), null, 0.12);
  plate('liftd:land', -0.748, 0.612, H + 0.178, H + 0.258, liftRect(entry.back), { emit: 1.6 }, 0.123);
  // the column of seven lamps, on the right; one of them lit (a layer each)
  plate('lift', 0.86, 0.98, 1.5, 1.82, liftRect('lamps'));
  for (let i = 0; i < 7; i++) {
    const top = 1.82 - 0.32 * (0.07 + (6 - i) * 0.127);
    plate(`liftd:p${i}`, 0.9, 0.94, top - 0.027, top, liftRect('lampOn'), { emit: 1.7 }, 0.014);
  }
  plate('lift', -1.02, -0.84, 1.62, 1.83, liftRect('plate'));
  if (!entry.side) return;
  // only on the side you board from: NEXT LIFT (its arrow lit while the car
  // stands open), AUTOMATIC SERVICE, and the small notice
  plate('lift', -1.14, -0.8, 1.9, 2.005, liftRect('next'));
  plate('liftd:next', -1.14, -0.8, 1.9, 2.005, liftRect('nextOn'), { emit: 1.35 }, 0.014);
  plate('lift', -1.08, -0.8, 1.22, 1.39, liftRect('auto'));
  plate('lift', 0.84, 1.04, 1.22, 1.38, liftRect('notice'));
}

export const lift = {
  type: 'lift',
  sheetSize: 512,
  layerVisible: liftLayerVisible,
  // env.dir may force the direction (+1 up, -1 down)
  plan(rng, env) {
    const dir = env.dir || (rng.chance(0.5) ? 1 : -1);
    const h = RISE[env.station] || rng.pick([9.2, 11.4]), rise = dir * h;
    return {
      p: { dir, h, rise, odd: rng.next() },
      exits: [{ x: 0, y: rise, z: LIFT.LEN, yaw: 0 }],
      box: [-1.9, Math.min(0, rise) - 0.5, 0, 1.9, Math.max(0, rise) + 3.3, LIFT.LEN],
    };
  },

  build(ctx) {
    const { b, p, sheet, rng, env } = ctx, { ZA, ZC0, ZC1, ZB, LEN } = LIFT, rise = p.rise;
    const f = (z, y = 0) => ({ x: 0, y, z, yaw: 0 }), floor = atlasRect('floor');
    // --- the two landings: a short passage each, the lift in its end wall
    const sa = sweep(b, [f(0), f(1.2), f(2.4), f(ZA)], PASSAGE, { floor });
    const sb = sweep(b, [f(ZB, rise), f(ZB + 1.2, rise), f(ZB + 2.4, rise), f(LEN, rise)], PASSAGE, { floor, u0: 3 });
    b.addPortal(0, 0, 0, 0); b.addPortal(0, rise, LEN, 0);
    portalLamp(b, f(0), PASSAGE.crown);
    lamp(b, f(ZA - 1.45), PASSAGE.crown - 0.04); lamp(b, f(ZB + 1.45, rise), PASSAGE.crown - 0.04);
    landingWall(b, ZA, -1, 0); landingWall(b, ZB, 1, rise);
    // (the car comes back to where you boarded: that is the way its landings' strips say it is travelling)
    const back = p.dir > 0 ? 'ledDown' : 'ledUp';
    fittings(b, ZA, -1, 0, { side: true, back }); fittings(b, ZB, 1, rise, { side: false, back });
    // --- the car, twice; each copy has one door that works and one that never opens
    const odd = Math.min(0.6, (env.wrong || 0) * 0.15);
    const posters = [0, 1, 2].map(() => sheet.add(84, 120, (c, w, h) => drawPoster(c, w, h, rng, rng.chance(odd), true)));
    const doors = {};
    for (const [y, lv] of [[0, 0], [rise, 1]]) {
      buildCar(b, y, posters);
      buildDoorway(b, ZA, 1, y); buildDoorway(b, ZB, -1, y);
      if (lv === 0) { doors.liftA = { travel: buildLeaves(b, 'liftA', ZA, 1, y) }; buildLeaves(b, 'lift', ZB, -1, y, false); }
      else { buildLeaves(b, 'lift', ZA, 1, y, false); doors.liftB = { travel: buildLeaves(b, 'liftB', ZB, -1, y) }; }
      // what the strips over the car's doors say, and the lamp that shows where it is
      for (const [z, nz] of [[ZC0, 1], [ZC1, -1]]) {
        zface(b, 'liftd:close', -0.62, 0.62, y + LIFT.DOOR_H + 0.05, y + LIFT.DOOR_H + 0.15, z + nz * 0.004, nz, liftRect('ledClose'), { emit: 1.6 });
        zface(b, 'liftd:ride', -0.5, 0.5, y + LIFT.DOOR_H + 0.05, y + LIFT.DOOR_H + 0.15, z + nz * 0.004, nz, liftRect(p.dir > 0 ? 'ledUp' : 'ledDown'), { emit: 1.6 });
      }
      zface(b, 'lift', -DW - 0.15, -DW - 0.05, y + 1.5, y + 1.77, ZC1 - 0.004, -1, liftRect('lamps'), { emit: 0.9 });
      for (let i = 0; i < 7; i++) {
        const top = 1.77 - 0.27 * (0.07 + (6 - i) * 0.127);
        zface(b, `liftd:p${i}`, -DW - 0.117, -DW - 0.083, y + top - 0.023, y + top, ZC1 - 0.006, -1, liftRect('lampOn'), { emit: 1.7 });
      }
    }
    // --- the sign over the way in
    const wayout = p.dir > 0 && !(env.stretch && env.stretch.correct === false);
    const uv = sheet.add(250, 56, (c, w, h) => drawLiftsSign(c, w, h, wayout));
    const uvBack = sheet.add(250, 56, (c, w, h) => drawPlate(c, w, h, 'To the trains', { sub: 'Northern line' }));
    const hang = hangingSign(b, 'sheet', f(1.3), 2.28, 1.3, 0.29, uv, uvBack, { emit: 1.25 });
    const items = [
      { ...hang, r: 7, cone: 0.94, n: [0, -1], label: 'read sign', title: 'SIGN', text: wayout ? LIFT_TEXT.signUp : LIFT_TEXT.signDown },
      { x: -0.94, y: 1.3, z: ZA - 0.02, r: 2.6, cone: 0.9, n: [0, -1], label: 'read notice', title: 'LIFT 1', text: LIFT_TEXT.notice },
      { x: DW + 0.23, y: 1.25, z: ZC1 - 0.01, r: 2.4, cone: 0.9, n: [0, -1], label: 'look at panel', title: 'LIFT 1', text: LIFT_TEXT.panel },
      { x: DW + 0.23, y: rise + 1.25, z: ZC1 - 0.01, r: 2.4, cone: 0.9, n: [0, -1], label: 'look at panel', title: 'LIFT 1', text: LIFT_TEXT.panel },
    ];
    // --- what can be walked on, and into
    const lo = [-1.2, 2.2], hi = [rise - 1.2, rise + 2.2], c0 = carCollision(0, lo), c1 = carCollision(rise, hi), pw = PASSAGE.W / 2;
    const cells = [...sa.cells, ...sb.cells, ...c0.cells, ...c1.cells,
      { ax: 0, az: ZA - 0.3, bx: 0, bz: ZC0 + 0.3, hw: DW - 0.02, ya: 0, yb: 0, surface: 'metal' },
      { ax: 0, az: ZC1 - 0.3, bx: 0, bz: ZB + 0.3, hw: DW - 0.02, ya: rise, yb: rise, surface: 'metal' }];
    for (const c of [...sa.cells, ...sb.cells]) c.surface = 'tile';
    const fixed = [...sa.walls, ...sb.walls, ...c0.walls, ...c1.walls, c0.shutB, c1.shutA,
      [-pw, ZA, -DW, ZA, lo[0], lo[1]], [DW, ZA, pw, ZA, lo[0], lo[1]], [-pw, ZB, -DW, ZB, hi[0], hi[1]], [DW, ZB, pw, ZB, hi[0], hi[1]]];
    // (both working doors start shut; game/lifts.js takes their walls away while they stand open)
    return { cells, walls: [...fixed, c0.shutA, c1.shutB], items, extra: { lift: { doors, fixed, shutA: c0.shutA, shutB: c1.shutB } } };
  },
};
