// Title, pause and end screens (plain DOM over the canvas).
import { makeCanvas } from '../tex/canvas.js';
import { drawSymbol } from '../tex/symbol.js';

const $ = (id) => document.getElementById(id);

function mark(el, name) {
  if (!el) return;
  const c = makeCanvas(360, 200);
  drawSymbol(c.getContext('2d'), 180, 100, 68, { name });
  el.replaceChildren(c);
}

export function setupScreens() {
  const title = $('title'), pause = $('pause'), end = $('end'), touch = $('touch'), fade = $('fade');
  const show = (el, on) => el.classList.toggle('hidden', !on);

  const ui = {
    drawMarks() { mark($('title-mark'), 'Mind the Gap'); mark($('end-mark'), 'Way out'); },
    showTitle() { show(title, true); show(pause, false); show(end, false); show(touch, false); },
    showPlaying(mobile) {
      show(title, false); show(pause, false); show(end, false); show(touch, !!mobile);
      fade.classList.remove('on');
    },
    showPause() { show(pause, true); show(touch, false); },
    // White-out, then the end card with a few statistics.
    whiteOut() { fade.classList.remove('black'); fade.classList.add('on'); },
    showEnd(stats) {
      const dl = $('end-stats');
      dl.replaceChildren();
      for (const [k, v] of stats) {
        const dt = document.createElement('dt'); dt.textContent = k;
        const dd = document.createElement('dd'); dd.textContent = v;
        dl.append(dt, dd);
      }
      show(end, true); show(touch, false); show(pause, false);
      setTimeout(() => fade.classList.remove('on'), 400);
    },
    onStart(fn) { $('btn-start').addEventListener('click', fn); },
    onResume(fn) { $('btn-resume').addEventListener('click', fn); },
    onAgain(fn) { $('btn-again').addEventListener('click', fn); },
    onVoice(fn) { const el = $('opt-voice'); el.addEventListener('change', () => fn(el.checked)); },
    onHQ(fn) { const el = $('opt-hq'); el.addEventListener('change', () => fn(el.checked)); },
    setLoading(on) {
      const b = $('btn-start');
      b.disabled = !!on;
      b.textContent = on ? 'Loading…' : 'Press to begin';
    },
  };
  return ui;
}
