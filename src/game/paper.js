// The free morning paper somebody left on the bench. An invented title
// ("The Commute") in the manner of London's free tabloids; every story is
// written for this game. The front page starts as ordinary London news,
// drifts wrong as the station does, and ends up being about the reader.
//
// [headline, standfirst, paragraph, picture, clue?] — clue marks the stories
// that happen to mention a rule of the station (helpful, never certain).
import { hash32 } from '../util/rng.js';

export const PAPER_NAME = 'THE COMMUTE';

export const STORIES = [
  ['Tube strike threat over night shifts', 'Union and bosses to meet for last-ditch talks on Thursday',
    'Commuters could face a 24-hour walkout next week unless a deal is reached. “Nobody wants this,” said both sides, separately.', 'tunnel'],
  ['Rain, then more rain', 'Umbrella sales soar as forecasters give up on the weekend',
    'The Met Office says it will stop raining “eventually”. Until then Londoners are advised to carry a brolly and lower their expectations.', 'rain'],
  ['Commuters face Northern line delays', 'Signal failure at Camden Town blamed for a morning of misery',
    'Passengers were told to follow the yellow and black signs to the way out and carry on above ground. A good service resumed by ten.', 'train', 'yellow'],
  ['House prices up again', 'A parking space in Hampstead sells for more than a house in Hull',
    'Estate agents called the plot “deceptively spacious” and “moments from the Tube”. It has no roof.', 'house'],
  ['Fox walks into pub', 'Regulars at a Chalk Farm local say he stayed for the quiz',
    'The landlord said the fox “kept himself to himself” and left before last orders. He is understood to have come second.', 'fox'],
  ['Northern line’s old tiles to be saved', 'Every station has its own colours, and now they are protected',
    'The patterns were designed so passengers could tell stations apart at a glance. “If the colours change, you’ve moved on,” said a heritage officer.', 'tiles', 'tiles'],
  ['Lost property drowning in umbrellas', 'Also handed in this month: a wedding dress, a tuba and “several” false teeth',
    'Staff at Baker Street say nine in ten items are never claimed. “People get off the train and simply forget what they came down with.”', 'rain'],
  ['Station clocks to be put right on Sunday', 'Engineers promise every clock on the line will agree by Monday',
    'A spokesman said station clocks “only ever run forwards” and asked anyone who sees one doing otherwise to tell a member of staff.', 'clock', 'clock'],
];

export const STORIES_ODD = [
  ['Passenger still missing after last train', 'Staff searched the station twice. It was longer the second time',
    'Anyone who travelled on the last northbound service is asked to come forward, if they can find the way out.', 'figure'],
  ['Commuters face Northern line delays', 'The 23:47 has now been due for eleven days',
    'A spokesman apologised for the inconvenience, and for the announcement, which he said he had not made.', 'train'],
  ['Rain expected. Nobody has been up to check', 'Forecasters say conditions above ground “cannot be confirmed”',
    'The last person to go up for a look has not come back down. Colleagues say this is a good sign.', 'rain'],
  ['Fox seen on platform 2', 'It was waiting for a train. It let three go by',
    'Witnesses said the fox “seemed to know which way was out” and set off up the line, northwards. Nobody followed it.', 'fox', 'line'],
  ['Strike called off: no staff left to strike', 'Union says its members “went home some time ago”',
    'Announcements continue as normal. Passengers are reminded that staff announcements begin with a rising chime. The others do not.', 'tunnel', 'chime'],
  ['Yesterday’s paper printed again today', 'Readers say they do not mind. Readers say they do not mind',
    'The editor could not be reached for comment, and neither could the stairs to his office.', 'paper'],
];

export const STORIES_STRANGE = [
  ['Commuter last seen at Mornington Crescent', 'Carrying a camcorder. Reading a newspaper',
    'The commuter is described as tired. If you see them, do not approach. If you are them, keep walking up the line.', 'figure', 'line'],
  ['Station “has no end”, say staff', '“We stopped measuring at Hampstead,” admits surveyor',
    'The way out is believed to still exist. It was last recorded north of here, behind a sign that says exactly “Way out”.', 'tunnel', 'yellow'],
  ['You are reading this', 'And it is reading you. Page 2: what it has learned',
    'Put the paper down. Not there. That is where you found it last time.', 'eye'],
  ['No news today', 'Nothing has happened above ground since you came down',
    'This edition will be reprinted until further notice. The date at the top of the page is correct.', 'blank'],
];

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const fmt = (d) => `${DAYS[d.getDay()]} ${d.getDate()} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`;

// The date line. Ordinary papers carry today's date; odd ones repeat it or
// slip back a day or a week; the strange ones have gone back a long way
// (22 June 1907 is the day this branch of the line opened).
export function paperDate(tier, rng, now = new Date()) {
  const back = (days) => fmt(new Date(now.getTime() - days * 86400000));
  if (tier === 0) return fmt(now);
  if (tier === 1) return rng.pick([back(1), back(7), `${fmt(now)} · ${fmt(now)}`, `${DAYS[now.getDay()]} ${now.getDate()} ${MONTHS[now.getMonth()]}, again`]);
  return rng.pick(['Saturday 22 June 1907', back(365 * 19 + rng.int(0, 300)), `${DAYS[now.getDay()]}, ${DAYS[now.getDay()]}, ${DAYS[now.getDay()]}`]);
}

// How far gone a paper is: 0 ordinary, 1 odd, 2 about you.
export function paperTier(rng, wrong) {
  const strange = Math.min(0.55, Math.max(0, wrong - 2) * 0.28), odd = Math.min(0.7, wrong * 0.3);
  return rng.weighted([[0, Math.max(0.08, 1 - odd - strange)], [1, odd], [2, strange]]);
}

// The paper for one place. env = the segment's environment (wrong, stretch,
// idx, gseed). Papers step through the stories as you walk, like the
// whiteboards, so two benches running do not carry the same front page.
export function pickPaper(rng, env, opts = {}) {
  const tier = opts.tier ?? paperTier(rng, env.wrong || 0);
  const list = [STORIES, STORIES_ODD, STORIES_STRANGE][tier];
  const step = (env.stretch ? env.stretch.id * 3 : 0) + (env.idx || 0);
  const [head, stand, para, photo, clue] = list[(hash32(env.gseed || 1, 61 + tier) + step) % list.length];
  const date = paperDate(tier, rng);
  return {
    tier, name: PAPER_NAME, date, head, stand, para, photo, clue: clue || null,
    issue: tier === 2 ? 'No. 0' : `No. ${rng.int(4100, 6900).toLocaleString('en-GB')}`,
    caption: `${PAPER_NAME} · ${date}\n${head.toUpperCase()}\n${stand}.\n${para}`,
  };
}
