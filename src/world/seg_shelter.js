// One section of the Camden Town deep-level shelter (1942), reached — as it
// once really was — from the tube station above. A 16 ft 6 in (5.03 m)
// tunnel with two decks; you walk the upper one, between a row of bunks set
// lengthwise along one wall and bays of bunks set across the other, from one
// bulkhead doorway to the next. A stair-head half way along goes down to the
// lower deck (chained off). Dimensions and layout: REFERENCES.md.
// Local frame: the gangway runs along the segment's axis (x = 0); the tube's
// own centre line is XT to one side of it (`side` mirrors).
import { PASSAGE, sweep, outsized } from './sweep.js';
import { flatWall } from './flatwall.js';
import { portalLamp } from './decor.js';
import { buildSteps, RISE, GOING } from './seg_stairs.js';
import { atlasRect, atlasFlat } from '../tex/atlas.js';
import { LINING } from '../tex/lining.js';
import { fitShelter, SH } from './shelter_fit.js';

// A flat wall across the path with a doorway in it. `outer`: the outline it
// fills, from its left foot over the top to its right foot.
// (The opening is cut 5 mm smaller than the steel lining of the doorway that
// passes through it: the wall laps over the lining's edge. Cut to the same
// size, the two only touch along the edge, and an edge that only touches
// leaks a hairline of the void.)
function doorWall(b, z, facing, outer, opts) {
  const hw = SH.DOOR_W / 2 - 0.005, top = SH.DOOR_H - 0.005, n = outer.length;
  const outline = [{ x: outer[0].x, y: -0.06 }, { x: -hw, y: -0.06 }, { x: -hw, y: top }, { x: hw, y: top }, { x: hw, y: -0.06 }, { x: outer[n - 1].x, y: -0.06 }];
  for (let i = n - 1; i >= 0; i--) if (outer[i].y > 0.01) outline.push({ x: outer[i].x, y: outer[i].y });
  flatWall(b, { x: 0, y: 0, z, yaw: 0 }, facing, outline, opts);
}

