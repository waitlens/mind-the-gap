// Poems for the "Poems on the Underground" posters.
//
// Every real poem here is in the public domain (each poet died before 1950)
// and is quoted as a short excerpt, in the text of the early printed
// editions (for Emily Dickinson, the editions of 1890 and 1891). `alt` lists
// the lines the station rewrites once it has started to go wrong: [line
// number, what it says instead]. The poems signed "Anon." at the bottom of
// the file were written for this game.
import { hash32 } from '../util/rng.js';

export const POEMS = [
  {
    title: 'London', poet: 'William Blake', years: '1757–1827', from: true,
    lines: ['I wander thro’ each charter’d street,', 'Near where the charter’d Thames does flow,',
      'And mark in every face I meet', 'Marks of weakness, marks of woe.'],
    alt: [[0, 'I wander thro’ each charter’d tunnel,'], [2, 'And mark in every face I meet'], [3, 'Marks of weakness, marks of you.']],
  },
  {
    title: 'Composed upon Westminster Bridge', poet: 'William Wordsworth', years: '1770–1850', from: true,
    lines: ['Ne’er saw I, never felt, a calm so deep!', 'The river glideth at his own sweet will:',
      'Dear God! the very houses seem asleep;', 'And all that mighty heart is lying still!'],
    alt: [[2, 'Dear God! the very platforms seem asleep;'], [1, 'The tunnel glideth at his own sweet will:']],
  },
  {
    title: 'Up-Hill', poet: 'Christina Rossetti', years: '1830–1894', from: true, indent: [1, 3],
    lines: ['Does the road wind up-hill all the way?', 'Yes, to the very end.',
      'Will the day’s journey take the whole long day?', 'From morn to night, my friend.'],
    alt: [[1, 'No, not to any end.'], [3, 'From night to night, my friend.']],
  },
  {
    title: 'I’m nobody! Who are you?', poet: 'Emily Dickinson', years: '1830–1886', from: true,
    lines: ['I’m nobody! Who are you?', 'Are you nobody, too?', 'Then there’s a pair of us — don’t tell!', 'They’d banish us, you know.'],
    alt: [[1, 'Are you nobody, still?'], [3, 'They’d keep us here, you know.']],
  },
  {
    title: 'The Chariot', poet: 'Emily Dickinson', years: '1830–1886', from: true, indent: [3],
    lines: ['Because I could not stop for Death,', 'He kindly stopped for me;', 'The carriage held but just ourselves', 'And Immortality.'],
    alt: [[2, 'The carriage held but just myself'], [1, 'He kindly stopped. He stops for me;']],
  },
  {
    title: 'The Self-Unseeing', poet: 'Thomas Hardy', years: '1840–1928', from: true,
    lines: ['Here is the ancient floor,', 'Footworn and hollowed and thin,', 'Here was the former door', 'Where the dead feet walked in.'],
    alt: [[3, 'Where your own feet walked in.'], [0, 'Here is the ancient platform,']],
  },
  {
    title: 'Adlestrop', poet: 'Edward Thomas', years: '1878–1917', from: true,
    lines: ['The steam hissed. Someone cleared his throat.', 'No one left and no one came',
      'On the bare platform. What I saw', 'Was Adlestrop—only the name'],
    alt: [[3, 'Was Mornington Crescent—only the name'], [1, 'No one left and no one leaves']],
  },
  {
    title: 'Strange Meeting', poet: 'Wilfred Owen', years: '1893–1918', from: true,
    lines: ['It seemed that out of battle I escaped', 'Down some profound dull tunnel, long since scooped',
      'Through granites which titanic wars had groined.'],
    alt: [[1, 'Down some profound dull tunnel, long since closed'], [0, 'It seemed that out of nothing I escaped']],
  },
  {
    title: 'Sonnet 60', poet: 'William Shakespeare', years: '1564–1616', from: true,
    lines: ['Like as the waves make towards the pebbled shore,', 'So do our minutes hasten to their end;',
      'Each changing place with that which goes before,', 'In sequent toil all forwards do contend.'],
    alt: [[3, 'In sequent toil all backwards do contend.'], [1, 'So do our minutes hasten to no end;']],
  },
  {
    title: 'From a Railway Carriage', poet: 'Robert Louis Stevenson', years: '1850–1894', from: true,
    lines: ['Faster than fairies, faster than witches,', 'Bridges and houses, hedges and ditches;',
      'And charging along like troops in a battle,', 'All through the meadows the horses and cattle:'],
    alt: [[0, 'Slower than fairies, slower than witches,'], [3, 'All through the tunnels the horses and cattle:']],
  },
  {
    title: 'A Shropshire Lad, XL', poet: 'A. E. Housman', years: '1859–1936', from: true,
    lines: ['Into my heart an air that kills', 'From yon far country blows:',
      'What are those blue remembered hills,', 'What spires, what farms are those?'],
    alt: [[2, 'What are those blue remembered tiles,'], [1, 'From yon far platform blows:']],
  },
];
// (Blake's third line is the one the station merely repeats.)

