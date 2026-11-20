// A "stretch" is the run of segments between two junctions: one station
// identity (name, tile colours, line) and a planned list of segment types.
import { hash32, RNG, angleDiff } from '../util/rng.js';
import { CFG } from '../config.js';
import { SEGMENTS } from '../world/registry.js';
import { stationAt, themeOf, WALK, GHOST_STATION } from './line.js';

const has = (t) => !!SEGMENTS[t];

export function makeStretch(story, opts = {}) {
  const id = story.stretchCount + 1;      // per game, so a seed always gives the same station
  const rng = new RNG(hash32(story.seed, 1000 + id * 13));
  const plan = [];
  if (opts.first) plan.push(has('platform') ? 'platform' : 'corridor');
  if (opts.fromJunction) plan.push('corridor');   // the gate passage
  if (opts.exit) {
    // the way out: Hampstead's emergency stairs, then the last few steps into daylight
    plan.push(has('spiral') ? 'spiral' : 'corridor', has('exit') ? 'exit' : 'corridor');
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
  // Set pieces are dealt out from a random stream of their own, after the
  // plan is made, so the layout a seed has always given is otherwise the same.
  const sp = new RNG(hash32(story.seed, 5000 + id * 17));
  // A train standing at a platform with its doors open (world/trainstop.js)
  // takes the place of an ordinary platform: about one stretch in three,
  // sooner if the walk has not met one yet. Never the platform you start on.
  if (has('trainstop') && !opts.exit) {
    const at = plan.findIndex((t, i) => t === 'platform' && !(opts.first && i === 0));
    if (at >= 0 && sp.chance(story.trainStops ? 0.22 : opts.first ? 0.25 : 0.5)) { plan[at] = 'trainstop'; story.trainStops = (story.trainStops || 0) + 1; }
  }
  // A wrong turn takes you onto the other branch out of Camden Town, through
  // the station that closed in 1924, before it lets you back into the
  // network two stations down the line: always the first time, about half
  // the time after that (settled when the junction is planned, from the
  // wrong turns taken so far).
  if (has('ghost') && opts.fromJunction && opts.correct === false && !opts.exit && sp.chance(story.game.state.wrongTurns ? 0.5 : 1)) plan.splice(1, 0, 'ghost', 'corridor');
  // (tests can force what lies beyond a junction, e.g. a short closed stub)
  if (opts.fromJunction && story.testBranch) plan.splice(0, plan.length, 'corridor', ...story.testBranch);
  story.stretchCount++;
  // Which station of the walk this stretch is: one further up the line after
  // a right choice, two back after a wrong one (never before the first).
  // (the caller works it out from the junction's own station; the first
  // stretch of a game starts wherever the story says)
  const index = opts.index ?? story.progress;
  // (the way out is at Hampstead itself — up its stairs — so the last stretch
  // is still that station, not the next one up the line)
  const station = opts.exit ? WALK[WALK.length - 1] : stationAt(index);
  const forced = opts.fromJunction && story.testBranch;      // (tests: leave a forced branch alone)
  // The deep-level shelter is under Camden Town and nowhere else: the first
  // Camden Town stretch always passes through it, later ones sometimes.
  if (has('shelter') && station === 'Camden Town' && !opts.exit && !forced && sp.chance(story.shelters ? 0.4 : 1)) {
    plan.splice(sp.int(Math.min(1, plan.length - 2), plan.length - 2), 0, 'shelter');
    story.shelters = (story.shelters || 0) + 1;
  }
  return {
    id, plan, rng, index: Math.min(index, WALK.length), station,
    theme: themeOf(station),
    // +1 / -1: which side of its junction this branch left by (it keeps
    // turning that way); 0 for the first stretch of a game
    out: opts.fromJunction ? (opts.exitIndex === 0 ? 1 : -1) : 0,
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

  // The passage that leads into a junction must already be heading north:
  // the turn comes before it, so the hall (and the branches that leave it
  // sideways) stands well clear of whatever the path has just run along.
  const needsNorth = NEEDS_NORTH.has(type) || (type === 'corridor' && stretch.plan[idx + 1] === 'junction');
  if (attempt === 0) {
    if (needsNorth && turnHome !== 0) return { def: SEGMENTS.bend, env: back({ turn: turnHome }) };
    if (type === 'bend') {
      // never turn to face south; and a branch only ever turns away from
      // its sister branch, so the two can never run into each other
      const turn = turnHome !== 0 ? turnHome : (stretch.out || rng.sign());
      return { def: SEGMENTS.bend, env: env({ turn }) };
    }
    if (type === 'junction') return { def: SEGMENTS.junction, env: env(story.junctionEnv(rng, stretch)) };
    // The gate passage still belongs to the station you are leaving (its
    // tiles and name): the new station's colours only show once the gate
    // has shut behind you, as confirmation rather than as a clue.
    if (idx === 0 && stretch.fromJunction) {
      const from = node.env;
      return { def: SEGMENTS.corridor, env: env({ gate: true, len: 8, noticeChance: 0, theme: from.theme, station: from.station }), force: true };
    }
    // the closed station is not the stretch's station: its own name, tiles and gloom
    if (type === 'ghost' && has('ghost')) {
      const name = GHOST_STATION.name;
      return { def: SEGMENTS.ghost, env: env({ station: name, theme: themeOf(name), ambient: [0.05, 0.052, 0.056] }) };
    }
    return { def: SEGMENTS[type] || SEGMENTS.corridor, env: env({}) };
  }
  // --- something did not fit: try other ways of getting past the obstacle
  const alts = [], out = stretch.out || 1;
  if (turnHome !== 0) alts.push(['bend', { turn: turnHome }]);
  else alts.push(['bend', { turn: out }]);
  alts.push(['corridor', { short: true }]);
  if (has('stairs')) alts.push(['stairs', { dir: -1 }], ['stairs', { dir: 1 }]);
  if (has('escalator')) alts.push(['escalator', { dir: -1 }], ['escalator', { dir: 1 }]);
  alts.push(['corridor', { short: true, tiny: true }]);
  if (turnHome === 0) alts.push(['bend', { turn: -out }]);      // towards the sister branch: last resort
  const a = alts[attempt - 1];
  if (a) return { def: SEGMENTS[a[0]], env: back(a[1]) };
  return null; // generator then forces the first choice instead of a dead end
}

// How many correct choices remain before the exit stretch is generated.
export function remaining(story) { return CFG.goal - story.progress; }