export const shelter = {
  type: 'shelter',
  sheetSize: 512,
  plan(rng, env) {
    const side = rng.sign();
    const xa = SH.XT - SH.R - 0.25, xb = SH.XT + SH.R + 0.25;
    return {
      p: { side, faulty: rng.int(0, 5), dark: rng.chance(0.15 + 0.05 * (env.wrong || 0)) },
      exits: [{ x: 0, y: 0, z: SH.TOTAL, yaw: 0 }],
      box: side > 0 ? [xa, -2.6, 0, xb, 3.3, SH.TOTAL] : [-xb, -2.6, 0, -xa, 3.3, SH.TOTAL],
    };
  },

  build(ctx) {
    const { b, p } = ctx, { R, YC, CEIL, XT, GW, Z0, Z1, ZS } = SH, side = p.side;
    const X = (x) => side * x;
    const f = (z) => ({ x: 0, y: 0, z, yaw: 0 });
    // --- the passages at either end (station tiling) and their end walls
    const a = sweep(b, [f(0), f(SH.STUB)], PASSAGE, { floor: atlasRect('floor') });
    const c = sweep(b, [f(SH.TOTAL - SH.STUB), f(SH.TOTAL)], PASSAGE, { floor: atlasRect('floor'), u0: SH.TOTAL - SH.STUB });
    b.addPortal(0, 0, 0, 0); b.addPortal(0, 0, SH.TOTAL, 0);
    portalLamp(b, f(0), PASSAGE.crown);
    const pass = outsized(PASSAGE, 0.05);
    doorWall(b, SH.STUB, -1, pass, { layer: 'tile', grid: 0.7 });
    doorWall(b, SH.TOTAL - SH.STUB, 1, pass, { layer: 'tile', grid: 0.7 });
    // --- the bulkheads closing the section, seen from inside the shelter
    const NA = 6, ph0 = Math.asin((-0.04 - YC) / R), ph1 = Math.asin((CEIL - YC) / R);
    const arc = (sg) => Array.from({ length: NA + 1 }, (_, k) => { const ph = ph0 + ((ph1 - ph0) * k) / NA; return { x: XT + sg * R * Math.cos(ph), y: YC + R * Math.sin(ph), nx: -sg * Math.cos(ph), ny: -Math.sin(ph), v: k / NA }; });
    const left = arc(-1), right = arc(1);
    const deck = [...left.map((q) => ({ x: X(q.x) - side * 0.05, y: q.y + 0.03 })), ...right.slice().reverse().map((q) => ({ x: X(q.x) + side * 0.05, y: q.y + 0.03 }))];
    if (side < 0) deck.reverse();
    const cream = atlasFlat('cream'), paint = { tint: [0.86, 0.84, 0.76] };
    doorWall(b, Z0, 1, deck, { layer: 'atlas', grid: 0.8, uv: () => [(cream[0] + cream[2]) / 2, (cream[1] + cream[3]) / 2], o: paint });
    doorWall(b, Z1, -1, deck, { layer: 'atlas', grid: 0.8, uv: () => [(cream[0] + cream[2]) / 2, (cream[1] + cream[3]) / 2], o: paint });
    // the doorways through the bulkheads: steel-lined, the doors swung back
    const steel = atlasFlat('steelDark'), hw = SH.DOOR_W / 2;
    for (const [za, zb] of [[SH.STUB, Z0], [Z1, SH.TOTAL - SH.STUB]]) {
      for (const sx of [-1, 1]) b.quad('atlas', [sx * hw, -0.03, za], [sx * hw, -0.03, zb], [sx * hw, SH.DOOR_H + 0.01, zb], [sx * hw, SH.DOOR_H + 0.01, za], [-sx, 0, 0], steel);
      b.quad('atlas', [-hw - 0.01, SH.DOOR_H, za], [hw + 0.01, SH.DOOR_H, za], [hw + 0.01, SH.DOOR_H, zb], [-hw - 0.01, SH.DOOR_H, zb], [0, -1, 0], steel);
      b.quad('atlas', [-hw - 0.02, 0.003, za - 0.05], [hw + 0.02, 0.003, za - 0.05], [hw + 0.02, 0.003, zb + 0.05], [-hw - 0.02, 0.003, zb + 0.05], [0, 1, 0], atlasRect('floorDark'));   // threshold plate, a hair above both floors
      // (and a sill 3 mm under all three floors that meet here: seen from the
      // far end of the gangway their few centimetres of overlap are a small
      // fraction of a pixel, which is not enough to be sure of covering it)
      b.quad('atlas', [-hw - 0.3, -0.003, za - 0.6], [hw + 0.3, -0.003, za - 0.6], [hw + 0.3, -0.003, zb + 0.6], [-hw - 0.3, -0.003, zb + 0.6], [0, 1, 0], atlasRect('floorDark'));
    }
    const door = atlasRect('door');
    b.quad('atlas', [X(-hw - 0.08), 0, Z0 + 0.05], [X(-hw - 1.03), 0, Z0 + 0.05], [X(-hw - 1.03), 1.98, Z0 + 0.05], [X(-hw - 0.08), 1.98, Z0 + 0.05], [0, 0, 1], door, { tint: [0.55, 0.62, 0.55] });
    b.quad('atlas', [X(-hw - 1.03), 0, Z1 - 0.05], [X(-hw - 0.08), 0, Z1 - 0.05], [X(-hw - 0.08), 1.98, Z1 - 0.05], [X(-hw - 1.03), 1.98, Z1 - 0.05], [0, 0, -1], door, { tint: [0.55, 0.62, 0.55] });
    // --- the tube: lining both sides, flat ceiling, concrete deck
    // (lining, ceiling and deck run 4 cm past the two bulkheads instead of
    // stopping at them: surfaces that only meet along an edge leak pixels)
    const nz = Math.round(SH.LEN), LAP = 0.04;
    const zr = Array.from({ length: nz + 1 }, (_, i) => (i === 0 ? Z0 - LAP : i === nz ? Z1 + LAP : Z0 + (SH.LEN * i) / nz));
    for (const pts of [left, right]) {
      for (let i = 0; i < nz; i++) {
        const z0 = zr[i], z1 = zr[i + 1];
        for (let k = 0; k < NA; k++) {
          const q = pts[k], s = pts[k + 1];
          const nq = [X(q.nx), q.ny, 0], ns = [X(s.nx), s.ny, 0];
          b.quadN('lining', [X(q.x), q.y, z0], [X(q.x), q.y, z1], [X(s.x), s.y, z1], [X(s.x), s.y, z0], [(nq[0] + ns[0]) / 2, (nq[1] + ns[1]) / 2, 0], nq, nq, ns, ns,
            [z0 / LINING.uPeriod, 0.003 + 0.994 * q.v, z1 / LINING.uPeriod, 0.003 + 0.994 * s.v]);
        }
      }
    }
    const conc = atlasRect('concrete'), fw = Math.sqrt(R * R - YC * YC) + 0.04, cw = Math.sqrt(R * R - (CEIL - YC) ** 2) + 0.04;
    // (the hole in the deck is a centimetre smaller all round than the well
    // under it, so the deck laps over the tops of the well's walls)
    const st = SH.STAIR, OV = 0.01, zHole = [ZS, ZS + st.steps * GOING + 0.6 - OV];
    // (the deck is cut at the ends of the stair-well as well as every metre)
    const zb = zr.concat(zHole).sort((p1, p2) => p1 - p2).filter((z, i, arr) => i === 0 || z - arr[i - 1] > 0.02);
    for (let i = 0; i < zb.length - 1; i++) {
      const z0 = zb[i], z1 = zb[i + 1];
      for (const [xa, xb] of [[XT - cw, XT], [XT, XT + cw]]) b.quad('atlas', [X(xa), CEIL, z0], [X(xb), CEIL, z0], [X(xb), CEIL, z1], [X(xa), CEIL, z1], [0, -1, 0], conc, { tint: [0.9, 0.88, 0.8] });
      // deck: a darker worn strip down the gangway; a hole where the stairs go down
      const inHole = z0 >= zHole[0] - 0.03 && z1 <= zHole[1] + 0.03;
      const spans = [[XT - fw, -GW, 0.82], [-GW, GW, 0.66], [GW, st.x0 + OV, 0.82]].concat(inHole ? [] : [[st.x0 + OV, st.x1 - OV, 0.82]], [[st.x1 - OV, XT + fw, 0.82]]);
      for (const [xa, xb, t] of spans) b.quad('atlas', [X(xa), 0, z0], [X(xb), 0, z0], [X(xb), 0, z1], [X(xa), 0, z1], [0, 1, 0], conc, { tint: [t, t, t * 0.97] });
    }
    // --- the stairs down to the lower deck: steps, a well round them, darkness below
    const drop = st.steps * RISE, zs1 = zHole[1] + OV, wellFloor = -drop - 0.02, dark = atlasFlat('blackout');
    buildSteps(b, ZS + 0.3, st.steps, -1, side > 0 ? [st.x0, st.x1] : [-st.x1, -st.x0], 0);
    b.quad('atlas', [X(st.x0), 0, ZS - 0.03], [X(st.x1), 0, ZS - 0.03], [X(st.x1), 0, ZS + 0.3], [X(st.x0), 0, ZS + 0.3], [0, 1, 0], conc, { tint: [0.82, 0.82, 0.8] });   // the top landing (laps under the deck)
    b.quad('atlas', [X(st.x0), wellFloor, ZS + 0.3 + st.steps * GOING], [X(st.x1), wellFloor, ZS + 0.3 + st.steps * GOING], [X(st.x1), wellFloor, zs1 + 2], [X(st.x0), wellFloor, zs1 + 2], [0, 1, 0], conc, { tint: [0.5, 0.5, 0.48] });
    for (const [x, nx] of [[st.x0, 1], [st.x1, -1]]) b.quad('atlas', [X(x), wellFloor - 0.3, ZS], [X(x), wellFloor - 0.3, zs1 + 2], [X(x), 0, zs1 + 2], [X(x), 0, ZS], [side * nx, 0, 0], conc, { tint: [0.55, 0.54, 0.5] });
    b.quad('atlas', [X(st.x0), -0.22, zs1], [X(st.x1), -0.22, zs1], [X(st.x1), 0, zs1], [X(st.x0), 0, zs1], [0, 0, -1], conc, { tint: [0.5, 0.5, 0.46] });   // the deck's edge
    b.quad('atlas', [X(st.x0), wellFloor - 0.3, zs1 + 2], [X(st.x1), wellFloor - 0.3, zs1 + 2], [X(st.x1), -0.2, zs1 + 2], [X(st.x0), -0.2, zs1 + 2], [0, 0, -1], dark, { emit: 0 });
    b.quad('atlas', [X(st.x0), -0.22, zs1], [X(st.x1), -0.22, zs1], [X(st.x1), -0.22, zs1 + 2], [X(st.x0), -0.22, zs1 + 2], [0, -1, 0], dark, { emit: 0.02 });   // the lower deck's ceiling
    b.quad('atlas', [X(st.x0), wellFloor - 0.3, ZS], [X(st.x1), wellFloor - 0.3, ZS], [X(st.x1), 0, ZS], [X(st.x0), 0, ZS], [0, 0, 1], conc, { tint: [0.5, 0.5, 0.46] });        // behind the top step
    b.addLight(X((st.x0 + st.x1) / 2), -0.9, zs1 - 0.6, 0.4, 3.2, false, [1, 0.8, 0.5]);              // someone has left a lamp on down there
    // --- dim bulkhead lamps along the ceiling over the gangway
    const lampUV = atlasRect('lamp');
    for (let k = 0; k < 6; k++) {
      const z = Z0 + 2.4 + k * ((SH.LEN - 4.8) / 5), dead = p.dark && k % 2 === 1, flick = p.faulty === k;
      b.box('atlas', -0.11, CEIL - 0.1, z - 0.07, 0.11, CEIL, z + 0.07, atlasFlat('steelDark'), null, 'xXzZ');
      b.quad('atlas', [-0.1, CEIL - 0.1, z - 0.06], [0.1, CEIL - 0.1, z - 0.06], [0.1, CEIL - 0.1, z + 0.06], [-0.1, CEIL - 0.1, z + 0.06], [0, -1, 0], lampUV, { emit: dead ? 0.1 : 1.5, flick, tint: [1, 0.82, 0.55] });
      if (!dead) b.addLight(0, CEIL - 0.35, z, 0.78, 7, flick, [1, 0.84, 0.58]);
    }
    // --- bunks, lettering, notices, the telephone
    const fit = fitShelter(ctx, side);
    // --- what can be walked on, and into
    const cell = (az, bz, w) => ({ ax: 0, az, bx: 0, bz, hw: w, ya: 0, yb: 0, surface: 'stone' });
    const cells = [...a.cells, cell(SH.STUB - 0.1, Z0 + 0.1, hw - 0.05), cell(Z0, Z1, GW), cell(Z1 - 0.1, SH.TOTAL - SH.STUB + 0.1, hw - 0.05), ...c.cells,
      { ax: X(GW - 0.1), az: ZS - 0.65, bx: X(st.x1 - 0.05), bz: ZS - 0.65, hw: 0.6, ya: 0, yb: 0, surface: 'stone' }];   // the landing at the stair-head
    const walls = [...a.walls, ...c.walls];
    const pw = PASSAGE.W / 2 + 0.1, tw = GW + 0.1;
    for (const [z, w] of [[SH.STUB, pw], [Z0, tw], [Z1, tw], [SH.TOTAL - SH.STUB, pw]]) walls.push([-w, z, -hw, z], [hw, z, w, z]);
    for (const [za, zb] of [[SH.STUB, Z0], [Z1, SH.TOTAL - SH.STUB]]) for (const sx of [-1, 1]) walls.push([sx * hw, za, sx * hw, zb]);
    walls.push([X(-GW), Z0, X(-GW), Z1], [X(GW), Z0, X(GW), ZS - 1.25], [X(GW), ZS, X(GW), Z1]);
    walls.push([X(GW), ZS - 1.25, X(st.x1), ZS - 1.25], [X(st.x1), ZS - 1.25, X(st.x1), ZS], [X(GW), ZS, X(st.x1), ZS]);
    return { cells, walls, items: fit.items, frames: [f(0), f(SH.TOTAL)] };
  },
};
