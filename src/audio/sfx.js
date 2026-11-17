// One-shot synthesised sounds: footsteps, announcement chimes, the gate,
// a passing train, drips. Each takes the engine and builds a few nodes.

function tone(e, { freq, to, type = 'sine', dur = 0.3, gain = 0.2, attack = 0.005, at = 0, rev = 0.5, dry = 1 }) {
  const ctx = e.ctx, t0 = ctx.currentTime + at;
  const o = ctx.createOscillator(); o.type = type; o.frequency.setValueAtTime(freq, t0);
  if (to) o.frequency.exponentialRampToValueAtTime(to, t0 + dur);
  const g = ctx.createGain();
  g.gain.setValueAtTime(0.0001, t0);
  g.gain.exponentialRampToValueAtTime(gain, t0 + attack);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  o.connect(g);
  if (dry > 0) { const d = ctx.createGain(); d.gain.value = dry; g.connect(d); d.connect(e.out); }
  if (rev > 0) { const r = ctx.createGain(); r.gain.value = rev; g.connect(r); r.connect(e.rev); }
  o.start(t0); o.stop(t0 + dur + 0.05);
}

function burst(e, { dur = 0.1, gain = 0.2, type = 'bandpass', freq = 1000, q = 1, at = 0, rev = 0.4, dry = 1, attack = 0.002, sweep = 0 }) {
  const ctx = e.ctx, t0 = ctx.currentTime + at;
  const src = ctx.createBufferSource(); src.buffer = e.white;
  const f = ctx.createBiquadFilter(); f.type = type; f.frequency.setValueAtTime(freq, t0); f.Q.value = q;
  if (sweep) f.frequency.exponentialRampToValueAtTime(sweep, t0 + dur);
  const g = ctx.createGain();
  g.gain.setValueAtTime(0.0001, t0);
  g.gain.exponentialRampToValueAtTime(gain, t0 + attack);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  src.connect(f); f.connect(g);
  if (dry > 0) { const d = ctx.createGain(); d.gain.value = dry; g.connect(d); d.connect(e.out); }
  if (rev > 0) { const r = ctx.createGain(); r.gain.value = rev; g.connect(r); r.connect(e.rev); }
  src.start(t0, Math.random() * 1.5); src.stop(t0 + dur + 0.05);
}

// Bell-like note for the PA chime.
function bell(e, freq, at, gain = 0.16) {
  tone(e, { freq, dur: 1.5, gain, at, rev: 0.9, dry: 0.5, attack: 0.008 });
  tone(e, { freq: freq * 2.0, dur: 0.9, gain: gain * 0.35, at, rev: 0.6, dry: 0.3 });
  tone(e, { freq: freq * 2.76, dur: 0.5, gain: gain * 0.14, at, rev: 0.5, dry: 0.2 });
}

export function playFootstep(e, running, surface, foot) {
  const v = (running ? 1.25 : 1) * (0.85 + Math.random() * 0.3);
  const pitch = (foot ? 1.06 : 0.95) * (0.94 + Math.random() * 0.12);
  // heel: low thump; sole: bright tick off the tiles
  tone(e, { freq: 95 * pitch, to: 48, dur: 0.09, gain: 0.16 * v, rev: 0.35 });
  if (surface === 'metal') {
    burst(e, { dur: 0.07, gain: 0.12 * v, type: 'bandpass', freq: 2300 * pitch, q: 5, rev: 0.6 });
    tone(e, { freq: 610 * pitch, dur: 0.22, gain: 0.03 * v, type: 'triangle', rev: 0.8, dry: 0.4 });
  } else if (surface === 'stone') {
    burst(e, { dur: 0.06, gain: 0.11 * v, type: 'bandpass', freq: 1250 * pitch, q: 1.2, rev: 0.7 });
  } else {
    burst(e, { dur: 0.045, gain: 0.13 * v, type: 'highpass', freq: 1900 * pitch, q: 0.7, rev: 0.75 });
    burst(e, { dur: 0.03, gain: 0.05 * v, type: 'bandpass', freq: 3600, q: 2, at: 0.035, rev: 0.6 }); // scuff
  }
}

