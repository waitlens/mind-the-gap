// GeoBuilder: collects quads into a few merged layers (one draw call each)
// and bakes fluorescent lighting into vertex colours.
import * as THREE from 'three';
import { smoothstep } from '../util/rng.js';

const WHITE = [1, 1, 1];
const _v = new THREE.Vector3();
const _n = new THREE.Vector3();
const _m3 = new THREE.Matrix3();

// World positions (32-bit) from local ones (doubles) for a segment placed at
// xf = { x, y, z, yaw }. One formula for building and for re-basing, so the
// same vertex always comes out bit-identical.
export function placeVertices(out, local, xf) {
  const c = Math.cos(xf.yaw), sn = Math.sin(xf.yaw);
  for (let i = 0; i < local.length; i += 3) {
    const lx = local[i], ly = local[i + 1], lz = local[i + 2];
    out[i] = xf.x + lx * c + lz * sn; out[i + 1] = xf.y + ly; out[i + 2] = xf.z - lx * sn + lz * c;
  }
}

export class GeoBuilder {
  constructor() {
    this.layers = {};
    this.lights = [];
    this.portals = [];
    this.m = null; // optional placement transform (Matrix4)
    this.flip = false;
  }

  // A mirroring transform (negative determinant) flips the winding too.
  setXf(m) {
    this.m = m; this.flip = false;
    if (m) { _m3.setFromMatrix4(m); this.flip = m.determinant() < 0; }
    return this;
  }

  // Mirror following geometry in X (used for left/right-handed platforms).
  mirrorX(on) { return this.setXf(on ? new THREE.Matrix4().makeScale(-1, 1, 1) : null); }

  // Place following geometry at (x,y,z) rotated by yaw about Y.
  place(x, y, z, yaw = 0) {
    const m = new THREE.Matrix4().makeRotationY(yaw);
    m.setPosition(x, y, z);
    return this.setXf(m);
  }

  _layer(name) {
    return this.layers[name] || (this.layers[name] = { pos: [], uv: [], nrm: [], tint: [], emit: [], idx: [], n: 0 });
  }

  // How many vertices a layer has so far (to note which ones a part owns:
  // the lift's door panels are moved after the segment is built).
  count(name) { return this._layer(name).n; }

  _vert(L, p, n, u, v, o) {
    if (this.m) {
      _v.set(p[0], p[1], p[2]).applyMatrix4(this.m);
      _n.set(n[0], n[1], n[2]).applyMatrix3(_m3);
      L.pos.push(_v.x, _v.y, _v.z); L.nrm.push(_n.x, _n.y, _n.z);
    } else {
      L.pos.push(p[0], p[1], p[2]); L.nrm.push(n[0], n[1], n[2]);
    }
    L.uv.push(u, v);
    const t = (o && o.tint) || WHITE;
    L.tint.push(t[0], t[1], t[2]);
    // emit: -1 = baked; >=0 = self-lit; flick adds 1000 as a flag
    L.emit.push(o && o.emit !== undefined ? o.emit + (o.flick ? 1000 : 0) : -1);
    return L.n++;
  }

  // Quad a,b,c,d (in order round the edge). uv = [u0,v0,u1,v1] maps a→(u0,v0),
  // b→(u1,v0), c→(u1,v1), d→(u0,v1). n is the facing normal; winding is fixed
  // automatically so the quad is visible from the side n points to.
  quad(layer, a, b, c, d, n, uv, o) {
    return this.quadN(layer, a, b, c, d, n, n, n, n, n, uv, o);
  }

  // Same, with per-corner normals (for smooth vaults). nf = facing normal.
  quadN(layer, a, b, c, d, nf, na, nb, nc, nd, uv, o) {
    const L = this._layer(layer);
    const ux = b[0] - a[0], uy = b[1] - a[1], uz = b[2] - a[2];
    const vx = c[0] - a[0], vy = c[1] - a[1], vz = c[2] - a[2];
    const gx = uy * vz - uz * vy, gy = uz * vx - ux * vz, gz = ux * vy - uy * vx;
    const front = (gx * nf[0] + gy * nf[1] + gz * nf[2] >= 0) !== !!this.flip;
    const i0 = this._vert(L, a, na, uv[0], uv[1], o);
    const i1 = this._vert(L, b, nb, uv[2], uv[1], o);
    const i2 = this._vert(L, c, nc, uv[2], uv[3], o);
    const i3 = this._vert(L, d, nd, uv[0], uv[3], o);
    if (front) L.idx.push(i0, i1, i2, i0, i2, i3);
    else L.idx.push(i0, i2, i1, i0, i3, i2);
  }

