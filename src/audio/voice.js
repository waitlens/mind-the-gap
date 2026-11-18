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
      u.pitch = opts.odd ? 0.86 : 1.0;   // still clearly the same woman
      u.volume = 0.85;
      this.synth.speak(u);
    } catch { /* fall back silently */ }
  }

  stop() { if (this.synth) { try { this.synth.cancel(); } catch { /* ignore */ } } }
  pause() { if (this.synth) { try { this.synth.pause(); } catch { /* ignore */ } } }
  resume() { if (this.synth) { try { this.synth.resume(); } catch { /* ignore */ } } }
}
