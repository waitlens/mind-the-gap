// Touch input: a floating virtual joystick under the left thumb, drag to
// look under the right thumb, and READ / RUN / pause buttons.
export function setupTouch(input, handlers) {
  const $ = (id) => document.getElementById(id);
  const stickZone = $('stick-zone'), lookZone = $('look-zone');
  const base = $('stick-base'), knob = $('stick-knob');
  const btnUse = $('btn-use'), btnRun = $('btn-run'), btnPause = $('btn-pause');
  if (!stickZone || !lookZone) return { reset() {} };

  const R = 52;            // stick travel in px
  let stickId = null, sx = 0, sy = 0;
  let lookId = null, lx = 0, ly = 0;
  let runLock = false;

  const setKnob = (dx, dy) => { knob.style.transform = `translate(${dx}px, ${dy}px)`; };
  const resetStick = () => {
    stickId = null; input.tmx = 0; input.tmz = 0; input.trun = runLock;
    setKnob(0, 0);
    base.style.left = ''; base.style.top = ''; base.style.bottom = '';
  };

  stickZone.addEventListener('pointerdown', (e) => {
    if (stickId !== null) return;
    stickId = e.pointerId; sx = e.clientX; sy = e.clientY;
    try { stickZone.setPointerCapture(e.pointerId); } catch { /* ignore */ }
    // the stick appears where the thumb lands
    const w = base.offsetWidth, h = base.offsetHeight;
    base.style.left = `${sx - w / 2}px`; base.style.top = `${sy - h / 2}px`; base.style.bottom = 'auto';
    e.preventDefault();
  });
  stickZone.addEventListener('pointermove', (e) => {
    if (e.pointerId !== stickId) return;
    let dx = e.clientX - sx, dy = e.clientY - sy;
    const d = Math.hypot(dx, dy);
    if (d > R) { dx *= R / d; dy *= R / d; }
    setKnob(dx, dy);
    const dead = 0.12;
    const nx = dx / R, ny = dy / R;
    input.tmx = Math.abs(nx) < dead ? 0 : nx;
    input.tmz = Math.abs(ny) < dead ? 0 : -ny;
    // pushing the stick right to the edge runs
    input.trun = runLock || d > R * 1.35;
    e.preventDefault();
  });
  const endStick = (e) => { if (e.pointerId === stickId) resetStick(); };
  stickZone.addEventListener('pointerup', endStick);
  stickZone.addEventListener('pointercancel', endStick);

  lookZone.addEventListener('pointerdown', (e) => {
    if (lookId !== null) return;
    lookId = e.pointerId; lx = e.clientX; ly = e.clientY;
    try { lookZone.setPointerCapture(e.pointerId); } catch { /* ignore */ }
    e.preventDefault();
  });
  lookZone.addEventListener('pointermove', (e) => {
    if (e.pointerId !== lookId) return;
    const sens = 0.0052;
    input.lookX += (e.clientX - lx) * sens;
    input.lookY += (e.clientY - ly) * sens;
    lx = e.clientX; ly = e.clientY;
    e.preventDefault();
  });
  const endLook = (e) => { if (e.pointerId === lookId) lookId = null; };
  lookZone.addEventListener('pointerup', endLook);
  lookZone.addEventListener('pointercancel', endLook);

  const press = (el, down, up) => {
    el.addEventListener('pointerdown', (e) => { e.preventDefault(); e.stopPropagation(); el.classList.add('on'); down(); });
    const off = (e) => { e.preventDefault(); el.classList.remove('on'); if (up) up(); };
    el.addEventListener('pointerup', off);
    el.addEventListener('pointercancel', off);
  };
  press(btnUse, () => handlers.use(true), () => handlers.use(false));
  btnRun.addEventListener('pointerdown', (e) => {
    e.preventDefault(); e.stopPropagation();
    runLock = !runLock; input.trun = runLock;
    btnRun.classList.toggle('on', runLock);
  });
  btnPause.addEventListener('pointerdown', (e) => { e.preventDefault(); e.stopPropagation(); handlers.pause(); });

  // stop the page from scrolling / zooming under the controls
  for (const ev of ['touchstart', 'touchmove', 'gesturestart']) {
    document.addEventListener(ev, (e) => { if (e.target.closest && e.target.closest('#touch')) e.preventDefault(); }, { passive: false });
  }
  document.addEventListener('contextmenu', (e) => e.preventDefault());

  return { reset: () => { resetStick(); lookId = null; } };
}
