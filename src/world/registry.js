// All segment types by name.
import { corridor, bend } from './seg_corridor.js';
import { junction } from './seg_junction.js';
import { platform, trainstop } from './seg_platform.js';
import { stairs } from './seg_stairs.js';
import { escalator } from './seg_escalator.js';
import { exit, deadend } from './seg_exit.js';
import { cross } from './seg_cross.js';
import { shelter } from './seg_shelter.js';

export const SEGMENTS = {
  corridor,
  bend,
  junction,
  platform,
  trainstop,
  stairs,
  escalator,
  exit,
  deadend,
  cross,
  shelter,
};

export function registerSegment(def) {
  SEGMENTS[def.type] = def;
}
