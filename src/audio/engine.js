// WebAudio engine: everything is synthesised — no samples. Owns the
// context, the master chain and a generated tunnel reverb.
import { Ambient } from './ambient.js';
import { SFX, playFootstep } from './sfx.js';
import { TRAIN_SFX } from './sfx_train.js';
import { Voice } from './voice.js';

function noiseBuffer(ctx, seconds, brown) {
  const n = Math.floor(ctx.sampleRate * seconds);
  const buf = ctx.createBuffer(1, n, ctx.sampleRate);
  const d = buf.getChannelData(0);
  let last = 0;
  for (let i = 0; i < n; i++) {
    const w = Math.random() * 2 - 1;
    if (brown) { last = (last + 0.02 * w) / 1.02; d[i] = last * 3.5; } else d[i] = w;
  }
  return buf;
}

// Impulse response of a long tiled tunnel: dense, bright at first, then a
// dull tail with a faint flutter.
function tunnelImpulse(ctx, seconds = 2.6) {
  const n = Math.floor(ctx.sampleRate * seconds);
  const buf = ctx.createBuffer(2, n, ctx.sampleRate);
  for (let ch = 0; ch < 2; ch++) {
    const d = buf.getChannelData(ch);
    let lp = 0;
    for (let i = 0; i < n; i++) {
      const t = i / ctx.sampleRate;
      const env = Math.exp(-t * 2.6) * (1 + 0.25 * Math.sin(t * 61 + ch));
      const w = Math.random() * 2 - 1;
      const k = 0.25 + 0.75 * Math.exp(-t * 3);     // tail gets duller
      lp += (w - lp) * k;
      d[i] = lp * env;
    }
  }
  return buf;
}

export class AudioEngine {
  constructor() {
    this.ctx = null;
    this.ready = false;
    this.voice = new Voice();
    this.stepFoot = 0;
  }

  // Must be called from a user gesture.
  start() {
    if (this.ready) { this.setPaused(false); return; }
    try {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      const ctx = this.ctx = new AC();
      this.master = ctx.createGain(); this.master.gain.value = 0.0;
      const comp = ctx.createDynamicsCompressor();
      comp.threshold.value = -16; comp.ratio.value = 5; comp.attack.value = 0.004; comp.release.value = 0.25;
      this.master.connect(comp); comp.connect(ctx.destination);
      this.out = ctx.createGain(); this.out.connect(this.master);            // dry bus
      this.rev = ctx.createGain(); this.rev.gain.value = 0.9;                // reverb send
      const conv = ctx.createConvolver(); conv.buffer = tunnelImpulse(ctx);
      const wet = ctx.createGain(); wet.gain.value = 0.55;
      this.rev.connect(conv); conv.connect(wet); wet.connect(this.master);
      this.white = noiseBuffer(ctx, 2, false);
      this.brown = noiseBuffer(ctx, 4, true);
      this.ambient = new Ambient(this);
      this.master.gain.setTargetAtTime(0.9, ctx.currentTime, 0.8);
      this.ready = true;
      if (ctx.state === 'suspended') ctx.resume().catch(() => {});
      this.voice.prime();
    } catch (e) {
      this.ready = false;
    }
  }

  setPaused(p) {
    if (!this.ready) return;
    try {
      if (p) { this.ctx.suspend(); this.voice.pause(); } else { this.ctx.resume(); this.voice.resume(); }
    } catch { /* ignore */ }
  }

  setVoiceEnabled(on) { this.voice.enabled = !!on; if (!on) this.voice.stop(); }

  // Per-frame modulation of the ambient bed.
  update(dt, game) {
    if (this.ready && this.ambient) this.ambient.update(dt, game);
  }

  sfx(name, opts) {
    if (!this.ready) return;
    const fn = SFX[name] || TRAIN_SFX[name];
    if (fn) { try { fn(this, opts || {}); } catch { /* never break the game for a sound */ } }
  }

  footstep(running, loc) {
    if (!this.ready) return;
    this.stepFoot ^= 1;
    const surface = loc && loc.cell && loc.cell.surface ? loc.cell.surface : 'tile';
    try { playFootstep(this, running, surface, this.stepFoot); } catch { /* ignore */ }
  }

  speak(text, opts) { this.voice.speak(text, opts); }
  stopSpeech() { this.voice.stop(); }

  // Fade everything out (ending).
  fadeOut(seconds = 3) {
    if (!this.ready) return;
    this.master.gain.setTargetAtTime(0.0001, this.ctx.currentTime, seconds / 3);
  }
  fadeIn() {
    if (!this.ready) return;
    this.master.gain.setTargetAtTime(0.9, this.ctx.currentTime, 0.5);
  }
}
