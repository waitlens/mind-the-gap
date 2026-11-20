// What is fitted in the Hampstead stair shaft: a lamp over every landing,
// handrails on the pillar side and the wall side, the plates at the foot
// (real wording, see REFERENCES.md), the sheets of paper on the pillar that
// number the landings — and the small things that make the climb feel
// longer than it is: there are eighteen landings to number and the real
// labels only run from 17 down to 1; the plate that says how many steps
// there are turns up again part of the way up, no smaller; and the paper
// somebody dropped on one landing is lying on another one too.
import { atlasRect, atlasFlat } from '../tex/atlas.js';
import { drawLandingLabel, drawStairSign, drawGreenPlate } from '../tex/stairwell.js';
import { SP, phi, lineY, landingSector } from './spiral_geom.js';
import { SPIRAL } from '../game/scripts.js';
import { extraRng } from './whiteboard.js';
import { pickPaper } from '../game/paper.js';
import { paintPaper, layPaper } from './paper.js';

// The numbers on the eighteen landings between the flights, bottom to top.
// As posted they would run 17 … 1; one has to come twice. The further gone
// the station is, the more of them have been "corrected" by hand.
export function landingNumbers(rng, wrong) {
  const out = [];
  for (let i = 0; i < SP.HALVES - 1; i++) out.push({ n: i <= 3 ? 17 - i : 18 - i, hand: false });
  const extra = wrong >= 3 ? 3 : wrong >= 1.5 ? 2 : 1;
  for (let k = 0; k < extra; k++) { const i = rng.int(6, 15); out[i] = { n: out[i].n + rng.int(2, 4), hand: true }; }
  return out;
}

// Pieces on the segment's sign sheet that the shell itself needs (biggest
// first: the dropped newspaper's front page goes on before anything else).
export function spiralArt(ctx) {
  const { env } = ctx, r = extraRng(ctx);
  const story = pickPaper(r, env);
  // (the treads and the pillar's cage are on the shared atlas, which is
  // opaque: nothing that has only the void behind it goes on a sign sheet)
  return { story, paper: paintPaper(ctx, story), core: atlasRect('cage'), tread: atlasRect('treadY') };
}

