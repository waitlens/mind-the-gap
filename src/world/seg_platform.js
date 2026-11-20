// A deep-level platform: you walk in through one headwall and out through
// the other, with the track (and the dark running tunnels) alongside.
import { PF, buildShell } from './platform_shell.js';
import { buildHeadwall, MOUTH } from './platform_end.js';
import { fitPlatform } from './platform_fit.js';
import { portalLamp, sill } from './decor.js';
import { fitGhost } from './ghost_fit.js';
import { PASSAGE } from './sweep.js';
import { fitTrainstop, TRAINSTOP } from './trainstop.js';

export const platform = {
  type: 'platform',
  sheetSize: 1024,
  plan(rng, env) {
    const start = !!(env.stretch && env.stretch.first && env.idx === 0);
    const L = env.platformL || (start ? 30 : rng.pick([30, 36, 36, 42]));
    const side = rng.sign();
    // Which platform this is. A second platform in the same stretch (reached
    // by a cross-passage) is the one for the other direction.
    const st = env.stretch;
    const earlier = st ? st.plan.slice(0, env.idx).filter((t) => t === 'platform' || t === 'trainstop').length : 0;
    const base = (st && st.dir) || 'north';
    const dir = earlier % 2 ? (base === 'north' ? 'south' : 'north') : base;
    const xa = PF.back - 0.4, xb = PF.cx + PF.R + 0.4;
    return {
      p: {
        L, side, start, dir,
        dark: !start && rng.chance(0.04 + 0.04 * (env.wrong || 0)),
        faulty: rng.chance(0.3 + 0.1 * (env.wrong || 0)) ? rng.int(0, 6) : -1,
        figure: !start && (env.wrong || 0) >= 1 && rng.chance(0.25 + 0.1 * (env.wrong || 0)),
      },
      exits: [{ x: 0, y: 0, z: L, yaw: 0 }],
      // (the box includes the tunnel-mouth recesses beyond both headwalls)
      box: side > 0 ? [xa, -2.4, -MOUTH.depth - 0.2, xb, PF.cy + PF.R + 0.3, L + MOUTH.depth + 0.2]
        : [-xb, -2.4, -MOUTH.depth - 0.2, -xa, PF.cy + PF.R + 0.3, L + MOUTH.depth + 0.2],
    };
  },

  build(ctx) {
    const { b, p } = ctx;
    const { L, side } = p;
    buildShell(b, L, side, { plain: !!p.ghost });
    buildHeadwall(b, 0, 1, side, !p.start);
    buildHeadwall(b, L, -1, side, true);
    // (the joint with the passage you came by: its lamp and the sill under the
    // threshold — in the station that closed in 1924, the sill and no lamp)
    if (p.ghost) { b.addPortal(0, 0, 0, 0); sill(b, { x: 0, y: 0, z: 0, yaw: 0 }, 1.56); }
    else if (!p.start) { b.addPortal(0, 0, 0, 0); portalLamp(b, { x: 0, y: 0, z: 0, yaw: 0 }, PASSAGE.crown); }
    b.addPortal(0, 0, L, 0);
    const fit = p.ghost ? fitGhost(ctx, L, side) : fitPlatform(ctx, L, side);

    const X = (x) => side * x;
    const mid = (PF.back + PF.edge) / 2, hw = (PF.edge - PF.back) / 2;
    const cells = [{ ax: X(mid), az: 0, bx: X(mid), bz: L, hw, ya: 0, yb: 0 }];
    const pw = PASSAGE.W / 2;
    // (a train standing at the platform with its doors open: see trainstop.js)
    const stop = p.train ? fitTrainstop(ctx, L, side, fit.art) : null;
    const walls = [
      [X(PF.back + 0.08), 0, X(PF.back + 0.08), L],       // back wall
      [X(PF.back), L, X(-pw), L], [X(pw), L, X(PF.edge), L],
    ];
    // platform edge: mind the gap — except at an open doorway
    let ze = 0;
    for (const [za, zb] of stop ? stop.gaps : []) { walls.push([X(PF.edge - 0.1), ze, X(PF.edge - 0.1), za]); ze = zb; }
    walls.push([X(PF.edge - 0.1), ze, X(PF.edge - 0.1), L]);
    if (p.start) walls.push([X(PF.back), 0, X(PF.edge), 0]);
    else walls.push([X(PF.back), 0, X(-pw), 0], [X(pw), 0, X(PF.edge), 0]);
    for (const w of fit.walls) walls.push(w);
    const extra = { zones: fit.zones };
    if (stop) { cells.push(...stop.cells); walls.push(...stop.walls); fit.items.push(...stop.items); extra.zones.push(...stop.zones); }
    // (you step off the last train facing the Customer Information board)
    if (p.start) extra.spawn = fit.spawn || { x: X(0.1), z: 6, yaw: 0 };
    return { cells, walls, items: fit.items, extra };
  },
};

// The same platform, longer, with a three-car train standing at it.
// (A type of its own: the running train never calls here.)
export const trainstop = {
  type: 'trainstop',
  sheetSize: 1024,
  plan(rng, env) {
    const pl = platform.plan(rng, { ...env, platformL: TRAINSTOP.L });
    Object.assign(pl.p, { train: true, figure: false, start: false });
    return pl;
  },
  build: (ctx) => platform.build(ctx),
};

// South Kentish Town: the same tube, as it was left in 1924 (ghost_fit.js).
// Trains go through it without stopping (game/trains.js).
export const ghost = {
  type: 'ghost',
  sheetSize: 1024,
  plan(rng, env) {
    const pl = platform.plan(rng, { ...env, platformL: 36 });
    Object.assign(pl.p, { ghost: true, figure: false, start: false, dark: false, faulty: rng.int(0, 2) });
    return pl;
  },
  build: (ctx) => platform.build(ctx),
};
