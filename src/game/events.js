// Eerie, harmless happenings: tape tracking wobbles, brown-outs, a train
// that passes somewhere it cannot be. Nothing here can hurt the player.
import { RNG, clamp, damp, noise1 } from '../util/rng.js';

export class Events {
  constructor(game) {
    this.game = game;
    this.reset();
  }

  reset() {
    this.rng = new RNG((this.game.state.seed || 1) ^ 0x51ed);
    this.tracking = 0;        // DV tracking error 0..1
    this.trackT = 0;
    this.nextTrack = 12;
    this.dip = 0;             // brown-out depth 0..1
    this.dipT = 0;
    this.nextDip = 40;
    this.pow = 1;
    this.blackout = 0;        // seconds of full darkness left
    this.walkT = 0;           // how long the player has been walking
    this.echo = [];           // pending footsteps that are not the player's
    this.echoT = 0;
  }

  begin() {
    // the tape starts with a wobble, as if the camera was just switched on
    this.trackT = 1.0;
  }

  // Force a tracking glitch (used on wrong turns, gates, the figure).
  glitch(seconds = 0.8) { this.trackT = Math.max(this.trackT, seconds); }
  brownOut(seconds = 1.2) { this.dipT = Math.max(this.dipT, seconds); }
  lightsOut(seconds = 1.5) { this.blackout = Math.max(this.blackout, seconds); }

  // The figure at the end of the platform is gone the moment you get close.
  figureGone(node) {
    if (node.figureGone) return;
    node.figureGone = true;
    if (node.built && node.built.figure) node.built.figure.visible = false;
    this.glitch(0.9);
    this.lightsOut(0.22);
    this.game.audio.sfx('dip');
    this.game.state.figures = (this.game.state.figures || 0) + 1;
  }

  update(dt) {
    const g = this.game, wrong = g.state.wrong;
    // --- tracking wobble
    this.nextTrack -= dt;
    if (this.nextTrack <= 0) {
      this.trackT = this.rng.range(0.4, 1.3);
      this.nextTrack = this.rng.range(14, 38) / (1 + wrong * 0.35);
    }
    if (this.trackT > 0) this.trackT -= dt;
    this.tracking = damp(this.tracking, this.trackT > 0 ? 1 : 0, this.trackT > 0 ? 14 : 5, dt);
    // --- brown-outs
    this.nextDip -= dt;
    if (this.nextDip <= 0) {
      this.dipT = this.rng.range(0.5, 1.8);
      this.nextDip = this.rng.range(35, 80) / (1 + wrong * 0.4);
      g.audio.sfx('dip');
    }
    if (this.dipT > 0) this.dipT -= dt;
    if (this.blackout > 0) this.blackout -= dt;
    // --- when the station is strange enough, your footsteps do not always
    //     stop when you do
    const moving = g.player.speed > 0.8;
    if (moving) this.walkT += dt;
    else {
      if (this.walkT > 3.5 && wrong >= 1.5 && this.rng.chance(0.3 + wrong * 0.08)) this.echo = [0.42, 0.95];
      this.walkT = 0;
    }
    if (this.echo.length) {
      this.echoT += dt;
      if (this.echoT >= this.echo[0]) { this.echo.shift(); g.audio.sfx('echoStep'); if (!this.echo.length) this.echoT = 0; }
    } else this.echoT = 0;
  }

  // Lighting power for this frame.
  power(t, dt) {
    let target = 1;
    if (this.dipT > 0) target = 0.35 + 0.3 * noise1(t * 18, 9);
    const train = this.game.trains ? this.game.trains.level : 0;
    if (train > 0.02) target *= 1 - 0.22 * train * (0.5 + 0.5 * noise1(t * 14, 4));   // lights shiver as a train passes
    if (this.blackout > 0) target = 0.02;
    this.pow = damp(this.pow, target, 20, dt || 0.016);
    return this.pow;
  }
}
