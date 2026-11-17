// Public-address announcements: a chime, then a (synthesised) voice, with a
// subtitle on the camcorder display so the game is playable without sound.
// A rising chime marks a genuine announcement; a falling one is… not staff.
import { RNG } from '../util/rng.js';
import { AMBIENT, AMBIENT_ODD, AMBIENT_STRANGE } from './scripts.js';
import { nextStation } from './route.js';

export class Announcer {
  constructor(game) {
    this.game = game;
    this.reset();
  }

  reset() {
    this.rng = new RNG((this.game.state.seed || 1) ^ 0xa11ce);
    this.queue = [];
    this.cur = null;        // { text, tag, t, dur, phase }
    this.nextAmbient = 16;
    this.last = null;       // last junction announcement (for replay)
    if (this.game.audio) this.game.audio.stopSpeech();
  }

  // a: { text, chime: 'rise' | 'fall' | 'none', odd: bool, urgent: bool }
  say(a) {
    if (a.urgent) { this.queue.length = 0; if (this.cur) this.finish(); }
    this.queue.push(a);
  }

  busy() { return !!this.cur || this.queue.length > 0; }

  finish() {
    this.cur = null;
    this.game.audio.stopSpeech();
  }

  start(a) {
    const g = this.game;
    const words = a.text.split(/\s+/).length;
    const chimeDur = a.chime === 'none' ? 0 : 1.7;
    if (a.chime !== 'none') g.audio.sfx(a.chime === 'fall' ? 'chimeFall' : 'chimeRise');
    this.cur = {
      text: a.text, t: 0, chimeDur, dur: chimeDur + Math.max(3.2, words * 0.43) + 0.8, spoken: false, a,
      tag: a.tag !== undefined ? a.tag : a.chime === 'none' ? '' : a.chime === 'fall' ? '♪ chime, falling' : '♪ chime, rising',
    };
  }

  update(dt) {
    const g = this.game;
    if (!this.cur && this.queue.length) this.start(this.queue.shift());
    if (this.cur) {
      const c = this.cur;
      c.t += dt;
      if (!c.spoken && c.t >= c.chimeDur) {
        c.spoken = true;
        g.audio.speak(c.text, { odd: !!c.a.odd });
      }
      if (c.t >= c.dur) this.cur = null;
      return;
    }
    // ambient announcements, stranger as the station goes wrong
    this.nextAmbient -= dt;
    if (this.nextAmbient <= 0) {
      const wrong = g.state.wrong;
      this.nextAmbient = this.rng.range(38, 75);
      const roll = this.rng.next();
      let pool = AMBIENT, odd = false;
      if (roll < Math.min(0.8, wrong * 0.22)) { pool = wrong >= 3 && this.rng.chance(0.5) ? AMBIENT_STRANGE : AMBIENT_ODD; odd = true; }
      const station = g.state.station || 'this station';
      const text = this.rng.pick(pool).replaceAll('{station}', station).replaceAll('{next}', nextStation(station, 'north') || 'the next station');
      this.say({ text, chime: odd && this.rng.chance(0.6) ? 'fall' : 'rise', odd });
    }
  }

  // Subtitle for the overlay.
  caption() {
    const c = this.cur;
    if (!c) return null;
    if (c.t < c.chimeDur) return { text: '', tag: c.tag };
    return { text: `"${c.text}"`, tag: c.tag };
  }
}
