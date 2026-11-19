// The junction: a small tiled concourse where the passage splits left and
// right. One way is right. The signs, the clocks or the announcement say
// which — if you know how to read them.
import { PASSAGE } from './sweep.js';
import { buildRoom } from './room.js';
import { lamp, portalLamp } from './decor.js';
import { atlasRect } from '../tex/atlas.js';
import { dynRect } from '../tex/dynamic.js';
import { drawWayOut, wayOutCaption, WAYOUT_DEFECTS } from '../tex/signs.js';
import { drawPlatformSign } from '../tex/linestrip.js';
import { drawNameBoard } from '../tex/symbol.js';
import { wrongName, isGhost } from '../game/names.js';
import { dirWord, platformNo } from '../game/line.js';
import { served } from '../game/route.js';
import { junctionThought } from '../game/thoughts.js';
import { easelBoard, extraRng } from './whiteboard.js';

const HX = 3.5, D = 5, H = 2.95;

// Flat panel on the far (north) wall, facing the arriving walker.
function northPanel(b, layer, cx, y0, w, h, uv, o) {
  const z = D - 0.03;
  b.quad(layer, [cx + w / 2, y0, z], [cx - w / 2, y0, z], [cx - w / 2, y0 + h, z], [cx + w / 2, y0 + h, z], [0, 0, -1], uv, o);
  return { x: cx, y: y0 + h / 2, z };
}

export const junction = {
  type: 'junction',
  sheetSize: 512,
  // env.jkind: 'signs' | 'announce' | 'clock'; env.jlevel: 0..2 (subtlety)
  plan(rng, env) {
    const kind = env.jkind || 'signs';
    const level = env.jlevel ?? 0;
    const pool = Object.keys(WAYOUT_DEFECTS).filter((k) => WAYOUT_DEFECTS[k].level <= level && WAYOUT_DEFECTS[k].level >= level - 1);
    const north0 = rng.chance(0.5);      // which branch is signed for the northbound platform
    return {
      p: {
        kind, level, correct: rng.int(0, 1), defect: rng.pick(pool),
        lie: kind === 'announce' ? rng.chance(0.3 + 0.12 * level) : false,
        dirs: north0 ? ['north', 'south'] : ['south', 'north'],   // [left branch (exit 0), right branch (exit 1)]
        inverted: rng.chance(0.4),
      },
      exits: [{ x: HX, y: 0, z: D / 2, yaw: Math.PI / 2 }, { x: -HX, y: 0, z: D / 2, yaw: -Math.PI / 2 }],
      box: [-HX - 0.4, -0.4, 0, HX + 0.4, 3.4, D + 0.4],
    };
  },

  build(ctx) {
    const { b, p, sheet, rng, env } = ctx;
    const room = buildRoom(b, {
      x0: -HX, x1: HX, z0: 0, z1: D, H,
      portals: [{ wall: 'S', at: 0 }, { wall: 'E', at: D / 2 }, { wall: 'W', at: D / 2 }],
    });
    b.addPortal(0, 0, 0, 0); b.addPortal(HX, 0, D / 2, Math.PI / 2); b.addPortal(-HX, 0, D / 2, -Math.PI / 2);
    portalLamp(b, { x: 0, y: 0, z: 0, yaw: 0 }, PASSAGE.crown);
    for (const x of [-1.7, 1.7]) lamp(b, { x, y: 0, z: 2.2, yaw: Math.PI / 2 }, H - 0.02, { power: 0.6, radius: 6.5 });

    const items = [];
    const lit = { emit: 1.25 };
    // exit 0 is at +X = the walker's LEFT
    const sides = [{ cx: 1.72, dir: 'left', exit: 0, to: p.dirs[0] }, { cx: -1.72, dir: 'right', exit: 1, to: p.dirs[1] }];
    for (const s of sides) {
      const right = p.correct === s.exit;
      if (p.kind === 'signs') {
        // both signs share one colourway: black on yellow, or yellow on black
        // (both are genuine on the network) — the false one has one defect
        const defect = right ? null : p.defect, inverted = !!p.inverted;
        const uv = sheet.add(250, 56, (c, w, h) => drawWayOut(c, w, h, { dir: s.dir, defect, inverted }));
        const pos = northPanel(b, 'sheet', s.cx, 1.52, 1.9, 0.425, uv, lit);
        items.push({ ...pos, r: 7, cone: 0.93, label: 'read sign', title: 'SIGN', text: wayOutCaption(defect, s.dir, inverted), junctionSign: true });
      } else {
        // platform direction sign: line, direction, platform number and the
        // principal stations served (from the line data)
        const list = served(env.station, s.to);
        const uv = sheet.add(280, 84, (c, w, h) => drawPlatformSign(c, w, h, { dir: s.to, arrow: s.dir, list: list.join('  ·  ') }));
        const pos = northPanel(b, 'sheet', s.cx, 1.44, 1.9, 0.57, uv, lit);
        const label = `Northern line · ${dirWord(s.to)} platform ${platformNo(s.to)} · ${list.join(', ')}`;
        items.push({ ...pos, r: 7, cone: 0.93, label: 'read sign', title: 'SIGN', text: s.dir === 'left' ? `← ${label}` : `${label} →` });
      }
      if (p.kind === 'clock') {
        const back = !right;
        const pos = northPanel(b, 'dyn', s.cx, 2.08, 0.62, 0.62, dynRect(back ? 'clockBack' : 'clock'), { emit: 1.05 });
        items.push({
          ...pos, r: 7, cone: 0.95, label: 'look at clock', title: 'CLOCK',
          text: back ? 'The second hand is ticking backwards.' : 'The clock is keeping time.',
        });
      }
    }
    // centre of the wall: indicator board, station name, help point
    const board = northPanel(b, 'dyn', 0, 2.12, 1.26, 0.42, dynRect('board2'), { emit: 1.15 });
    items.push({ ...board, r: 7, cone: 0.95, label: 'read indicator', title: 'INDICATOR', dynamic: 'board2', text: '' });
    const shown = wrongName(env.station, env.wrong, rng);
    const nb = sheet.add(200, 92, (c, w, h) => drawNameBoard(c, w, h, shown));
    const npos = northPanel(b, 'sheet', 0, 1.42, 1.24, 0.57, nb, null);
    items.push({ ...npos, r: 6, cone: 0.95, label: 'read name', title: 'STATION', text: isGhost(shown) ? `${shown}. There is no such station on this line.` : shown });
    const hp = northPanel(b, 'cut', 0, 0.62, 0.34, 0.68, atlasRect('helpPoint'), null);
    items.push({ ...hp, r: 3.2, label: 'press help point', title: 'HELP POINT', text: '', help: true, onRead: (game, it, node) => game.director.helpPoint(node) });

    // Sometimes the duty staff have left a whiteboard in the corner saying
    // which way to go — and sometimes it was not the staff who wrote it
    // (look at who signed it).
    const r2 = extraRng(ctx), walls = room.walls;
    if (r2.chance(env.boardChance ?? 0.2)) {
      const cs = r2.sign();
      const e = easelBoard(ctx, cs * 2.95, 4.3, cs * 0.63, junctionThought(r2, env, p));
      items.push(e.item);
      walls.push(...e.walls);
    }
    const zones = [{ x0: -HX, x1: HX, z0: 0.8, z1: D, fire: (game, node) => game.director.enterJunction(node) }];
    return { cells: room.cells, walls, items, extra: { zones } };
  },
};
