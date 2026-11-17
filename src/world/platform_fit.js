// Platform fittings: lighting, name boards and frieze, posters, benches,
// the dot-matrix indicator and clock, a way out sign — and sometimes a
// figure at the far end that is not there when you get closer.
import { PF, wallX } from './platform_shell.js';
import { lamp, hangingSign } from './decor.js';
import { atlasRect, atlasFlat } from '../tex/atlas.js';
import { dynRect } from '../tex/dynamic.js';
import { drawNameBoard, SYMBOL_DEFECTS } from '../tex/symbol.js';
import { drawFrieze, drawWayOut, drawPlate } from '../tex/signs.js';
import { drawPoster, drawNotice } from '../tex/posters.js';
import { wrongName } from '../game/names.js';
import { NOTICES } from '../game/scripts.js';
import { pickNotice } from './dress_passage.js';

// Panel hugging the tube wall. dir = -1 back wall, +1 trackside wall.
function arcPanel(b, layer, side, dir, zc, w, y0, y1, uv, o, lift = 0.04) {
  const xb = side * (wallX(y0, dir) - dir * lift), xt = side * (wallX(y1, dir) - dir * lift);
  const s = (-dir * side * w) / 2;
  b.quad(layer, [xb, y0, zc + s], [xb, y0, zc - s], [xt, y1, zc - s], [xt, y1, zc + s], [-dir * side, 0, 0], uv, o);
  return { x: (xb + xt) / 2, y: (y0 + y1) / 2, z: zc };
}

function bench(b, side, zc, walls) {
  const X = (x) => side * x;
  const x0 = PF.back + 0.14, x1 = PF.back + 0.6, z0 = zc - 0.9, z1 = zc + 0.9;
  const wood = atlasRect('bench'), leg = atlasFlat('steelDark');
  const lo = Math.min(X(x0), X(x1)), hi = Math.max(X(x0), X(x1));
  b.box('atlas', lo, 0.4, z0, hi, 0.46, z1, wood, null, 'xXyYzZ');                       // seat
  const bx = X(x0 + 0.02), bx2 = X(x0 + 0.07);
  b.box('atlas', Math.min(bx, bx2), 0.56, z0, Math.max(bx, bx2), 0.95, z1, wood, null, 'xXYzZ'); // back rest
  for (const z of [z0 + 0.12, zc, z1 - 0.12]) b.box('atlas', lo + 0.05, 0, z - 0.03, hi - 0.05, 0.4, z + 0.03, leg, null, 'xXzZ');
  walls.push([X(x1 + 0.05), z0, X(x1 + 0.05), z1], [X(x0), z0, X(x1 + 0.05), z0], [X(x0), z1, X(x1 + 0.05), z1]);
}

