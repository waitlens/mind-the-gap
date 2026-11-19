// Story: decides what the station generates next (stretches of segments
// that end in a junction), tracks the player's progress towards the way out
// and how wrong the station has become.
import { RNG, hash32 } from '../util/rng.js';
import { CFG } from '../config.js';
import { SEGMENTS } from '../world/registry.js';
import { makeStretch, nextInStretch } from './stretch.js';
import { boardState } from './boards.js';

export class Story {
  constructor(game) {
    this.game = game;
    this.reset(1);
  }

  reset(seed) {
    this.seed = seed >>> 0;
    this.rng = new RNG(hash32(this.seed, 5));
    this.progress = 0;       // correct junctions in a row-ish (see decide)
    this.wrong = 0;          // how strange the station is (0..5)
    this.stretchCount = 0;
    this.depth = 0;          // junctions passed
    this.penalty = 0;        // strangeness earned by wrong turns
    this.base = 0;
    this.junctionsPlanned = 0;
    this.trainStops = 0;     // standing trains dealt out so far
    this.lastWrong = false;  // last decision was wrong → clocks run backwards
    this.usedNames = new Set();
    this.seenNotices = new Set();
    this.log = [];
  }

  // Build the first stretch and return the root node.
  begin(world, plan) {
    const stretch = makeStretch(this, { first: true });
    if (plan) stretch.plan = plan.slice();   // tests: force a layout
    const def = SEGMENTS[stretch.plan[0]];
    const env = this.envFor(stretch, 0);
    return world.start(def, env, hash32(this.seed, 1));
  }

  envFor(stretch, idx, extra) {
    return {
      theme: stretch.theme, stretch, idx, wrong: this.wrong, station: stretch.station, pdir: stretch.dir,
      ambient: stretch.dark ? [0.05, 0.055, 0.05] : [0.1, 0.105, 0.1], seenNotices: this.seenNotices, gseed: this.seed, ...extra,
    };
  }

  // World hook: what goes behind exit i of node? attempt counts retries
  // after a candidate did not fit.
  choose(node, i, attempt, rng) {
    return nextInStretch(this, node, i, attempt, rng);
  }

  // The stretch behind exit i of a junction (created once, then remembered).
  branchStretch(node, i) {
    if (!node.branches) node.branches = [];
    if (!node.branches[i]) {
      // Where the branch leads depends on the station the junction is in —
      // not on the player's progress at the moment it happens to be planned
      // (junctions can come into sight before the gate behind you has shut).
      const correct = node.p.correct === i;
      const here = node.env.stretch ? node.env.stretch.index : this.progress;
      const index = correct ? here + 1 : Math.max(0, here - 2);
      node.branches[i] = makeStretch(this, { correct, fromJunction: node, exitIndex: i, exit: index >= CFG.goal, index, clocksBack: !correct });
    }
    return node.branches[i];
  }

  // What kind of puzzle the next junction is, and how subtle.
  junctionEnv(rng, stretch) {
    const n = this.junctionsPlanned++;
    const at = stretch ? stretch.index : this.progress;     // further up the line, subtler tells
    const level = at < 2 ? 0 : at < 4 ? 1 : 2;
    const jkind = n === 0 ? 'signs' : rng.weighted([['signs', 3], ['announce', 2], ['clock', 1.6]]);
    // (tests can force a kind / level)
    return { jkind: this.forceKind || jkind, jlevel: this.forceLevel ?? level };
  }

  onBuilt() {}
  onDisposed() {}

  // Called by the director when the player commits to a branch.
  decide(correct) {
    const st = this.game.state;
    st.junctions++;
    // the station gets a little stranger the deeper you go, and a lot
    // stranger every time you take a wrong turn
    this.depth++;
    if (correct) {
      this.progress = Math.min(CFG.goal, this.progress + 1);
      this.penalty = Math.max(0, this.penalty - 0.25);
      this.lastWrong = false;
    } else {
      this.progress = Math.max(0, this.progress - 2);
      this.penalty = Math.min(4, this.penalty + 1);
      this.lastWrong = true;
      st.wrongTurns++;
    }
    this.wrong = Math.min(5, this.base + 0.4 * this.depth + this.penalty);
    st.progress = this.progress; st.wrong = this.wrong;
    this.log.push(correct ? 1 : 0);
  }

  noticeRead(key) { this.seenNotices.add(key); }

  boardState(t) { return boardState(this, t); }
}
