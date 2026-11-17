// A per-segment canvas that signs, posters and name boards are packed into
// (simple shelf packing). One texture and one draw call per segment.
import { makeCanvas, canvasTexture } from './canvas.js';

export class Sheet {
  constructor(size = 512) {
    this.size = size;
    this.canvas = null;
    this.ctx = null;
    this.x = 0; this.y = 0; this.rowH = 0;
    this.used = false;
  }

  _ensure() {
    if (this.canvas) return;
    this.canvas = makeCanvas(this.size, this.size);
    this.ctx = this.canvas.getContext('2d');
  }

  // Reserve w x h pixels and draw into them: draw(ctx, w, h) with the origin
  // at the region's top-left. Returns the uv rect [u0, v0, u1, v1].
  add(w, h, draw) {
    this._ensure();
    const S = this.size, pad = 3;
    w = Math.min(Math.round(w), S - pad * 2); h = Math.min(Math.round(h), S - pad * 2);
    if (this.x + w + pad > S) { this.x = 0; this.y += this.rowH + pad; this.rowH = 0; }
    if (this.y + h + pad > S) {
      // out of room: reuse the top-left region rather than failing
      this.x = 0; this.y = 0; this.rowH = 0;
      this.overflow = true;
    }
    const x = this.x + pad, y = this.y + pad;
    const ctx = this.ctx;
    ctx.save();
    ctx.translate(x, y);
    ctx.beginPath(); ctx.rect(0, 0, w, h); ctx.clip();
    ctx.clearRect(0, 0, w, h);
    draw(ctx, w, h);
    ctx.restore();
    this.x += w + pad;
    this.rowH = Math.max(this.rowH, h);
    this.used = true;
    const e = 0.5; // half-texel inset
    return [(x + e) / S, 1 - (y + h - e) / S, (x + w - e) / S, 1 - (y + e) / S];
  }

  finish() {
    if (!this.used) return null;
    return canvasTexture(this.canvas);
  }
}