// P(r, angle, y): a point in the shaft (from the shell).
export function fitSpiral(ctx, art, P) {
  const { b, sheet, p } = ctx, dir = p.dir, r = extraRng(ctx), wrong = p.wrong || 0;
  const { R1, RC, N, H } = SP, items = [], zones = [];
  const tan = (a) => [dir * Math.cos(a), 0, Math.sin(a)], rad = (a) => [dir * Math.sin(a), 0, -Math.cos(a)];
  const CH = R1 * Math.cos(SP.LAND / 2);                     // the flat of wall behind a landing
  // a flat piece on the shaft wall (inner face) or on the pillar's cage, centred at angle a
  const onWall = (uv, a, y0, w, h, o) => {
    const c = P(CH - 0.025, a, 0), t = tan(a), k = (-dir * w) / 2;
    b.quad('sheet', [c[0] + t[0] * k, y0, c[2] + t[2] * k], [c[0] - t[0] * k, y0, c[2] - t[2] * k], [c[0] - t[0] * k, y0 + h, c[2] - t[2] * k], [c[0] + t[0] * k, y0 + h, c[2] + t[2] * k], rad(a).map((q) => -q), uv, o);
    return { x: c[0], y: y0 + h / 2, z: c[2], n: [-rad(a)[0], -rad(a)[2]] };
  };
  const onPillar = (uv, a, y0, w, h) => {
    const c = P(RC + 0.012, a, 0), t = tan(a), k = (dir * w) / 2;
    b.quad('sheet', [c[0] + t[0] * k, y0, c[2] + t[2] * k], [c[0] - t[0] * k, y0, c[2] - t[2] * k], [c[0] - t[0] * k, y0 + h, c[2] - t[2] * k], [c[0] + t[0] * k, y0 + h, c[2] + t[2] * k], rad(a), uv, { tint: [1.05, 1.05, 1.05] });
    return { x: c[0], y: y0 + h / 2, z: c[2], n: [rad(a)[0], rad(a)[2]] };
  };
  // --- the plates at the foot of the stairs, on the end wall beside the door
  const sign = (paras) => sheet.add(132, 132, (c, w, h) => drawStairSign(c, w, h, paras));
  const green = sheet.add(132, 54, (c, w, h) => drawGreenPlate(c, w, h, SPIRAL.green));
  const z = SP.STUB - 0.03, sx = -dir * 1.0;
  const flat = (uv, y0, w, h) => b.quad('sheet', [sx + w / 2, y0, z], [sx - w / 2, y0, z], [sx - w / 2, y0 + h, z], [sx + w / 2, y0 + h, z], [0, 0, -1], uv, { tint: [1.05, 1.05, 1.05] });
  flat(sign(SPIRAL.sign), 1.02, 0.5, 0.5); flat(green, 1.56, 0.5, 0.205);
  items.push({ x: sx, y: 1.35, z, r: 5, n: [0, -1], label: 'read sign', title: 'SIGN', text: `${SPIRAL.green.join(' ')}. ${SPIRAL.sign.join('. ')}.`, stairSign: 0 });
  // --- every landing: a lamp over it; the ones between the flights are numbered
  const nums = landingNumbers(r, wrong), labels = new Map(), lamp = atlasRect('lamp');
  for (let k = 0; k <= SP.HALVES; k++) {
    const g = landingSector(k), a = (phi(g) + phi(g + 1)) / 2, y = lineY(g);
    const c = P(CH - 0.05, a, y + 2.38), t = tan(a), flick = p.faulty === k, dead = wrong >= 3 && k % 7 === 5;
    b.quad('atlas', [c[0] - t[0] * 0.17, c[1] - 0.06, c[2] - t[2] * 0.17], [c[0] + t[0] * 0.17, c[1] - 0.06, c[2] + t[2] * 0.17], [c[0] + t[0] * 0.17, c[1] + 0.06, c[2] + t[2] * 0.17], [c[0] - t[0] * 0.17, c[1] + 0.06, c[2] - t[2] * 0.17],
      rad(a).map((q) => -q), lamp, { emit: dead ? 0.1 : 1.7, flick, tint: [1, 0.95, 0.82] });
    if (!dead) { const l = P(R1 - 0.5, a, y + 2.15); b.addLight(l[0], l[1], l[2], 0.95, 6.8, flick, [1, 0.95, 0.84]); }
    zones.push({ x0: -R1, x1: R1, z0: SP.ZC - R1, z1: SP.ZC + R1, y0: y - 0.2, y1: y + 0.5, once: false, fire: (game) => { game.state.landing = k; } });
    if (k === 0 || k === SP.HALVES) continue;
    const { n, hand } = nums[k - 1], key = `${n}${hand ? 'h' : ''}`;
    if (!labels.has(key)) labels.set(key, sheet.add(36, 48, (cv, w, h) => drawLandingLabel(cv, w, h, String(n), hand)));
    const prev = k > 1 ? nums[k - 2].n : 18;
    const note = hand ? ' Written by hand, over another number.' : n === prev ? ' The landing below said the same.' : n > prev ? ' That is more than the last one.' : '';
    items.push({ ...onPillar(labels.get(key), a, y + 1.42, 0.21, 0.28), r: 3.4, label: 'read number', title: 'ON THE PILLAR', text: `A sheet of paper taped to the pillar: “${n}”.${note}`, landing: k, number: n });
  }
  // --- the plate again, part of the way up
  [[6, SPIRAL.signs[0]], [12, SPIRAL.signs[wrong >= 2.5 ? 1 : 0]]].forEach(([k, paras], i) => {
    const g = landingSector(k), a = (phi(g) + phi(g + 1)) / 2;
    items.push({ ...onWall(sign(paras), a, lineY(g) + 1.1, 0.5, 0.5, { tint: [1.05, 1.05, 1.05] }), r: 4, label: 'read sign', title: 'SIGN', text: `${paras.join('. ')}.`, stairSign: i + 1 });
  });
  // --- handrails: black tube on the pillar side and on the wall side
  const black = atlasFlat('rubber'), up = [0, 1, 0];
  for (const [rr, face, skipDoors] of [[RC + 0.07, 1, false], [R1 - 0.08, -1, true]]) {
    for (let g = 0; g < N; g++) {
      if (skipDoors && (g === 0 || g === N - 1)) continue;
      const a0 = phi(g), a1 = phi(g + 1), y0 = lineY(g) + 0.95, y1 = lineY(g + 1) + 0.95, am = (a0 + a1) / 2;
      b.quad('atlas', P(rr - 0.02, a0, y0), P(rr + 0.02, a0, y0), P(rr + 0.02, a1, y1), P(rr - 0.02, a1, y1), up, black);
      const rs = rr + face * 0.02;
      b.quad('atlas', P(rs, a0, y0 - 0.04), P(rs, a1, y1 - 0.04), P(rs, a1, y1), P(rs, a0, y0), rad(am).map((q) => q * face), black);
    }
  }
  // --- the same newspaper, dropped on more than one landing
  for (const k of wrong >= 3 ? [5, 11, 16] : [5, 11]) {
    const g = landingSector(k), a = (phi(g) + phi(g + 1)) / 2 + 0.03, c = P(2.25, a, lineY(g));
    items.push(layPaper(ctx, c[0], c[1], c[2], r.range(0, 6.28), art.story, art.paper, { floor: true, n: [-rad(a)[0], -rad(a)[2]] }));
  }
  // --- what the climb does to you (shown once each, as hints)
  SPIRAL.hints.forEach(([k, text]) => {
    const y = lineY(landingSector(k));
    zones.push({ x0: -R1, x1: R1, z0: SP.ZC - R1, z1: SP.ZC + R1, y0: y - 0.2, y1: y + 0.5, fire: (game) => game.director.setHint(text, 6) });
  });
  zones.push({ x0: -R1, x1: R1, z0: SP.ZC - R1, z1: 2 * SP.ZC, y0: H - 0.3, y1: H + 0.6, fire: (game) => { game.state.climbed = (game.state.climbed || 0) + 1; } });
  return { items, zones };
}
