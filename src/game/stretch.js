// A "stretch" is the run of segments between two junctions: one station
// identity (name, tile colours, line) and a planned list of segment types.
import { hash32, RNG, angleDiff } from '../util/rng.js';
import { CFG } from '../config.js';
import { SEGMENTS } from '../world/registry.js';
import { stationAt, themeOf, WALK } from './line.js';

const has = (t) => !!SEGMENTS[t];

export function makeStretch(story, opts = {}) {
  const id = story.stretchCount + 1;      // per game, so a seed always gives the same station
  const rng = new RNG(hash32(story.seed, 1000 + id * 13));
  const plan = [];
  if (opts.first) plan.push(has('platform') ? 'platform' : 'corridor');
  if (opts.fromJunction) plan.push('corridor');   // the gate passage
  if (opts.exit) {
    plan.push('corridor', has('exit') ? 'exit' : 'corridor');
  } else {
    const n = rng.int(2, 4);
    let platforms = opts.first ? 1 : 0, last = plan[plan.length - 1] || '';
    for (let k = 0; k < n; k++) {
      const t = rng.weighted([
        ['corridor', last === 'corridor' ? 1 : 3], ['bend', last === 'bend' ? 0.4 : 2.2],
        ['stairs', has('stairs') && last !== 'stairs' ? 1.5 : 0], ['escalator', has('escalator') && last !== 'escalator' ? 0.7 : 0],
        ['platform', has('platform') && platforms < 1 && k > 0 ? 1.6 : 0],
      ]);
      plan.push(t);
      if (t === 'platform') {
        platforms++;
        if (has('cross') && rng.chance(0.5)) plan.push('cross', 'platform');
      }
      last = t;
    }
    // every station shows itself: at least one platform per stretch
    if (has('platform') && !plan.includes('platform')) plan.splice(rng.int(Math.min(1, plan.length), plan.length), 0, 'platform');
    if (plan[plan.length - 1] !== 'corridor') plan.push('corridor');
    plan.push(has('junction') ? 'junction' : 'corridor');
  }
  // (tests can force what lies beyond a junction, e.g. a short closed stub)
  if (opts.fromJunction && story.testBranch) plan.splice(0, plan.length, 'corridor', ...story.testBranch);
  story.stretchCount++;
  // Which station of the walk this stretch is: one further up the line after
  // a right choice, two back after a wrong one (never before the first).
  let index = story.progress;
  if (opts.fromJunction) index = opts.correct ? story.progress + 1 : Math.max(0, story.progress - 2);
  const station = stationAt(index);
  return {
    id, plan, rng, index: Math.min(index, WALK.length), station,
    theme: themeOf(station),
    // which platform of the station this stretch passes through
    dir: rng.chance(0.5) ? 'north' : 'south',
    dark: !opts.first && !opts.exit && rng.chance(0.06 + 0.05 * story.wrong),
    first: !!opts.first, exit: !!opts.exit,
    correct: opts.correct, fromJunction: opts.fromJunction || null,
    wrongAtStart: story.wrong, clocksBack: !!opts.clocksBack,
  };
}

// Segments whose exits leave sideways need the path to be heading "north"
// (world +Z) so that nothing ever heads back south over older ground.
const NEEDS_NORTH = new Set(['junction', 'cross']);

function norm(yaw) { return angleDiff(0, yaw); }

// World hook: pick what goes behind exit i of node.
export function nextInStretch(story, node, i, attempt, rng) {
  const world = story.game.world;
  const yaw = norm(world.exitPose(node, i).yaw);
  let stretch = node.env.stretch, idx = node.env.idx + 1;
  if (node.def.type === 'junction') {
    stretch = story.branchStretch(node, i);
    idx = 0;
  }
  let type = stretch.plan[idx];
  if (type === undefined) { type = 'corridor'; idx = stretch.plan.length; }
  const env = (extra) => story.envFor(stretch, idx, { yaw, ...extra });
  const back = (extra) => story.envFor(stretch, idx - 1, { yaw, filler: true, ...extra }); // does not consume the plan
  const turnHome = yaw > 0.1 ? -1 : yaw < -0.1 ? 1 : 0;

  if (attempt === 0) {
    if (NEEDS_NORTH.has(type) && turnHome !== 0) return { def: SEGMENTS.bend, env: back({ turn: turnHome }) };
    if (type === 'bend') {
      // never turn to face south
      const turn = turnHome !== 0 ? turnHome : rng.sign();
      return { def: SEGMENTS.bend, env: env({ turn }) };
    }
    if (type === 'junction') return { def: SEGMENTS.junction, env: env(story.junctionEnv(rng)) };
    // The gate passage still belongs to the station you are leaving (its
    // tiles and name): the new station's colours only show once the gate
    // has shut behind you, as confirmation rather than as a clue.
    if (idx === 0 && stretch.fromJunction) {
      const from = node.env;
      return { def: SEGMENTS.corridor, env: env({ gate: true, len: 8, noticeChance: 0, theme: from.theme, station: from.station }), force: true };
    }
    return { def: SEGMENTS[type] || SEGMENTS.corridor, env: env({}) };
  }
  // --- something did not fit: try other ways of getting past the obstacle
  const alts = [];
  if (turnHome !== 0) alts.push(['bend', { turn: turnHome }]);
  else alts.push(['bend', { turn: 1 }], ['bend', { turn: -1 }]);
  alts.push(['corridor', { short: true }]);
  if (has('stairs')) alts.push(['stairs', { dir: -1 }], ['stairs', { dir: 1 }]);
  if (has('escalator')) alts.push(['escalator', { dir: -1 }], ['escalator', { dir: 1 }]);
  alts.push(['corridor', { short: true, tiny: true }]);
  const a = alts[attempt - 1];
  if (a) return { def: SEGMENTS[a[0]], env: back(a[1]) };
  return null; // generator then forces the first choice instead of a dead end
}

// How many correct choices remain before the exit stretch is generated.
export function remaining(story) { return CFG.goal - story.progress; }
