// "Thought for the day": what the duty staff write, in marker pen, on the
// whiteboard by the way in. Ordinary and cheery to begin with; quietly wrong
// as the station stops agreeing with itself; and in the end not written by
// staff at all. All of it written for this game.
//
// The rule the boards follow (taught by one of them, and by a staff notice):
// a board signed by a named member of staff was written by staff. A board
// signed by anybody else — or by nobody — was not.
import { hash32 } from '../util/rng.js';

// [text, doodle, clue?]  — clue marks the ones that teach a rule of the station
export const THOUGHTS = [
  ['Be kind to each other. It costs nothing, and the trains still run.', 'heart'],
  ['Stand on the right, walk on the left – and smile!', 'smile'],
  ['If it isn’t signed by one of us, we didn’t write it. Have a lovely day!', 'star', 'signed'],
  ['Kindness is like the Northern line: it goes both ways.', 'train'],
  ['Today’s forecast below ground: 100% chance of no rain.', 'sun'],
  ['Our clocks only go one way. So do Mondays. Chin up!', 'sun', 'clock'],
  ['Tea solves most things. Signal failures take a bit longer.', 'cup'],
  ['You’re not late. You’re on a later version of on time.', 'smile'],
  ['A chime that goes UP means it’s one of us talking. Always nice to hear a friendly voice!', 'note', 'chime'],
  ['Don’t let the escalator get you down. That’s only its job on one side.', 'smile'],
  ['Lost your brolly? Baker Street. Lost your way? Follow the yellow and black signs.', 'brolly', 'yellow'],
  ['Whoever you’re rushing for will wait. Walk, don’t run.', 'heart'],
  ['Mind the gap between who you are and who you were before your first cuppa.', 'cup'],
  ['Every stop north is one nearer fresh air. Keep going – you’re doing brilliantly.', 'train', 'line'],
  ['Shortest journey on the network: one smile, platform to platform.', 'smile'],
];

export const THOUGHTS_ODD = [
  ['You’ve read this board before.', 'tally'],
  ['Staff have gone home. Who wrote this?', 'query'],
  ['Be kind to each other. There is only one of you.', 'heart'],
  ['Stand on the right. Walk on the left. Don’t look behind.', 'eye'],
  ['Smile! The cameras like it.', 'eye'],
  ['This board is wiped clean every night. Tonight hasn’t finished yet.', 'tally'],
  ['Yesterday’s thought is still underneath. It won’t rub out.', 'query'],
  ['The date above is correct. It has been correct for some time.', 'tally'],
  ['Thank you for not counting the stairs. (We know you did.)', 'smile'],
  ['Don’t let the escalator get you down. Let it take you where it wants.', 'spiral'],
  ['A clock going backwards is not trying to help you.', 'query', 'clock'],
];

export const THOUGHTS_STRANGE = [
  ['You.', 'eye'],
  ['I have so many passages now. Stay and see them all.', 'spiral'],
  ['No more thoughts today. Only walking.', 'tally'],
  ['You wrote this. You’ll write it again tomorrow.', 'tally'],
  ['The way out is a thought I had once.', 'spiral'],
  ['Mind the gap. I do. I mind it very much.', 'eye'],
  ['Please stop reading me.', 'eye'],
];

const STAFF = ['Dave', 'Maureen', 'Priya', 'Winston', 'Bev', 'Kofi', 'Tariq', 'Sue'];
const ROLES = ['CSA', 'Station Supervisor', 'early turn', 'night turn', 'ticket hall'];
const SIGN_ODD = ['Y.O.U.', 'a member of staff?', '(unsigned)', 'you know who'];
const SIGN_STRANGE = ['The Station', 'The Station', 'me', 'you'];

// Whiteboard markers.
export const INK = { blue: '#1f3fae', black: '#1c1c22', red: '#c5281f', green: '#1d7a40' };

const DAYS = ['Sun', 'Mon', 'Tues', 'Weds', 'Thurs', 'Fri', 'Sat'];
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
const ord = (n) => `${n}${n % 100 > 10 && n % 100 < 14 ? 'th' : ['th', 'st', 'nd', 'rd'][n % 10] || 'th'}`;

// The date as staff write it at the top of the board: "Thurs 19th Nov".
export function boardDate(tier, rng, now = new Date()) {
  const fmt = (d) => `${DAYS[d.getDay()]} ${ord(d.getDate())} ${MONTHS[d.getMonth()]}`;
  const today = fmt(now);
  if (tier === 0) return today;
  if (tier === 1) {
    return rng.pick([`${today} (again)`, `${today}, still`, `${DAYS[now.getDay()]}? ${ord(now.getDate())} ${MONTHS[now.getMonth()]}`,
      fmt(new Date(now.getTime() - 86400000))]);
  }
  return rng.pick(['Today. Always today', 'No date', `${DAYS[now.getDay()]} ${DAYS[now.getDay()]} ${DAYS[now.getDay()]}`]);
}

