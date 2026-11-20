// Dimensions of the shelter section, and everything that stands in it: the
// bunks in the layout recorded at Camden Town (three tiers lengthwise along
// one wall, the middle one a twin with its outer half hinged; bays of two
// stacks of three across the other), stencilled lettering on the lining,
// the direction plates, the plan, the notices, the warden's telephone and
// the railings round the stair-head. See REFERENCES.md.
import { atlasFlat } from '../tex/atlas.js';
import { drawBunkMesh, drawRailing, drawStencil, drawEnamel, drawPaperNotice, drawShelterMap, drawTelephone } from '../tex/shelter.js';
import { SHELTER } from '../game/scripts.js';
import { GOING } from './seg_stairs.js';

export const SH = {
  R: 2.515, YC: -0.05, CEIL: 2.2,      // tube radius (16 ft 6 in bore), its centre above the deck floor, flat ceiling
  XT: 0.555, GW: 0.8,                  // tube centre line from the gangway's; gangway half-width
  STUB: 2.0, WALL: 0.3, DOOR_W: 1.1, DOOR_H: 2.0, UNIT: 1.9, UNITS: 14,
  STAIR: { x0: 0.95, x1: 2.05, steps: 9 },
  TIERS: [0.22, 0.85, 1.45], LONG: [-1.45, -0.84], CROSS: [0.82, 2.57],
};
SH.LEN = SH.UNITS * SH.UNIT + 0.6;
SH.Z0 = SH.STUB + SH.WALL; SH.Z1 = SH.Z0 + SH.LEN; SH.TOTAL = SH.Z1 + SH.WALL + SH.STUB;
SH.ZS = SH.Z0 + 0.3 + 7 * SH.UNIT;     // top of the stairs to the lower deck
// the wall of the tube at height y above the deck (sg = -1 | +1), in gangway coordinates
export const tubeX = (y, sg) => SH.XT + sg * Math.sqrt(Math.max(0, SH.R * SH.R - (y - SH.YC) ** 2));

