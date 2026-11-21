// The lift's working (world/seg_lift.js builds it). Automatic service: the
// doors open as you walk up; once you are inside and clear of them the lift
// says its piece, shuts them, and takes you to the other landing; you leave
// by the far door, which shuts behind you. Nobody can walk out mid-ride:
// a shut door is a wall.
//
// The ride itself: the segment has the car twice, one copy at each level.
// Halfway through, with every door shut, the rider is lifted from one copy
// to the other in a single frame — same place in the same lit box — while
// the hum, the shake and the lamp stepping along its column carry on.
import { toLocal } from '../world/collide.js';
import { placeVertices } from '../world/builder.js';
import { LIFT } from '../world/lift_car.js';
import { LIFT_TEXT } from './scripts.js';
import { clamp, smoothstep, hash32 } from '../util/rng.js';

const T_OPEN = 1.7, T_CLOSE = 2.2, SPEED = 1.6;      // seconds, seconds, metres a second
const fresh = () => ({ st: 'idle', t: 0, a: 0, b: 0, lv: 0, lamp: 0 });
const stateOf = (node) => node.lift || (node.lift = fresh());
const home = (node) => (node.p.dir > 0 ? 0 : 6);      // the lamp for the landing you board from

// def.layerVisible: the two working doors (only the one on the rider's
// level is drawn), and everything that lights up.
export function liftLayerVisible(layer, node) {
  const s = stateOf(node);
  if (layer === 'liftA') return s.lv === 0;
  if (layer === 'liftB') return s.lv === 1;
  if (!layer.startsWith('liftd:')) return true;
  const k = layer.slice(6);
  if (k === 'land') return s.st === 'idle' || s.st === 'closingB' || (s.st === 'gone' && s.t < 7);
  if (k === 'ride') return s.st === 'ride';
  if (k === 'close') return s.st === 'closing' || s.st === 'closingB' || s.st === 'held';
  if (k === 'next') return s.st === 'opening' || s.st === 'open' || s.st === 'warn';
  return k === `p${s.lamp}`;
}

// Bring a built lift into line with its state: lights, door panels, door walls.
function apply(node) {
  const s = stateOf(node), bt = node.built, ex = bt.extra.lift;
  for (const m of bt.group.children) if (m.name.startsWith('lift')) m.visible = liftLayerVisible(m.name, node);
  for (const [name, open] of [['liftA', s.a], ['liftB', s.b]]) {
    const d = ex.doors[name], m = bt.group.children.find((q) => q.name === name);
    if (!m || d.at === open) continue;
    const local = m.geometry.userData.local, pos = m.geometry.attributes.position;
    if (!d.base) d.base = d.travel.map((_, i) => local[i * 3]);
    for (let i = 0; i < d.travel.length; i++) local[i * 3] = d.base[i] + d.travel[i] * open;
    placeVertices(pos.array, local, { x: node.pos.x, y: node.pos.y, z: node.pos.z, yaw: node.yaw });
    pos.needsUpdate = true; m.geometry.computeBoundingSphere();
    d.at = open;
  }
  const passA = s.st === 'open' || s.st === 'warn' || (s.st === 'opening' && s.a > 0.6), passB = s.st === 'openB' || (s.st === 'openingB' && s.b > 0.6);
  const key = (passA ? 1 : 0) + (passB ? 2 : 0);
  if (ex.pass !== key) { ex.pass = key; bt.walls = ex.fixed.concat(passA ? [] : [ex.shutA], passB ? [] : [ex.shutB]); }
}

const ease = (u) => smoothstep(0, 1, clamp(u, 0, 1));

export class Lifts {
  constructor(game) { this.game = game; this.reset(); }
  reset() { this.rides = 0; this.lastOdd = null; this.force = null; Object.assign(this.game.state, { lift: '', liftRides: 0, liftOdd: '' }); }

  say(text, dur) {
    const an = this.game.director.announcer;
    an.quiet(dur + 6);
    an.say({ text, chime: 'none', tag: '(the lift)', urgent: true, dur });
  }

