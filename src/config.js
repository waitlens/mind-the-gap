// Shared constants. Units are metres and seconds.

export const CFG = {
  // --- player ---
  eye: 1.62,
  radius: 0.3,
  walk: 2.5,
  run: 4.7,
  // --- standard passage cross-section (every portal between segments uses it) ---
  passW: 3.0,        // floor width
  passSpring: 1.35,  // height where the vault starts
  passCrown: 2.75,   // height of the crown
  // --- story ---
  goal: 5,           // correct junction choices needed to reach the way out
  // --- world streaming ---
  ahead: 3,          // graph distance generated/built ahead of the player
  sight: 46,         // …or this many metres of path, whichever reaches further
  // --- render ---
  fov: 68,
  fogColor: [0.035, 0.04, 0.038],
  fogDensity: 0.038,
  internalH: 400,    // internal render height on desktop (px)
  internalHMobile: 320,
};

// Line colours borrowed from the colour *families* of the real network
// (see REFERENCES.md). The line names are invented.
export const LINES = [
  { id: 'meridian', name: 'Meridian', color: '#d2281e' },
  { id: 'tallow', name: 'Tallow', color: '#1b1b1b' },
  { id: 'garland', name: 'Garland', color: '#0a3a8c' },
  { id: 'wren', name: 'Wren', color: '#1297d1' },
  { id: 'ashdown', name: 'Ashdown', color: '#a8600c' },
  { id: 'verity', name: 'Verity', color: '#0d7a32' },
  { id: 'lantern', name: 'Lantern', color: '#f2c500' },
  { id: 'marlow', name: 'Marlow', color: '#96105a' },
  { id: 'pewter', name: 'Pewter', color: '#8f979c' },
];

// Tile colour schemes after the recorded Leslie Green station palettes
// (single deep green; brown + yellow; caramel + custard; dark blue + turquoise;
// salmon + dark pink; mauve) plus a 1930s "biscuit" scheme.
export const THEMES = [
  { id: 'green', ground: '#e9e2c8', band: '#1f5a3a', accent: '#123a26', skirt: '#17382a', grout: '#b9b095' },
  { id: 'brown', ground: '#ebe3c6', band: '#6a3b1c', accent: '#d9a520', skirt: '#3d2412', grout: '#bdb294' },
  { id: 'custard', ground: '#f1ecd9', band: '#c9892f', accent: '#ecd27a', skirt: '#6d4a1a', grout: '#c4bca2' },
  { id: 'blue', ground: '#e6e3d0', band: '#1c2f5c', accent: '#2a9d9a', skirt: '#162243', grout: '#b4b19e' },
  { id: 'salmon', ground: '#efe4d2', band: '#8c2f45', accent: '#e0907f', skirt: '#4f1b28', grout: '#c0b3a0' },
  { id: 'mauve', ground: '#e8e2d2', band: '#6d5384', accent: '#3e2d52', skirt: '#33263f', grout: '#b8b1a2' },
  { id: 'biscuit', ground: '#e3d6b0', band: '#b3261e', accent: '#14213d', skirt: '#2b2b2b', grout: '#bcae88' },
];

// Colours of the fictional station symbol (a notched ring crossed by a lozenge).
export const SYMBOL = { ring: '#b3261e', bar: '#14213d', text: '#ffffff', panel: '#f4f1e6' };
export const SIGN = { yellow: '#ffd329', black: '#141414', blue: '#14213d', white: '#f6f4ea' };

export const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
