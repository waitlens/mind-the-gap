// Routes over the Northern line data: what lies ahead of a platform in its
// direction of travel (for line diagrams and captions), where its trains
// go (for indicators) and what the next station is (for announcements).
import { SECTIONS, SPUR, GHOSTS, INTERCHANGE, LINE_NAMES, dirWord, platformNo } from './line.js';

const { edgware, barnet, charingX, bank, morden, battersea } = SECTIONS;
const rev = (a) => a.slice().reverse();
const SOUTH_END = [
  { type: 'trunk', stations: ['Kennington'] },
  { type: 'split', left: morden, right: battersea, rejoin: false, labels: ['to Morden', 'to Battersea Power Station'] },
];
const CENTRAL = { type: 'split', left: charingX, right: bank, rejoin: true, labels: ['via Charing Cross', 'via Bank'] };
// (High Barnet branch on the left, Edgware on the right, as on the real diagrams)
const NORTH_END = { type: 'split', left: rev(barnet), right: rev(edgware), rejoin: false, labels: ['High Barnet branch', 'Edgware branch'], spur: SPUR };

// Diagram sections from `station` in direction dir ('north' | 'south').
// The first station of the first trunk is the station itself.
export function route(station, dir) {
  const e = edgware.indexOf(station), c = charingX.indexOf(station);
  const copy = (s) => ({ ...s, left: s.left && s.left.slice(), right: s.right && s.right.slice(), stations: s.stations && s.stations.slice() });
  let out;
  if (dir === 'north') {
    if (e >= 0) out = [{ type: 'trunk', stations: rev(edgware.slice(0, e + 1)) }];
    else if (station === 'Camden Town') out = [{ type: 'trunk', stations: ['Camden Town', ...rev(edgware)] }];
    else out = [{ type: 'trunk', stations: [...rev(charingX.slice(0, Math.max(0, c) + 1)), 'Camden Town'] }, NORTH_END];
  } else if (e >= 0) out = [{ type: 'trunk', stations: [...edgware.slice(e), 'Camden Town'] }, CENTRAL, ...SOUTH_END];
  else if (station === 'Camden Town') out = [{ type: 'trunk', stations: ['Camden Town'] }, CENTRAL, ...SOUTH_END];
  else out = [{ type: 'trunk', stations: [...charingX.slice(Math.max(0, c)), 'Kennington'] }, SOUTH_END[1]];
  return out.map(copy);
}

// Where trains from this platform go: [destination, via] (via may be '').
export function destinations(station, dir) {
  const onCX = charingX.includes(station);
  if (dir === 'north') return onCX ? [['Edgware', ''], ['High Barnet', ''], ['Edgware', ''], ['Mill Hill East', '']] : [['Edgware', ''], ['Edgware', ''], ['Golders Green', '']];
  if (onCX) return [['Battersea Power Station', ''], ['Kennington', ''], ['Morden', '']];
  return [['Morden', 'via Bank'], ['Kennington', 'via Charing Cross'], ['Battersea Power Station', 'via Charing Cross'], ['Morden', 'via Bank']];
}

// The station after this one for a train to `dest` (via: '' | 'via Bank' | …).
export function nextStation(station, dir, via = '') {
  const r = route(station, dir);
  if (r[0].stations.length > 1) return r[0].stations[1];
  const split = r[1];
  if (!split) return null;
  if (dir === 'north') return via === 'High Barnet' ? split.left[0] : split.right[0];
  return via === 'via Bank' ? split.right[0] : split.left[0];
}

export const interchangeText = (name) => {
  const lines = INTERCHANGE[name];
  if (!lines) return '';
  const names = lines.map((l) => (l === 'rail' ? 'National Rail services' : l === 'dlr' || l === 'elizabeth' ? `the ${LINE_NAMES[l]}` : `the ${LINE_NAMES[l]} line`));
  return `Change here for ${names.length > 1 ? `${names.slice(0, -1).join(', ')} and ${names[names.length - 1]}` : names[0]}.`;
};

// Make a diagram subtly wrong. kind: 'ghost' | 'swap' | 'missing' | 'repeat'.
// Returns the kind actually applied (or null).
export function corrupt(sections, kind, rng) {
  const lists = [];
  sections.forEach((s, si) => {
    if (s.type === 'trunk') lists.push({ arr: s.stations, prev: null, si });
    else {
      const before = sections[si - 1] ? sections[si - 1].stations[sections[si - 1].stations.length - 1] : null;
      lists.push({ arr: s.left, prev: before, si }, { arr: s.right, prev: before, si });
    }
  });
  if (kind === 'ghost') {
    for (const [name, a, b] of rng.shuffle(GHOSTS)) {
      for (const { arr, prev } of lists) {
        for (let i = 0; i < arr.length; i++) {
          const p = i === 0 ? prev : arr[i - 1];
          if ((p === a && arr[i] === b) || (p === b && arr[i] === a)) { arr.splice(i, 0, name); return 'ghost'; }
        }
      }
    }
    return null;
  }
  if (kind === 'swap') {
    const cand = lists.filter((l) => l.arr.length >= 4);
    if (!cand.length) return null;
    const { arr } = rng.pick(cand);
    const i = rng.int(1, arr.length - 3);
    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    return 'swap';
  }
  if (kind === 'repeat') {
    const t = sections[0].stations;
    for (let i = 1; i < Math.min(4, t.length); i++) t[i] = t[0];
    return t.length > 1 ? 'repeat' : null;
  }
  if (kind === 'missing') { sections[0].hideCurrent = true; return 'missing'; }
  return null;
}

// The whole diagram as a sentence, for the caption card when it is READ.
export function routeText(station, dir, sections) {
  const join = (a) => a.join(', ');
  const parts = [`Northern line. ${dirWord(dir)} platform ${platformNo(dir)}.`];
  sections.forEach((s, i) => {
    if (s.type === 'trunk') {
      const list = i === 0 ? s.stations.slice(1) : s.stations;
      if (i === 0) parts.push(s.hideCurrent ? 'This station: (the box is blank).' : `This station: ${s.stations[0]}.`);
      if (list.length) parts.push(`${i === 0 ? 'Then' : 'Then on to'} ${join(list)}.`);
    } else {
      let left = join(s.left);
      if (s.spur && s.left.includes(s.spur.at)) left += ` (and ${s.spur.name}, from ${s.spur.at})`;
      const cap = (t) => t[0].toUpperCase() + t.slice(1);
      parts.push(`${cap(s.labels[0])}: ${left}. ${cap(s.labels[1])}: ${join(s.right)}.`);
    }
  });
  return parts.join(' ');
}

// The whole line, for the caption card of the long strip map.
export function stripText(station, ghosts = []) {
  const j = (a) => a.join(', ');
  const extra = ghosts.length ? ` Also marked: ${j(ghosts.map((g) => g[0]))}.` : '';
  return `Northern line. You are here: ${station}. Edgware branch: ${j(edgware)}. High Barnet branch: ${j(barnet)} (and ${SPUR.name}). `
    + `Then Camden Town. Via Charing Cross: ${j(charingX)}. Via Bank: ${j(bank)}. Then Kennington. `
    + `To Morden: ${j(morden)}. To Battersea Power Station: ${j(battersea)}.${extra}`;
}
