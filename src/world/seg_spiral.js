// The emergency stairs at Hampstead, the deepest station on the network:
// a spiral round a central pillar in an 18 ft shaft, "over 320 steps" in
// half-turns of 17 with a small landing between — here 19 half-turns, 323
// steps of 172 mm, 55.6 m: the height of the real lift shaft. Numbers and
// sources in REFERENCES.md. You come in through a door at the foot and
// leave through one on the far side at the top.
// Local frame: the path runs along +Z through the shaft's centre line; `dir`
// is the hand of the spiral.
import { PASSAGE, sweep, outsized } from './sweep.js';
import { flatWall } from './flatwall.js';
import { portalLamp } from './decor.js';
import { atlasRect, atlasFlat } from '../tex/atlas.js';
import { SP, phi, lineY, isLanding } from './spiral_geom.js';
import { spiralArt, fitSpiral } from './spiral_fit.js';

const MID = SP.DOOR_H - 0.006;        // where the wall is split above the line (the head of a doorway)

// End wall of a passage stub with the doorway cut in it (5 mm smaller than
// the steel lining that passes through it, so the wall laps over the lining).
function doorWall(b, z, facing, y) {
  const hw = SP.DOOR_W / 2, pass = outsized(PASSAGE, 0.05), n = pass.length;
  const outline = [{ x: pass[0].x, y: -0.06 }, { x: -hw, y: -0.06 }, { x: -hw, y: MID }, { x: hw, y: MID }, { x: hw, y: -0.06 }, { x: pass[n - 1].x, y: -0.06 }];
  for (let i = n - 1; i >= 0; i--) if (pass[i].y > 0.01) outline.push({ x: pass[i].x, y: pass[i].y });
  flatWall(b, { x: 0, y, z, yaw: 0 }, facing, outline, { layer: 'tile', grid: 0.7 });
}

// Steel lining of a doorway between z = za and zb, floor at height y.
function doorLining(b, za, zb, y) {
  const hw = SP.DOOR_W / 2 + 0.006, steel = atlasFlat('steelDark'), plate = atlasRect('floorDark');
  for (const sx of [-1, 1]) b.quad('atlas', [sx * hw, y - 0.03, za], [sx * hw, y - 0.03, zb], [sx * hw, y + SP.DOOR_H + 0.01, zb], [sx * hw, y + SP.DOOR_H + 0.01, za], [-sx, 0, 0], steel);
  b.quad('atlas', [-hw - 0.01, y + SP.DOOR_H, za], [hw + 0.01, y + SP.DOOR_H, za], [hw + 0.01, y + SP.DOOR_H, zb], [-hw - 0.01, y + SP.DOOR_H, zb], [0, -1, 0], steel);
  // the floor of the doorway itself, level with the two floors it joins, and
  // a threshold plate a hair above all three. (Without a floor of its own
  // the doorway was a slot: climbing the last flight your eye passes the
  // level of the top landing, and for an instant you saw under the plate.)
  b.quad('atlas', [-hw - 0.02, y, za - 0.04], [hw + 0.02, y, za - 0.04], [hw + 0.02, y, zb + 0.04], [-hw - 0.02, y, zb + 0.04], [0, 1, 0], plate);
  b.quad('atlas', [-hw - 0.02, y + 0.003, za - 0.05], [hw + 0.02, y + 0.003, za - 0.05], [hw + 0.02, y + 0.003, zb + 0.05], [-hw - 0.02, y + 0.003, zb + 0.05], [0, 1, 0], plate);
  b.quad('atlas', [-hw - 0.3, y - 0.003, za - 0.6], [hw + 0.3, y - 0.003, za - 0.6], [hw + 0.3, y - 0.003, zb + 0.6], [-hw - 0.3, y - 0.003, zb + 0.6], [0, 1, 0], plate);   // sill under the three floors
}

