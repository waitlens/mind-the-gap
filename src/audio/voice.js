// Pre-recorded PA lines (Microsoft en-GB Sonia, see tools/record_voice.py),
// so every device hears the same woman. Anything not recorded falls back to
// the browser's own speech synthesis.
const CLIP_DIR = './voice/';
const SILENCE = 'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQAAAAA=';
export function clipKey(t) {
  let h = 0x811c9dc5;
  for (let i = 0; i < t.length; i++) { h ^= t.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; }
  return h.toString(16).padStart(8, '0');
}

// Spoken announcements through the browser's speechSynthesis, preferring a
// British English voice. Fails silently where speech is unavailable — the
// subtitles carry the same information.
// Always a woman's voice, so phones and computers sound the same: British
// female voices first, then other English female voices that ship by default
// (iOS always has Samantha; Windows has Zira), never a male one if avoidable.
const PREFERRED = ['Google UK English Female', 'Microsoft Sonia', 'Microsoft Libby', 'Microsoft Hazel', 'Microsoft Susan',
  'Microsoft Maisie', 'Martha', 'Kate', 'Serena', 'Stephanie', 'Fiona', 'Moira', 'Karen', 'Tessa', 'Catherine',
  'Samantha', 'Victoria', 'Allison', 'Ava', 'Susan', 'Zoe', 'Microsoft Zira', 'Microsoft Aria', 'Microsoft Jenny',
  'Google US English'];
const MALE = /\b(male|daniel|arthur|oliver|ryan|george|thomas|alex|fred|aaron|gordon|lee|rishi|david|mark|guy|james|tom)\b/i;

export class Voice {
  constructor() {
    this.enabled = true;
    this.voice = null;
    this.synth = typeof window !== 'undefined' && 'speechSynthesis' in window ? window.speechSynthesis : null;
    this.clips = null; this.el = null;
    if (typeof Audio !== 'undefined') {
      try { this.el = new Audio(); this.el.preload = 'auto'; } catch { this.el = null; }
      fetch(`${CLIP_DIR}index.json`).then((r) => (r.ok ? r.json() : [])).then((ks) => { this.clips = new Set(ks); }).catch(() => {});
    }
    if (this.synth) {
      this.pickVoice();
      try { this.synth.addEventListener('voiceschanged', () => this.pickVoice()); } catch { /* old browsers */ }
    }
  }

  pickVoice() {
    let voices = [];
    try { voices = this.synth.getVoices() || []; } catch { return; }
    if (!voices.length) return;
    const en = voices.filter((v) => /^en/i.test(v.lang));
    const gb = en.filter((v) => /en[-_]GB/i.test(v.lang));
    for (const name of PREFERRED) {
      const hit = gb.find((v) => v.name.includes(name)) || en.find((v) => v.name.includes(name));
      if (hit && !/\bmale\b/i.test(hit.name)) { this.voice = hit; return; }
    }
    const female = (v) => /female|woman/i.test(v.name) || !MALE.test(v.name);
    this.voice = gb.find(female) || en.find(female) || gb[0] || en[0] || null;
  }

  // Some browsers only allow speech after one utterance inside a gesture.
  prime() {
    if (!this.enabled) return;
    if (this.el && !this._unlocked) {
      this._unlocked = true;
      try { this.el.src = SILENCE; const p = this.el.play(); if (p && p.catch) p.catch(() => {}); } catch { /* ignore */ }
    }
    if (!this.synth) return;
    try {
      const u = new SpeechSynthesisUtterance(' ');
      u.volume = 0;
      this.synth.speak(u);
    } catch { /* ignore */ }
  }

  speak(text, opts = {}) {
    if (!this.enabled) return;
    this._stopAll();
    const k = clipKey(text);
    if (this.clips && this.clips.has(k) && this.el) {
      const el = this.el;
      el.src = `${CLIP_DIR}${k}.mp3`;
      // the "not staff" voice is the same woman, a little slower and lower
      el.preservesPitch = el.mozPreservesPitch = el.webkitPreservesPitch = !opts.odd;
      el.defaultPlaybackRate = el.playbackRate = opts.odd ? 0.88 : 1.0;
      el.volume = 0.9;
      const p = el.play();
      if (p && p.catch) p.catch(() => this._synth(text, opts));
      return;
    }
    this._synth(text, opts);
  }

  _synth(text, opts) {
    if (!this.synth) return;
    try {
      this.synth.cancel();
      const u = new SpeechSynthesisUtterance(text);
      if (this.voice) { u.voice = this.voice; u.lang = this.voice.lang; } else u.lang = 'en-GB';
      u.rate = opts.odd ? 0.8 : 0.92;
      u.pitch = opts.odd ? 0.86 : 1.0;
      u.volume = 0.85;
      this.synth.speak(u);
    } catch { /* fall back silently */ }
  }

  _stopAll() {
    if (this.el) { try { this.el.pause(); } catch { /* ignore */ } }
    if (this.synth) { try { this.synth.cancel(); } catch { /* ignore */ } }
  }

  stop() { this._stopAll(); }
  pause() { if (this.el && !this.el.paused) { this._elPaused = true; this.el.pause(); } if (this.synth) { try { this.synth.pause(); } catch { /* ignore */ } } }
  resume() { if (this.el && this._elPaused) { this._elPaused = false; this.el.play().catch(() => {}); } if (this.synth) { try { this.synth.resume(); } catch { /* ignore */ } } }
}
