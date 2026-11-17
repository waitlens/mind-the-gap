// What the dot-matrix indicators and the clocks are showing right now.
// The first row is the diegetic progress meter: "Way out  N min".
import { CFG } from '../config.js';
import { RNG, hash32 } from '../util/rng.js';
import { destination } from './names.js';

const pad2 = (n) => String(n).padStart(2, '0');

const TICKER = [
  'The last train has departed', 'This station is closed', 'Please make your way to the way out',
  'Check the front of the train', 'Mind the gap', 'Stand behind the yellow line',
];
const TICKER_ODD = [
  'The last train has departed. It will depart again', 'Please stand behind yourself',
  'This station is closed. You are inside it', 'The way out thanks you for your patience',
  'Do not count the stairs', 'It is later than the clock says', 'Mind the gap. The gap minds you',
  'There is a good service on all the lines that remain',
];

function secondsToday() {
  const d = new Date();
  return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds() + d.getMilliseconds() / 1000;
}

function clockText(tod) {
  const t = ((Math.floor(tod) % 86400) + 86400) % 86400;
  return `${pad2(Math.floor(t / 3600))}:${pad2(Math.floor(t / 60) % 60)}:${pad2(t % 60)}`;
}

function marquee(text, t, width = 26) {
  const s = `${text}   ***   `;
  const off = Math.floor(t * 4) % s.length;
  return (s + s + s).slice(off, off + width);
}

export function boardState(story, t) {
  if (story.anchorTod === undefined) { story.anchorTod = secondsToday(); story.anchorT = t; }
  const tod = story.anchorTod + (t - story.anchorT);
  const todBack = story.anchorTod - (t - story.anchorT) * 1.0;
  const left = CFG.goal - story.progress;
  const wrong = story.wrong;
  const slot = Math.floor(t / 14);
  const r = new RNG(hash32(story.seed, slot));
  const odd = r.chance(Math.min(0.85, wrong * 0.2));
  const dest = destination(r);
  let way = left <= 0 ? 'approaching' : `${left} min${left === 1 ? '' : 's'}`;
  // at high wrongness the minutes occasionally flicker to nonsense for a moment
  if (wrong >= 3 && Math.floor(t * 4) % 23 === 0) way = r.pick(['-- mins', '99 mins', 'never']);
  const tick = marquee((odd ? r.pick(TICKER_ODD) : r.pick(TICKER)), t);
  const shown = story.lastWrong ? todBack : tod;
  return {
    rows: [
      { l: '1 Way out', r: way },
      { l: odd ? `2 ${dest}` : '2 Not in service', r: odd ? r.pick(['-- mins', 'gone', '0 mins']) : '' },
      { l: tick },
    ],
    footer: `Time ${clockText(shown)}`,
    rows2: [
      { l: 'Way out', r: way },
      { l: story.lastWrong ? 'You are going the wrong way' : 'Follow the signs' },
      { l: tick },
    ],
    footer2: `Time ${clockText(shown)}`,
    tod, todBack,
  };
}
