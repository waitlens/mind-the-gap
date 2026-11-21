// The lift's sounds, synthesised like everything else: the gong when a car
// arrives, four steel panels running on their tracks (and meeting, when
// they shut), and the motor's hum for as long as the ride lasts.
import { tone, burst } from './sfx.js';

// A note that holds its level and then lets go (tone() only decays).
function held(e, { freq, type = 'sine', dur, gain, attack = 0.6, release = 0.8, rev = 0.3, dry = 1, to = 0 }) {
  const ctx = e.ctx, t0 = ctx.currentTime;
  const o = ctx.createOscillator(); o.type = type; o.frequency.setValueAtTime(freq, t0);
  if (to) { o.frequency.linearRampToValueAtTime(to, t0 + attack); o.frequency.setValueAtTime(to, t0 + dur - release); o.frequency.linearRampToValueAtTime(freq, t0 + dur); }
  const g = ctx.createGain();
  g.gain.setValueAtTime(0.0001, t0);
  g.gain.linearRampToValueAtTime(gain, t0 + attack);
  g.gain.setValueAtTime(gain, t0 + Math.max(attack, dur - release));
  g.gain.linearRampToValueAtTime(0.0001, t0 + dur);
  o.connect(g);
  if (dry > 0) { const d = ctx.createGain(); d.gain.value = dry; g.connect(d); d.connect(e.out); }
  if (rev > 0) { const r = ctx.createGain(); r.gain.value = rev; g.connect(r); r.connect(e.rev); }
  o.start(t0); o.stop(t0 + dur + 0.05);
}

export const LIFT_SFX = {
  // a car has come: one soft gong (two, the second lower, when it brings you somewhere)
  liftDing(e, o) {
    const hit = (freq, at) => {
      tone(e, { freq, dur: 1.4, gain: 0.11, at, rev: 0.7, dry: 0.7, attack: 0.006 });
      tone(e, { freq: freq * 2.01, dur: 0.7, gain: 0.03, at, rev: 0.5, dry: 0.4 });
    };
    hit(830, 0);
    if (o.arrive) hit(622, 0.38);
  },
  // the doors: a low rumble of rollers for as long as they move, a tick as
  // they start, and the panels meeting if they are shutting
  liftDoor(e, o) {
    const dur = o.dur || 2, k = o.far ? 0.5 : 1;
    burst(e, { dur: 0.03, gain: 0.09 * k, type: 'highpass', freq: 2200, rev: 0.3 });
    burst(e, { dur, gain: 0.05 * k, type: 'lowpass', freq: 240, q: 0.8, at: 0.05, rev: 0.35, attack: 0.25 });
    burst(e, { dur: dur * 0.9, gain: 0.012 * k, type: 'bandpass', freq: 1700, q: 7, at: 0.1, rev: 0.4, attack: 0.3, sweep: 1300 });
    if (o.shut) {
      tone(e, { freq: 74, to: 46, dur: 0.22, gain: 0.2 * k, at: dur - 0.08, rev: 0.4 });
      burst(e, { dur: 0.05, gain: 0.1 * k, type: 'bandpass', freq: 900, q: 2, at: dur - 0.07, rev: 0.4 });
    }
  },
  // the ride: a motor hum that winds up, holds and winds down, a little
  // rope and guide-shoe hiss over it, and a relay at either end
  liftHum(e, o) {
    const dur = o.dur || 6;
    burst(e, { dur: 0.04, gain: 0.12, type: 'bandpass', freq: 1300, q: 3, rev: 0.3 });
    held(e, { freq: 46, to: 58, dur, gain: 0.2, attack: 1.0, release: 1.1, rev: 0.25 });
    held(e, { freq: 92, to: 116, type: 'triangle', dur, gain: 0.05, attack: 1.0, release: 1.1, rev: 0.25 });
    held(e, { freq: 276, to: 348, dur, gain: 0.012, attack: 1.2, release: 1.2, rev: 0.3 });
    burst(e, { dur, gain: 0.02, type: 'bandpass', freq: 520, q: 1.4, rev: 0.3, attack: 0.9 });
    burst(e, { dur: 0.05, gain: 0.1, type: 'bandpass', freq: 1000, q: 3, at: dur - 0.05, rev: 0.3 });
  },
};
