// The lift car, its doorways and its doors (REFERENCES.md, "The lift,
// round 4"). The car is 2.3 x 2.9 m and 2.3 m high — about the 7 m² a
// fifty-passenger lift may have — with a 1.4 x 2.1 m door at each end:
// you go in by one and out by the other. Each door is four stainless
// panels opening from the centre; the middle pair travel twice as far as
// the outer pair and end up stacked behind them.
//
// Everything in the car is self-lit (o.emit), never baked: the segment
// holds two copies of the car, one at each level, and they must look
// exactly alike (see game/lifts.js).
import { liftRect, liftFlat } from '../tex/lift.js';
import { atlasRect } from '../tex/atlas.js';

export const LIFT = { STUB: 3.6, DEP: 0.34, CAR_W: 2.3, CAR_D: 2.9, CAR_H: 2.3, DOOR_W: 1.4, DOOR_H: 2.1, FAST: 0.70, SLOW: 0.37 };
LIFT.ZA = LIFT.STUB; LIFT.ZC0 = LIFT.ZA + LIFT.DEP; LIFT.ZC1 = LIFT.ZC0 + LIFT.CAR_D; LIFT.ZB = LIFT.ZC1 + LIFT.DEP; LIFT.LEN = LIFT.ZB + LIFT.STUB;

const HW = LIFT.CAR_W / 2, DW = LIFT.DOOR_W / 2;
// depths into a doorway, from the landing wall's face (0) to the car's inner face (DEP)
const D = { LS0: 0.10, LS1: 0.135, F0: 0.14, F1: 0.24, CS0: 0.245, CS1: 0.28 };
const E = { wall: { emit: 0.95 }, ceil: { emit: 1.06 }, floor: { emit: 0.8 }, steel: { emit: 0.9 }, lining: { emit: 0.74 }, door: { emit: 0.9 }, lit: { emit: 1.5 } };

// A rectangle in a plane of constant z (or x), with its texture the right
// way round for whoever the normal points at. (Facing +Z, +X is on your left.)
export function zface(b, layer, xa, xb, y0, y1, z, nz, uv, o) {
  const l = nz < 0 ? Math.max(xa, xb) : Math.min(xa, xb), r = nz < 0 ? Math.min(xa, xb) : Math.max(xa, xb);
  b.quad(layer, [l, y0, z], [r, y0, z], [r, y1, z], [l, y1, z], [0, 0, nz], uv, o);
}
export function xface(b, layer, x, za, zb, y0, y1, nx, uv, o) {
  const l = nx > 0 ? Math.max(za, zb) : Math.min(za, zb), r = nx > 0 ? Math.min(za, zb) : Math.max(za, zb);
  b.quad(layer, [x, y0, l], [x, y0, r], [x, y1, r], [x, y1, l], [nx, 0, 0], uv, o);
}
const sub = (name, f0, f1) => { const r = liftRect(name); return [r[0] + (r[2] - r[0]) * f0, r[1], r[0] + (r[2] - r[0]) * f1, r[3]]; };

// The inside of the car at floor level y. posters: uv rects on the sign sheet.
export function buildCar(b, y, posters) {
  const { ZC0, ZC1, CAR_H, DOOR_H } = LIFT, top = y + CAR_H;
  b.grid('lift', [-HW - 0.02, y, ZC0 - 0.02], [LIFT.CAR_W + 0.04, 0, 0], [0, 0, LIFT.CAR_D + 0.04], 3, 4, [0, 1, 0], liftRect('floor'), E.floor, true);
  const c = liftRect('ceil');
  b.quad('lift', [HW + 0.02, top, ZC0 - 0.02], [-HW - 0.02, top, ZC0 - 0.02], [-HW - 0.02, top, ZC1 + 0.02], [HW + 0.02, top, ZC1 + 0.02], [0, -1, 0], c, E.ceil);
  for (const s of [-1, 1]) {
    // long wall, the rail at hand height, three framed posters over it
    xface(b, 'lift', s * HW, ZC0 - 0.02, ZC1 + 0.02, y - 0.02, top + 0.02, -s, liftRect('wall'), E.wall);
    b.box('lift', s > 0 ? HW - 0.055 : -HW, y + 0.93, ZC0 + 0.22, s > 0 ? HW : -HW + 0.055, y + 1.03, ZC1 - 0.22, liftRect('rail'), E.steel, s > 0 ? 'xyYzZ' : 'XyYzZ');
    posters.forEach((uv, i) => {
      const zc = ZC0 + LIFT.CAR_D * (0.2 + 0.3 * i), k = s > 0 ? i : posters.length - 1 - i;
      xface(b, 'sheet', s * (HW - 0.012), zc - 0.21, zc + 0.21, y + 1.24, y + 1.84, -s, posters[k], { emit: 0.95 });
    });
  }
  // the two steel ends: a return either side of the door, the header over it
  // (set 2 mm back and lapping behind the returns: no edge-to-edge joints)
  for (const [z, nz] of [[ZC0, 1], [ZC1, -1]]) {
    // the fitted return is on your left as you face the door you leave by
    zface(b, 'lift', DW - 0.002, HW + 0.02, y - 0.02, top + 0.02, z, nz, liftRect(nz < 0 ? 'panel' : 'end'), E.steel);
    zface(b, 'lift', -HW - 0.02, -DW + 0.002, y - 0.02, top + 0.02, z, nz, liftRect('end'), E.steel);
    zface(b, 'lift', -DW - 0.03, DW + 0.03, y + DOOR_H - 0.012, top + 0.02, z - nz * 0.002, nz, sub('head', 0.19, 0.81), E.steel);
  }
  // EXIT, lit, over the panel by the far door
  zface(b, 'lift', DW + 0.12, DW + 0.34, y + 1.88, y + 1.99, ZC1 - 0.004, -1, liftRect('exit'), E.lit);
}

