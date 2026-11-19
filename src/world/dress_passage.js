// Posters, staff notices, whiteboards and small fittings along a passage.
import { wallPanel, panelFrame } from './decor.js';
import { atlasRect, atlasFlat } from '../tex/atlas.js';
import { drawPoster, drawNotice } from '../tex/posters.js';
import { drawTileLegend } from '../tex/signs.js';
import { NOTICES } from '../game/scripts.js';
import { pickThought } from '../game/thoughts.js';
import { wallBoard, extraRng, BOARD_PX } from './whiteboard.js';
import { PASSAGE, framePoint } from './sweep.js';
import { drawLineDiagram } from '../tex/linemap.js';
import { route, routeText, corrupt } from '../game/route.js';

const HW = PASSAGE.W / 2;

// Pick a notice the player has not read yet if possible.
export function pickNotice(ctx) {
  const seen = (ctx.env.seenNotices) || new Set();
  const fresh = NOTICES.filter((n) => !seen.has(n.key));
  return ctx.rng.pick(fresh.length ? fresh : NOTICES);
}

// A passage shows the same few adverts over and over, as the real ones do —
// which also keeps each segment's sign sheet within its 512 x 512 pixels.
const POSTERS_PER_PASSAGE = 3;
// The size in pixels of each piece on the passage's 512 x 512 sign sheet.
// Before anything is drawn the packer is asked what will fit (Sheet.room):
// a passage that carries a whiteboard shows fewer different adverts to make
// room.
const PX = { diagram: [200, 300], notice: [168, 216], board: BOARD_PX, legend: [220, 54], poster: [104, 164] };

export function addPoster(ctx, f, side, items, s = HW) {
  const { b, sheet, rng } = ctx;
  const pool = ctx.posterPool || (ctx.posterPool = []);
  let p;
  if (pool.length < (ctx.posterCap || POSTERS_PER_PASSAGE)) {
    const odd = rng.chance(Math.min(0.7, (ctx.env.wrong || 0) * 0.17));
    let info;
    const uv = sheet.add(PX.poster[0], PX.poster[1], (c, w, h) => { info = drawPoster(c, w, h, rng, odd); });
    p = { uv, text: `${info.headline}. ${info.strap}.` };
    pool.push(p);
  } else p = pool[rng.int(0, pool.length - 1)];
  const pos = wallPanel(b, 'sheet', f, side, s, 0.52, 0.64, 1.0, p.uv, null, 0.045);
  panelFrame(b, f, side, s - 0.01, 0.52, 0.64, 1.0);
  items.push({ ...pos, r: 4.2, label: 'read poster', title: 'POSTER', text: p.text });
}

export function addNotice(ctx, f, side, items, s = HW) {
  const { b, sheet, rng } = ctx;
  const notice = pickNotice(ctx);
  const uv = sheet.add(168, 216, (c, w, h) => drawNotice(c, w, h, notice, rng));
  const pos = wallPanel(b, 'sheet', f, side, s, 0.86, 0.44, 0.565, uv, { tint: [1.08, 1.08, 1.08] }, 0.045);
  items.push({
    ...pos, r: 4.2, label: 'read notice', title: notice.title, text: notice.text, clue: true, key: notice.key,
    onRead: (game) => game.story.noticeRead(notice.key),
  });
}

// The staff whiteboard: "Thought for the day" (see whiteboard.js).
export function addWhiteboard(ctx, f, side, items, s = HW) {
  items.push(wallBoard(ctx, f, side, s, pickThought(extraRng(ctx), ctx.env)));
}

// The passage wall curves inward above the springing line, so a full-height
// door flush with the wall would poke through the vault. Set the door in a
// shallow tiled-steel casing that stands out from the wall instead.
const DOOR_W = 0.95, DOOR_H = 2.0, DOOR_IN = 0.25;
function addDoor(ctx, f, side) {
  const { b } = ctx;
  wallPanel(b, 'atlas', f, side, HW - DOOR_IN + 0.03, 0, DOOR_W, DOOR_H, atlasRect('door'), null, 0.03);
  const uv = atlasFlat('steelDark');
  const [px, , pz] = framePoint(f, 0, 0);
  b.place(px, f.y, pz, f.yaw);
  const xw = side * HW, xi = side * (HW - DOOR_IN), t = 0.06;
  const zl = -DOOR_W / 2 - t, zr = DOOR_W / 2 + t, top = DOOR_H + t;
  // casing front (jambs + head) and its returns back to the wall
  b.quad('atlas', [xi, 0, zl], [xi, 0, zl + t], [xi, top, zl + t], [xi, top, zl], [-side, 0, 0], uv);
  b.quad('atlas', [xi, 0, zr - t], [xi, 0, zr], [xi, top, zr], [xi, top, zr - t], [-side, 0, 0], uv);
  b.quad('atlas', [xi, DOOR_H, zl], [xi, DOOR_H, zr], [xi, top, zr], [xi, top, zl], [-side, 0, 0], uv);
  b.quad('atlas', [xw, 0, zl], [xi, 0, zl], [xi, top, zl], [xw, top, zl], [0, 0, -1], uv);
  b.quad('atlas', [xi, 0, zr], [xw, 0, zr], [xw, top, zr], [xi, top, zr], [0, 0, 1], uv);
  b.quad('atlas', [xw, top, zl], [xi, top, zl], [xi, top, zr], [xw, top, zr], [0, 1, 0], uv);
  b.setXf(null);
}

