// Camcorder on-screen display: REC lamp, tape counter, DV date stamp,
// subtitles for announcements and whatever the player is reading.
// Drawn on a 2-D canvas and composited inside the DV pass, so it picks up
// the same scanlines and colour fringing as the picture.
import * as THREE from 'three';
import { makeCanvas, OSD_FONT, wrapLines } from '../tex/canvas.js';
import { MONTHS } from '../config.js';

const pad2 = (n) => String(n).padStart(2, '0');

export class Overlay {
  constructor() {
    this.canvas = makeCanvas(64, 64);
    this.ctx = this.canvas.getContext('2d');
    this.texture = new THREE.CanvasTexture(this.canvas);
    this.texture.colorSpace = THREE.NoColorSpace;
    this.texture.generateMipmaps = false;
    this.texture.minFilter = THREE.LinearFilter;
    this.texture.magFilter = THREE.LinearFilter;
    this.sig = '';
    this.mobile = false;
  }

  resize(iw, ih) {
    const k = Math.min(2, 1400 / iw);
    this.canvas.width = Math.round(iw * k);
    this.canvas.height = Math.round(ih * k);
    this.texture.dispose();
    this.sig = '';
  }

  text(str, x, y, size, align = 'left', color = '#fff') {
    const c = this.ctx;
    c.font = `400 ${size}px ${OSD_FONT}`;
    c.textAlign = align; c.textBaseline = 'alphabetic';
    c.lineWidth = Math.max(2, size * 0.16); c.strokeStyle = 'rgba(0,0,0,0.85)'; c.lineJoin = 'round';
    c.strokeText(str, x, y);
    c.fillStyle = color; c.fillText(str, x, y);
  }

