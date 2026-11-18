// First-person walker holding a camcorder: movement with wall sliding,
// stair following, step bob and a little handheld sway.
import { CFG } from '../config.js';
import { clamp, damp, noise1 } from '../util/rng.js';
import { moveFeet } from '../world/collide.js';

export class Player {
  constructor(camera) {
    this.camera = camera;
    camera.rotation.order = 'YXZ';
    this.pos = { x: 0, y: 0, z: 0 };   // feet
    this.yaw = 0; this.pitch = 0;
    this.vx = 0; this.vz = 0;
    this.eyeY = CFG.eye;
    this.stepDist = 0;
    this.speed = 0;
    this.walked = 0;
    this.t = 0;
    this.zoom = 0;         // 0..1 (reading)
    this.zoomTarget = 0;
    this.loc = null;
    this.windX = 0; this.windZ = 0;   // m/s, set by the train controller
    this.shake = 0;
  }

  // Face along a path direction given as a segment yaw (dir = sin, cos).
  spawn(x, y, z, pathYaw) {
    this.pos.x = x; this.pos.y = y; this.pos.z = z;
    this.yaw = pathYaw + Math.PI; this.pitch = 0;
    this.vx = this.vz = 0; this.eyeY = y + CFG.eye; this.stepDist = 0;
  }

  // input: { mx, mz, run, lookX, lookY } — look deltas in radians (consumed).
  // Returns { step: bool, running: bool } for the audio.
  update(dt, input, world) {
    this.t += dt;
    this.yaw -= input.lookX; this.pitch = clamp(this.pitch - input.lookY, -1.25, 1.25);
    input.lookX = 0; input.lookY = 0;

    let mx = input.mx, mz = input.mz;
    const mag = Math.hypot(mx, mz);
    if (mag > 1) { mx /= mag; mz /= mag; }
    const running = input.run && mz > 0.3;
    const top = (running ? CFG.run : CFG.walk) * (1 - 0.35 * this.zoom);
    const s = Math.sin(this.yaw), c = Math.cos(this.yaw);
    // forward = (-s, -c), right = (c, -s)
    const tx = (-s * mz + c * mx) * top, tz = (-c * mz - s * mx) * top;
    const k = mag > 0.01 ? 9 : 12;
    this.vx = damp(this.vx, tx, k, dt); this.vz = damp(this.vz, tz, k, dt);

    const ox = this.pos.x, oz = this.pos.z;
    // (wind: the push of air along a platform when a train comes through)
    const loc = moveFeet(world, this.pos, (this.vx + this.windX) * dt, (this.vz + this.windZ) * dt, CFG.radius);
    let step = false;
    if (loc) {
      this.loc = loc;
      this.pos.y = loc.y;
      if (loc.node !== world.current) { world.current = loc.node; world.refresh(); }
    }
    const moved = Math.hypot(this.pos.x - ox, this.pos.z - oz);
    this.speed = moved / Math.max(dt, 1e-4);
    this.walked += moved;
    const stride = running ? 1.05 : 0.74;
    const before = Math.floor(this.stepDist / stride);
    this.stepDist += Math.min(moved, Math.hypot(this.vx, this.vz) * dt);   // being blown along is not walking
    if (Math.floor(this.stepDist / stride) !== before) step = true;

    // camera: smoothed floor height, step bob, handheld sway
    this.zoom = damp(this.zoom, this.zoomTarget, 7, dt);
    const targetEye = this.pos.y + CFG.eye;
    this.eyeY = damp(this.eyeY, targetEye, 16, dt);
    const ph = (this.stepDist / stride) * Math.PI;
    const amt = clamp(this.speed / CFG.walk, 0, 1.6);
    const bobY = -Math.abs(Math.sin(ph)) * 0.035 * amt;
    const bobX = Math.sin(ph) * 0.018 * amt;
    const t = this.t;
    const swayP = noise1(t * 0.55, 11) * 0.011 + noise1(t * 2.3, 12) * 0.003;
    const swayY = noise1(t * 0.47, 21) * 0.012 + noise1(t * 2.7, 22) * 0.003;
    // (shake: the rush of air and the rumble when a train goes by)
    const sh = this.shake || 0;
    const swayR = noise1(t * 0.4, 31) * 0.01 + Math.sin(ph) * 0.006 * amt + noise1(t * 23, 43) * 0.012 * sh;
    const cam = this.camera;
    cam.position.set(this.pos.x + c * bobX, this.eyeY + bobY, this.pos.z - s * bobX);
    cam.rotation.set(this.pitch + swayP * (1 - 0.6 * this.zoom) + noise1(t * 29, 41) * 0.009 * sh, this.yaw + swayY * (1 - 0.6 * this.zoom) + noise1(t * 31, 42) * 0.007 * sh, swayR);
    // (zoom in less on portrait screens, or a board no longer fits across)
    const fov = CFG.fov - (cam.aspect < 1 ? 20 : 36) * this.zoom;
    if (Math.abs(cam.fov - fov) > 0.01) { cam.fov = fov; cam.updateProjectionMatrix(); }
    return { step, running };
  }

  // Unit view direction in world space.
  viewDir() {
    const cp = Math.cos(this.pitch);
    return { x: -Math.sin(this.yaw) * cp, y: Math.sin(this.pitch), z: -Math.cos(this.yaw) * cp };
  }
}
