// Test helper: draw one of the procedural sign textures on its own canvas
// and return it as a data URL (window.__game.debug.preview).
import { makeCanvas } from '../tex/canvas.js';
import { drawLineDiagram } from '../tex/linemap.js';
import { drawNameBoard } from '../tex/symbol.js';
import { route, corrupt } from './route.js';
import { RNG } from '../util/rng.js';
import { drawStrip, drawPlatformSign } from '../tex/linestrip.js';
import { GHOSTS } from './line.js';

export const PREVIEWS = {
  diagram(ctx, w, h, o) {
    const sections = route(o.station || 'Camden Town', o.dir || 'south');
    if (o.corrupt) corrupt(sections, o.corrupt, new RNG(o.seed || 1));
    drawLineDiagram(ctx, w, h, sections, { station: o.station, dir: o.dir || 'south' });
  },
  roundel(ctx, w, h, o) { drawNameBoard(ctx, w, h, o.name || 'Camden Town', o); },
  strip(ctx, w, h, o) { drawStrip(ctx, w, h, { current: o.station || 'Mornington Crescent', ghosts: o.ghosts ? GHOSTS : [] }); },
  psign(ctx, w, h, o) { drawPlatformSign(ctx, w, h, o); },
};

export function preview(kind, w, h, opts = {}) {
  const c = makeCanvas(w, h);
  PREVIEWS[kind](c.getContext('2d'), w, h, opts);
  return c.toDataURL('image/png');
}