  // o: { t, date, live, caption, captionTag, prompt, reading:{title,lines}, zoom, hint }
  draw(o) {
    const sec = Math.floor(o.t), blink = Math.floor(o.t * 2) % 2;
    const sig = [sec, blink, o.live, o.caption, o.captionTag, o.prompt, o.reading && o.reading.title + o.reading.text,
      Math.round((o.zoom || 0) * 10), o.hint, this.canvas.width].join('|');
    if (sig === this.sig) return;
    this.sig = sig;
    const c = this.ctx, W = this.canvas.width, H = this.canvas.height;
    c.clearRect(0, 0, W, H);
    const portrait = H > W;
    const u = Math.min(W, H) / (portrait ? 300 : 400); // layout unit
    const m = 18 * u, fs = 22 * u;

    if (o.live) {
      // REC lamp + tape counter
      if (blink) { c.fillStyle = '#ff2a1a'; c.beginPath(); c.arc(m + fs * 2.05, m + fs * 0.42, fs * 0.3, 0, 7); c.fill(); }
      this.text('REC', m, m + fs * 0.75, fs, 'left', '#fff');
      const hh = Math.floor(sec / 3600), mm = Math.floor(sec / 60) % 60, ss = sec % 60;
      this.text(`${hh}:${pad2(mm)}:${pad2(ss)}`, m, m + fs * 1.75, fs * 0.9);
      // battery + tape mode
      const bx = W - m - fs * 1.9, by = m + fs * 0.12;
      c.strokeStyle = '#fff'; c.lineWidth = Math.max(2, u * 2); c.strokeRect(bx, by, fs * 1.7, fs * 0.66);
      c.fillStyle = '#fff'; c.fillRect(bx + fs * 1.7, by + fs * 0.2, fs * 0.14, fs * 0.26);
      const bars = Math.max(1, 3 - Math.floor(sec / 600));
      for (let i = 0; i < bars; i++) c.fillRect(bx + fs * 0.12 + i * fs * 0.52, by + fs * 0.12, fs * 0.4, fs * 0.42);
      this.text('SP', bx - fs * 0.5, m + fs * 0.75, fs, 'right');
      // DV date stamp
      const d = o.date;
      const h12 = d.getHours() % 12 || 12, ap = d.getHours() < 12 ? 'AM' : 'PM';
      // (on touch screens the bottom corners belong to the thumbs, so the
      // stamp moves up under the battery)
      const dy = this.mobile ? m + fs * 2.75 : H - m;
      this.text(`${MONTHS[d.getMonth()]} ${pad2(d.getDate())} ${d.getFullYear()}`, W - m, dy - fs * 1.05, fs, 'right');
      this.text(`${h12}:${pad2(d.getMinutes())}:${pad2(d.getSeconds())} ${ap}`, W - m, dy, fs, 'right');
      // viewfinder centre mark
      c.strokeStyle = 'rgba(255,255,255,0.55)'; c.lineWidth = Math.max(1.5, u * 1.5);
      const cx = W / 2, cy = H / 2, r = 7 * u;
      c.beginPath(); c.moveTo(cx - r, cy); c.lineTo(cx - r * 0.35, cy); c.moveTo(cx + r * 0.35, cy); c.lineTo(cx + r, cy);
      c.moveTo(cx, cy - r); c.lineTo(cx, cy - r * 0.35); c.moveTo(cx, cy + r * 0.35); c.lineTo(cx, cy + r); c.stroke();
      if (o.zoom > 0.05) {
        const zx = m, zy = this.mobile ? m + fs * 3.0 : H - m - fs * 0.3, zw = fs * 4;
        this.text('W', zx, zy, fs * 0.8); this.text('T', zx + zw + fs * 0.9, zy, fs * 0.8);
        c.strokeStyle = '#fff'; c.strokeRect(zx + fs * 0.6, zy - fs * 0.45, zw, fs * 0.36);
        c.fillStyle = '#fff'; c.fillRect(zx + fs * 0.6, zy - fs * 0.45, zw * o.zoom, fs * 0.36);
      }
    }

    const cs = (portrait ? 21 : 24) * u;
    let bottom = H - m - fs * (portrait ? 2.6 : 2.3);
    if (this.mobile) bottom = H * (portrait ? 0.74 : 0.86);
    if (o.reading) {
      // what the camera is pointed at, as a caption card
      // Long texts (line diagrams) are set smaller and sit at the bottom, so
      // the thing being read stays visible above the card.
      const long = o.reading.text.length > 170;
      let rs = long ? cs * 0.74 : cs, lines;
      for (let k = 0; k < 6; k++) {
        c.font = `400 ${rs}px ${OSD_FONT}`;
        lines = wrapLines(c, o.reading.text, W * (long ? 0.9 : 0.8));
        if ((lines.length + 1.6) * rs * 1.02 < H * (portrait ? 0.42 : 0.46)) break;
        rs *= 0.9;
      }
      const bh = (lines.length + (o.reading.title ? 1.3 : 0.3)) * rs * 1.02 + rs * 0.5;
      const by = long ? bottom - bh + (this.mobile ? 0 : fs * 1.1) : Math.min(bottom - bh, H * 0.62);
      const bx = long ? W * 0.03 : W * 0.07;
      c.fillStyle = `rgba(0,0,0,${long ? 0.72 : 0.62})`; c.fillRect(bx, by, W - bx * 2, bh);
      let y = by + rs * 1.0;
      if (o.reading.title) { this.text(o.reading.title, W / 2, y, rs * 0.82, 'center', '#ffd329'); y += rs * 1.1; }
      for (const ln of lines) { this.text(ln, long ? bx + rs * 0.6 : W / 2, y, rs, long ? 'left' : 'center'); y += rs * 1.02; }
      bottom = by - cs * 0.4;
    } else if (o.prompt) {
      this.text(o.prompt, W / 2, H * 0.5 + 34 * u, cs * 0.9, 'center', '#ffd329');
    }
    if (o.caption) {
      c.font = `400 ${cs}px ${OSD_FONT}`;
      const lines = wrapLines(c, o.caption, W * 0.84);
      let y = bottom - (lines.length - 1) * cs * 1.02;
      if (o.captionTag) this.text(o.captionTag, W / 2, y - cs * 1.08, cs * 0.8, 'center', '#9fd8ff');
      for (const ln of lines) { this.text(ln, W / 2, y, cs, 'center'); y += cs * 1.02; }
    }
    if (o.hint) this.text(o.hint, W / 2, m + fs * 3.2, cs * 0.85, 'center', 'rgba(255,255,255,0.85)');
    this.texture.needsUpdate = true;
  }
}