  // Quad with explicit per-corner uvs ([u,v] each), flat normal n.
  quadUV(layer, a, b, c, d, n, ta, tb, tc, td, o) {
    const L = this._layer(layer);
    const ux = b[0] - a[0], uy = b[1] - a[1], uz = b[2] - a[2];
    const vx = c[0] - a[0], vy = c[1] - a[1], vz = c[2] - a[2];
    const front = ((uy * vz - uz * vy) * n[0] + (uz * vx - ux * vz) * n[1] + (ux * vy - uy * vx) * n[2] >= 0) !== !!this.flip;
    const i0 = this._vert(L, a, n, ta[0], ta[1], o), i1 = this._vert(L, b, n, tb[0], tb[1], o);
    const i2 = this._vert(L, c, n, tc[0], tc[1], o), i3 = this._vert(L, d, n, td[0], td[1], o);
    if (front) L.idx.push(i0, i1, i2, i0, i2, i3);
    else L.idx.push(i0, i2, i1, i0, i3, i2);
  }

  // Single triangle with per-corner uvs and a flat normal n.
  tri(layer, a, b, c, n, ta, tb, tc, o) {
    const L = this._layer(layer);
    const ux = b[0] - a[0], uy = b[1] - a[1], uz = b[2] - a[2];
    const vx = c[0] - a[0], vy = c[1] - a[1], vz = c[2] - a[2];
    const front = ((uy * vz - uz * vy) * n[0] + (uz * vx - ux * vz) * n[1] + (ux * vy - uy * vx) * n[2] >= 0) !== !!this.flip;
    const i0 = this._vert(L, a, n, ta[0], ta[1], o), i1 = this._vert(L, b, n, tb[0], tb[1], o), i2 = this._vert(L, c, n, tc[0], tc[1], o);
    if (front) L.idx.push(i0, i1, i2); else L.idx.push(i0, i2, i1);
  }

  // Flat rectangle from origin o along du (nu cells) and dv (nv cells), so the
  // vertex lighting has something to interpolate. uv spans the whole rect
  // unless tile=true, in which case every cell gets the full uv rect.
  grid(layer, o, du, dv, nu, nv, n, uv, opts, tile = false) {
    for (let i = 0; i < nu; i++) {
      for (let j = 0; j < nv; j++) {
        const p = (s, t) => [o[0] + du[0] * s + dv[0] * t, o[1] + du[1] * s + dv[1] * t, o[2] + du[2] * s + dv[2] * t];
        const s0 = i / nu, s1 = (i + 1) / nu, t0 = j / nv, t1 = (j + 1) / nv;
        const r = tile ? uv : [uv[0] + (uv[2] - uv[0]) * s0, uv[1] + (uv[3] - uv[1]) * t0,
          uv[0] + (uv[2] - uv[0]) * s1, uv[1] + (uv[3] - uv[1]) * t1];
        this.quad(layer, p(s0, t0), p(s1, t0), p(s1, t1), p(s0, t1), n, r, opts);
      }
    }
  }

  // Axis-aligned box. faces: string of letters to include (x X y Y z Z = min/max faces).
  box(layer, x0, y0, z0, x1, y1, z1, uv, o, faces = 'xXyYzZ') {
    const q = (a, b, c, d, n) => this.quad(layer, a, b, c, d, n, uv, o);
    if (faces.includes('x')) q([x0, y0, z1], [x0, y0, z0], [x0, y1, z0], [x0, y1, z1], [-1, 0, 0]);
    if (faces.includes('X')) q([x1, y0, z0], [x1, y0, z1], [x1, y1, z1], [x1, y1, z0], [1, 0, 0]);
    if (faces.includes('y')) q([x0, y0, z0], [x1, y0, z0], [x1, y0, z1], [x0, y0, z1], [0, -1, 0]);
    if (faces.includes('Y')) q([x0, y1, z0], [x1, y1, z0], [x1, y1, z1], [x0, y1, z1], [0, 1, 0]);
    if (faces.includes('z')) q([x1, y0, z0], [x0, y0, z0], [x0, y1, z0], [x1, y1, z0], [0, 0, -1]);
    if (faces.includes('Z')) q([x0, y0, z1], [x1, y0, z1], [x1, y1, z1], [x0, y1, z1], [0, 0, 1]);
  }

  addLight(x, y, z, intensity = 1, radius = 7, flicker = false, color = WHITE) {
    if (this.m) { _v.set(x, y, z).applyMatrix4(this.m); x = _v.x; y = _v.y; z = _v.z; }
    this.lights.push({ x, y, z, i: intensity, r2: radius * radius, flicker, color });
  }

