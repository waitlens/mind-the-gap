// A per-segment canvas that signs, posters, maps and name boards are packed
// into. One texture and one draw call per segment. Packing is a small
// guillotine packer (best-area fit), so tall and wide pieces mix well.
import { makeCanvas, canvasTexture } from './canvas.js';

const PAD = 3;

export class Sheet {
  constructor(size = 512) {
    this.size = size;
    this.canvas = null;
    this.ctx = null;
    this.free = [{ x: 0, y: 0, w: size, h: size }];
    this.used = false;
    this.overflow = 0;
  }

  _ensure() {
    if (this.canvas) return;
    this.canvas = makeCanvas(this.size, this.size);
    this.ctx = this.canvas.getContext('2d');
  }

  _place(w, h) {
    let best = -1, bestArea = Infinity;
    for (let i = 0; i < this.free.length; i++) {
      const f = this.free[i];
      if (f.w >= w && f.h >= h && f.w * f.h < bestArea) { best = i; bestArea = f.w * f.h; }
    }
    if (best < 0) return null;
    const f = this.free.splice(best, 1)[0];
    const rw = f.w - w, rh = f.h - h;
    // split the leftover into two rectangles along the longer leftover side
    if (rw > rh) {
      if (rw > 8) this.free.push({ x: f.x + w, y: f.y, w: rw, h: f.h });
      if (rh > 8) this.free.push({ x: f.x, y: f.y + h, w, h: rh });
    } else {
      if (rh > 8) this.free.push({ x: f.x, y: f.y + h, w: f.w, h: rh });
      if (rw > 8) this.free.push({ x: f.x + w, y: f.y, w: rw, h });
    }
    return { x: f.x, y: f.y };
  }

  // Reserve w x h pixels and draw into them: draw(ctx, w, h) with the origin
  // at the region's top-left. Returns the uv rect [u0, v0, u1, v1].
  add(w, h, draw) {
    this._ensure();
    const S = this.size;
    w = Math.min(Math.round(w), S - PAD * 2); h = Math.min(Math.round(h), S - PAD * 2);
    let spot = this._place(w + PAD * 2, h + PAD * 2);
    if (!spot) {
      // out of room: shrink the piece until it fits somewhere (never fail)
      this.overflow++;
      for (let k = 0; k < 4 && !spot; k++) { w = Math.max(8, Math.round(w * 0.7)); h = Math.max(8, Math.round(h * 0.7)); spot = this._place(w + PAD * 2, h + PAD * 2); }
      if (!spot) spot = { x: 0, y: 0 };
    }
    const x = spot.x + PAD, y = spot.y + PAD;
    const ctx = this.ctx;
    ctx.save();
    ctx.translate(x, y);
    ctx.beginPath(); ctx.rect(0, 0, w, h); ctx.clip();
    ctx.clearRect(0, 0, w, h);
    draw(ctx, w, h);
    ctx.restore();
    this.used = true;
    const e = 0.5; // half-texel inset
    return [(x + e) / S, 1 - (y + h - e) / S, (x + w - e) / S, 1 - (y + e) / S];
  }

  finish() {
    if (!this.used) return null;
    return canvasTexture(this.canvas);
  }
}