export const SFX = {
  // genuine announcement: three notes going up
  chimeRise(e) { bell(e, 392.0, 0); bell(e, 493.9, 0.42); bell(e, 587.3, 0.84); },
  // not staff: the same three notes coming down, the last one sour
  chimeFall(e) { bell(e, 587.3, 0); bell(e, 493.9, 0.42); bell(e, 380.0, 0.84, 0.17); },
  zoom(e) { tone(e, { freq: 360, to: 470, type: 'triangle', dur: 0.2, gain: 0.012, rev: 0, dry: 1 }); },
  click(e) { burst(e, { dur: 0.02, gain: 0.08, type: 'highpass', freq: 2500, rev: 0.2 }); },
  dip(e) {
    tone(e, { freq: 50, type: 'square', dur: 0.35, gain: 0.03, rev: 0.4 });
    burst(e, { dur: 0.03, gain: 0.1, type: 'highpass', freq: 3000, rev: 0.5 });
    burst(e, { dur: 0.03, gain: 0.07, type: 'highpass', freq: 3000, at: 0.22, rev: 0.5 });
  },
  drip(e) {
    const f = 900 + Math.random() * 900;
    tone(e, { freq: f, to: f * 0.55, dur: 0.07, gain: 0.02 + Math.random() * 0.02, rev: 1, dry: 0.1 });
  },
  // collapsible gate slamming across the passage behind you
  gate(e) {
    for (let i = 0; i < 6; i++) burst(e, { dur: 0.05, gain: 0.1, type: 'bandpass', freq: 1700 + i * 130, q: 3, at: i * 0.07, rev: 0.6 });
    const at = 0.46;
    for (const [f, g, d] of [[176, 0.2, 1.6], [311, 0.14, 1.3], [507, 0.1, 1.0], [813, 0.07, 0.8], [1247, 0.05, 0.55], [1790, 0.03, 0.4]]) {
      tone(e, { freq: f * (0.99 + Math.random() * 0.02), dur: d, gain: g, at, rev: 0.9, dry: 0.7, attack: 0.002 });
    }
    burst(e, { dur: 0.16, gain: 0.3, type: 'lowpass', freq: 900, at, rev: 0.9 });
    burst(e, { dur: 0.3, gain: 0.05, type: 'bandpass', freq: 2600, q: 6, at: at + 0.12, rev: 0.9 }); // rattle
  },
  // a train passing through some other tunnel: wheel clatter and a squeal
  train(e) {
    for (let i = 0; i < 26; i++) {
      const at = 1.2 + i * 0.27 + (i % 2) * 0.09;
      const k = Math.sin((i / 26) * Math.PI);
      burst(e, { dur: 0.07, gain: 0.05 + 0.12 * k, type: 'lowpass', freq: 240 + 200 * k, at, rev: 0.9, dry: 0.3 });
    }
    burst(e, { dur: 3.2, gain: 0.018, type: 'bandpass', freq: 2500, sweep: 3300, q: 28, at: 3.0, rev: 1, dry: 0, attack: 1.2 });
  },
  // one more footstep, from somewhere behind, after you have stopped
  echoStep(e) {
    tone(e, { freq: 88, to: 46, dur: 0.1, gain: 0.07, rev: 1, dry: 0.25 });
    burst(e, { dur: 0.05, gain: 0.05, type: 'highpass', freq: 1700, q: 0.7, rev: 1, dry: 0.2 });
  },
  // the way out: a soft rising swell
  dawn(e) {
    for (const [f, at] of [[196, 0], [293.7, 0.4], [392, 0.8], [587.3, 1.3]]) {
      tone(e, { freq: f, dur: 4.5, gain: 0.07, at, attack: 1.5, rev: 0.9, dry: 0.6, type: 'sine' });
    }
  },
  // something moved / a wrong turn: a low, short swell
  wrong(e) {
    tone(e, { freq: 61, to: 49, dur: 1.8, gain: 0.2, attack: 0.5, rev: 0.6 });
    tone(e, { freq: 92.5, to: 87, dur: 1.6, gain: 0.07, attack: 0.6, rev: 0.6, type: 'triangle' });
  },
  right(e) { tone(e, { freq: 784, dur: 0.5, gain: 0.025, rev: 0.9, dry: 0.3 }); tone(e, { freq: 1175, dur: 0.6, gain: 0.02, at: 0.12, rev: 0.9, dry: 0.3 }); },
};
