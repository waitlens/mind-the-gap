// Dressing for passages: posters, notices and direction signs.
// (Filled in by dress_passage.js once the sign sheet exists.)
import { dressPassageFull } from './dress_passage.js';

export function dressPassage(ctx, frames, dist) {
  if (!ctx.sheet) return [];
  return dressPassageFull(ctx, frames, dist);
}