  // What this lift will say on this ride: the lines of the two moments it
  // speaks at, each [seconds in, text, how long it takes]. Usually just the
  // real ones. But not on your first ride, and then about one ride in three
  // (three in five once you have gone wrong twice), it adds a sentence of its
  // own — same voice, same pace, after the real line and a beat of silence,
  // so that it lands. "It was always going down" waits for a third wrong
  // turn and a lift that is going down.
  script(n) {
    const T = LIFT_TEXT, O = T.odd, st = this.game.state, dirLine = n.p.dir > 0 ? T.up : T.down;
    let odd = this.force || null;
    if (!odd && this.rides > 0 && n.p.odd < (st.wrongTurns >= 2 ? 0.6 : 1 / 3)) {
      const pool = ['select', 'expected', 'know'].filter((k) => k !== this.lastOdd);
      odd = st.wrongTurns >= 3 && n.p.dir < 0 && hash32(n.seed, 31) % 10 < 3 ? 'always' : pool[hash32(n.seed, 4711) % pool.length];
    }
    if (odd === 'always' && n.p.dir > 0) odd = 'know';      // (only a lift that is going down can say it)
    if (odd) this.lastOdd = odd;
    const warn = odd === 'select' ? [[0, O.select[0], 2.7], [3.2, O.select[1], 2.9]]
      : odd === 'expected' ? [[0, T.clear, 2.3], [3.0, O.expected, 2.8]] : [[0, T.clear, 2.2]];
    const ride = odd === 'know' ? [[0, dirLine, 2.2], [3.0, O.know, 2.7]]
      : odd === 'always' ? [[0, T.down, 2.2], [3.2, O.always, 2.6]] : [[0, dirLine, 2.4]];
    const last = warn[warn.length - 1];
    return { odd, warn, warnEnd: last[0] + last[2] + 0.2, ride };
  }

  update(dt) {
    const g = this.game;
    let shake = 0, near = null;
    for (const n of g.world.nodes.values()) {
      if (n.def.type !== 'lift' || !n.built) continue;
      shake = Math.max(shake, this.tick(n, dt));
      apply(n);
      if (n === g.world.current) near = n;
    }
    if (shake > 0) g.player.shake = Math.max(g.player.shake || 0, shake);
    g.state.lift = near ? near.lift.st : '';
    g.state.liftOdd = (near && near.lift.script && near.lift.script.odd) || '';
  }

  // One lift, one frame. Returns how hard the car is shaking the rider.
  tick(n, dt) {
    const s = stateOf(n), g = this.game, p = g.player, { ZA, ZC0, ZC1, ZB } = LIFT, rise = n.p.rise;
    const here = g.world.current === n, [, lz] = toLocal(n, p.pos.x, p.pos.z), ly = p.pos.y - n.pos.y;
    const at0 = here && Math.abs(ly) < 1.2, at1 = here && Math.abs(ly - rise) < 1.2;
    const inCar = here && lz > ZC0 + 0.35 && lz < ZC1 + 0.05;      // well inside: clear of the door that is about to shut
    const aboard = here && lz > ZA + 0.2 && lz < ZB - 0.2;          // anywhere between the two doors
    const go = (st) => { s.st = st; s.t = 0; };
    // (say each line of a list as its time comes up)
    const speak = (list) => { for (const [at, text, dur] of list) if (s.t - dt <= at && s.t > at) this.say(text, dur); };
    s.t += dt;
    let shake = 0;
    if (s.st === 'idle') {
      // the car is on its way back to this landing: the lamp steps towards it
      s.lamp = home(n) + Math.sign(n.p.dir) * (2 - (Math.floor(s.t / 0.8) % 3));
      if (at0 && lz > 0.3 && lz < ZA + 0.1) { go('opening'); s.lamp = home(n); g.audio.sfx('liftDing'); g.audio.sfx('liftDoor', { dur: T_OPEN }); g.director.setHint(LIFT_TEXT.hint, 5); }
    } else if (s.st === 'opening') {
      s.a = ease(s.t / T_OPEN);
      if (s.t >= T_OPEN) go('open');
    } else if (s.st === 'open') {
      if (!(inCar && at0)) s.t = 0;
      else if (s.t > 1.1) { go('warn'); s.script = s.script || this.script(n); }
    } else if (s.st === 'warn') {
      speak(s.script.warn);
      if (!(inCar && at0)) go('open');
      else if (s.t > s.script.warnEnd) { go('closing'); this.say(LIFT_TEXT.closing, 1.6); }
    } else if (s.st === 'closing') {
      if (s.t - dt < 0.45 && s.t >= 0.45) g.audio.sfx('liftDoor', { dur: T_CLOSE, shut: true });
      s.a = 1 - ease((s.t - 0.45) / T_CLOSE);
      if (s.t >= 0.45 + T_CLOSE) { s.a = 0; go('shut'); }
    } else if (s.st === 'shut') {
      if (s.t > 0.55) {
        go('ride'); s.T = n.p.h / SPEED;
        s.script = s.script || this.script(n);
        g.audio.sfx('liftHum', { dur: s.T });
        if (aboard) p.eyeY -= 0.035 * n.p.dir;                   // the floor pushes off
      }
    } else if (s.st === 'ride') {
      const u = clamp(s.t / s.T, 0, 1);
      speak(s.script.ride);
      s.lamp = Math.round(home(n) + Math.sign(n.p.dir) * 6 * ease(u));
      shake = 0.42 * clamp(Math.min(s.t / 0.7, (s.T - s.t) / 0.7), 0, 1);
      if (s.lv === 0 && u >= 0.5) {
        s.lv = 1;
        if (aboard && at0) { p.pos.y += rise; p.eyeY += rise; }  // from the lower copy of the car to the upper (or the other way)
      }
      if (u >= 1) {
        go('openingB');
        g.audio.sfx('liftDing', { arrive: true });
        if (aboard) p.eyeY += 0.03 * n.p.dir;                    // …and settles
        this.rides++; g.state.liftRides = this.rides;
      }
    } else if (s.st === 'openingB') {
      if (s.t - dt < 0.5 && s.t >= 0.5) g.audio.sfx('liftDoor', { dur: T_OPEN });
      s.b = ease((s.t - 0.5) / T_OPEN);
      if (s.t >= 0.5 + T_OPEN) go('openB');
    } else if (s.st === 'openB') {
      // you have got out and walked on (or gone altogether): it shuts behind you
      if (!here || (at1 && lz > ZB + 1.7)) { go('closingB'); g.audio.sfx('liftDoor', { dur: T_CLOSE, shut: true, far: true }); }
    } else if (s.st === 'closingB') {
      s.b = 1 - ease(s.t / T_CLOSE);
      if (s.t >= T_CLOSE) { s.b = 0; go('gone'); }
    } else if (s.st === 'gone') {
      // going back for whoever is next: the lamp runs back along its column
      s.lamp = Math.round(home(n) + Math.sign(n.p.dir) * 6 * (1 - ease(s.t / 7)));
    }
    return shake;
  }
}

