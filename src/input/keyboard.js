// Desktop input: WASD / arrows, Shift to run, E to read, mouse look under
// pointer lock. Writes into the shared `input` object.
export function setupKeyboard(input, canvas, handlers) {
  const keys = new Set();
  const sync = () => {
    const f = (keys.has('KeyW') || keys.has('ArrowUp') ? 1 : 0) - (keys.has('KeyS') || keys.has('ArrowDown') ? 1 : 0);
    const r = (keys.has('KeyD') ? 1 : 0) - (keys.has('KeyA') ? 1 : 0);
    input.kmx = r; input.kmz = f;
    input.krun = keys.has('ShiftLeft') || keys.has('ShiftRight');
    // arrow left/right turn the camera (handy without a mouse)
    input.kturn = (keys.has('ArrowRight') ? 1 : 0) - (keys.has('ArrowLeft') ? 1 : 0);
  };

  window.addEventListener('keydown', (e) => {
    if (e.repeat) return;
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'].includes(e.code)) e.preventDefault();
    keys.add(e.code);
    sync();
    if (e.code === 'KeyE' || e.code === 'Space' || e.code === 'Enter') handlers.use(true);
    if (e.code === 'KeyP' || (e.code === 'Escape' && !locked())) handlers.pause();
  });
  window.addEventListener('keyup', (e) => {
    keys.delete(e.code);
    sync();
    if (e.code === 'KeyE' || e.code === 'Space' || e.code === 'Enter') handlers.use(false);
  });
  window.addEventListener('blur', () => { keys.clear(); sync(); });

  function locked() { return document.pointerLockElement === canvas; }
  const requestLock = () => {
    if (locked() || !canvas.requestPointerLock) return;
    try {
      const p = canvas.requestPointerLock();
      if (p && p.catch) p.catch(() => {});
    } catch { /* not allowed right now */ }
  };

  document.addEventListener('mousemove', (e) => {
    if (!locked()) return;
    const sens = 0.0022;
    // some browsers report huge spurious jumps on lock; ignore them
    if (Math.abs(e.movementX) > 400 || Math.abs(e.movementY) > 400) return;
    input.lookX += e.movementX * sens;
    input.lookY += e.movementY * sens;
  });
  canvas.addEventListener('mousedown', (e) => {
    if (!locked()) { requestLock(); return; }
    if (e.button === 0) handlers.use(true);
  });
  window.addEventListener('mouseup', (e) => { if (e.button === 0 && locked()) handlers.use(false); });
  document.addEventListener('pointerlockchange', () => handlers.lockChange(locked()));
  document.addEventListener('pointerlockerror', () => handlers.lockChange(false));

  return { requestLock, locked, release: () => { if (locked()) document.exitPointerLock(); } };
}
