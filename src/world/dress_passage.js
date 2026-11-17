// Posters, staff notices, whiteboards and small fittings along a passage.
import { wallPanel, panelFrame } from './decor.js';
import { atlasRect, atlasFlat } from '../tex/atlas.js';
import { drawPoster, drawNotice, drawWhiteboard } from '../tex/posters.js';
import { drawTileLegend } from '../tex/signs.js';
import { NOTICES, WHITEBOARD } from '../game/scripts.js';
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

export function addPoster(ctx, f, side, items, s = HW) {
  const { b, sheet, rng } = ctx;
  const odd = rng.chance(Math.min(0.7, (ctx.env.wrong || 0) * 0.17));
  let info;
  const uv = sheet.add(104, 164, (c, w, h) => { info = drawPoster(c, w, h, rng, odd); });
  const pos = wallPanel(b, 'sheet', f, side, s, 0.52, 0.64, 1.0, uv, null, 0.045);
  panelFrame(b, f, side, s - 0.01, 0.52, 0.64, 1.0);
  items.push({ ...pos, r: 4.2, label: 'read poster', title: 'POSTER', text: `${info.headline}. ${info.strap}.` });
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

export function addWhiteboard(ctx, f, side, items, s = HW) {
  const { b, sheet, rng } = ctx;
  const text = rng.pick(WHITEBOARD);
  const uv = sheet.add(200, 150, (c, w, h) => drawWhiteboard(c, w, h, text, rng));
  const pos = wallPanel(b, 'sheet', f, side, s, 0.7, 0.86, 0.645, uv, null, 0.045);
  items.push({ ...pos, r: 4.2, label: 'read board', title: 'SERVICE INFORMATION', text });
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

export function dressPassageFull(ctx, frames, dist) {
  const { rng } = ctx;
  const items = [];
  const straight = frames.every((f) => Math.abs(f.yaw) < 1e-6 && Math.abs(f.y - frames[0].y) < 1e-6);
  const total = dist[dist.length - 1] - dist[0];
  if (!straight || total < 5.5) return items;
  // slots along each wall
  const slots = [];
  for (let z = 2.2; z <= total - 2.2; z += 1.55) slots.push(z);
  let noticeDone = false, legendDone = false, diagramDone = false;
  const free = [];
  const wantNotice = rng.chance(ctx.env.noticeChance ?? 0.34);
  for (const side of [-1, 1]) {
    let skip = 0;
    for (const z of slots) {
      if (skip > 0) { skip--; continue; }
      const f = { x: 0, y: 0, z, yaw: 0 };
      const roll = rng.next();
      if (wantNotice && !noticeDone && roll < 0.3) { addNotice(ctx, f, side, items); noticeDone = true; continue; }
      if (roll < 0.1 && !diagramDone) { addDiagram(ctx, f, side, items); diagramDone = true; continue; }
      if (roll < 0.5) addPoster(ctx, f, side, items);
      else if (roll < 0.56 && z > 3 && z < total - 3) { addDoor(ctx, f, side); }
      else if (roll < 0.62) { addWhiteboard(ctx, f, side, items); }
      else if (roll < 0.67 && !legendDone && z < total - 3) { addLegend(ctx, f, side, items); legendDone = true; skip = 1; }
      else if (roll < 0.72) addSmall(ctx, f, side, 'grille', 0.25, 0.5, 0.5);
      else if (roll < 0.76) addSmall(ctx, f, side, 'extinguisher', 0.75, 0.45, 0.45);
      else free.push([f, side]);
    }
  }
  // the notice goes in a slot that was left bare (never on top of a poster)
  if (wantNotice && !noticeDone && free.length) { const [f, side] = rng.pick(free); addNotice(ctx, f, side, items); }
  return items;
}