// Written for the game: what turns up in the frames once the station has
// run out of other people's poems.
export const POEMS_ANON = [
  { title: 'Last Train', lines: ['The last train left an hour ago.', 'It left again at ten to two.',
    'It leaves and leaves and does not go.', 'The one it’s waiting for is you.'] },
  { title: 'Way Out', lines: ['Follow the yellow, follow the black,', 'Up the line and never back.',
    'Count the stations, not the stairs.', 'Something else is counting theirs.'] },
  { title: 'Tiles', lines: ['I learned the colours of the tiles,', 'The navy, ox-blood, brown and blue.',
    'I walked beneath them miles and miles.', 'I think they learned my colours too.'] },
  { title: 'Two Clocks', lines: ['Two clocks hang over two ways out.', 'One hurries on; one’s running back.',
    'The forward clock has things to do.', 'The other only watches you.'] },
  { title: 'The Stairs', lines: ['They closed the station long ago', 'And no one thought to tell the stairs.',
    'They carry nobody below', 'And count the footsteps that aren’t theirs.'] },
];

const PAPERS = ['#f6f1e3', '#e8efe9', '#f3ead8', '#edf0df', '#f2e7e2', '#e6ecf2'];

// How far a poster has drifted: 0 as the poet wrote it, 1 altered, 2 Anon.
export function poemTier(rng, wrong) {
  const anon = Math.min(0.5, Math.max(0, wrong - 1.2) * 0.22), alt = Math.min(0.6, wrong * 0.3);
  return rng.weighted([[0, Math.max(0.1, 1 - alt - anon)], [1, alt], [2, anon]]);
}

// The poem for one frame. env = the segment's environment (station, wrong,
// stretch, idx, gseed). Like the whiteboards, posters step through the list
// as you walk, so neighbouring frames carry different poems.
export function pickPoem(rng, env, opts = {}) {
  const wrong = env.wrong || 0, station = env.station || 'Mornington Crescent';
  const tier = opts.tier ?? poemTier(rng, wrong);
  const step = (env.stretch ? env.stretch.id * 3 : 0) + (env.idx || 0) + (opts.salt || 0);
  const pick = (list, k) => list[(hash32(env.gseed || 1, k) + step) % list.length];
  let poem;
  if (tier === 2) {
    const src = pick(POEMS_ANON, 93);
    poem = { title: src.title, lines: src.lines.slice(), indent: [], poet: 'Anon.', credit: `Anon., ${station}`, from: false, changed: 'anon' };
  } else {
    const src = pick(POEMS, 91);
    poem = { title: src.title, lines: src.lines.slice(), indent: (src.indent || []).slice(), poet: src.poet, credit: `${src.poet} (${src.years})`, from: !!src.from, changed: null };
    if (tier === 1) {
      const [i, text] = rng.pick(src.alt);
      let kind = rng.weighted([['swap', 3], ['repeat', 1.6], ['credit', 1.4]]);
      if (kind === 'swap' && text === src.lines[i]) kind = 'repeat';
      if (kind === 'swap') poem.lines[i] = text;
      else if (kind === 'credit') { poem.poet = 'Anon.'; poem.credit = 'Anon., Mornington Crescent'; }
      else {                       // a line comes round again
        poem.lines.splice(i + 1, 0, poem.lines[i]);
        poem.indent = poem.indent.map((n) => (n > i ? n + 1 : n)).concat(poem.indent.includes(i) ? [i + 1] : []);
      }
      poem.changed = kind;
      // further gone: the words and the name both
      if (wrong >= 3 && kind !== 'credit' && rng.chance(0.4)) { poem.poet = 'Anon.'; poem.credit = 'Anon., Mornington Crescent'; }
    }
  }
  poem.tier = tier;
  poem.paper = pick(PAPERS, 95);
  poem.caption = `${poem.from ? 'from ' : ''}${poem.title}\n${poem.lines.join('\n')}\n— ${poem.credit}`;
  return poem;
}
