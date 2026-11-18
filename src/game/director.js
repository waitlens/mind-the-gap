// Director: everything that happens *to* the player — reading signs,
// captions, junction decisions, eerie events, the ending.
import { toWorld } from '../world/collide.js';
import { Announcer } from './announcer.js';
import { Events } from './events.js';
import { checkTriggers } from './triggers.js';
import { enterJunction, helpPoint, commit } from './junctions.js';

export class Director {
  constructor(game) {
    this.game = game;
    this.announcer = new Announcer(game);
    this.events = new Events(game);
    this.reset();
  }

  reset() {
    this.target = null;      // interactable currently aimed at
    this.reading = null;     // { title, text, item, node }
    this.hint = '';
    this.hintT = 0;
    this.hints = [];
    this.firstJunction = true;
    this.scanT = 0;
    this.announcer.reset();
    this.events.reset();
  }

  begin() {
    this.events.begin();
    this.setHint(this.game.mobile ? 'Left thumb: walk · Right thumb: look' : 'WASD to walk · mouse to look · E to read signs', 7);
    this.queueHint('Mornington Crescent. Walk up the line to the way out. Staff notices explain how.', 8);
  }

  setHint(text, seconds = 5) { this.hint = text; this.hintT = seconds; }
  queueHint(text, seconds = 6) { this.hints.push([text, seconds]); }

  enterJunction(node) {
    enterJunction(this.game, node);
    if (this.firstJunction) {
      this.firstJunction = false;
      this.queueHint('One way is right. Read the signs, watch the clocks, listen for the chime.', 7);
    }
  }
  helpPoint(node) { helpPoint(this.game, node); }
  commit(node) { commit(this.game, node); }

  // The player has climbed out. White-out, then the end card.
  win() {
    const g = this.game, st = g.state;
    if (st.won) return;
    st.won = true;
    this.stopReading();
    this.announcer.reset();
    g.audio.sfx('dawn');
    g.audio.fadeOut(4);
    g.ui.whiteOut();
    if (g.keyboard) g.keyboard.release();
    const mm = Math.floor(st.time / 60), ss = Math.floor(st.time % 60);
    const stats = [
      ['Tape length', `${mm}:${String(ss).padStart(2, '0')}`],
      ['Junctions taken', String(st.junctions)],
      ['Sent back down the line', `${st.wrongTurns} time${st.wrongTurns === 1 ? '' : 's'}`],
      ['Notices read', String(st.cluesRead)],
      ['Distance walked', `${Math.round(g.player.walked)} m`],
    ];
    setTimeout(() => g.ui.showEnd(stats), 2600);
  }

  // Text of an item whose content is live (the indicator boards).
  liveText(item) {
    const s = this.game.story.boardState(performance.now() / 1000);
    const rows = item.dynamic === 'board2' ? s.rows2 : s.rows;
    return rows.slice(0, 3).map((r) => (r.r ? `${r.l} … ${r.r}` : r.l)).join('  /  ');
  }

  // E / READ button. Pressing toggles the caption card for what you aim at.
  use(down) {
    const g = this.game;
    if (!down || !g.state.started || g.state.paused || g.state.won) return;
    if (this.reading) { this.stopReading(); return; }
    if (!this.target) return;
    const { item, node } = this.target;
    this.reading = { title: item.title || '', text: item.dynamic ? this.liveText(item) : (item.text || ''), item, node };
    g.player.zoomTarget = 1;
    g.audio.sfx('zoom');
    if (!item.seen) {
      item.seen = true;
      if (item.clue) g.state.cluesRead++;
    }
    if (item.onRead) item.onRead(g, item, node);
  }

  stopReading() {
    this.reading = null;
    this.game.player.zoomTarget = 0;
  }

  // Find the best interactable in front of the camera.
  scan() {
    const g = this.game, p = g.player, world = g.world;
    const dir = p.viewDir();
    const ex = p.pos.x, ey = p.eyeY, ez = p.pos.z;
    let best = null, bestScore = 0;
    const nodes = [world.current, ...world.neighbours(world.current)];
    for (const n of nodes) {
      if (!n.built) continue;
      for (const it of n.built.items) {
        if (it.hidden) continue;
        const [wx, wy, wz] = toWorld(n, it.x, it.y, it.z);
        const dx = wx - ex, dy = wy - ey, dz = wz - ez;
        const d = Math.hypot(dx, dy, dz);
        if (d > (it.r || 5.5) || d < 0.2) continue;
        const dot = (dx * dir.x + dy * dir.y + dz * dir.z) / d;
        const need = it.cone || 0.9;
        if (dot < need) continue;
        const score = dot - d * 0.01;
        if (score > bestScore) { bestScore = score; best = { item: it, node: n, d, dot }; }
      }
    }
    this.target = best;
    if (this.reading) {
      // let go when the player walks off or looks away
      const r = this.reading;
      const [wx, wy, wz] = toWorld(r.node, r.item.x, r.item.y, r.item.z);
      const dx = wx - ex, dy = wy - ey, dz = wz - ez;
      const d = Math.hypot(dx, dy, dz);
      const dot = (dx * dir.x + dy * dir.y + dz * dir.z) / Math.max(d, 0.001);
      if (d > (r.item.r || 5.5) + 1.5 || dot < 0.55 || !r.node.built) this.stopReading();
    }
  }

  update(dt, walk) {
    const g = this.game;
    this.scanT -= dt;
    if (this.scanT <= 0) { this.scanT = 0.1; this.scan(); }
    if (this.hintT > 0) { this.hintT -= dt; if (this.hintT <= 0) this.hint = ''; }
    if (this.hintT <= 0 && this.hints.length) { const [t, s] = this.hints.shift(); this.setHint(t, s); }
    if (walk.step) g.audio.footstep(walk.running, g.player.loc);
    checkTriggers(g, dt);
    this.announcer.update(dt);
    this.events.update(dt);
    g.audio.update(dt, g);
    this.drawOverlay(true);
  }

  // Global lighting power (brown-outs) — owned by the events module.
  power(t, dt) { return this.events.power(t, dt); }

  drawOverlay(live) {
    const g = this.game, st = g.state;
    const now = new Date();
    let prompt = '';
    if (live && this.target && !this.reading) {
      prompt = g.mobile ? `[READ] ${this.target.item.label || 'read'}` : `[E] ${this.target.item.label || 'read'}`;
    }
    const cap = this.announcer.caption();
    st.caption = cap ? cap.text : '';
    st.prompt = prompt;
    st.reading = this.reading ? this.reading.text : '';
    g.overlay.draw({
      t: st.time, date: now, live: st.started,
      caption: cap ? cap.text : '', captionTag: cap ? cap.tag : '',
      prompt, reading: this.reading, zoom: g.player.zoom, hint: live ? this.hint : '',
    });
    const dv = g.renderer.dv.uniforms;
    dv.uTrack.value = this.events.tracking;
    dv.uZoom.value = g.player.zoom;
  }
}
