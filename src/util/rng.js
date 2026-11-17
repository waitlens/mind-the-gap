// Small deterministic RNG + maths helpers shared by every module.

export function hash32(a, b = 0) {
  let h = (a | 0) ^ Math.imul((b | 0) + 0x9e3779b9, 0x85ebca6b);
  h ^= h >>> 16; h = Math.imul(h, 0x7feb352d);
  h ^= h >>> 15; h = Math.imul(h, 0x846ca68b);
  h ^= h >>> 16;
  return h >>> 0;
}

export function hashStr(s) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}

export class RNG {
  constructor(seed = 1) { this.s = (seed >>> 0) || 1; }
  // mulberry32
  next() {
    let t = (this.s += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  }
  range(a, b) { return a + (b - a) * this.next(); }
  int(a, b) { return a + Math.floor(this.next() * (b - a + 1)); } // inclusive
  chance(p) { return this.next() < p; }
  pick(arr) { return arr[Math.floor(this.next() * arr.length)]; }
  sign() { return this.next() < 0.5 ? -1 : 1; }
  // weighted pick: items = [[value, weight], ...]
  weighted(items) {
    let total = 0;
    for (const it of items) total += Math.max(0, it[1]);
    let r = this.next() * total;
    for (const it of items) { r -= Math.max(0, it[1]); if (r <= 0) return it[0]; }
    return items[items.length - 1][0];
  }
  shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(this.next() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  fork(salt = 0) { return new RNG(hash32(Math.floor(this.next() * 4294967296), salt)); }
}

export const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
export const lerp = (a, b, t) => a + (b - a) * t;
export const smoothstep = (a, b, v) => {
  const t = clamp((v - a) / (b - a), 0, 1);
  return t * t * (3 - 2 * t);
};
// frame-rate independent exponential approach
export const damp = (a, b, lambda, dt) => lerp(a, b, 1 - Math.exp(-lambda * dt));
export const TAU = Math.PI * 2;

// shortest signed angle from a to b
export function angleDiff(a, b) {
  let d = (b - a) % TAU;
  if (d > Math.PI) d -= TAU;
  if (d < -Math.PI) d += TAU;
  return d;
}

// cheap 1-D value noise in [-1, 1], smooth, good for sway / flicker envelopes
export function noise1(x, seed = 0) {
  const i = Math.floor(x), f = x - i;
  const a = hash32(i, seed) / 2147483648 - 1;
  const b = hash32(i + 1, seed) / 2147483648 - 1;
  const t = f * f * (3 - 2 * f);
  return a + (b - a) * t;
}
