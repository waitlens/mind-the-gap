// Game: owns the renderer, the world, the player and the main loop.
import * as THREE from 'three';
import { CFG } from '../config.js';
import { Renderer } from '../render/renderer.js';
import { Overlay } from '../render/overlay.js';
import { worldUniforms } from '../render/materials.js';
import { World } from '../world/generator.js';
import { Player } from '../player/player.js';
import { setupKeyboard } from '../input/keyboard.js';
import { setupTouch } from '../input/touch.js';
import { Story } from './story.js';
import { Director } from './director.js';
import { Trains } from './trains.js';
import { AudioEngine } from '../audio/engine.js';
import { worldTextures, makeSheetFor, updateDynamic } from './textures.js';
import { clamp, noise1 } from '../util/rng.js';

export class Game {
  constructor(canvas, ui) {
    this.ui = ui;
    this.mobile = matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
    document.body.classList.toggle('is-touch', this.mobile);
    this.overlay = new Overlay();
    this.overlay.mobile = this.mobile;
    this.renderer = new Renderer(canvas, this.overlay, { mobile: this.mobile });
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(CFG.fov, this.renderer.aspect, 0.08, 90);
    this.player = new Player(this.camera);
    this.input = { mx: 0, mz: 0, run: false, lookX: 0, lookY: 0, kmx: 0, kmz: 0, krun: false, kturn: 0, tmx: 0, tmz: 0, trun: false };
    this.state = {
      started: false, paused: false, won: false, frame: 0, time: 0, fps: 0, drawCalls: 0, triangles: 0,
      nodes: 0, built: 0, x: 0, y: 0, z: 0, yaw: 0, progress: 0, goal: CFG.goal, wrong: 0, junctions: 0,
      wrongTurns: 0, cluesRead: 0, station: '', segment: '', caption: '', prompt: '', seed: 0, mobile: this.mobile,
      errors: 0, deadEnds: 0,
    };
    this.audio = new AudioEngine();
    this.story = new Story(this);
    this.world = new World(this.scene, {
      choose: (node, i, attempt, rng) => this.story.choose(node, i, attempt, rng),
      textures: (layer, node) => worldTextures(layer, node),
      makeSheet: (node) => makeSheetFor(node),
      onBuilt: (node) => this.story.onBuilt(node),
      onDisposed: (node) => this.story.onDisposed(node),
    });
    this.director = new Director(this);
    this.trains = new Trains(this);
    this.keyboard = setupKeyboard(this.input, canvas, {
      use: (down) => this.director.use(down),
      pause: () => this.togglePause(),
      // pause only when a lock we actually had is lost (Esc); a refused
      // lock just means the game carries on with the pointer free
      lockChange: (locked) => {
        if (locked) { this.hadLock = true; return; }
        if (this.hadLock) { this.hadLock = false; if (this.state.started && !this.state.won) this.pause(); }
      },
    });
    this.touch = setupTouch(this.input, {
      use: (down) => this.director.use(down),
      pause: () => this.togglePause(),
    });
    window.addEventListener('resize', () => this.resize());
    window.addEventListener('orientationchange', () => setTimeout(() => this.resize(), 250));
    document.addEventListener('visibilitychange', () => { if (document.hidden && this.state.started && !this.state.won) this.pause(); });
    this.last = performance.now();
    this.fpsAcc = 0; this.fpsN = 0;
    this.clock0 = new Date();
    this.reset();
    this.renderer.gl.setAnimationLoop((t) => this.frame(t));
  }

  resize() {
    this.renderer.resize();
    this.camera.aspect = this.renderer.aspect;
    this.camera.updateProjectionMatrix();
  }

  // (Re)build the world from a seed and put the player at the start.
  reset(seed, plan, wrong = 0, progress = 0) {
    this.state.seed = seed ?? (Math.floor(Math.random() * 1e9) | 0);
    this.story.reset(this.state.seed);
    this.story.progress = progress;   // tests can start further up the line
    this.story.wrong = wrong;   // tests can start with the station already strange
    this.story.base = wrong;
    const root = this.story.begin(this.world, plan);
    const sp = root.built && root.built.extra && root.built.extra.spawn;
    if (sp) {
      const c = Math.cos(root.yaw), s = Math.sin(root.yaw);
      this.player.spawn(root.pos.x + sp.x * c + sp.z * s, root.pos.y, root.pos.z - sp.x * s + sp.z * c, root.yaw + (sp.yaw || 0));
    } else this.player.spawn(root.pos.x, root.pos.y, root.pos.z + 1.5, root.yaw);
    Object.assign(this.state, { won: false, time: 0, progress, wrong, junctions: 0, wrongTurns: 0, cluesRead: 0, station: root.env.station });
    this.director.reset();
    if (this.trains) this.trains.reset();
  }

