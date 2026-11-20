// Trains still run through after the last train. They are not in service:
// one comes out of the tunnel with a push of warm air, stops, keeps its
// doors shut, and leaves. If you are not on a platform when it is due you
// only hear it pass, somewhere.
import { getTrain, TRAIN } from '../world/train.js';
import { PF } from '../world/platform_shell.js';
import { MOUTH } from '../world/platform_end.js';
import { setBlind } from '../tex/train.js';
import { toWorld } from '../world/collide.js';
import { nextTrains } from './boards.js';
import { trainCall, trainCallWrong } from './route.js';
import { platformNo } from './line.js';
import { RNG, clamp, damp } from '../util/rng.js';
import { GHOST } from './scripts.js';

const T_APPROACH = 5.5, T_ARRIVE = 6.5, ACCEL = 1.0;
const PASS_V = 15;      // m/s: through a closed station without stopping
const MIND_THE_GAP = 'Please mind the gap between the train and the platform.';

export class Trains {
  constructor(game) {
    this.game = game;
    const { mesh, clip } = getTrain();
    this.mesh = mesh; this.clip = clip;
    game.scene.add(mesh);
    this.reset();
  }

  reset() {
    this.rng = new RNG((this.game.state.seed || 1) ^ 0x7a11);
    this.nextAt = 32; this.period = 215;      // the first one comes while you are still finding your feet
    this.phase = 'idle';        // idle | approach | arrive | dwell | depart | distant
    this.node = null; this.t = 0; this.s = 0;
    this.level = 0;             // 0..1: how much train there is in the air (rumble, wind, flicker)
    this.target = 0;
    this.seenId = 0; this.count = 0;
    this.mesh.visible = false;
    this.game.state.train = 'idle'; this.game.state.trains = 0;
  }

  schedule() { return { nextAt: this.nextAt, period: this.period }; }
  atPlatform() { return this.phase === 'dwell'; }
  // (tests) bring the next train forward
  soon(seconds = 3) { if (this.phase === 'idle') this.nextAt = this.game.state.time + seconds + T_APPROACH; }

  _done() {
    this.phase = 'idle'; this.node = null; this.mesh.visible = false; this.target = 0;
    this.nextAt = this.game.state.time + this.period * this.rng.range(0.8, 1.25);
  }

  _begin(node) {
    const g = this.game, st = g.state;
    const station = node.env.station, dir = node.p.dir;
    const tr = nextTrains(station, dir, this.schedule(), st.time, g.story.seed)[0];
    this.train = tr;
    this.node = node; this.phase = 'approach'; this.t = 0; this.count++;
    this.passing = !!node.p.ghost;     // South Kentish Town: nothing has stopped there since 1924
    st.trains = this.count;
    setBlind(tr.dest.replace('Battersea Power Station', 'Battersea'));
    g.audio.sfx('trainApproach');
    if (this.passing) { g.director.setHint(GHOST.train, 5); return; }
    g.director.announcer.say({ text: `The train now approaching platform ${platformNo(dir)} is not in service. Please stand well back from the platform edge.`, chime: 'rise' });
    g.director.setHint('A warm wind pushes out of the tunnel. It smells of brake dust.', 5);
  }