export function fitPlatform(ctx, L, side) {
  const { b, p, sheet, rng, env } = ctx;
  const items = [], walls = [], zones = [];
  const wrong = env.wrong || 0;
  const X = (x) => side * x;
  // --- lighting: a row of battens hung over the platform
  let k = 0;
  for (let z = 3; z < L - 2; z += 4.2, k++) {
    lamp(b, { x: X(0.5), y: 0, z, yaw: 0 }, 3.45, { dead: p.dark && k % 3 !== 1, flick: p.faulty === k, power: 0.62, radius: 9.5, len: 1.5 });
  }
  // --- frieze: a continuous strip with the station name
  const line = env.line || { color: '#b3261e' };
  const fr = sheet.add(400, 26, (c, w, h) => drawFrieze(c, w, h, env.station, line.color, 2));
  for (let z = 1.5; z < L - 1; z += 3) arcPanel(b, 'sheet', side, -1, z, 3, 2.5, 2.68, fr, null, 0.03);
  // --- name boards (a few variants; some of them come out wrong)
  const boards = [];
  for (let i = 0; i < 3; i++) {
    const name = wrongName(env.station, wrong, rng);
    const defect = rng.chance(Math.min(0.6, wrong * 0.16)) ? rng.pick(SYMBOL_DEFECTS) : null;
    boards.push({ name, defect, uv: sheet.add(232, 108, (c, w, h) => drawNameBoard(c, w, h, name, { defect })) });
  }
  const boardText = (bd) => (bd.defect ? `${bd.name} — the symbol is not quite right.` : bd.name);
  let n = 0;
  for (let z = 5; z < L - 3; z += 8.5, n++) {
    const bd = boards[n % 3];
    const pos = arcPanel(b, 'sheet', side, -1, z, 1.5, 1.5, 2.2, bd.uv);
    items.push({ ...pos, r: 6, label: 'read name board', title: 'STATION', text: boardText(bd) });
    // posters between the boards
    const zp = z + 4.25;
    if (zp < L - 3) {
      const odd = rng.chance(Math.min(0.7, wrong * 0.17));
      let info;
      const uv = sheet.add(112, 168, (c, w, h) => { info = drawPoster(c, w, h, rng, odd); });
      const pp = arcPanel(b, 'sheet', side, -1, zp, 1.0, 0.62, 2.12, uv);
      items.push({ ...pp, r: 5, label: 'read poster', title: 'POSTER', text: `${info.headline}. ${info.strap}.` });
    }
  }
  // trackside wall: big posters and name boards across the gap
  n = 1;
  for (let z = 4.5; z < L - 3; z += 6.2, n++) {
    if (n % 2) {
      const bd = boards[n % 3];
      const pos = arcPanel(b, 'sheet', side, 1, z, 2.15, 1.2, 2.2, bd.uv);
      items.push({ ...pos, r: 9, cone: 0.95, label: 'read name board', title: 'STATION', text: boardText(bd) });
    } else {
      const odd = rng.chance(Math.min(0.7, wrong * 0.17));
      let info;
      const uv = sheet.add(200, 150, (c, w, h) => { info = drawPoster(c, w, h, rng, odd); });
      const pp = arcPanel(b, 'sheet', side, 1, z, 2.0, 0.85, 2.35, uv);
      items.push({ ...pp, r: 9, cone: 0.95, label: 'read poster', title: 'POSTER', text: `${info.headline}. ${info.strap}.` });
    }
  }
  // --- a staff notice on the back wall (always on the first platform)
  if (p.start || rng.chance(0.45)) {
    const notice = p.start ? NOTICES[0] : pickNotice(ctx);
    const uv = sheet.add(168, 216, (c, w, h) => drawNotice(c, w, h, notice, rng));
    const pos = arcPanel(b, 'sheet', side, -1, p.start ? 10.6 : L * 0.62 + 2.1, 0.5, 0.95, 1.6, uv, { tint: [1.1, 1.1, 1.1] });
    items.push({ ...pos, r: 4.5, label: 'read notice', title: notice.title, text: notice.text, clue: true, onRead: (g) => g.story.noticeRead(notice.key) });
  }
  // --- benches
  for (const z of [L * 0.3, L * 0.72]) bench(b, side, z, walls);
  // --- hanging indicator, clock and way out sign
  const board = dynRect('board');
  const ind = hangingSign(b, 'dyn', { x: 0, y: 0, z: L * 0.5, yaw: 0 }, 2.5, 1.36, 0.45, board, board, { emit: 1.2 }, X(0.15));
  items.push({ ...ind, r: 9, cone: 0.94, label: 'read indicator', title: 'NEXT TRAIN', dynamic: 'board', text: '' });
  const back = !!(env.stretch && env.stretch.clocksBack);
  const cl = dynRect(back ? 'clockBack' : 'clock');
  const cpos = hangingSign(b, 'dyn', { x: 0, y: 0, z: L * 0.5, yaw: 0 }, 2.48, 0.5, 0.5, cl, cl, { emit: 1.05 }, X(1.2));
  items.push({ ...cpos, r: 9, cone: 0.95, label: 'look at clock', title: 'CLOCK', text: back ? 'The second hand is ticking backwards.' : 'The clock is keeping time.' });
  const wo = sheet.add(250, 56, (c, w, h) => drawWayOut(c, w, h, { dir: 'up' }));
  const plate = sheet.add(250, 56, (c, w, h) => drawPlate(c, w, h, `Platform ${rng.int(1, 6)}`, { sub: `${line.name || 'Meridian'} line` }));
  const wpos = hangingSign(b, 'sheet', { x: 0, y: 0, z: L - 7, yaw: 0 }, 2.42, 1.7, 0.38, wo, plate, { emit: 1.25 }, X(0));
  items.push({ ...wpos, r: 9, cone: 0.94, label: 'read sign', title: 'SIGN', text: 'Way out ↑ (black on yellow)' });
  // help point and a signal lamp in the tunnel mouth
  const hp = arcPanel(b, 'atlas', side, -1, L * 0.5 + 1.2, 0.34, 0.7, 1.38, atlasRect('helpPoint'));
  items.push({ ...hp, r: 3.2, label: 'press help point', title: 'HELP POINT', text: '', onRead: (g, it, node) => g.director.helpPoint(node) });
  b.quad('atlas', [X(PF.track + 1.15), 0.9, L - 0.08], [X(PF.track + 1.3), 0.9, L - 0.08], [X(PF.track + 1.3), 1.05, L - 0.08], [X(PF.track + 1.15), 1.05, L - 0.08],
    [0, 0, -1], atlasFlat('white'), { emit: 1.6, tint: [1, 0.12, 0.08] });
  // --- the figure at the far end
  if (p.figure) {
    const fx = X(0.75), fz = L - 7;
    b.quad('figure', [fx + 0.3, 0, fz], [fx - 0.3, 0, fz], [fx - 0.3, 1.78, fz], [fx + 0.3, 1.78, fz], [0, 0, -1], atlasRect('figure'), { emit: 0.02 });
    zones.push({ x0: -9, x1: 9, z0: L - 7 - 12.5, z1: L, fire: (game, node) => game.director.events.figureGone(node) });
  }
  return { items, walls, zones };
}