function addSmall(ctx, f, side, cell, y, w, h) {
  // (the fire point is a cut-out shape: it goes on the alpha-tested layer)
  wallPanel(ctx.b, cell === 'extinguisher' ? 'cut' : 'atlas', f, side, HW, y, w, h, atlasRect(cell), null, 0.04);
}

// Tiled "WAY OUT"-style legend panel (decorative; says where the trains are).
function addLegend(ctx, f, side, items) {
  const { b, sheet, rng } = ctx;
  const text = rng.pick(['TO THE TRAINS', 'NO EXIT', 'TO THE TRAINS', 'PASSENGERS ONLY']);
  const uv = sheet.add(220, 54, (c, w, h) => drawTileLegend(c, w, h, text, ctx.theme, null));
  const pos = wallPanel(b, 'sheet', f, side, HW, 0.62, 1.5, 0.37, uv, null, 0.025);
  items.push({ ...pos, r: 4, label: 'read tiles', title: 'TILED LEGEND', text });
}

// The line diagram for one of this station's platforms, as posted in the
// passages that lead to it ("Northbound platform 1" and what it serves).
// A wall panel that runs up the straight wall and bends over onto the vault
// (horseshoe profile), so tall boards stay flush. h is the developed height.
function vaultPanel(b, layer, f, side, y0, w, h, uv, lift = 0.04) {
  const A = PASSAGE.W / 2, sp = PASSAGE.spring, B = PASSAGE.crown - sp;
  const wallAt = (y) => {
    if (y <= sp) return { X: A, nx: 1, ny: 0 };
    const t = Math.min(1, (y - sp) / B), X = A * Math.sqrt(1 - t * t);
    const gx = X / (A * A), gy = (y - sp) / (B * B), l = Math.hypot(gx, gy) || 1;
    return { X, nx: gx / l, ny: gy / l };
  };
  // walk up the wall in small steps, keeping rows at equal developed spacing
  const rows = [];
  const N = 10, step = h / N;
  let y = y0, acc = 0;
  rows.push({ y, ...wallAt(y) });
  for (let i = 1; i <= N; i++) {
    const target = step * i;
    while (acc < target) {
      const dy = 0.005, a = wallAt(y), c = wallAt(y + dy);
      acc += Math.hypot(c.X - a.X, dy); y += dy;
    }
    rows.push({ y, ...wallAt(y) });
  }
  const [px, , pz] = framePoint(f, 0, 0);
  b.place(px, f.y, pz, f.yaw);
  const zA = side > 0 ? -w / 2 : w / 2, zC = -zA;
  const P = (r, z) => [side * (r.X - lift * r.nx), r.y - lift * r.ny, z];
  for (let i = 0; i < N; i++) {
    const r0 = rows[i], r1 = rows[i + 1];
    const v0 = uv[1] + (uv[3] - uv[1]) * (i / N), v1 = uv[1] + (uv[3] - uv[1]) * ((i + 1) / N);
    const n = [-side * (r0.nx + r1.nx) / 2, -(r0.ny + r1.ny) / 2, 0];
    b.quad(layer, P(r0, zA), P(r0, zC), P(r1, zC), P(r1, zA), n, [uv[0], v0, uv[2], v1]);
  }
  b.setXf(null);
  const mid = rows[N >> 1];
  const centre = framePoint(f, side * (mid.X - lift), mid.y);
  return { x: centre[0], y: centre[1], z: centre[2] };
}

export function addDiagram(ctx, f, side, items, s = HW) {
  const { b, sheet, rng, env } = ctx;
  const dir = rng.chance(0.5) ? 'north' : 'south';
  const sections = route(env.station, dir);
  if (rng.chance(Math.min(0.8, (env.wrong || 0) * 0.2))) corrupt(sections, rng.pick(['ghost', 'ghost', 'swap', 'repeat']), rng);
  const uv = sheet.add(200, 300, (c, w, h) => drawLineDiagram(c, w, h, sections, { station: env.station, dir }));
  // tall enough to read: the top part follows the curve of the vault so it
  // never sticks through the wall
  const pos = vaultPanel(b, 'sheet', f, side, 0.6, 0.9, 1.35, uv, 0.04);
  items.push({ ...pos, r: 5, label: 'read line diagram', title: 'LINE DIAGRAM', text: routeText(env.station, dir, sections) });
}

