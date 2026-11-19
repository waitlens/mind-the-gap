// Junction logic: what the PA says when you arrive, what the help point
// says, and what happens when you commit to a branch (the gate closes).
import { GATE_WALL } from '../world/gate.js';
import { CFG } from '../config.js';

// The announcement for a junction. Only 'announce' junctions have one, and
// there it is the clue: it names a platform (and a side); a rising chime
// means it is true, a falling chime means it is a lie. Sign and clock
// junctions are silent when you walk in: the rules are on the Customer
// Information board on the first platform, and hearing them again at every
// junction was the most repeated line in the game. Returns null for those.
export function junctionAnnouncement(node, rng) {
  const p = node.p;
  const sideOf = (exit) => (exit === 0 ? 'left' : 'right');
  const platOf = (exit) => `${p.dirs[exit] === 'north' ? 'northbound' : 'southbound'} platform`;
  if (p.kind === 'announce') {
    const said = p.lie ? 1 - p.correct : p.correct;
    const text = p.lie
      ? rng.pick([
        `For the way out, please follow signs for the ${platOf(said)}. To the ${sideOf(said)}. Please.`,
        `The way out is by the ${platOf(said)}, on the ${sideOf(said)}. We would not lie to you.`,
        `Customers for the way out should keep to the ${sideOf(said)}, for the ${platOf(said)}. Do hurry.`,
      ])
      : rng.pick([
        `For the way out, please follow signs for the ${platOf(said)}, to the ${sideOf(said)}.`,
        `Customers for the way out should keep to the ${sideOf(said)} for the ${platOf(said)}.`,
        `The way out is by way of the ${platOf(said)}, on your ${sideOf(said)}.`,
      ]);
    return { text, chime: p.lie ? 'fall' : 'rise', odd: p.lie, urgent: true };
  }
  return null;
}

// What the help point in a silent junction says when it is pressed: the
// rule that applies in that hall. (Never unprompted.)
const HELP_RULE = {
  clock: 'Customers are reminded that all station clocks run forwards.',
  signs: 'Please follow the yellow and black signs for the way out.',
};

const HELP = [
  'Help point. There is nobody at the other end. Please follow the signs.',
  'Help point. Your call is in a queue. You are the only caller.',
  'Help point. Staff left some time ago. Trust the yellow signs and the rising chime.',
];

export function enterJunction(game, node) {
  game.state.junctionKind = node.p.kind;
  if (node.announcement === undefined) node.announcement = junctionAnnouncement(node, game.director.announcer.rng);
  if (node.announcement) game.director.announcer.say(node.announcement);
}

// Help points: in an 'announce' junction it repeats the announcement; in a
// sign or clock junction it gives that hall's rule; on a platform there is
// nobody at the other end.
export function helpPoint(game, node) {
  const an = game.director.announcer, kind = node.p.kind;
  game.director.reading = null; game.player.zoomTarget = 0;
  if (kind === 'announce') {
    if (node.announcement === undefined) node.announcement = junctionAnnouncement(node, an.rng);
    an.say({ ...node.announcement, urgent: true });
  } else if (HELP_RULE[kind]) an.say({ text: HELP_RULE[kind], chime: 'rise', urgent: true });
  else an.say({ text: an.rng.pick(HELP), chime: 'none', urgent: true });
}

// The player has walked far enough down a branch: shut the gate behind
// them, score the decision and forget the station they came from.
export function commit(game, node) {
  const junction = node.parent;
  if (!junction || node.gateShut) return;
  const world = game.world, story = game.story, ev = game.director.events;
  node.gateShut = true;
  node.gateWall = GATE_WALL;
  if (node.built) {
    if (node.built.gate) node.built.gate.visible = true;
    node.built.walls.push(GATE_WALL);
  }
  const correct = junction.def.type === 'junction' ? junction.p.correct === node.exitIndex : true;
  // everything behind the gate ceases to exist
  node.parent = null;
  world.prune(junction, node);
  // the gate is the new origin of the world (keeps coordinates small)
  const dx = Math.round(node.pos.x), dy = Math.round(node.pos.y), dz = Math.round(node.pos.z);
  world.rebase(dx, dy, dz);
  const pl = game.player;
  pl.pos.x -= dx; pl.pos.y -= dy; pl.pos.z -= dz; pl.eyeY -= dy;
  world.refresh();
  game.audio.sfx('gate');
  ev.lightsOut(0.28);
  ev.glitch(correct ? 0.5 : 1.3);
  if (junction.def.type !== 'junction') return;
  story.decide(correct);
  // the station you have walked into is the truth; keep the count in step with it
  const idx = node.env.stretch ? node.env.stretch.index : story.progress;
  story.progress = Math.min(CFG.goal, idx); game.state.progress = story.progress;
  if (!correct) {
    game.audio.sfx('wrong');
    ev.brownOut(2.2);
  } else if (story.progress >= CFG.goal) {
    game.director.announcer.say({ text: 'This is the way out. Please keep walking.', chime: 'rise', urgent: true });
  }
  game.state.lastChoice = correct ? 'right' : 'wrong';
}
