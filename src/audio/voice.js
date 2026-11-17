// Spoken announcements through the browser's speechSynthesis, preferring a
// British English voice. Fails silently where speech is unavailable — the
// subtitles carry the same information.
const PREFERRED = ['Google UK English Female', 'Google UK English Male', 'Daniel', 'Kate', 'Serena', 'Martha',
  'Arthur', 'Microsoft Sonia', 'Microsoft Libby', 'Microsoft Ryan', 'Microsoft Hazel', 'Microsoft Susan'];

export class Voice {
  constructor() {
    this.enabled = true;
    this.voice = null;
    this.synth = typeof window !== 'undefined' && 'speechSynthesis' in window ? window.speechSynthesis : null;
    if (this.synth) {
      this.pickVoice();
      try { this.synth.addEventListener('voiceschanged', () => this.pickVoice()); } catch { /* old browsers */ }
    }
  }

  pickVoice() {
    let voices = [];
    try { voices = this.synth.getVoices() || []; } catch { return; }
    if (!voices.length) return;
    const gb = voices.filter((v) => /en[-_]GB/i.test(v.lang));
    for (const name of PREFERRED) {
      const hit = gb.find((v) => v.name.includes(name)) || voices.find((v) => v.name.includes(name));
      if (hit) { this.voice = hit; return; }
    }
    this.voice = gb[0] || voices.find((v) => /^en/i.test(v.lang)) || null;
  }

  // Some browsers only allow speech after one utterance inside a gesture.
  prime() {
    if (!this.synth || !this.enabled) return;
    try {
      const u = new SpeechSynthesisUtterance(' ');
      u.volume = 0;
      this.synth.speak(u);
    } catch { /* ignore */ }
  }

  speak(text, opts = {}) {
    if (!this.synth || !this.enabled) return;
    try {
      this.synth.cancel();
      const u = new SpeechSynthesisUtterance(text);
      if (this.voice) { u.voice = this.voice; u.lang = this.voice.lang; } else u.lang = 'en-GB';
      // the "not staff" voice is the same voice, a little slower and lower
      u.rate = opts.odd ? 0.8 : 0.92;
      u.pitch = opts.odd ? 0.72 : 1.0;
      u.volume = 0.85;
      this.synth.speak(u);
    } catch { /* fall back silently */ }
  }

  stop() { if (this.synth) { try { this.synth.cancel(); } catch { /* ignore */ } } }
  pause() { if (this.synth) { try { this.synth.pause(); } catch { /* ignore */ } } }
  resume() { if (this.synth) { try { this.synth.resume(); } catch { /* ignore */ } } }
}
