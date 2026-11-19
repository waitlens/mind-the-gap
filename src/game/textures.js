// Maps geometry layers to textures, and owns the shared animated texture
// (dot-matrix indicators and clocks).
import { tileTexture } from '../tex/tiles.js';
import { atlasTexture } from '../tex/atlas.js';
import { Sheet } from '../tex/sheet.js';
import { dynamicTexture, drawDynamic } from '../tex/dynamic.js';
import { themeOf } from './line.js';
import { carTexture } from '../tex/car.js';
import { trainTexture } from '../tex/train.js';

export function worldTextures(layer, node) {
  const theme = node.env.theme || themeOf('Mornington Crescent');
  if (layer === 'tile') return tileTexture(theme, 'passage');
  if (layer === 'ptile') return tileTexture(theme, 'platform');
  if (layer === 'dyn') return dynamicTexture();
  if (layer === 'car') return carTexture();          // the standing train
  if (layer === 'train') return trainTexture();      // (its cab end shares the running train's painting)
  return atlasTexture();
}

// Every segment gets its own small canvas for signs and posters.
export function makeSheetFor(node) {
  return new Sheet(node.def.sheetSize || 512);
}

let lastKey = '';

// Redraw the shared dot-matrix / clock texture a few times a second.
export function updateDynamic(game, t) {
  const st = game.state;
  const tick = Math.floor(t * 4);
  const key = `${tick}|${st.progress}|${st.wrong}`;
  if (key === lastKey) return;
  lastKey = key;
  drawDynamic(game.story.boardState(t));
}
