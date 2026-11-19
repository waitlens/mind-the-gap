// Platform fittings on the platform side, laid out after the photographs in
// REFERENCES.md: battens over the platform, the white frieze with the name
// and Way out plates, the name fired into the tiles with a bench under it,
// roundel panels, framed posters, the strip map of the whole line, the
// hanging indicator, clock and Way out sign — and sometimes a figure at the
// far end that is not there when you get closer.
import { PF } from './platform_shell.js';
import { lamp, hangingSign } from './decor.js';
import { arcPanel, bench } from './platform_parts.js';
import { fitTrackside } from './platform_track.js';
import { atlasRect, atlasFlat } from '../tex/atlas.js';
import { dynRect } from '../tex/dynamic.js';
import { drawNameBoard, SYMBOL_DEFECTS } from '../tex/symbol.js';
import { drawFrieze, drawWayOut, drawPlate, drawTiledName } from '../tex/signs.js';
import { drawPoster, drawNotice } from '../tex/posters.js';
import { drawStrip } from '../tex/linestrip.js';
import { wrongName, isGhost } from '../game/names.js';
import { NOTICES } from '../game/scripts.js';
import { GHOSTS, tiledName, dirWord, platformNo } from '../game/line.js';
import { stripText } from '../game/route.js';
import { pickNotice } from './dress_passage.js';
import { pickThought } from '../game/thoughts.js';
import { easelBoard, paintBoard, extraRng } from './whiteboard.js';

