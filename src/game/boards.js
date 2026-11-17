// What the dot-matrix indicators and the clocks are showing right now, in
// the network's own format:   1 Edgware            2 mins
//                             2 Way out            4 mins
//                             3 Morden via Bank    9 mins
//                                     23:47:12
// The trains are real Northern line destinations for the platform you are
// on. "Way out" is listed among them: its minutes are the number of right
// choices still needed (the diegetic progress meter).
import { CFG } from '../config.js';
import { RNG, hash32 } from '../util/rng.js';
import { destinations } from './route.js';

const pad2 = (n) => String(n).padStart(2, '0');
const SHORT = { 'Battersea Power Station': 'Battersea Pwr Stn', 'via Charing Cross': 'via CX', 'via Bank': 'via Bank' };

const TICKER = [
  'There is a good service on the Northern line', 'Please stand behind the yellow line',
  'Mind the gap between the train and the platform', 'This station closes after the last train',
  'Please keep your belongings with you at all times', 'Check front of train for destination',
];
const TICKER_ODD = [
  'The last train has departed. It will depart again', 'Please stand behind yourself',
  'This station is closed. You are inside it', 'The way out thanks you for your patience',
  'Do not count the stairs', 'It is later than the clock says', 'Mind the gap. The gap minds you',
  'There is a good service on all the lines that remain', 'North End. This train does not stop at North End',
];

function secondsToday() {
  const d = new Date();
  return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds() + d.getMilliseconds() / 1000;
}

function clockText(tod) {
  const t = ((Math.floor(tod) % 86400) + 86400) % 86400;
  return `${pad2(Math.floor(t / 3600))}:${pad2(Math.floor(t / 60) % 60)}:${pad2(t % 60)}`;
}

function marquee(text, t, width = 28) {
  const s = `${text}   ***   `;
  const off = Math.floor(t * 5) % s.length;
  return (s + s + s).slice(off, off + width);
}

const mins = (m) => (m <= 0 ? 'due' : `${m} min${m === 1 ? '' : 's'}`);

// The next trains for a platform: [{ dest, via, label, secs }]. `sched` is
// the train controller's timetable ({ nextAt, period }) in game seconds.
export function nextTrains(station, dir, sched, now, seed) {
  const pool = destinations(station, dir);
  const out = [];
  for (let k = 0; k < 2; k++) {
    const at = sched.nextAt + k * sched.period;
    const r = new RNG(hash32(seed, Math.round(at)));
    const [dest, via] = pool[Math.floor(r.next() * pool.length)];
    const label = `${SHORT[dest] || dest}${via ? ` ${SHORT[via] || via}` : ''}`;
    out.push({ dest, via, label, secs: at - now });
  }
  return out;
}

export function boardState(story, t) {
  if (story.anchorTod === undefined) { story.anchorTod = secondsToday(); story.anchorT = t; }
  const game = story.game;
  const tod = story.anchorTod + (t - story.anchorT);
  const todBack = story.anchorTod - (t - story.anchorT);
  const left = CFG.goal - story.progress;
  const wrong = story.wrong;
  const slot = Math.floor(t / 12);
  const r = new RNG(hash32(story.seed, slot));
  const odd = r.chance(Math.min(0.85, wrong * 0.2));
  const node = game.world && game.world.current;
  const station = (node && node.env.station) || 'Mornington Crescent';
  // (only platforms have a direction of travel; stairs and escalators use p.dir for up/down)
  const dir = (node && node.def.type === 'platform' ? node.p.dir : node && node.env.pdir) || 'north';
  const sched = game.trains ? game.trains.schedule() : { nextAt: game.state.time + 150, period: 240 };
  const trains = nextTrains(station, dir, sched, game.state.time, story.seed);
  let way = left <= 0 ? 'approaching' : `${left} min${left === 1 ? '' : 's'}`;
  // when the station is very wrong the minutes flicker to nonsense for a moment
  if (wrong >= 3 && Math.floor(t * 4) % 23 === 0) way = r.pick(['-- mins', '99 mins', 'never']);
  const row = (n, tr) => ({ l: `${n} ${tr.label}`, r: mins(Math.max(0, Math.ceil(tr.secs / 60))) });
  let rows = [row(1, trains[0]), { l: '2 Way out', r: way }, row(3, trains[1])];
  if (odd) rows[2] = r.pick([{ l: '3 Check front of train', r: '' }, { l: `3 ${station}`, r: 'due' }, { l: '3 North End', r: '-- mins' }, { l: '3 Not in service', r: '' }]);
  if (game.trains && game.trains.atPlatform()) rows[0] = { l: `1 ${trains[0].label}`, r: '' };
  const shown = story.lastWrong ? todBack : tod;
  // bottom line: the time, with a scrolling message every so often
  const showMsg = slot % 3 === 1;
  const footer = showMsg ? marquee(odd ? r.pick(TICKER_ODD) : r.pick(TICKER), t) : clockText(shown);
  return {
    rows, footer,
    rows2: [
      { l: 'Way out', r: way },
      { l: story.lastWrong ? 'You are going the wrong way' : 'Follow the yellow and black signs' },
      { l: marquee(odd ? r.pick(TICKER_ODD) : r.pick(TICKER), t) },
    ],
    footer2: clockText(shown),
    tod, todBack,
  };
}