  update(dt) {
    const g = this.game, now = g.state.time, cur = g.world.current, ev = g.director.events;
    const onPlatform = !!(cur && (cur.def.type === 'platform' || cur.def.type === 'ghost') && cur.built);
    if (onPlatform && cur.id !== this.seenId) {       // just arrived on a platform: a train is never far off
      this.seenId = cur.id;
      if (this.phase === 'idle' && !cur.p.start) this.nextAt = Math.min(this.nextAt, now + T_APPROACH + (cur.p.ghost ? this.rng.range(6, 10) : this.rng.range(9, 20)));
    }
    this.t += dt;
    if (this.phase === 'idle') {
      if (now >= this.nextAt - T_APPROACH) {
        if (onPlatform) this._begin(cur);
        else { this.phase = 'distant'; this.t = 0; g.audio.sfx('train'); }
      }
    } else if (this.phase === 'distant') {
      this.target = 0.75 * Math.sin(clamp(this.t / 9, 0, 1) * Math.PI);
      if (this.t > 9) this._done();
    } else {
      const node = this.node;
      if (!node.built || !g.world.nodes.has(node.id)) { this._done(); return; }
      const L = node.p.L, stop = L - 1.3, s0 = -MOUTH.depth;
      if (this.phase === 'approach') {
        this.target = 0.75 * clamp(this.t / T_APPROACH, 0, 1);
        if (this.t >= T_APPROACH) {
          this.phase = this.passing ? 'pass' : 'arrive'; this.t = 0; this.mesh.visible = true; ev.glitch(0.5);
          if (this.passing) g.audio.sfx('train');
        }
      } else if (this.phase === 'pass') {
        // straight through at speed, lit windows and all
        this.s = s0 + PASS_V * this.t;
        this.target = 1;
        if (this.s - TRAIN.length > L + MOUTH.depth) { ev.glitch(0.4); g.state.trainsPassed = (g.state.trainsPassed || 0) + 1; this._done(); }
      } else if (this.phase === 'arrive') {
        const k = clamp(this.t / T_ARRIVE, 0, 1);
        this.s = s0 + (stop - s0) * (1 - (1 - k) * (1 - k));
        this.target = 1 - 0.7 * k;
        if (!this.braked && k > 0.45) { this.braked = true; g.audio.sfx('trainBrake'); }
        if (k >= 1) {
          this.phase = 'dwell'; this.t = 0; this.braked = false; this.spoke = 0;
        }
      } else if (this.phase === 'dwell') {
        this.target = 0.22;
        // platform PA, then the train's own voice, then the doors (each step
        // waits for the one before, using the announcer's own timing estimate)
        const an = g.director.announcer, est = (text) => Math.max(3.2, text.split(/\s+/).length * 0.43) + 0.8;
        const fromTrain = (text, urgent) => an.say({ text, chime: 'none', tag: '(from the train)', urgent });
        if (this.spoke === 0 && this.t > 0.4) {
          this.spoke = 1;
          an.say({ text: MIND_THE_GAP, chime: 'none', tag: '(platform)', urgent: true });
          this.tCall = this.t + est(MIND_THE_GAP) + 0.2;
        }
        if (this.spoke === 1 && this.t > this.tCall) {
          this.spoke = 2;
          const st = node.env.station, tr = this.train;
          const text = g.state.wrong >= 2.5 && this.rng.chance(0.5) ? trainCallWrong(st) : trainCall(st, node.p.dir, tr.dest, tr.via);
          fromTrain(text, true);
          this.tClose = this.t + est(text) + 0.3;
        }
        if (this.spoke === 2 && this.t > this.tClose) { this.spoke = 3; fromTrain('Stand clear of the doors, please.'); }
        if (this.spoke === 3 && this.t > this.tClose + 1.5) { this.spoke = 4; g.audio.sfx('doorChime'); }
        if (this.spoke === 4 && this.t > this.tClose + 5.0) { this.phase = 'depart'; this.t = 0; g.audio.sfx('trainDepart'); }
      } else if (this.phase === 'depart') {
        this.s = stop + 0.5 * ACCEL * this.t * this.t;
        this.target = clamp(0.3 + this.t * 0.12, 0, 1);
        if (this.s - TRAIN.length > L + MOUTH.depth) { ev.glitch(0.4); this._done(); }
      }
      if (this.node) {
        // place the mesh and its clip planes (every frame: the world may be re-based)
        const side = node.p.side;
        const [x, y, z] = toWorld(node, side * PF.track, 0, this.s);
        this.mesh.position.set(x, y, z); this.mesh.rotation.y = node.yaw;
        const nx = Math.sin(node.yaw), nz = Math.cos(node.yaw), base = node.pos.x * nx + node.pos.z * nz;
        this.clip.value.set(nx, nz, base - MOUTH.depth + 0.07, base + L + MOUTH.depth - 0.07);
      }
    }
    this.level = damp(this.level, this.target, this.target > this.level ? 2.2 : 0.9, dt);
    const here = onPlatform && this.node === cur;
    g.player.shake = this.level * (here ? 1 : 0.25);
    // the piston of air the train pushes ahead of it (and drags after it)
    // nudges the player along the platform in the direction of travel
    // (gently: about a metre and a half over the whole event, less while reading)
    const push = here && this.phase !== 'dwell' ? (this.phase === 'depart' ? 0.1 : 0.2) * this.level * (1 - 0.8 * g.player.zoom) : 0;
    g.player.windX = push ? Math.sin(cur.yaw) * push : 0;
    g.player.windZ = push ? Math.cos(cur.yaw) * push : 0;
    // never draw the train in a platform that is hidden (see World.cull)
    if (this.node && this.node.built && !this.node.built.group.visible) this.mesh.visible = false;
    else if (this.node && (this.phase === 'arrive' || this.phase === 'pass' || this.phase === 'dwell' || this.phase === 'depart')) this.mesh.visible = true;
    g.state.train = this.phase;
  }
}
