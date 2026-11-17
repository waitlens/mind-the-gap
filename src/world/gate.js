// The collapsible gate that closes behind the player once they have
// committed to a branch. Built hidden; shown (with a clang) by the director.
import { atlasRect, atlasFlat } from '../tex/atlas.js';
import { PASSAGE } from './sweep.js';

export const GATE_Z = 0.5;

// Adds the gate to the hidden 'gate' layer at the start of a passage and
// returns the trigger zone that closes it.
export function addGate(ctx, triggerZ = 3.4, endZ = 40) {
  const { b } = ctx;
  const hw = PASSAGE.W / 2 + 0.1, top = PASSAGE.crown + 0.1;
  const dark = { emit: 0 };
  // darkness behind the lattice (the station you came from is no longer there)
  b.quad('gate', [-hw, 0, 0.06], [hw, 0, 0.06], [hw, top, 0.06], [-hw, top, 0.06], [0, 0, 1], atlasFlat('blackout'), dark);
  // the lattice itself, two leaves; uv repeats the gate cell across each leaf
  const g = atlasRect('gate');
  const metal = { emit: 0.34 };
  for (const [x0, x1] of [[-hw, 0], [0, hw]]) {
    b.quad('gate', [x0, 0, GATE_Z], [x1, 0, GATE_Z], [x1, top, GATE_Z], [x0, top, GATE_Z], [0, 0, 1], g, metal);
  }
  // centre post and a padlocked hasp
  b.box('gate', -0.035, 0, GATE_Z - 0.02, 0.035, top, GATE_Z + 0.03, atlasFlat('steelDark'), { emit: 0.3 }, 'xXZ');
  b.box('gate', -0.09, 1.02, GATE_Z + 0.03, 0.09, 1.16, GATE_Z + 0.07, atlasFlat('metal'), { emit: 0.5 }, 'xXyYZ');
  return {
    x0: -hw, x1: hw, z0: triggerZ, z1: endZ, gate: true,
    fire: (game, node) => game.director.commit(node),
  };
}

// Collision wall across the passage once the gate is shut.
export const GATE_WALL = [-(PASSAGE.W / 2 + 0.2), GATE_Z + 0.25, PASSAGE.W / 2 + 0.2, GATE_Z + 0.25];