// Tests and screenshots: put the lift the player is in (or the nearest built
// one) into a state. 'idle' | 'open' | 'board' | 'half' | 'ride' | 'arrive'; no argument just reports.
export function liftDebug(game, cmd, opts = {}) {
  const world = game.world, p = game.player;
  let n = world.current;
  if (!n || n.def.type !== 'lift') n = [...world.nodes.values()].filter((q) => q.def.type === 'lift' && q.built).sort((a, b) => a.dist - b.dist)[0];
  if (!n) return null;
  const s = stateOf(n), c = Math.cos(n.yaw), sn = Math.sin(n.yaw);
  const put = (lz, ly, lx = 0) => { p.spawn(n.pos.x + lx * c + lz * sn, n.pos.y + ly, n.pos.z - lx * sn + lz * c, n.yaw); p.loc = null; world.current = n; world.refresh(true); };
  const z = opts.z ?? LIFT.ZC0 + 1.2;
  // opts.odd (with any command, or as the command): what the lift adds on its next ride —
  // 'select' | 'expected' | 'know' | 'always', or false for nothing
  if (opts.odd !== undefined && game.lifts) game.lifts.force = opts.odd || null;
  if (cmd === 'idle') Object.assign(s, fresh());
  if (cmd === 'open') Object.assign(s, fresh(), { st: 'open', a: 1, lamp: home(n) });
  if (cmd === 'board') { Object.assign(s, fresh(), { st: 'open', a: 1, lamp: home(n), t: 1 }); put(z, 0, opts.x); }
  if (cmd === 'half') { Object.assign(s, fresh(), { st: 'held', a: opts.a ?? 0.45, lamp: home(n) }); put(z, 0, opts.x); }      // (the doors stopped part-way, for a picture)
  if (cmd === 'ride') { Object.assign(s, fresh(), { st: 'shut', t: 0.5, lamp: home(n) }); put(z, 0, opts.x); }
  if (cmd === 'arrive') { Object.assign(s, fresh(), { st: 'openB', b: 1, lv: 1, lamp: 6 - home(n) }); put(z, n.p.rise, opts.x); }
  if (cmd && n.built) apply(n);
  const ms = n.built ? n.built.group.children : [];
  return {
    st: s.st, odd: (s.script && s.script.odd) || null, force: game.lifts ? game.lifts.force : null, t: +s.t.toFixed(2), a: +s.a.toFixed(2), b: +s.b.toFixed(2), lv: s.lv, lamp: s.lamp, dir: n.p.dir, rise: n.p.rise, rides: game.lifts ? game.lifts.rides : 0,
    // (what it costs to draw: the layers showing now, and all its triangles)
    layers: ms.filter((m) => m.visible).map((m) => m.name), tris: ms.reduce((a, m) => a + m.geometry.index.count / 3, 0),
  };
}
