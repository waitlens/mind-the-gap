// The sounds of a train at the platform, synthesised: the rumble and the
// singing rails as it comes, brake squeal and the sigh of air as it stops,
// the door chime, and the rising whine of the motors as it pulls away.
import { tone, burst } from './sfx.js';

export const TRAIN_SFX = {
  // five seconds of growing rumble, then the clatter of the first bogies
  trainApproach(e) {
    burst(e, { dur: 9.5, gain: 0.32, type: 'lowpass', freq: 110, sweep: 420, attack: 4.8, rev: 0.7, dry: 0.8 });
    burst(e, { dur: 6.0, gain: 0.012, type: 'bandpass', freq: 2900, sweep: 3700, q: 26, attack: 3.5, rev: 1, dry: 0.2 });   // rails singing
    for (let i = 0; i < 14; i++) {
      const at = 5.2 + i * (0.2 + i * 0.022);
      burst(e, { dur: 0.06, gain: 0.16 - i * 0.008, type: 'lowpass', freq: 330, at, rev: 0.8, dry: 0.7 });
      burst(e, { dur: 0.05, gain: 0.1 - i * 0.005, type: 'lowpass', freq: 300, at: at + 0.085, rev: 0.8, dry: 0.7 });
    }
  },
  // squeal of the brakes, then the air release
  trainBrake(e) {
    burst(e, { dur: 2.6, gain: 0.03, type: 'bandpass', freq: 3300, sweep: 2300, q: 34, attack: 0.5, rev: 1, dry: 0.5 });
    burst(e, { dur: 2.2, gain: 0.018, type: 'bandpass', freq: 4500, sweep: 3200, q: 40, attack: 0.7, at: 0.3, rev: 1, dry: 0.4 });
    burst(e, { dur: 0.9, gain: 0.07, type: 'highpass', freq: 2600, at: 3.3, attack: 0.03, rev: 0.6, dry: 0.8 });
    tone(e, { freq: 70, to: 42, dur: 0.5, gain: 0.12, at: 3.2, rev: 0.5 });   // the last lurch
  },
  // door-closing chime: a run of quick high beeps
  doorChime(e) {
    for (let i = 0; i < 9; i++) tone(e, { freq: 1960, dur: 0.11, gain: 0.05, at: 0.9 + i * 0.21, type: 'triangle', attack: 0.004, rev: 0.6, dry: 0.7 });
    burst(e, { dur: 0.12, gain: 0.12, type: 'lowpass', freq: 500, at: 3.0, rev: 0.7 });   // doors that were never open, shutting
  },
  // motors: three rising whines, each starting higher, over a growing rumble
  trainDepart(e) {
    for (const [at, f0, f1, d] of [[0.2, 110, 330, 2.6], [2.5, 180, 520, 3.0], [5.2, 260, 700, 3.6]]) {
      tone(e, { freq: f0, to: f1, dur: d, gain: 0.03, at, type: 'sawtooth', attack: 0.4, rev: 0.8, dry: 0.5 });
      tone(e, { freq: f0 * 2.02, to: f1 * 2.02, dur: d, gain: 0.012, at, type: 'triangle', attack: 0.4, rev: 0.8, dry: 0.4 });
    }
    burst(e, { dur: 9.5, gain: 0.26, type: 'lowpass', freq: 140, sweep: 380, attack: 3.0, rev: 0.7, dry: 0.8 });
    for (let i = 0; i < 16; i++) {
      const at = 1.6 + 7.2 * (1 - Math.sqrt(1 - i / 16));
      burst(e, { dur: 0.055, gain: 0.07 + i * 0.006, type: 'lowpass', freq: 320, at, rev: 0.8, dry: 0.7 });
    }
  },
};