export function fitPlatform(ctx, L, side) {
  const { b, p, sheet, rng, env } = ctx;
  const items = [], walls = [], zones = [];
  const wrong = env.wrong || 0, station = env.station, dir = p.dir;
  const X = (x) => side * x;
  // --- lighting: battens over the platform, evenly spaced end to end
  // (a tube every 1.5 m, as in the photographs; every third one carries
  // the baked light, so the lighting cost is unchanged)
  const nLamps = Math.round((L - 6) / 4.5) * 3 + 1;
  for (let k = 0; k < nLamps; k++) {
    const z = 3 + ((L - 6) * k) / (nLamps - 1), lit = k % 3 === 0, grp = Math.floor(k / 3);
    lamp(b, { x: X(0.5), y: 0, z, yaw: 0 }, 3.45, { dead: p.dark && grp % 3 !== 1, flick: p.faulty === grp, noLight: !lit, power: 0.62, radius: 9.5, len: 1.25 });
  }
  // --- the biggest textures are packed first: the strip of the whole line,
  //     the tiled name, then the track-side wall's diagram and adverts
  const fired = tiledName(station);
  const nameW = Math.min(5.0, 1.0 + 0.2 * (fired.length + 2 * fired.split(' ').length));
  const ghosts = wrong >= 1.5 && rng.chance(Math.min(0.8, wrong * 0.2)) ? rng.shuffle(GHOSTS).slice(0, rng.int(1, 2)) : [];
  const stripUV = sheet.add(800, 168, (c, w, h) => drawStrip(c, w, h, { current: station, ghosts }));
  const nameUV = sheet.add(512, Math.round(512 * 0.53 / nameW), (c, w, h) => drawTiledName(c, w, h, fired, env.theme));
  // (the whiteboard's face and room for a staff notice go on the sheet
  // straight after the diagram and the poem — biggest pieces first, or the
  // 1024 x 1024 sheet does not pack)
  let easel = null, noticeSlot = null;
  fitTrackside(ctx, L, side, items, () => {
    const r2 = extraRng(ctx);
    // always on the first platform, where it is still an ordinary cheerful one
    if (p.start || r2.chance(env.boardChance ?? 0.6)) {
      const th = pickThought(r2, env, { cheery: p.start });
      easel = { th, face: paintBoard(ctx, th) };
    }
    noticeSlot = sheet.reserve(168, 216);
  });
  const paintNotice = (notice) => {
    const draw = (c, cw, ch) => drawNotice(c, cw, ch, notice, rng);
    const slot = noticeSlot;
    noticeSlot = null;
    return slot ? sheet.paint(slot, draw) : sheet.add(168, 216, draw);
  };
  // --- frieze: white strip above the tiles, name in blue, Way out plates
  const toExit = side > 0 ? 'left' : 'right';         // the way out is at the far end
  const fr = [sheet.add(384, 36, (c, w, h) => drawFrieze(c, w, h, station, { arrow: toExit })),
    sheet.add(384, 36, (c, w, h) => drawFrieze(c, w, h, station, { note: station === 'Camden Town' ? 'Edgware branch' : '' }))];
  let k = 0;
  for (let z = 1.5; z < L - 1; z += 3, k++) arcPanel(b, 'sheet', side, -1, z, 3, 2.47, 2.75, fr[k % 2], null, 0.03);
  // --- roundel panels: mostly right, sometimes not
  const boards = [0, 1].map(() => {
    const name = wrongName(station, wrong, rng);
    const defect = rng.chance(Math.min(0.6, wrong * 0.16)) ? rng.pick(SYMBOL_DEFECTS) : null;
    const text = isGhost(name) ? `${name}. There is no such station on this line.` : defect ? `${name} — the roundel is not quite right.` : name;
    return { text, uv: sheet.add(150, 183, (c, w, h) => drawNameBoard(c, w, h, name, { defect })) };
  });
  // --- the name in the tiles, the strip map, posters: one pass along the wall
  // three posters, repeated along the wall
  const posters = [0, 1, 2].map(() => {
    const odd = rng.chance(Math.min(0.7, wrong * 0.17));
    let info;
    const uv = sheet.add(112, 168, (c, cw, ch) => { info = drawPoster(c, cw, ch, rng, odd, true); });
    return { uv, text: `${info.headline}. ${info.strap}.` };
  });
  let np = 0;
  const order = ['roundel', p.start ? 'notice' : 'poster', 'name', 'poster', 'roundel', 'strip', 'poster', 'roundel', 'name', 'poster', 'help'];
  const widths = { roundel: 1.15, poster: 1.0, name: nameW, strip: 4.4, notice: 0.5, help: 0.34 };
  let z = 3.0, n = 0, nb = 0;
  while (n < 40) {
    const kind = order[n % order.length], w = widths[kind];
    if (z + w > L - 2.6) break;
    const zc = z + w / 2;
    if (kind === 'roundel') {
      const bd = boards[nb++ % 2];
      const pos = arcPanel(b, 'sheet', side, -1, zc, w, 0.85, 2.25, bd.uv);
      items.push({ ...pos, r: 6, label: 'read name board', title: 'STATION', text: bd.text });
    } else if (kind === 'poster') {
      const ps = posters[np++ % 3];
      const pos = arcPanel(b, 'sheet', side, -1, zc, w, 0.62, 2.12, ps.uv);
      items.push({ ...pos, r: 5, label: 'read poster', title: 'POSTER', text: ps.text });
    } else if (kind === 'name') {
      const pos = arcPanel(b, 'sheet', side, -1, zc, w, 1.72, 2.25, nameUV, null, 0.025);
      items.push({ ...pos, r: 7, label: 'read tiles', title: 'TILED NAME', text: `· ${fired.toUpperCase().split(' ').join(' · ')} ·${fired !== station ? ` (the frieze says ${station})` : ''}` });
      bench(b, side, zc, walls);
    } else if (kind === 'strip') {
      const pos = arcPanel(b, 'sheet', side, -1, zc, w, 1.0, 1.92, stripUV);
      items.push({ ...pos, r: 6, cone: 0.92, label: 'read line map', title: 'NORTHERN LINE', text: stripText(station, ghosts) });
    } else if (kind === 'notice') {
      // the first thing to read in the game: where you are and where the way out is
      const notice = NOTICES.find((q) => q.key === 'line') || NOTICES[0];
      const uv = paintNotice(notice);
      const pos = arcPanel(b, 'sheet', side, -1, zc, w, 0.95, 1.6, uv, { tint: [1.1, 1.1, 1.1] });
      items.push({ ...pos, r: 4.5, label: 'read notice', title: notice.title, text: notice.text, clue: true, onRead: (g) => g.story.noticeRead(notice.key) });
    } else {
      const hp = arcPanel(b, 'cut', side, -1, zc, w, 0.7, 1.38, atlasRect('helpPoint'));
      items.push({ ...hp, r: 3.2, label: 'press help point', title: 'HELP POINT', text: '', onRead: (g, it, node) => g.director.helpPoint(node) });
    }
    z += w + 0.7; n++;
  }
  if (!p.start && rng.chance(0.45)) {                  // a staff notice by the way in
    const notice = pickNotice(ctx);
    const uv = paintNotice(notice);
    const pos = arcPanel(b, 'sheet', side, -1, 1.9, 0.5, 0.95, 1.6, uv, { tint: [1.1, 1.1, 1.1] });
    items.push({ ...pos, r: 4.5, label: 'read notice', title: notice.title, text: notice.text, clue: true, onRead: (g) => g.story.noticeRead(notice.key) });
  }
  // --- the staff whiteboard on its easel, out of the way at the far end by
  //     the back wall
  if (easel) {
    const e = easelBoard(ctx, X(PF.back + 0.62), L - 1.9, -side * 0.5, easel.th, 0, easel.face);
    items.push(e.item);
    for (const w of e.walls) walls.push(w);
  }
  // --- hanging indicator, clock and way out sign
  const board = dynRect('board');
  const ind = hangingSign(b, 'dyn', { x: 0, y: 0, z: L * 0.5, yaw: 0 }, 2.5, 1.36, 0.45, board, board, { emit: 1.2 }, X(0.15));
  items.push({ ...ind, r: 9, cone: 0.94, label: 'read indicator', title: 'NEXT TRAIN', dynamic: 'board', text: '' });
  const back = !!(env.stretch && env.stretch.clocksBack);
  const cl = dynRect(back ? 'clockBack' : 'clock');
  const cpos = hangingSign(b, 'dyn', { x: 0, y: 0, z: L * 0.5, yaw: 0 }, 2.48, 0.5, 0.5, cl, cl, { emit: 1.05 }, X(1.2));
  items.push({ ...cpos, r: 9, cone: 0.95, label: 'look at clock', title: 'CLOCK', text: back ? 'The second hand is ticking backwards.' : 'The clock is keeping time.' });
  const wo = sheet.add(250, 56, (c, w, h) => drawWayOut(c, w, h, { dir: 'up' }));
  const plate = sheet.add(250, 56, (c, w, h) => drawPlate(c, w, h, `${dirWord(dir)} platform ${platformNo(dir)}`, { sub: 'Northern line', bg: '#f6f6f1', fg: '#16213f' }));
  const wpos = hangingSign(b, 'sheet', { x: 0, y: 0, z: L - 7, yaw: 0 }, 2.42, 1.7, 0.38, wo, plate, { emit: 1.25 }, X(0));
  items.push({ ...wpos, r: 9, cone: 0.94, label: 'read sign', title: 'SIGN', text: 'Way out ↑ (black on yellow)' });
  // a signal lamp in the tunnel mouth
  b.quad('atlas', [X(PF.track + 0.98), 0.9, L + 0.4], [X(PF.track + 1.13), 0.9, L + 0.4], [X(PF.track + 1.13), 1.05, L + 0.4], [X(PF.track + 0.98), 1.05, L + 0.4],
    [0, 0, -1], atlasFlat('white'), { emit: 1.6, tint: [1, 0.12, 0.08] });
  // --- the figure at the far end
  if (p.figure) {
    const fx = X(0.75), fz = L - 7;
    b.quad('figure', [fx + 0.3, 0, fz], [fx - 0.3, 0, fz], [fx - 0.3, 1.78, fz], [fx + 0.3, 1.78, fz], [0, 0, -1], atlasRect('figure'), { emit: 0.02 });
    zones.push({ x0: -9, x1: 9, z0: L - 7 - 12.5, z1: L, fire: (game, node) => game.director.events.figureGone(node) });
  }
  return { items, walls, zones };
}