  // A portal is a joint with a neighbouring segment. Both neighbours light the
  // joint with the same virtual lamp and fade their own lamps out next to it,
  // so the baked lighting is continuous across segments.
  addPortal(x, y, z, yaw) {
    this.portals.push({ x, y, z, dx: Math.sin(yaw), dz: Math.cos(yaw) });
  }

  _lightAt(px, py, pz, nx, ny, nz, li) {
    const dx = li.x - px, dy = li.y - py, dz = li.z - pz;
    const d2 = dx * dx + dy * dy + dz * dz;
    if (d2 >= li.r2) return 0;
    const att = (1 - d2 / li.r2) ** 2;
    const inv = 1 / Math.sqrt(d2 + 1e-6);
    const ndl = Math.max(0, (nx * dx + ny * dy + nz * dz) * inv);
    return li.i * att * (0.38 + 0.62 * ndl);
  }

  // Bake all layers. ambient = [r,g,b].
  // xf = { x, y, z, yaw } places the result in world space: positions are
  // transformed here, in double precision, and every segment is then drawn
  // with the SAME (identity) model matrix. Vertices that two neighbouring
  // segments share therefore reach the GPU bit-identical, and the joint
  // between them is watertight. (With one matrix per segment the shared
  // edges differed by float rounding and leaked single pixels.)
  bake(ambient = [0.1, 0.1, 0.1], xf = null) {
    const portalLights = this.portals.map((p) => ({ x: p.x, y: p.y + 2.3, z: p.z, i: 0.85, r2: 36 }));
    const out = {};
    for (const name of Object.keys(this.layers)) {
      const L = this.layers[name];
      const light = new Uint8Array(L.n * 4);
      for (let i = 0; i < L.n; i++) {
        const tr = L.tint[i * 3], tg = L.tint[i * 3 + 1], tb = L.tint[i * 3 + 2];
        let r, g, b, f = 0;
        const e = L.emit[i];
        if (e >= 0) {
          const flick = e >= 1000, ev = flick ? e - 1000 : e;
          const k = flick ? 0.1 : 1;
          r = tr * ev * k; g = tg * ev * k; b = tb * ev * k; f = flick ? ev * 0.9 : 0;
        } else {
          const px = L.pos[i * 3], py = L.pos[i * 3 + 1], pz = L.pos[i * 3 + 2];
          const nx = L.nrm[i * 3], ny = L.nrm[i * 3 + 1], nz = L.nrm[i * 3 + 2];
          let fade = 1;
          for (const p of this.portals) {
            const along = Math.abs((px - p.x) * p.dx + (pz - p.z) * p.dz);
            const lat = Math.abs((px - p.x) * p.dz - (pz - p.z) * p.dx);
            // Only what lies round the opening itself is handed over to the
            // portal lamp. Further out (the rest of an end wall, a big tunnel's
            // lining) the segment's own lamps stay on, or end walls would be
            // lit by the portal lamp alone and come out blotchy.
            const rad = Math.hypot(lat, Math.max(0, py - p.y - 2.2));
            if (lat < 4 && Math.abs(py - p.y) < 5) fade = Math.min(fade, Math.max(smoothstep(0.1, 2.4, along), smoothstep(1.7, 2.9, rad)));
          }
          r = ambient[0]; g = ambient[1]; b = ambient[2];
          for (const li of this.lights) {
            const c = this._lightAt(px, py, pz, nx, ny, nz, li) * fade;
            if (c <= 0) continue;
            if (li.flicker) f += c; else { r += c * li.color[0]; g += c * li.color[1]; b += c * li.color[2]; }
          }
          for (const li of portalLights) {
            const c = this._lightAt(px, py, pz, nx, ny, nz, li);
            r += c; g += c * 0.98; b += c * 0.93;
          }
          r *= tr; g *= tg; b *= tb; f *= (tr + tg + tb) / 3;
        }
        light[i * 4] = Math.min(255, r * 127.5); light[i * 4 + 1] = Math.min(255, g * 127.5);
        light[i * 4 + 2] = Math.min(255, b * 127.5); light[i * 4 + 3] = Math.min(255, f * 127.5);
      }
      const geo = new THREE.BufferGeometry();
      const pos = new Float32Array(L.pos);
      if (xf) placeVertices(pos, L.pos, xf);
      geo.userData.local = L.pos;   // kept so the world can be re-based exactly
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      geo.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(L.uv), 2));
      geo.setAttribute('aLight', new THREE.BufferAttribute(light, 4, true));
      geo.setIndex(new THREE.BufferAttribute(L.n > 65535 ? new Uint32Array(L.idx) : new Uint16Array(L.idx), 1));
      geo.computeBoundingSphere();
      out[name] = geo;
    }
    return out;
  }
}
