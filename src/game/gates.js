// The gate line at the way out. You touch your card on a yellow reader.
// The first time, every gate in the line shows a red cross, the reader
// gives two low beeps, and the display says SEEK ASSISTANCE — in a station
// with nobody in it. A moment later the crosses clear. The second time it
// takes the card, and all the paddles fold back together.
import { GATES } from './scripts.js';

const visible = (layer, s) => (layer === 'sheet:gWait' ? s === 'wait' : layer === 'sheet:gNo' ? s === 'no' : layer === 'sheet:gGo' ? s === 'go'
  : layer === 'sheet:padShut' ? s !== 'go' : layer === 'sheet:padOpen' ? s === 'go' : true);

// def.layerVisible for the hall: what the line is showing ('wait' | 'no' | 'go').
export const gateLayerVisible = (layer, node) => visible(layer, node.gateState || 'wait');

// Put the whole line in a state: lights and paddles, and (once open) the walkways.
export function setGates(node, s) {
  node.gateState = s;
  if (!node.built) return;
  for (const m of node.built.group.children) if (m.name.startsWith('sheet:')) m.visible = visible(m.name, s);
  const ex = node.built.extra;
  if (s !== 'go') return;
  if (ex && ex.shut) node.built.walls = node.built.walls.filter((w) => !ex.shut.includes(w));
  for (const it of node.built.items) if (it.reader !== undefined) it.hidden = true;      // nothing left to touch
}

// READ on a reader.
export function gateTouch(game, node) {
  const st = game.state, d = game.director, ev = d.events, now = st.time;
  d.reading = null; game.player.zoomTarget = 0;
  if (node.gateState === 'go' || (node.gateBusy && now < node.gateBusy)) return;
  node.gateTouches = (node.gateTouches || 0) + 1;
  st.gateTouches = node.gateTouches;
  if (node.gateTouches === 1) {
    setGates(node, 'no'); st.gate = 'no';
    game.audio.sfx('touchFail');
    ev.brownOut(1.5); ev.glitch(0.8);
    d.setHint(GATES.reject, 6);
    d.announcer.say({ text: GATES.voice, chime: 'none', tag: '(the gate)', odd: true, urgent: true });
    node.gateBusy = now + 3.2;
    return;
  }
  setGates(node, 'go'); st.gate = 'go';
  game.audio.sfx('touchOut'); game.audio.sfx('paddles');
  ev.glitch(0.3);
  d.setHint(GATES.accept, 6);
}

// Every frame while the player is in the hall: clear the crosses again.
export function gateTick(game, node) {
  if (node.gateState === 'no' && game.state.time >= node.gateBusy) { setGates(node, 'wait'); game.state.gate = 'wait'; }
}
