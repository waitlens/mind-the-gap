// South Kentish Town as it was left on 5 June 1924, and a century of dust:
// what is on the platform wall of the station the wrong turns lead through.
// Recorded facts (REFERENCES.md): cream and dark red tiling; "Castle Road",
// the name it was built under, fired into the tiles and painted over; the
// bullseye signs of the time (a solid red disc behind the bar); an air-raid
// shelter with a first-aid post in 1940. The rest — the bricked-up arches
// to the lifts, the closure notice, the posters — is how such a place is
// left. No name frieze, no indicator, no clock; five emergency lamps.
import { PF, wallX } from './platform_shell.js';
import { arcPanel, curvedPanel, bench } from './platform_parts.js';
import { atlasRect, atlasFlat } from '../tex/atlas.js';
import { drawTiledName, drawTileLegend } from '../tex/signs.js';
import { drawNameBoard } from '../tex/symbol.js';
import { drawPeriodPoster, paintOver, drawBrickwork } from '../tex/period.js';
import { drawStencil, drawPaperNotice } from '../tex/shelter.js';
import { GHOST } from '../game/scripts.js';
import { GHOST_STATION } from '../game/line.js';
import { extraRng } from './whiteboard.js';

export function fitGhost(ctx, L, side) {
  const { b, p, sheet, env } = ctx, r = extraRng(ctx), theme = env.theme;
  const items = [], walls = [], zones = [];
  const X = (x) => side * x;
  const toFar = side > 0 ? 'left' : 'right';              // which way the far end is, facing the wall
  // --- sign-sheet pieces, biggest first
  const nameW = 4.0;
  const nameUV = sheet.add(512, 68, (c, w, h) => { drawTiledName(c, w, h, GHOST_STATION.built, theme); paintOver(c, w, h, '#c4bb9c', r, 0.66); });
  const boardUV = sheet.add(150, 183, (c, w, h) => { drawNameBoard(c, w, h, GHOST_STATION.name, { defect: 'solid' }); c.fillStyle = 'rgba(200,190,160,0.38)'; c.fillRect(0, 0, w, h); });
  const specs = r.shuffle(GHOST.posters).slice(0, 4);
  const posters = specs.map((spec) => ({ spec, uv: sheet.add(120, 180, (c, w, h) => drawPeriodPoster(c, w, h, spec, r)) }));
  const noticeUV = sheet.add(132, 168, (c, w, h) => drawPaperNotice(c, w, h, ...GHOST.notice));
  const legendUV = sheet.add(220, 54, (c, w, h) => drawTileLegend(c, w, h, 'WAY OUT', theme, toFar));
  const st1 = sheet.add(164, 33, (c, w, h) => drawStencil(c, w, h, 'SHELTER')), st2 = sheet.add(164, 33, (c, w, h) => drawStencil(c, w, h, 'FIRST AID POST', toFar));
  const dim = { tint: [0.9, 0.88, 0.82] };
  const item = (pos, o) => items.push({ ...pos, n: [side, 0], r: 5, ...o });
  // --- along the platform wall
  item(arcPanel(b, 'sheet', side, -1, 2.4, 0.45, 1.0, 1.57, noticeUV, dim), { r: 4.5, label: 'read notice', title: GHOST.notice[1], text: `${GHOST.notice[0]}. ${GHOST.notice[2].join(' ')} ${GHOST.notice[3]}.`, clue: false });
  const board = (zc) => item(arcPanel(b, 'sheet', side, -1, zc, 1.15, 0.85, 2.25, boardUV, dim), { r: 6, label: 'read name board', title: 'STATION', text: GHOST.board });
  const poster = (zc, k) => item(arcPanel(b, 'sheet', side, -1, zc, 1.0, 0.62, 2.12, posters[k].uv, dim), {
    label: 'read poster', title: 'POSTER, 1924', text: `${posters[k].spec[0]}. ${posters[k].spec[1]}. (Faded almost to nothing.)`,
  });
  // an archway through to the lifts, bricked up: brickwork in a dark tiled surround
  const brick = sheet.add(120, 172, (c, w, h) => drawBrickwork(c, w, h, r)), red = { tint: [0.3, 0.1, 0.1] }, flat = atlasFlat('white');
  const arch = (zc) => {
    const pos = curvedPanel(b, 'sheet', side, -1, zc, 1.5, 0, 2.15, brick, null, 0.035, 3);
    for (const dz of [-0.8, 0.8]) curvedPanel(b, 'atlas', side, -1, zc + dz, 0.1, 0, 2.25, flat, red, 0.045, 3);
    arcPanel(b, 'atlas', side, -1, zc, 1.7, 2.15, 2.27, flat, red, 0.045);
    item(pos, { y: 1.3, r: 4.5, label: 'look at archway', title: 'ARCHWAY', text: GHOST.arch, arch: true });
  };
  board(4.2);
  arch(6.6);
  arcPanel(b, 'sheet', side, -1, 8.7, 0.9, 1.47, 1.65, st1); item(arcPanel(b, 'sheet', side, -1, 8.7, 0.9, 1.26, 1.44, st2), { r: 4.5, label: 'read lettering', title: 'STENCILLED ON THE TILES', text: GHOST.shelter });
  poster(11.0, 0);
  item(arcPanel(b, 'sheet', side, -1, 15.5, nameW, 1.72, 2.25, nameUV, null, 0.025), { r: 7, label: 'read tiles', title: 'TILED NAME', text: GHOST.name });
  bench(b, side, 15.5, walls);
  poster(20.0, 1);
  board(22.6);
  item(arcPanel(b, 'sheet', side, -1, 25.0, 1.5, 1.3, 1.67, legendUV, null, 0.025), { r: 4.5, label: 'read tiles', title: 'TILED LEGEND', text: GHOST.legend.replace('→', side > 0 ? '←' : '→') });
  arch(27.6);
  poster(30.6, 2);
  // one more poster across the track, where the bill-poster could not have reached since
  item(curvedPanel(b, 'sheet', side, 1, L * 0.55, 1.6, 1.25, 3.3, posters[3].uv, dim, 0.05, 4), {
    n: [-side, 0], r: 10, cone: 0.95, label: 'read poster', title: 'POSTER, 1924', text: `${posters[3].spec[0]}. ${posters[3].spec[1]}. (Faded almost to nothing.)`,
  });
  // --- emergency lighting: five dim bulkhead lamps, one of them failing
  const lampUV = atlasRect('lamp');
  [3.2, 9.8, 18.6, 24.0, 32.2].forEach((z, k) => {
    const flick = p.faulty === k - 1;
    arcPanel(b, 'atlas', side, -1, z, 0.3, 2.28, 2.4, lampUV, { emit: 1.4, flick, tint: [1, 0.8, 0.52] }, 0.06);
    b.addLight(X(wallX(2.3, -1) + 0.6), 2.15, z, 0.78, 9, flick, [1, 0.82, 0.58]);
  });
  // --- the dust, and what happens when you walk in
  items.push({ x: X(0.3), y: 0.05, z: L * 0.5, r: 3, cone: 0.8, n: [0, -1], label: 'look at floor', title: 'DUST', text: GHOST.dust });
  zones.push({ x0: -9, x1: 9, z0: 1.2, z1: 8, fire: (game) => {
    game.director.setHint(GHOST.hint, 8);
    game.director.events.glitch(0.9);
    game.state.ghostVisits = (game.state.ghostVisits || 0) + 1;
  } });
  return { items, walls, zones, spawn: null, art: null };
}
