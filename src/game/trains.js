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
import { nextStation } from './route.js';
import { platformNo } from './line.js';
import { RNG, clamp, damp } from '../util/rng.js';

const T_APPROACH = 5.5, T_ARRIVE = 6.5, T_DWELL = 10.5, ACCEL = 1.0;

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
    this.nextAt = 75; this.period = 215;
    this.phase = 'idle';        // idle | approach | arrive | dwell | depart | distant
    this.node = null; this.t = 0; this.s = 0;
    this.level = 0;             // 0..1: how much train there is in the air (rumble, wind, flicker)
    this.target = 0;
    this.seenId = 0; this.count = 0;
    this.mesh.visible = false;
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
    st.trains = this.count;
    setBlind(tr.dest.replace('Battersea Power Station', 'Battersea'));
    g.audio.sfx('trainApproach');
    g.director.announcer.say({ text: `The train now approaching platform ${platformNo(dir)} is not in service. Please stand well back from the platform edge.`, chime: 'rise' });
    g.director.setHint('A warm wind pushes out of the tunnel. It smells of brake dust.', 5);
  }

  update(dt) {
    const g = this.game, now = g.state.time, cur = g.world.current, ev = g.director.events;
    const onPlatform = !!(cur && cur.def.type === 'platform' && cur.built);
    if (onPlatform && cur.id !== this.seenId) {       // just arrived on a platform: a train is never far off
      this.seenId = cur.id;
      if (this.phase === 'idle' && !cur.p.start) this.nextAt = Math.min(this.nextAt, now + T_APPROACH + this.rng.range(9, 20));
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
        if (this.t >= T_APPROACH) { this.phase = 'arrive'; this.t = 0; this.mesh.visible = true; ev.glitch(0.5); }
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
        const say = (text) => g.director.announcer.say({ text, chime: 'none', tag: '(from the train)' });
        if (this.spoke === 0 && this.t > 0.9) {
          this.spoke = 1;
          const st = node.env.station, tr = this.train;
          const next = nextStation(st, node.p.dir, tr.via || tr.dest) || st;
          const wrong = g.state.wrong;
          say(wrong >= 2.5 && this.rng.chance(0.5)
            ? `This is ${st}. The next station is ${st}. The doors will not open at this station.`
            : `This is ${st}. This is a Northern line train to ${tr.dest}${tr.via ? ` ${tr.via}` : ''}. The next station is ${next}. The doors will not open at this station.`);
        }
        if (this.spoke === 1 && this.t > T_DWELL - 2.6) { this.spoke = 2; g.audio.sfx('doorChime'); say('Stand clear of the doors, please.'); }
        if (this.t >= T_DWELL) { this.phase = 'depart'; this.t = 0; g.audio.sfx('trainDepart'); }
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
    g.player.shake = this.level * (onPlatform && this.node ? 1 : 0.25);
    g.state.train = this.phase;
  }
}
