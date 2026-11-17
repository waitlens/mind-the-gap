// WebGL renderer: draws the world into a small render target, then runs the
// camcorder pass to the screen. Low internal resolution is both the look and
// the mobile performance budget.
import * as THREE from 'three';
import { CFG } from '../config.js';
import { makeDVPass } from './dvpass.js';

export class Renderer {
  constructor(canvas, overlay, { mobile = false } = {}) {
    this.canvas = canvas;
    this.mobile = mobile;
    this.hq = false;
    this.overlay = overlay;
    this.gl = new THREE.WebGLRenderer({
      canvas, antialias: false, alpha: false, depth: false, stencil: false,
      powerPreference: 'high-performance',
    });
    this.gl.outputColorSpace = THREE.LinearSRGBColorSpace;
    this.gl.autoClear = true;
    this.gl.setClearColor(new THREE.Color().setRGB(...CFG.fogColor), 1);
    this.target = new THREE.WebGLRenderTarget(64, 64, {
      minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, depthBuffer: true, stencilBuffer: false,
    });
    this.target.texture.colorSpace = THREE.NoColorSpace;
    this.dv = makeDVPass(this.target.texture, overlay.texture);
    this.drawCalls = 0;
    this.triangles = 0;
    this.resize();
  }

  setHQ(on) { this.hq = !!on; this.resize(); }

  resize() {
    const W = Math.max(1, window.innerWidth), H = Math.max(1, window.innerHeight);
    const aspect = W / H;
    // final pass resolution: cap the pixel ratio so phones are not asked to
    // fill 3x-density screens
    const maxDim = this.mobile ? 1280 : 2200;
    let dpr = Math.min(window.devicePixelRatio || 1, this.mobile ? 2 : 1.5);
    dpr = Math.min(dpr, maxDim / Math.max(W, H));
    this.gl.setPixelRatio(dpr);
    this.gl.setSize(W, H, false);
    // internal resolution: fixed line count on the short side
    let base = this.mobile ? CFG.internalHMobile : CFG.internalH;
    if (this.hq) base = Math.round(base * 1.45);
    let iw, ih;
    if (aspect >= 1) { ih = base; iw = Math.round(base * Math.min(aspect, 2.4)); }
    else { iw = Math.round(base * 0.8); ih = Math.round(iw / Math.max(aspect, 0.42)); }
    this.target.setSize(iw, ih);
    this.dv.uniforms.uInRes.value.set(iw, ih);
    this.overlay.resize(iw, ih);
    this.width = W; this.height = H; this.aspect = aspect; this.iw = iw; this.ih = ih;
  }

  render(scene, camera, time) {
    const gl = this.gl;
    this.dv.uniforms.uTime.value = time % 1000;
    gl.setRenderTarget(this.target);
    gl.render(scene, camera);
    this.drawCalls = gl.info.render.calls;
    this.triangles = gl.info.render.triangles;
    gl.setRenderTarget(null);
    gl.render(this.dv.scene, this.dv.camera);
  }
}