// How much there is to read in a passage. Player feedback: "too many signs
// and boards". Anything with words on it (advert, notice, whiteboard, line
// diagram, tiled legend) now needs a clear stretch of wall on either side —
// the next one on the same wall is at least two slots (3.1 m) away — and
// never faces another across the passage, so standing in front of one you
// are not also looking at the next.
const SLOT = 1.55;
const CHANCE = { notice: 0.22, board: 0.4 };

export function dressPassageFull(ctx, frames, dist) {
  const { rng } = ctx;
  const items = [];
  const straight = frames.every((f) => Math.abs(f.yaw) < 1e-6 && Math.abs(f.y - frames[0].y) < 1e-6);
  const total = dist[dist.length - 1] - dist[0];
  if (!straight || total < 5.5) return items;
  // slots along each wall
  const slots = [];
  for (let z = 2.2; z <= total - 2.2; z += SLOT) slots.push(z);
  let noticeDone = false, legendDone = false, diagramDone = false, boardDone = false;
  const free = [];
  // Decide what goes in each slot first, then build the pieces largest
  // texture first, so they all pack into the segment's sign sheet.
  const todo = [];
  const later = (prio, fn, kind, f, side) => todo.push({ prio, fn, kind, f, side });
  const worded = { [-1]: new Set(), 1: new Set() };          // slots with something to read, per wall
  const clear = (side, i) => ![i - 1, i, i + 1].some((k) => worded[side].has(k)) && !worded[-side].has(i);
  const text = (side, i, prio, kind, add) => {
    const f = { x: 0, y: 0, z: slots[i], yaw: 0 };
    worded[side].add(i);
    later(prio, () => add(ctx, f, side, items), kind, f, side);
  };
  const wantNotice = rng.chance(ctx.env.noticeChance ?? CHANCE.notice);
  const wantBoard = extraRng(ctx).chance(ctx.env.boardChance ?? CHANCE.board), r2 = extraRng(ctx);
  for (const side of [-1, 1]) {
    for (let i = 0; i < slots.length; i++) {
      const z = slots[i], f = { x: 0, y: 0, z, yaw: 0 };
      const roll = rng.next(), ok = clear(side, i);
      if (ok && wantNotice && !noticeDone && roll < 0.3) { text(side, i, 1, 'notice', addNotice); noticeDone = true; continue; }
      if (ok && roll < 0.1 && !diagramDone) { text(side, i, 0, 'diagram', addDiagram); diagramDone = true; continue; }
      if (roll < 0.5) { if (ok) text(side, i, 4, 'poster', addPoster); else free.push([side, i]); }
      else if (roll < 0.56 && z > 3 && z < total - 3) later(5, () => addDoor(ctx, f, side));
      else if (roll < 0.62) {
        if (ok && wantBoard && !boardDone) { text(side, i, 2, 'board', addWhiteboard); boardDone = true; } else free.push([side, i]);
      } else if (roll < 0.67 && ok && !legendDone && z < total - 3) { text(side, i, 3, 'legend', addLegend); legendDone = true; }
      else if (roll < 0.72) later(5, () => addSmall(ctx, f, side, 'grille', 0.25, 0.5, 0.5));
      else if (roll < 0.76) later(5, () => addSmall(ctx, f, side, 'extinguisher', 0.75, 0.45, 0.45));
      else free.push([side, i]);
    }
  }
  // A notice or a whiteboard that is wanted but has not come up yet goes on
  // a bare stretch of wall (if one is still clear), or takes the place of
  // one of the adverts.
  const place = (prio, kind, add, pick) => {
    const bare = free.filter(([side, i]) => clear(side, i));
    const ads = todo.filter((t) => t.kind === 'poster');
    if (bare.length) {
      const slot = bare[pick(bare.length)];
      free.splice(free.indexOf(slot), 1);
      text(slot[0], slot[1], prio, kind, add);
    } else if (ads.length) {
      const t = ads[pick(ads.length)];
      t.prio = prio; t.kind = kind; t.fn = () => add(ctx, t.f, t.side, items);
    }
  };
  if (wantNotice && !noticeDone) place(1, 'notice', addNotice, (n) => rng.int(0, n - 1));
  if (wantBoard && !boardDone) place(2, 'board', addWhiteboard, (n) => r2.int(0, n - 1));
  // Keep within the sign sheet: try the pieces on the packer in the order
  // they will be drawn, and show fewer different adverts if need be.
  todo.sort((a, b) => a.prio - b.prio);
  const big = todo.filter((t) => t.kind && t.kind !== 'poster').map((t) => PX[t.kind]);
  const ads = ctx.sheet.room(big.concat(Array(POSTERS_PER_PASSAGE).fill(PX.poster))) - big.length;
  ctx.posterCap = Math.max(1, Math.min(POSTERS_PER_PASSAGE, ads));
  for (const t of todo) t.fn();
  return items;
}
