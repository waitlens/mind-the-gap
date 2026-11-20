// The numbers of the Hampstead emergency stairs (see REFERENCES.md) and the
// two functions everything else is built from: where each sector boundary
// is round the shaft, and how high the walking line is there.
//
// The stair is a string of sectors. Sector 0 is the landing at the foot;
// then each half-turn is 17 steps and a landing. Boundary g is the start of
// sector g. A full turn is 36 sectors and rises 34 steps (5.85 m).
export const SP = {
  R0: 1.25, R1: 2.75,          // the treads run from the pillar's cage to the shaft wall (an 18 ft shaft)
  RC: 1.28, RA: 2.5,           // the cage's face; the line the collision cells are laid along
  RISE: 0.172, STEPS: 17, HALVES: 19, LAND: (23.6 * Math.PI) / 180,
  SLAB: 0.35, STUB: 2.0, THROAT: 0.28, DOOR_H: 2.1, CEIL: 3.0,
};
SP.STEP = (Math.PI - SP.LAND) / SP.STEPS;          // angle of one step (9.2°)
SP.PER = SP.STEPS + 1;                             // sectors in a half turn
SP.TURN = 2 * SP.PER;                              // sectors in a full turn
SP.N = 1 + SP.HALVES * SP.PER;                     // sectors in all (343)
SP.H = SP.HALVES * SP.STEPS * SP.RISE;             // 323 steps: 55.56 m
SP.DOOR_W = 2 * SP.R1 * Math.sin(SP.LAND / 2);     // a landing's flat of wall is the doorway (1.12 m)
SP.ZC = SP.STUB + SP.THROAT + SP.R1 * Math.cos(SP.LAND / 2);   // the shaft's centre along the path

// angle of boundary g (0 = facing the way in), and the walking line's height there
export const phi = (g) => (g === 0 ? -SP.LAND / 2 : Math.floor((g - 1) / SP.PER) * Math.PI + SP.LAND / 2 + ((g - 1) % SP.PER) * SP.STEP);
export const lineY = (g) => (g === 0 ? 0 : (Math.floor((g - 1) / SP.PER) * SP.STEPS + ((g - 1) % SP.PER)) * SP.RISE);
export const isLanding = (g) => g === 0 || (g - 1) % SP.PER === SP.STEPS;
// the sector that is landing k: 0 at the foot, 1 … 18 between the flights, 19 at the top
export const landingSector = (k) => (k === 0 ? 0 : k * SP.PER);
