// Straight tiled passage, and the curved bend (same builder, different path).
import { PASSAGE, straightFrames, arcFrames, sweep } from './sweep.js';
import { lampsAlong, portalLamp } from './decor.js';
import { atlasRect } from '../tex/atlas.js';
import { dressPassage } from './dress.js';
import { addGate } from './gate.js';

function lightPlan(rng, env) {
  const w = env.wrong || 0;
  return {
    dark: rng.chance(0.03 + 0.05 * w),
    faulty: rng.chance(0.22 + 0.1 * w) ? rng.int(0, 3) : -1,
  };
}

function buildPath(ctx, frames) {
  const { b, p } = ctx;
  const sw = sweep(b, frames, PASSAGE, { floor: atlasRect('floor'), u0: p.u0 || 0 });
  b.addPortal(0, 0, 0, 0);
  const last = frames[frames.length - 1];
  b.addPortal(last.x, last.y, last.z, last.yaw);
  portalLamp(b, frames[0], PASSAGE.crown);
  lampsAlong(b, frames, sw.dist, PASSAGE.crown, p.lights);
  const items = dressPassage(ctx, frames, sw.dist);
  const extra = {};
  if (ctx.env.gate) extra.zones = [addGate(ctx, 3.4, sw.length + 1)];
  return { cells: sw.cells, walls: sw.walls, items, frames, extra };
}

export const corridor = {
  type: 'corridor',
  plan(rng, env) {
    const len = env.tiny ? 4 : env.short ? 6 : env.len || rng.pick([8, 12, 12, 16]);
    return {
      p: { len, lights: lightPlan(rng, env) },
      exits: [{ x: 0, y: 0, z: len, yaw: 0 }],
      box: [-1.9, -0.4, 0, 1.9, 3.3, len],
    };
  },
  build(ctx) {
    return buildPath(ctx, straightFrames(ctx.p.len, 1));
  },
};

const BEND_R = 4.5;

export const bend = {
  type: 'bend',
  // env.turn may force the direction: +1 = towards +X (the walker's left)
  plan(rng, env) {
    const dir = env.turn || rng.sign();
    return {
      p: { dir, lights: lightPlan(rng, env) },
      exits: [{ x: dir * BEND_R, y: 0, z: BEND_R, yaw: (dir * Math.PI) / 2 }],
      box: dir > 0 ? [-1.9, -0.4, 0, BEND_R, 3.3, BEND_R + 1.9] : [-BEND_R, -0.4, 0, 1.9, 3.3, BEND_R + 1.9],
    };
  },
  build(ctx) {
    return buildPath(ctx, arcFrames(BEND_R, (ctx.p.dir * Math.PI) / 2, 0.9));
  },
};