export function fitShelter(ctx, side) {
  const { b, sheet, env } = ctx, { Z0, Z1, ZS, TIERS } = SH, X = (x) => side * x;
  const items = [], odd = (env.wrong || 0) >= 2.5;
  // --- sign-sheet pieces, biggest first
  const mow = sheet.add(132, 168, (c, w, h) => drawPaperNotice(c, w, h, ...SHELTER.mow));
  const rules = sheet.add(132, 168, (c, w, h) => drawPaperNotice(c, w, h, SHELTER.rules[0], SHELTER.rules[1], odd ? SHELTER.rulesOdd : SHELTER.rules[2], SHELTER.rules[3]));
  const map = sheet.add(200, 136, (c, w, h) => drawShelterMap(c, w, h, odd ? 'C' : 'F'));
  const plate = (text, arrow, w = 200) => sheet.add(w, 38, (c, cw, ch) => drawEnamel(c, cw, ch, text, arrow));
  const stencil = (text, arrow) => sheet.add(164, 33, (c, cw, ch) => drawStencil(c, cw, ch, text, arrow));
  const toDoor = (onLobbySide, facing) => ((side > 0) === (facing < 0) ? (onLobbySide ? 'right' : 'left') : (onLobbySide ? 'left' : 'right'));
  const uv = {
    buck: plate('Buck Street entrance', toDoor(true, -1)), tube: plate('To the tube station', toDoor(true, 1)), under: plate('Underhill Street entrance', toDoor(true, 1)),
    lower: plate('Lower deck', null, 104), section: stencil('SECTION F'), bunks: stencil('BUNKS 2401 – 2640'),
    canteen: stencil('CANTEEN', toDoor(true, -1)), lav: stencil('LAVATORIES', toDoor(true, -1)), aid: stencil('MEDICAL AID POST', toDoor(true, -1)),
    mesh: sheet.add(128, 64, (c, w, h) => drawBunkMesh(c, w, h)), rail: sheet.add(128, 64, (c, w, h) => drawRailing(c, w, h)),
    phone: sheet.add(64, 96, (c, w, h) => drawTelephone(c, w, h)),
  };
  // --- bunks. Mesh on top of each frame; a red-oxide post at every corner
  //     that shows; a rail along the gangway edge of every tier.
  const oxide = { tint: [0.42, 0.17, 0.13] }, white = atlasFlat('white');
  const post = (x, z, h = 1.5) => b.box('atlas', X(x) - 0.02, 0, z - 0.02, X(x) + 0.02, h, z + 0.02, white, oxide, 'xXzZ');
  const [lb, lf] = SH.LONG, [ca, cb] = SH.CROSS;
  for (let k = 0; k < SH.UNITS; k++) {
    const za = Z0 + 0.3 + k * SH.UNIT, zb = za + SH.UNIT;
    post(lf, za);
    for (const y of TIERS) {
      b.quad('sheet', [X(lb), y, za + 0.03], [X(lb), y, zb - 0.03], [X(lf), y, zb - 0.03], [X(lf), y, za + 0.03], [0, 1, 0], uv.mesh);
      b.quad('atlas', [X(lf), y - 0.045, za], [X(lf), y - 0.045, zb], [X(lf), y, zb], [X(lf), y, za], [side, 0, 0], white, oxide);
    }
    // the hinged half of the middle bunk, hanging down out of the gangway's way
    b.quad('sheet', [X(lf + 0.012), TIERS[1] - 0.61, za + 0.04], [X(lf + 0.012), TIERS[1] - 0.61, zb - 0.04], [X(lf + 0.012), TIERS[1] - 0.05, zb - 0.04], [X(lf + 0.012), TIERS[1] - 0.05, za + 0.04], [side, 0, 0], uv.mesh);
    // bays across the tunnel: not in the lobbies by the two doors, nor at the stair-head
    if (k === 0 || k === SH.UNITS - 1 || (k >= 6 && k <= 8)) continue;
    for (const [sa, sb] of [[za + 0.02, za + 0.63], [za + 1.25, za + 1.86]]) {
      post(ca, sa); post(ca, sb);
      for (const y of TIERS) {
        const far = Math.min(cb, tubeX(y + 0.05, 1) - 0.06);
        b.quad('sheet', [X(ca), y, sa], [X(far), y, sa], [X(far), y, sb], [X(ca), y, sb], [0, 1, 0], uv.mesh);
        b.quad('atlas', [X(ca), y - 0.045, sa], [X(ca), y - 0.045, sb], [X(ca), y, sb], [X(ca), y, sa], [-side, 0, 0], white, oxide);
      }
    }
  }
  post(lf, Z0 + 0.3 + SH.UNITS * SH.UNIT);
  items.push({ x: X(-1.0), y: 0.95, z: Z0 + 6.2, r: 3.6, n: [side, 0], label: 'look at bunks', title: 'BUNKS', text: SHELTER.bunks });
  // --- lettering stencilled on the lining above the bunks (sg: which wall)
  const onLining = (u, sg, zc, len, y0, y1, text) => {
    const nxv = -sg * side, zl = zc + (nxv * len) / 2, zr = zc - (nxv * len) / 2;
    const xa = X(tubeX(y0, sg) - sg * 0.035), xb = X(tubeX(y1, sg) - sg * 0.035);
    b.quad('sheet', [xa, y0, zl], [xa, y0, zr], [xb, y1, zr], [xb, y1, zl], [nxv, -0.6, 0], u);
    items.push({ x: (xa + xb) / 2, y: (y0 + y1) / 2, z: zc, r: 5, n: [nxv, 0], label: 'read lettering', title: 'STENCILLED ON THE LINING', text });
  };
  onLining(uv.bunks, -1, Z0 + 8.5, 1.9, 1.64, 1.9, 'BUNKS 2401 – 2640');
  onLining(uv.section, 1, Z0 + 5.2, 1.7, 1.72, 1.96, 'SECTION F');
  onLining(uv.section, -1, Z0 + 21.5, 1.7, 1.64, 1.88, 'SECTION F');
  // --- on the two bulkheads (facing = which way the sign looks along z)
  const flat = (u, cx, y0, w, h, facing, item) => {
    const z = facing > 0 ? Z0 + 0.03 : Z1 - 0.03, xl = X(cx) - (facing * w) / 2, xr = X(cx) + (facing * w) / 2;
    b.quad('sheet', [xl, y0, z], [xr, y0, z], [xr, y0 + h, z], [xl, y0 + h, z], [0, 0, facing], u, { tint: [1.05, 1.05, 1.05] });
    if (item) items.push({ x: X(cx), y: y0 + h / 2, z, r: 4.5, n: [0, facing], ...item });
  };
  const sign = (text) => ({ label: 'read sign', title: 'SIGN', text });
  flat(uv.buck, 1.42, 1.68, 1.15, 0.22, -1, sign(`Buck Street entrance ${side > 0 ? '→' : '←'} (through the door)`));
  flat(map, 1.55, 0.98, 0.8, 0.545, -1, { label: 'read plan', title: 'PLAN', text: SHELTER.plan });
  flat(uv.canteen, 2.33, 1.36, 0.66, 0.132, -1); flat(uv.lav, 2.33, 1.18, 0.66, 0.132, -1); flat(uv.aid, 2.33, 1.0, 0.66, 0.132, -1);
  items.push({ x: X(2.33), y: 1.24, z: Z1 - 0.03, r: 4.5, n: [0, -1], label: 'read lettering', title: 'STENCILLED ON THE WALL', text: 'CANTEEN · LAVATORIES · MEDICAL AID POST — all through the door, in the next section.' });
  flat(uv.phone, 0.84, 1.14, 0.3, 0.45, -1, {
    label: 'lift receiver', title: 'TELEPHONE', text: 'A wall telephone in a wooden case. The card says WARDEN — 1 RING. You lift the receiver.', r: 3.2,
    onRead: (g) => g.director.announcer.say({ text: SHELTER.phone, chime: 'none', tag: '(telephone)', urgent: true }),
  });
  flat(uv.tube, 1.42, 1.68, 1.15, 0.22, 1, sign(`${side > 0 ? '←' : '→'} To the tube station (the way you came)`));
  flat(uv.under, 1.42, 1.4, 1.15, 0.22, 1, sign(`${side > 0 ? '←' : '→'} Underhill Street entrance`));
  flat(mow, 1.3, 0.74, 0.45, 0.57, 1, { label: 'read notice', title: SHELTER.mow[0], text: `${SHELTER.mow[1]}. ${SHELTER.mow[2].join(' ')} ${SHELTER.mow[3]}.` });
  flat(rules, 1.95, 0.74, 0.45, 0.57, 1, { label: 'read notice', title: 'TO SHELTERERS', text: `${(odd ? SHELTER.rulesOdd : SHELTER.rules[2]).join(' ')} — ${SHELTER.rules[3]}` });
  // --- the stair-head: railings on three sides, a chain and a plate across the top step
  const st = SH.STAIR, zs1 = ZS + st.steps * GOING + 0.6;
  for (const [x, nx] of [[st.x0, -1], [st.x0, 1], [st.x1, -1]]) b.quad('sheet', [X(x), 0, ZS], [X(x), 0, zs1], [X(x), 1.0, zs1], [X(x), 1.0, ZS], [side * nx, 0, 0], uv.rail);
  for (const nz of [-1, 1]) b.quad('sheet', [X(st.x0), 0, zs1], [X(st.x1), 0, zs1], [X(st.x1), 1.0, zs1], [X(st.x0), 1.0, zs1], [0, 0, nz], uv.rail);
  b.box('atlas', Math.min(X(st.x0), X(st.x1)), 0.8, ZS - 0.008, Math.max(X(st.x0), X(st.x1)), 0.815, ZS + 0.008, atlasFlat('black'), null, 'yYzZ');
  const cx = (st.x0 + st.x1) / 2, pl = X(cx) + 0.25, pr = X(cx) - 0.25;
  b.quad('sheet', [pl, 0.6, ZS - 0.012], [pr, 0.6, ZS - 0.012], [pr, 0.79, ZS - 0.012], [pl, 0.79, ZS - 0.012], [0, 0, -1], uv.lower);
  items.push({ x: X(cx), y: 0.7, z: ZS - 0.012, r: 3.2, n: [0, -1], label: 'read plate', title: 'ON THE CHAIN', text: SHELTER.lower });
  return { items };
}
