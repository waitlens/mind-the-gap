// Invented station names. Nothing here is a real station: names are built
// from made-up parts, and get stranger as the station goes wrong.
const HEAD = ['Marrow', 'Hollow', 'Vesper', 'Tallow', 'Gallow', 'Ember', 'Quill', 'Thistle', 'Cinder', 'Pallant',
  'Morrow', 'Ashen', 'Sable', 'Wither', 'Nether', 'Candle', 'Sorrow', 'Mallow', 'Linnet', 'Elder', 'Hush', 'Mourn',
  'Gossamer', 'Lantern', 'Pewter', 'Rook', 'Fallow', 'Dimm', 'Yarrow', 'Wax'];
const TAIL = ['gate', 'wick', 'mere', 'ford', 'bourne', 'stead', 'well', 'field', 'holt', 'mouth', 'ditch', 'combe', 'by'];
const AFTER = ['Cross', 'Road', 'Street', 'Lane', 'Hill', 'Green', 'Common', 'Circus', 'Vale', 'Park', 'Wharf', 'Reach'];
const SAINT = ["Vesper's", "Ember's", "Mallow's", "Quill's", "Sorrow's", "Linnet's", "Wither's"];
const BEFORE = ['Upper', 'Lower', 'North', 'South', 'Old', 'Great', 'Little'];

const STRANGE = ['Nowhere', 'Still Here', 'Not Yet', 'Further On', 'Mind The', 'You Again', 'Last Stop',
  'No Such Place', 'Almost', 'Same As Before', 'Elsewhere', 'This Station', 'Keep Walking', 'Not This One',
  'Below', 'Further Down', 'Here Again'];

export function stationName(rng, used) {
  for (let tries = 0; tries < 20; tries++) {
    const h = rng.pick(HEAD);
    let name;
    switch (rng.int(0, 6)) {
      case 0: case 1: name = h + rng.pick(TAIL); break;
      case 2: name = `${h} ${rng.pick(AFTER)}`; break;
      case 3: name = `${h}${rng.pick(TAIL)} ${rng.pick(AFTER)}`; break;
      case 4: name = `Saint ${rng.pick(SAINT)}`; break;
      case 5: name = `${rng.pick(BEFORE)} ${h}${rng.pick(TAIL)}`; break;
      default: name = `${h} ${rng.pick(AFTER)}`;
    }
    if (!used || !used.has(name)) { if (used) used.add(name); return name; }
  }
  return 'Marrowgate';
}

function swapLetters(s, rng) {
  const idx = [];
  for (let i = 0; i < s.length - 1; i++) if (/[a-z]/.test(s[i]) && /[a-z]/.test(s[i + 1]) && s[i] !== s[i + 1]) idx.push(i);
  if (!idx.length) return s;
  const i = rng.pick(idx);
  return s.slice(0, i) + s[i + 1] + s[i] + s.slice(i + 2);
}

// Returns the name as it appears on one particular sign. wrong = 0..5.
export function wrongName(name, wrong, rng) {
  const p = Math.min(0.75, wrong * 0.16);
  if (!rng.chance(p)) return name;
  const roll = rng.next() * Math.min(5, wrong + 1);
  if (roll < 1) return swapLetters(name, rng);
  if (roll < 1.7) { const i = rng.int(1, name.length - 1); return name.slice(0, i) + name.slice(i + 1); } // dropped letter
  if (roll < 2.4) return name.split(' ').map((w) => w[0] + w.slice(1).split('').reverse().join('')).join(' ');
  if (roll < 3.1) return name.replace(/[aeiou]/, (v) => 'aeiou'['aeiou'.indexOf(v) + 1] || 'a');
  return rng.pick(STRANGE);
}

export function strangeName(rng) { return rng.pick(STRANGE); }

const DEST = ['Marrowgate', 'Hollow Cross', 'Tallowmere', 'Vesper Road', 'Cinderford', 'Quillstead', 'Emberwick',
  'Gallow Green', 'Netherbourne', 'Pallant Hill', 'Morrowfield', 'Sable Reach', 'Witherholt', 'Candle Wharf'];
export function destination(rng) { return rng.pick(DEST); }
