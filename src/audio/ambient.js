// The ambient bed: fluorescent hum and buzz, a far-off rumble, wind moving
// through the tunnels, tape hiss, and the odd drip.
import { noise1, clamp } from '../util/rng.js';

function loop(ctx, buffer, rate = 1) {
  const src = ctx.createBufferSource();
  src.buffer = buffer; src.loop = true; src.playbackRate.value = rate;
  src.start();
  return src;
}

export class Ambient {
  constructor(engine) {
    const ctx = this.ctx = engine.ctx;
    this.engine = engine;
    this.t = 0;
    this.nextDrip = 6;

    // --- fluorescent hum: mains at 50 Hz → 100 Hz hum plus harmonics
    this.hum = ctx.createGain(); this.hum.gain.value = 0.0;
    const humLP = ctx.createBiquadFilter(); humLP.type = 'lowpass'; humLP.frequency.value = 420;
    for (const [f, type, g] of [[100, 'sawtooth', 0.5], [50, 'sine', 0.5], [200.4, 'triangle', 0.22], [300, 'sine', 0.08]]) {
      const o = ctx.createOscillator(); o.type = type; o.frequency.value = f;
      const og = ctx.createGain(); og.gain.value = g;
      o.connect(og); og.connect(humLP); o.start();
    }
    humLP.connect(this.hum); this.hum.connect(engine.out);
    // ballast buzz: the bright, slightly nasty edge of a failing tube
    this.buzz = ctx.createGain(); this.buzz.gain.value = 0.0;
    const bz = ctx.createOscillator(); bz.type = 'square'; bz.frequency.value = 100;
    const bzBP = ctx.createBiquadFilter(); bzBP.type = 'bandpass'; bzBP.frequency.value = 2900; bzBP.Q.value = 1.4;
    bz.connect(bzBP); bzBP.connect(this.buzz); this.buzz.connect(engine.out); this.buzz.connect(engine.rev);
    bz.start();

    // --- distant rumble
    this.rumble = ctx.createGain(); this.rumble.gain.value = 0.0;
    this.rumbleLP = ctx.createBiquadFilter(); this.rumbleLP.type = 'lowpass'; this.rumbleLP.frequency.value = 70;
    loop(ctx, engine.brown, 0.6).connect(this.rumbleLP); this.rumbleLP.connect(this.rumble); this.rumble.connect(engine.out);

    // --- wind
    this.wind = ctx.createGain(); this.wind.gain.value = 0.0;
    this.windBP = ctx.createBiquadFilter(); this.windBP.type = 'bandpass'; this.windBP.frequency.value = 420; this.windBP.Q.value = 0.9;
    const windSrc = loop(ctx, engine.white, 0.8);
    windSrc.connect(this.windBP); this.windBP.connect(this.wind); this.wind.connect(engine.out); this.wind.connect(engine.rev);
    // a second, whistling band
    this.whistle = ctx.createGain(); this.whistle.gain.value = 0.0;
    this.whistleBP = ctx.createBiquadFilter(); this.whistleBP.type = 'bandpass'; this.whistleBP.frequency.value = 1300; this.whistleBP.Q.value = 14;
    windSrc.connect(this.whistleBP); this.whistleBP.connect(this.whistle); this.whistle.connect(engine.rev);

    // --- tape hiss
    const hiss = ctx.createGain(); hiss.gain.value = 0.0045;
    const hissHP = ctx.createBiquadFilter(); hissHP.type = 'highpass'; hissHP.frequency.value = 5200;
    loop(ctx, engine.white, 1.3).connect(hissHP); hissHP.connect(hiss); hiss.connect(engine.out);
  }

  update(dt, game) {
    const ctx = this.ctx, now = ctx.currentTime, tc = 0.12;
    this.t += dt;
    const t = this.t;
    const ev = game.director.events;
    const node = game.world.current;
    const wrong = game.state.wrong;
    // hum follows the lighting: dips with brown-outs, crackles with the faulty tube
    const power = ev.pow;
    const flick = node ? node.flick.value : 1;
    const dark = node && node.p && node.p.lights && node.p.lights.dark ? 0.35 : 1;
    this.hum.gain.setTargetAtTime(0.05 * power * dark * (1 - wrong * 0.03), now, tc);
    this.buzz.gain.setTargetAtTime(0.004 + (flick < 0.5 ? 0.0 : 0.006) * power + (1 - power) * 0.01, now, 0.02);
    // rumble: always a little, much more while a train passes
    const train = game.trains ? game.trains.level : 0;
    this.rumble.gain.setTargetAtTime(0.16 + 0.1 * noise1(t * 0.13, 1) + train * 0.75, now, 0.3);
    this.rumbleLP.frequency.setTargetAtTime(62 + train * 120, now, 0.4);
    // wind: slow swells, gusting with the train; stronger on platforms
    const open = node && (node.def.type === 'platform' || node.def.type === 'trainstop') ? 1.5 : 1;
    const swell = 0.5 + 0.5 * noise1(t * 0.09, 2);
    this.wind.gain.setTargetAtTime((0.018 + 0.045 * swell * swell + train * 0.11) * open, now, 0.4);
    this.windBP.frequency.setTargetAtTime(300 + 420 * (0.5 + 0.5 * noise1(t * 0.17, 3)) + train * 500, now, 0.5);
    const wh = Math.max(0, noise1(t * 0.11, 4) - 0.35) + train * 0.25;
    this.whistle.gain.setTargetAtTime(wh * 0.05 * open, now, 0.6);
    this.whistleBP.frequency.setTargetAtTime(1100 + 500 * noise1(t * 0.23, 5), now, 0.8);
    // drips, somewhere down the tunnel
    this.nextDrip -= dt;
    if (this.nextDrip <= 0) {
      this.nextDrip = 3 + Math.random() * 14;
      this.engine.sfx('drip');
    }
  }
}
