// All segment types by name.
import { corridor, bend } from './seg_corridor.js';
import { junction } from './seg_junction.js';
import { platform, trainstop, ghost } from './seg_platform.js';
import { stairs } from './seg_stairs.js';
import { escalator } from './seg_escalator.js';
import { deadend } from './seg_exit.js';
import { exit } from './seg_hall.js';
import { cross } from './seg_cross.js';
import { shelter } from './seg_shelter.js';
import { spiral } from './seg_spiral.js';
import { lift } from './seg_lift.js';

export const SEGMENTS = {
  corridor,
  bend,
  junction,
  platform,
  trainstop,
  ghost,
  stairs,
  escalator,
  exit,
  deadend,
  cross,
  shelter,
  spiral,
  lift,
};

export function registerSegment(def) {
  SEGMENTS[def.type] = def;
}
