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

// The roundel's colours (measured from photographs, see REFERENCES.md).
export const SYMBOL = { ring: '#dc241f', bar: '#0019a8', text: '#ffffff', panel: '#fbfaf4' };
export const SIGN = { yellow: '#ffd329', black: '#141414', blue: '#14213d', white: '#f6f4ea' };

export const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
