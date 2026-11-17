// Collision against the segment graph. Every built node carries, in its own
// local frame, floor `cells` (oriented rectangles with a linear height ramp)
// and `walls` (2-D line segments). Only the current node and its graph
// neighbours are tested, so overlapping levels never interfere.

export function toLocal(node, x, z) {
  const dx = x - node.pos.x, dz = z - node.pos.z;
  const c = Math.cos(node.yaw), s = Math.sin(node.yaw);
  return [dx * c - dz * s, dx * s + dz * c];
}

export function toWorld(node, lx, ly, lz) {
  const c = Math.cos(node.yaw), s = Math.sin(node.yaw);
  return [node.pos.x + lx * c + lz * s, node.pos.y + ly, node.pos.z - lx * s + lz * c];
}

// Floor height of `node` under world point (x,z), or null if outside it.
// feetY picks the right level when cells overlap in plan (stairs).
export function floorIn(node, x, z, feetY, eps = 0.02) {
  if (!node.built) return null;
  const [lx, lz] = toLocal(node, x, z);
  let best = null, bestD = 1.6;
  for (const c of node.built.cells) {
    const dx = c.bx - c.ax, dz = c.bz - c.az;
    const len2 = dx * dx + dz * dz;
    const t = ((lx - c.ax) * dx + (lz - c.az) * dz) / len2;
    if (t < -eps || t > 1 + eps) continue;
    const lat = Math.abs((lx - c.ax) * dz - (lz - c.az) * dx) / Math.sqrt(len2);
    if (lat > c.hw + eps) continue;
    const tc = t < 0 ? 0 : t > 1 ? 1 : t;
    const y = node.pos.y + c.ya + (c.yb - c.ya) * tc;
    const d = Math.abs(y - feetY);
    if (d < bestD) { bestD = d; best = { y, cell: c, t: tc }; }
  }
  return best;
}

// Which node is the point in? Searches the current node, then its neighbours.
export function locate(world, x, z, feetY) {
  const cur = world.current;
  let hit = floorIn(cur, x, z, feetY);
  if (hit) return { node: cur, y: hit.y, cell: hit.cell, t: hit.t };
  for (const n of world.neighbours(cur)) {
    hit = floorIn(n, x, z, feetY);
    if (hit) return { node: n, y: hit.y, cell: hit.cell, t: hit.t };
  }
  for (const n of world.neighbours(cur)) {
    for (const m of world.neighbours(n)) {
      if (m === cur) continue;
      hit = floorIn(m, x, z, feetY);
      if (hit) return { node: m, y: hit.y, cell: hit.cell, t: hit.t };
    }
  }
  return null;
}

function pushOut(node, pos, radius) {
  if (!node.built) return false;
  let [lx, lz] = toLocal(node, pos.x, pos.z);
  let moved = false;
  const feet = pos.y - node.pos.y;
  for (const w of node.built.walls) {
    // optional height range: w[4]=min feet height, w[5]=max feet height
    if (w.length > 4 && (feet < w[4] || feet > w[5])) continue;
    const dx = w[2] - w[0], dz = w[3] - w[1];
    const len2 = dx * dx + dz * dz;
    let t = len2 > 0 ? ((lx - w[0]) * dx + (lz - w[1]) * dz) / len2 : 0;
    t = t < 0 ? 0 : t > 1 ? 1 : t;
    const cx = w[0] + dx * t, cz = w[1] + dz * t;
    const ox = lx - cx, oz = lz - cz;
    const d2 = ox * ox + oz * oz;
    if (d2 < radius * radius && d2 > 1e-9) {
      const d = Math.sqrt(d2), k = (radius - d) / d;
      lx += ox * k; lz += oz * k; moved = true;
    }
  }
  if (moved) {
    const c = Math.cos(node.yaw), s = Math.sin(node.yaw);
    pos.x = node.pos.x + lx * c + lz * s;
    pos.z = node.pos.z - lx * s + lz * c;
  }
  return moved;
}

// Slide `pos` (feet position {x,y,z}) out of nearby walls. Mutates pos.
export function resolveWalls(world, pos, radius) {
  const nodes = [world.current, ...world.neighbours(world.current)];
  for (let pass = 0; pass < 2; pass++) {
    let any = false;
    for (const n of nodes) any = pushOut(n, pos, radius) || any;
    if (!any) break;
  }
}

// Move the feet position by (dx,dz) with wall sliding and floor following.
// Returns the located {node, y} or null if the move was rejected.
export function moveFeet(world, pos, dx, dz, radius) {
  const ox = pos.x, oz = pos.z;
  pos.x += dx; pos.z += dz;
  resolveWalls(world, pos, radius);
  let loc = locate(world, pos.x, pos.z, pos.y);
  if (!loc) {
    // try each axis on its own before giving up
    pos.x = ox + dx; pos.z = oz;
    resolveWalls(world, pos, radius);
    loc = locate(world, pos.x, pos.z, pos.y);
    if (!loc) {
      pos.x = ox; pos.z = oz + dz;
      resolveWalls(world, pos, radius);
      loc = locate(world, pos.x, pos.z, pos.y);
    }
    if (!loc) { pos.x = ox; pos.z = oz; return locate(world, ox, oz, pos.y); }
  }
  return loc;
}
