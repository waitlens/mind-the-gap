// Test helper: draw one of the procedural sign textures on its own canvas
// and return it as a data URL (window.__game.debug.preview).
import { makeCanvas } from '../tex/canvas.js';
import { drawLineDiagram } from '../tex/linemap.js';
import { drawNameBoard } from '../tex/symbol.js';
import { route, corrupt } from './route.js';
import { RNG } from '../util/rng.js';
import { drawStrip, drawPlatformSign } from '../tex/linestrip.js';
import { GHOSTS } from './line.js';
import { drawThoughtBoard } from '../tex/whiteboard.js';
import { pickThought, junctionThought } from './thoughts.js';
import { drawFrontPage } from '../tex/paper.js';
import { drawCustomerInfo } from '../tex/infoboard.js';
import { CUSTOMER_INFO } from './scripts.js';
import { pickPaper } from './paper.js';

const envOf = (o) => ({ wrong: o.wrong || 0, station: o.station || 'Camden Town', gseed: o.seed || 1, idx: o.idx || 0 });

export const PREVIEWS = {
  diagram(ctx, w, h, o) {
    const sections = route(o.station || 'Camden Town', o.dir || 'south');
    if (o.corrupt) corrupt(sections, o.corrupt, new RNG(o.seed || 1));
    drawLineDiagram(ctx, w, h, sections, { station: o.station, dir: o.dir || 'south' });
  },
  roundel(ctx, w, h, o) { drawNameBoard(ctx, w, h, o.name || 'Camden Town', o); },
  strip(ctx, w, h, o) { drawStrip(ctx, w, h, { current: o.station || 'Mornington Crescent', ghosts: o.ghosts ? GHOSTS : [] }); },
  psign(ctx, w, h, o) { drawPlatformSign(ctx, w, h, o); },
  // o: { seed, wrong, station, idx, cheery, junction: { kind, correct } }
  whiteboard(ctx, w, h, o) {
    const r = new RNG(o.seed || 1);
    drawThoughtBoard(ctx, w, h, o.junction ? junctionThought(r, envOf(o), o.junction) : pickThought(r, envOf(o), o), r);
  },
  info(ctx, w, h, o) { drawCustomerInfo(ctx, w, h, CUSTOMER_INFO, o.station || 'Mornington Crescent', new RNG(o.seed || 1)); },
  // o: { seed, wrong, idx, tier }
  paper(ctx, w, h, o) {
    const r = new RNG(o.seed || 1);
    drawFrontPage(ctx, w, h, pickPaper(r, envOf(o), o), r);
  },
};

export function preview(kind, w, h, opts = {}) {
  const c = makeCanvas(w, h);
  PREVIEWS[kind](c.getContext('2d'), w, h, opts);
  return c.toDataURL('image/png');
}