// Lining, soffit and sill of a doorway. zw: the landing wall's face; s: +1
// if the car lies beyond it along +Z (the way in), -1 if before it (the way out).
export function buildDoorway(b, zw, s, y) {
  const Z = (d) => zw + s * d, top = y + LIFT.DOOR_H, jamb = liftRect('jamb');
  for (const sx of [-1, 1]) {
    const x = sx * (DW + 0.005);
    // (u runs from the landing to the car whichever way the doorway faces)
    b.quadUV('lift', [x, y - 0.02, Z(-0.02)], [x, y - 0.02, Z(0.36)], [x, top + 0.02, Z(0.36)], [x, top + 0.02, Z(-0.02)], [-sx, 0, 0],
      [jamb[0], jamb[1]], [jamb[2], jamb[1]], [jamb[2], jamb[3]], [jamb[0], jamb[3]], E.lining);
  }
  b.quadUV('lift', [-DW - 0.02, top, Z(-0.02)], [-DW - 0.02, top, Z(0.35)], [DW + 0.02, top, Z(0.35)], [DW + 0.02, top, Z(-0.02)], [0, -1, 0],
    [jamb[0], jamb[1]], [jamb[2], jamb[1]], [jamb[2], jamb[3]], [jamb[0], jamb[3]], E.lining);
  const sl = liftRect('sill');
  b.quadUV('lift', [-DW - 0.02, y + 0.003, Z(-0.05)], [DW + 0.02, y + 0.003, Z(-0.05)], [DW + 0.02, y + 0.003, Z(0.39)], [-DW - 0.02, y + 0.003, Z(0.39)], [0, 1, 0],
    [sl[0], sl[3]], [sl[2], sl[3]], [sl[2], sl[1]], [sl[0], sl[1]], E.floor);
  // (a plate under the three floors that meet here)
  b.quad('atlas', [-DW - 0.3, y - 0.003, Z(-0.6)], [DW + 0.3, y - 0.003, Z(-0.6)], [DW + 0.3, y - 0.003, Z(0.6)], [-DW - 0.3, y - 0.003, Z(0.6)], [0, 1, 0], atlasRect('floorDark'));
}

// The four panels of a door, shut. landing = false builds only what can be
// seen from inside the car (a door that never opens: the far door of each
// copy of the car). Returns, per vertex added to `layer`, how far it moves
// (along x) when the door is fully open.
export function buildLeaves(b, layer, zw, s, y, landing = true) {
  const Z = (d) => zw + s * d, y0 = y - 0.01, y1 = y + LIFT.DOOR_H + 0.03, n0 = b.count(layer), travel = [];
  const mark = (dx) => { while (travel.length < b.count(layer) - n0) travel.push(dx); };
  const fUV = liftRect('leafF'), sUV = liftRect('leafS'), black = liftFlat('black'), dark = liftFlat('dark');
  for (const sx of [-1, 1]) {
    // middle panel (the landing's and the car's, with the gap between them, as one)
    if (landing) zface(b, layer, 0, sx * 0.36, y0, y1, Z(D.F0), -s, fUV);
    zface(b, layer, 0, sx * 0.36, y0, y1, Z(D.F1), s, fUV, E.door);
    if (landing) xface(b, layer, 0, Z(D.F0), Z(D.F1), y0, y1, -sx, black, E.lining);
    if (sx > 0) {
      // the rubber edge down the middle, a hair proud of both faces
      if (landing) zface(b, layer, -0.007, 0.007, y0, y1, Z(D.F0 - 0.0015), -s, black);
      zface(b, layer, -0.007, 0.007, y0, y1, Z(D.F1 + 0.0015), s, black, E.lining);
    }
    mark(sx * LIFT.FAST);
    // outer panels: the landing's, then the car's
    if (landing) {
      zface(b, layer, sx * 0.33, sx * 0.74, y0, y1, Z(D.LS0), -s, sUV);
      xface(b, layer, sx * 0.33, Z(D.LS0), Z(D.LS1 + 0.006), y0, y1, -sx, dark);
    }
    zface(b, layer, sx * 0.33, sx * 0.74, y0, y1, Z(D.CS1), s, sUV, E.door);
    xface(b, layer, sx * 0.33, Z(D.CS0 - 0.006), Z(D.CS1), y0, y1, -sx, dark, E.lining);
    mark(sx * LIFT.SLOW);
  }
  return travel;
}

// What the car, its doorways and its doors add to the collision: floor
// cells and walls for the copy at level y (walls only bite within `band`,
// a range of feet heights, so the two copies do not get in each other's way).
export function carCollision(y, band) {
  const { ZA, ZC0, ZC1, ZB } = LIFT, w = (x0, z0, x1, z1) => [x0, z0, x1, z1, band[0], band[1]];
  const cells = [{ ax: 0, az: ZC0 - 0.02, bx: 0, bz: ZC1 + 0.02, hw: HW, ya: y, yb: y, surface: 'metal' }];
  const walls = [w(-HW, ZC0, -HW, ZC1), w(HW, ZC0, HW, ZC1)];
  for (const z of [ZC0, ZC1]) walls.push(w(-HW, z, -DW, z), w(DW, z, HW, z));
  for (const sx of [-1, 1]) walls.push(w(sx * DW, ZA, sx * DW, ZC0), w(sx * DW, ZC1, sx * DW, ZB));
  return { cells, walls, shutA: w(-DW, ZA + 0.19, DW, ZA + 0.19), shutB: w(-DW, ZB - 0.19, DW, ZB - 0.19) };
}