export const spiral = {
  type: 'spiral',
  sheetSize: 512,
  plan(rng, env) {
    const dir = rng.sign(), m = SP.R1 + 0.35;
    return {
      p: { dir, faulty: rng.int(2, SP.HALVES - 2), wrong: env.wrong || 0 },
      exits: [{ x: 0, y: SP.H, z: 2 * SP.ZC, yaw: 0 }],
      box: [-m, -0.6, 0, m, SP.H + SP.CEIL + 0.4, 2 * SP.ZC],
    };
  },

  build(ctx) {
    const { b, p } = ctx, dir = p.dir, { R0, R1, N, TURN, H } = SP, zt = 2 * SP.ZC;
    const P = (r, a, y) => [dir * r * Math.sin(a), y, SP.ZC - r * Math.cos(a)];
    const tan = (a) => [dir * Math.cos(a), 0, Math.sin(a)];
    const f = (z, y = 0) => ({ x: 0, y, z, yaw: 0 });
    const art = spiralArt(ctx);
    // --- the two passage stubs, their end walls and the doorways into the shaft
    const sa = sweep(b, [f(0), f(SP.STUB)], PASSAGE, { floor: atlasRect('floor') });
    const sc = sweep(b, [f(zt - SP.STUB, H), f(zt, H)], PASSAGE, { floor: atlasRect('floor'), u0: 3 });
    b.addPortal(0, 0, 0, 0); b.addPortal(0, H, zt, 0);
    portalLamp(b, f(0), PASSAGE.crown);
    doorWall(b, SP.STUB, -1, 0); doorWall(b, zt - SP.STUB, 1, H);
    doorLining(b, SP.STUB, SP.STUB + SP.THROAT + 0.03, 0);
    doorLining(b, zt - SP.STUB - SP.THROAT - 0.03, zt - SP.STUB, H);
    // --- the shaft wall, a strip per sector from under this flight to under
    //     the one a full turn above (tiled, the pattern following the stairs;
    //     the top two turns are white-painted metal panels)
    const cream = atlasFlat('cream'), up = [0, 1, 0];
    const topOf = (g, bd) => (g + TURN <= N - 1 ? lineY(bd + TURN) - SP.SLAB : H + SP.CEIL + 0.05);
    const v = (dy) => 0.004 + (0.992 * dy) / 3.63;
    for (let g = 0; g < N; g++) {
      const a0 = phi(g), a1 = phi(g + 1), y0 = lineY(g), y1 = lineY(g + 1), am = (a0 + a1) / 2;
      const n = [-dir * Math.sin(am), 0, Math.cos(am)], white = g >= N - 2 * TURN;
      const rows = [[-SP.SLAB, MID], [MID, null]];
      rows.forEach(([lo, hi], k) => {
        if (k === 0 && (g === 0 || g === N - 1)) return;            // the doorways
        const ya = y0 + lo, yb = y1 + lo, yc = hi === null ? topOf(g, g) : y0 + hi, yd = hi === null ? topOf(g, g + 1) : y1 + hi;
        const A = P(R1, a0, ya), B = P(R1, a1, yb), C = P(R1, a1, yd), D = P(R1, a0, yc);
        if (white) b.quad('atlas', A, B, C, D, n, cream, { tint: [1.02, 1.02, 0.98] });
        else b.quadUV('tile', A, B, C, D, n, [(a0 * R1) / 6, v(ya - y0)], [(a1 * R1) / 6, v(yb - y1)], [(a1 * R1) / 6, v(yd - y1)], [(a0 * R1) / 6, v(yc - y0)]);
      });
      // --- the flight itself: landing, or riser and tread; and its underside
      if (isLanding(g)) b.quad('atlas', P(R0, a0, y0), P(R1, a0, y0), P(R1, a1, y0), P(R0, a1, y0), up, atlasRect('floorDark'));
      else {
        b.quad('atlas', P(R1, a1, y1), P(R0, a1, y1), P(R0, a0, y1), P(R1, a0, y1), up, art.tread);
        b.quad('atlas', P(R0, a0, y0), P(R1, a0, y0), P(R1, a0, y1), P(R0, a0, y1), tan(a0).map((q) => -q), atlasRect('riser'), { tint: [0.6, 0.6, 0.62] });
      }
      if (g >= TURN) b.quad('atlas', P(R0, a0, y0 - SP.SLAB), P(R1, a0, y0 - SP.SLAB), P(R1, a1, y1 - SP.SLAB), P(R0, a1, y1 - SP.SLAB), [0, -1, 0], cream, { tint: [0.74, 0.72, 0.66] });
      if (g >= N - TURN) b.quad('atlas', P(R0, a0, H + SP.CEIL), P(R1, a0, H + SP.CEIL), P(R1, a1, H + SP.CEIL), P(R0, a1, H + SP.CEIL), [0, -1, 0], cream, { tint: [0.95, 0.95, 0.92] });
    }
    // --- the cage round the central pillar (a little outside the treads' inner ends)
    const NC = 24, RC = SP.RC, rowH = 1.95, rows = Math.ceil((H + SP.CEIL + 0.55) / rowH);
    for (let k = 0; k < NC; k++) {
      const a0 = (k / NC) * Math.PI * 2, a1 = ((k + 1) / NC) * Math.PI * 2, am = (a0 + a1) / 2;
      for (let j = 0; j < rows; j++) {
        const ya = -0.5 + j * rowH, yb = -0.5 + (j + 1) * rowH;      // (the same expression for a shared edge: bit-identical)
        b.quad('atlas', P(RC, a0, ya), P(RC, a1, ya), P(RC, a1, yb), P(RC, a0, yb), [dir * Math.sin(am), 0, -Math.cos(am)], art.core);
      }
    }
    // --- the ends: a wall under the first turn beside the bottom landing,
    //     and one (with a back) where the stairs stop beyond the top landing
    //     (both run 5 cm into the shaft wall: an end wall that only met the
    //     shaft wall along its edge leaked pixels down that edge)
    const a00 = phi(0), aN = phi(N), yA = lineY(TURN) - SP.SLAB + 0.05, RX = R1 + 0.05;
    b.quadUV('tile', P(R0, a00, -0.1), P(RX, a00, -0.1), P(RX, a00, yA), P(R0, a00, yA), tan(a00), [0, v(-0.1)], [0.25, v(-0.1)], [0.25, v(yA)], [0, v(yA)]);
    b.quad('atlas', P(R0, aN, H - 0.1), P(RX, aN, H - 0.1), P(RX, aN, H + SP.CEIL + 0.05), P(R0, aN, H + SP.CEIL + 0.05), tan(aN).map((q) => -q), cream, { tint: [1.02, 1.02, 0.98] });
    b.quad('atlas', P(R0, aN, H - SP.SLAB), P(RX, aN, H - SP.SLAB), P(RX, aN, H + SP.CEIL + 0.05), P(R0, aN, H + SP.CEIL + 0.05), tan(aN), cream, { tint: [0.9, 0.9, 0.86] });
    // Up that same line the wall strips either side are cut at different
    // heights (one side stops under the top landing, the other runs to the
    // ceiling): a ribbon just behind the joint, so nothing shows through it.
    const yR = lineY(N - TURN) - SP.SLAB - 0.1;
    b.quad('atlas', P(R1 + 0.012, aN - 0.035, yR), P(R1 + 0.012, aN + 0.035, yR), P(R1 + 0.012, aN + 0.035, H + SP.CEIL + 0.05), P(R1 + 0.012, aN - 0.035, H + SP.CEIL + 0.05),
      [-dir * Math.sin(aN), 0, Math.cos(aN)], cream, { tint: [1.0, 1.0, 0.96] });
    // --- what you walk on: a ramp per sector along its chord (see spiral_geom.js)
    const cells = [...sa.cells, ...sc.cells], walls = [...sa.walls, ...sc.walls];
    const dw = SP.DOOR_W / 2;
    cells.push({ ax: 0, az: SP.STUB - 0.1, bx: 0, bz: SP.STUB + SP.THROAT + 0.5, hw: dw - 0.04, ya: 0, yb: 0, surface: 'stone' },
      { ax: 0, az: zt - SP.STUB - SP.THROAT - 0.5, bx: 0, bz: zt - SP.STUB + 0.1, hw: dw - 0.04, ya: H, yb: H, surface: 'stone' });
    for (let g = 0; g < N; g++) {
      const A = P(SP.RA, phi(g), 0), B = P(SP.RA, phi(g + 1), 0);
      cells.push({ ax: A[0], az: A[2], bx: B[0], bz: B[2], hw: 1.3, ya: lineY(g), yb: lineY(g + 1), surface: 'stone' });
    }
    // --- and into: the shaft wall (open at the two doors, each at its own
    //     level only), the pillar, the two ends, the door jambs and stub ends
    const seg = (r0, a0, r1, a1, lo, hi) => { const A = P(r0, a0, 0), B = P(r1, a1, 0); walls.push(lo === undefined ? [A[0], A[2], B[0], B[2]] : [A[0], A[2], B[0], B[2], lo, hi]); };
    for (let s = 0; s < TURN; s++) {
      if (s === 0) seg(R1, phi(0), R1, phi(1), 2.0, 1e9);
      else if (s === (N - 1) % TURN) seg(R1, phi(s), R1, phi(s + 1), -1e9, H - 2.0);
      else seg(R1, phi(s), R1, phi(s + 1));
    }
    for (let k = 0; k < 16; k++) seg(RC + 0.02, (k / 16) * Math.PI * 2, RC + 0.02, ((k + 1) / 16) * Math.PI * 2);
    seg(R0, a00, R1, a00, -1, 2.5); seg(R0, aN, R1, aN, H - 2.5, 1e9);
    const pw = PASSAGE.W / 2 + 0.1;
    for (const [z0, z1, zw] of [[SP.STUB, SP.STUB + SP.THROAT, SP.STUB], [zt - SP.STUB - SP.THROAT, zt - SP.STUB, zt - SP.STUB]]) {
      for (const sx of [-1, 1]) walls.push([sx * dw, z0, sx * dw, z1], [sx * dw, zw, sx * pw, zw]);
    }
    const fit = fitSpiral(ctx, art, P);
    return { cells, walls, items: fit.items, extra: { zones: fit.zones } };
  },
};