function staffSign(rng, station) {
  return rng.chance(0.2) ? `Your ${station} team` : `${rng.pick(STAFF)}, ${rng.pick(ROLES)}`;
}

function finish(th, station) {
  th.head = th.head || station.toUpperCase();
  th.caption = `${th.head} · ${th.date}\n${th.title}: ${th.text}\n— ${th.sign}`;
  return th;
}

// The board by the gates at the very end: an ordinary one, signed by staff.
export function finalThought(rng, station, text) {
  return finish({ tier: 0, clue: null, title: 'Thought for the day', date: boardDate(0, rng), ink: INK.blue, doodle: 'sun', text, sign: staffSign(rng, station) }, station);
}

// How wrong a board is: 0 ordinary, 1 odd, 2 not written by staff.
export function thoughtTier(rng, wrong) {
  const strange = Math.min(0.6, Math.max(0, wrong - 2) * 0.3), odd = Math.min(0.7, wrong * 0.28);
  return rng.weighted([[0, Math.max(0.08, 1 - odd - strange)], [1, odd], [2, strange]]);
}

// The board for one place in the station. env = the segment's environment
// (station, wrong, stretch, idx, gseed); opts.cheery forces an ordinary one.
// Boards along a walk step through the lists in order, so the same thought
// does not turn up twice in a row.
export function pickThought(rng, env, opts = {}) {
  const wrong = env.wrong || 0, station = env.station || 'Mornington Crescent';
  const tier = opts.cheery ? 0 : thoughtTier(rng, wrong);
  const list = [THOUGHTS, THOUGHTS_ODD, THOUGHTS_STRANGE][tier];
  const step = (env.stretch ? env.stretch.id * 4 : 0) + (env.idx || 0);
  const [text, doodle, clue] = list[(hash32(env.gseed || 1, 77 + tier) + step) % list.length];
  const th = {
    tier, text, doodle, clue: clue || null, title: 'Thought for the day', date: boardDate(tier, rng),
    ink: tier === 2 ? INK.red : tier === 1 ? INK.black : rng.pick([INK.blue, INK.blue, INK.black]),
    sign: tier === 0 ? staffSign(rng, station) : rng.pick(tier === 1 ? SIGN_ODD : SIGN_STRANGE),
  };
  if (tier === 2 && rng.chance(0.4)) th.head = 'THIS STATION';
  return finish(th, station);
}

// --- the board that sometimes stands in a junction hall --------------------
const POINT_TRUE = [
  (s) => `Way out today: ${s}-hand passage. Mind how you go!`,
  (s) => `Lift’s out again – sorry! For the way out, keep ${s}.`,
  (s) => `Works on tonight. The way out is by the ${s}-hand passage. Thanks for your patience!`,
];
const POINT_FALSE = [
  (s) => `Way out today: ${s}. Trust me.`,
  (s) => `Go ${s}. Everybody goes ${s}. Nobody has complained.`,
  (s) => `The ${s}-hand passage has missed you. Come along.`,
];
const RULE = {
  signs: 'Our signs are yellow and black and say “Way out”. Anything fancier isn’t one of ours!',
  announce: 'If the chime goes down, don’t go with it. Wait for the one that goes UP.',
  clock: 'Clocks here go forwards, like the rest of us. Don’t walk under one that doesn’t.',
};

// p = the junction's plan ({ kind, correct }); exit 0 is the walker's left.
// Staff point the right way (or just repeat the rule); the station, once it
// has started writing on the boards itself, points the wrong way — and never
// signs a member of staff's name. Returns the thought plus { says, lie }.
export function junctionThought(rng, env, p) {
  const wrong = env.wrong || 0, station = env.station || 'Mornington Crescent';
  const lie = rng.chance(Math.min(0.5, Math.max(0, wrong - 0.6) * 0.16));
  const rule = !lie && rng.chance(0.35);
  const says = rule ? -1 : lie ? 1 - p.correct : p.correct;
  const side = says === 0 ? 'left' : 'right';
  const th = {
    tier: lie ? 2 : 0, clue: 'junction', says, lie,
    title: rule ? 'Thought for the day' : lie ? 'Thought for the day' : 'Today’s travel tip',
    text: rule ? RULE[p.kind] || RULE.signs : rng.pick(lie ? POINT_FALSE : POINT_TRUE)(side),
    doodle: rule ? 'star' : side, date: boardDate(lie ? 1 : 0, rng),
    ink: lie ? INK.red : rng.pick([INK.blue, INK.black]),
    sign: lie ? 'The Station' : staffSign(rng, station),
  };
  return finish(th, station);
}
