// What a name board says once the station has started to go wrong.
// The right name comes from the line data (line.js); the wrong ones are
// real too — stations that were closed long ago or were built and never
// opened, and the names some stations nearly had.
const GHOST_NAMES = ['North End', 'South Kentish Town', 'City Road', 'King William Street', 'Bull & Bush',
  'Aldwych', 'Down Street', 'British Museum', 'York Road', 'Brompton Road'];

// Names that belong to one station only.
const FORMER = {
  Hampstead: ['Heath Street'],
  'Chalk Farm': ['Adelaide Road'],
  'Mornington Crescent': ['Seymour Street', 'Mornington Cresent'],
  'Camden Town': ['Camden Road'],
  'Belsize Park': ['Belsize'],
};

function swapLetters(s, rng) {
  const idx = [];
  for (let i = 1; i < s.length - 1; i++) if (/[a-z]/.test(s[i]) && /[a-z]/.test(s[i + 1]) && s[i] !== s[i + 1]) idx.push(i);
  if (!idx.length) return s;
  const i = rng.pick(idx);
  return s.slice(0, i) + s[i + 1] + s[i] + s.slice(i + 2);
}

// The name as it appears on one particular sign. wrong = 0..5.
export function wrongName(name, wrong, rng) {
  const p = Math.min(0.7, wrong * 0.15);
  if (!rng.chance(p)) return name;
  const roll = rng.next() * Math.min(5, wrong + 1);
  if (roll < 1) return swapLetters(name, rng);                                              // a slip of the signwriter
  if (roll < 1.8) { const i = rng.int(1, name.length - 2); return name.slice(0, i) + name.slice(i + 1); }   // a dropped letter
  if (roll < 2.8 && FORMER[name]) return rng.pick(FORMER[name]);                            // a name it nearly had
  return rng.pick(GHOST_NAMES);                                                             // a station that is not there
}

export const isGhost = (name) => GHOST_NAMES.includes(name);