  start() {
    if (this.state.started && !this.state.won) { this.resume(); return; }
    if (this.state.won) { this.reset(); this.audio.fadeIn(); }
    this.state.started = true; this.state.paused = false;
    this.clock0 = new Date();
    this.audio.start();
    this.ui.showPlaying(this.mobile);
    if (!this.mobile) this.keyboard.requestLock();
    this.director.begin();
  }

  pause() {
    if (!this.state.started || this.state.paused || this.state.won) return;
    this.state.paused = true;
    this.audio.setPaused(true);
    this.ui.showPause();
  }

  resume() {
    if (!this.state.paused) return;
    this.state.paused = false;
    this.audio.setPaused(false);
    this.ui.showPlaying(this.mobile);
    if (!this.mobile) this.keyboard.requestLock();
  }

  togglePause() { if (this.state.paused) this.resume(); else this.pause(); }

  frame(now) {
    const st = this.state;
    const dt = clamp((now - this.last) / 1000, 0, 0.05);
    this.last = now;
    st.frame++;
    this.fpsAcc += dt; this.fpsN++;
    if (this.fpsAcc > 0.5) { st.fps = Math.round(this.fpsN / this.fpsAcc); this.fpsAcc = 0; this.fpsN = 0; }
    const live = st.started && !st.paused && !st.won;
    try {
      if (live) this.step(dt); else this.idle(dt);
    } catch (e) {
      st.errors++;
      if (st.errors < 5) console.error(e);
    }
    this.renderer.render(this.scene, this.camera, now / 1000);
    st.drawCalls = this.renderer.drawCalls; st.triangles = this.renderer.triangles;
  }

  step(dt) {
    const st = this.state, inp = this.input, p = this.player;
    st.time += dt;
    inp.mx = clamp(inp.kmx + inp.tmx, -1, 1); inp.mz = clamp(inp.kmz + inp.tmz, -1, 1);
    inp.run = inp.krun || inp.trun;
    inp.lookX += inp.kturn * 1.9 * dt;
    const walk = p.update(dt, inp, this.world);
    this.world.pump();
    this.trains.update(dt);
    this.director.update(dt, walk);
    this.animate(dt);
    st.x = +p.pos.x.toFixed(2); st.y = +p.pos.y.toFixed(2); st.z = +p.pos.z.toFixed(2); st.yaw = +p.yaw.toFixed(3);
    st.nodes = this.world.nodes.size; st.deadEnds = this.world.stats.deadEnds;
    st.segment = this.world.current ? this.world.current.def.type : '';
  }

  // Title / pause: slow drifting camera, world still flickers.
  idle(dt) {
    const p = this.player;
    p.t += dt;
    this.camera.position.set(p.pos.x, p.pos.y + CFG.eye, p.pos.z);
    this.camera.rotation.set(p.pitch + noise1(p.t * 0.3, 5) * 0.03, p.yaw + noise1(p.t * 0.21, 6) * 0.08, noise1(p.t * 0.25, 7) * 0.015);
    this.world.pump();
    this.animate(dt);
    this.director.drawOverlay(false);
  }

  // Per-frame world animation: flicker uniforms and dynamic textures.
  animate(dt) {
    const t = performance.now() / 1000;
    const wrong = this.state.wrong;
    let built = 0;
    for (const n of this.world.nodes.values()) {
      if (!n.built) continue;
      built++;
      // faulty tube: mostly on, with bursts of stutter
      const a = noise1(t * 1.3 + n.phase, 3), b = noise1(t * 23 + n.phase * 7, 4);
      n.flick.value = a > 0.15 - wrong * 0.04 ? (b > -0.2 ? 1 : 0.15) : (b > 0.55 ? 0.9 : 0.04);
    }
    this.state.built = built;
    worldUniforms.uPower.value = this.director.power(t, dt);
    updateDynamic(this, t);
  }
}
