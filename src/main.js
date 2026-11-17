// Mind the Gap — entry point. Loads the (locally bundled, openly licensed)
// fonts, builds the game and exposes window.__game for automated tests.
import '@fontsource/hammersmith-one/latin-400.css';
import '@fontsource/cabin/latin-400.css';
import '@fontsource/cabin/latin-700.css';
import '@fontsource/vt323/latin-400.css';
import './style.css';
import { loadFonts } from './tex/canvas.js';
import { setupScreens } from './ui/screens.js';
import { Game } from './game/game.js';
import { installDebug } from './game/debug.js';

const ui = setupScreens();
const api = {
  ready: false,
  state: { started: false, ready: false },
  // start() works before the fonts have loaded: it waits for the game.
  start() { pendingStart = true; },
};
let pendingStart = false;
window.__game = api;

async function boot() {
  ui.setLoading(true);
  await loadFonts();
  ui.drawMarks();
  let game;
  try {
    game = new Game(document.getElementById('view'), ui);
  } catch (e) {
    console.error(e);
    const b = document.getElementById('btn-start');
    b.textContent = 'WebGL is not available';
    return;
  }
  api.game = game;
  api.state = game.state;
  api.start = () => game.start();
  api.pause = () => game.pause();
  api.resume = () => game.resume();
  api.reset = (seed) => game.reset(seed);
  installDebug(api, game);
  game.state.ready = true;
  api.ready = true;

  ui.onStart(() => game.start());
  ui.onResume(() => game.resume());
  ui.onAgain(() => game.start());
  ui.onVoice((on) => game.audio.setVoiceEnabled(on));
  ui.onHQ((on) => { game.renderer.setHQ(on); game.resize(); });
  ui.setLoading(false);
  if (pendingStart) game.start();
}

boot();
