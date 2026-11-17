// Junction logic: what the PA says when you arrive, what the help point
// says, and what happens when you commit to a branch (the gate closes).
import { GATE_WALL } from '../world/gate.js';
import { CFG } from '../config.js';

// The announcement for a junction. For 'announce' junctions this is the
// clue: it names a line (and side); a rising chime means it is true, a
// falling chime means it is a lie.
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
  if (p.kind === 'clock') {
    return { text: 'Customers are reminded that all station clocks run forwards.', chime: 'rise', urgent: true };
  }
  return { text: 'Please follow the yellow and black signs for the way out.', chime: 'rise', urgent: true };
}

const HELP = [
  'Help point. There is nobody at the other end. Please follow the signs.',
  'Help point. Your call is in a queue. You are the only caller.',
  'Help point. Staff left some time ago. Trust the yellow signs and the rising chime.',
];

export function enterJunction(game, node) {
  const a = junctionAnnouncement(node, game.director.announcer.rng);
  node.announcement = a;
  game.director.announcer.say(a);
  game.state.junctionKind = node.p.kind;
}

export function helpPoint(game, node) {
  const an = game.director.announcer;
  if (node.p.kind === 'announce' && node.announcement) {
    an.say({ ...node.announcement, urgent: true });
    game.director.reading = null; game.player.zoomTarget = 0;
    return;
  }
  const text = an.rng.pick(HELP);
  an.say({ text, chime: 'none', urgent: true });
  game.director.reading = null; game.player.zoomTarget = 0;
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
  if (!correct) {
    game.audio.sfx('wrong');
    ev.brownOut(2.2);
  } else if (story.progress >= CFG.goal) {
    game.director.announcer.say({ text: 'This is the way out. Please keep walking.', chime: 'rise', urgent: true });
  }
  game.state.lastChoice = correct ? 'right' : 'wrong';
}
