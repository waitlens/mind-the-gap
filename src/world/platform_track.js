// The track-side wall, after Camden Town and Mornington Crescent: the line
// diagram for this platform in a tall curved panel with a small roundel on
// either side of it, and big curved advert panels along the rest of the
// wall with more small roundels between them.
import { curvedPanel, arcPanel } from './platform_parts.js';
import { drawLineDiagram } from '../tex/linemap.js';
import { drawNameBoard, SYMBOL_DEFECTS } from '../tex/symbol.js';
import { drawPoster } from '../tex/posters.js';
import { route, routeText, corrupt } from '../game/route.js';
import { wrongName, isGhost } from '../game/names.js';

// afterBig(): called once the biggest piece (the diagram) is on the sign
// sheet, so the caller can place its own larger pieces before the small ones.
export function fitTrackside(ctx, L, side, items, afterBig = null) {
  const { b, p, sheet, rng, env } = ctx;
  const wrong = env.wrong || 0, station = env.station, dir = p.dir;
  // --- the line diagram (sometimes it has gone wrong)
  const sections = route(station, dir);
  let fault = null;
  if (rng.chance(Math.min(0.85, wrong * 0.22))) {
    const kind = rng.weighted([['ghost', 4], ['swap', 2], ['repeat', wrong >= 2 ? 1.5 : 0], ['missing', wrong >= 3 ? 1.5 : 0]]);
    fault = corrupt(sections, kind, rng) || corrupt(sections, 'swap', rng);
  }
  const dUV = sheet.add(360, 540, (c, w, h) => drawLineDiagram(c, w, h, sections, { station, dir }));
  const zd = Math.min(L * 0.42, 13);
  const dpos = curvedPanel(b, 'sheet', side, 1, zd, 1.5, 1.14, 3.39, dUV, null, 0.05, 5);
  items.push({
    ...dpos, r: 13, cone: 0.93, label: 'read line diagram', title: 'LINE DIAGRAM',
    text: routeText(station, dir, sections), fault,
    onRead: (g) => { g.state.diagramsRead = (g.state.diagramsRead || 0) + 1; },
  });
  if (afterBig) afterBig();
  // --- small roundels (white square panels, about 0.7 m)
  const small = [0, 1].map(() => {
    const name = wrongName(station, wrong, rng);
    const defect = rng.chance(Math.min(0.5, wrong * 0.14)) ? rng.pick(SYMBOL_DEFECTS) : null;
    const text = isGhost(name) ? `${name}. There is no such station on this line.` : defect ? `${name} — the roundel is not quite right.` : name;
    return { text, uv: sheet.add(100, 100, (c, w, h) => drawNameBoard(c, w, h, name, { defect })) };
  });
  let ns = 0;
  const roundel = (z) => {
    const s = small[ns++ % 2];
    const pos = arcPanel(b, 'sheet', side, 1, z, 0.7, 1.55, 2.25, s.uv, null, 0.05);
    items.push({ ...pos, r: 10, cone: 0.96, label: 'read name board', title: 'STATION', text: s.text });
  };
  roundel(zd - 1.45); roundel(zd + 1.45);
  // --- adverts: big landscape panels, well apart (they used to run nearly
  //     edge to edge: "too many signs"), with a small roundel in each gap
  const ads = [0, 1, 2].map(() => {
    const odd = rng.chance(Math.min(0.7, wrong * 0.17));
    let info;
    const uv = sheet.add(240, 140, (c, w, h) => { info = drawPoster(c, w, h, rng, odd, true); });
    return { uv, text: `${info.headline}. ${info.strap}.` };
  });
  const AW = 3.6, GAP = 6;
  const spans = [[2.2, zd - 2.2], [zd + 2.2, L - 2.2]];
  let na = 0;
  for (const [za, zb] of spans) {
    const count = Math.floor((zb - za + GAP) / (AW + GAP));
    if (count < 1) continue;
    const pitch = (zb - za - AW) / Math.max(1, count - 1);
    for (let i = 0; i < count; i++) {
      const zc = count === 1 ? (za + zb) / 2 : za + AW / 2 + pitch * i;
      const ad = ads[na++ % 3];
      const pos = curvedPanel(b, 'sheet', side, 1, zc, AW, 1.22, 3.3, ad.uv, null, 0.05, 4);
      items.push({ ...pos, r: 10, cone: 0.95, label: 'read poster', title: 'ADVERTISEMENT', text: ad.text });
      if (i < count - 1 && pitch - AW > 0.9) roundel(zc + pitch / 2);
      // a lone advert in a long stretch: a roundel between it and each end
      if (count === 1 && zb - za - AW > 7) { roundel((za + zc - AW / 2) / 2); roundel((zb + zc + AW / 2) / 2); }
    }
  }
  return { ads: ads.map((a) => a.uv) };
}
