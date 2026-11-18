// Bounding boxes used to keep segments from being planned on top of each
// other: [x0, y0, z0, x1, y1, z1] in world space.

// A segment's local box, placed at pos and turned by yaw about Y.
export function worldBox(box, pos, yaw) {
  const c = Math.cos(yaw), s = Math.sin(yaw);
  let x0 = Infinity, x1 = -Infinity, z0 = Infinity, z1 = -Infinity;
  for (const [x, z] of [[box[0], box[2]], [box[3], box[2]], [box[0], box[5]], [box[3], box[5]]]) {
    const wx = pos.x + x * c + z * s, wz = pos.z - x * s + z * c;
    x0 = Math.min(x0, wx); x1 = Math.max(x1, wx); z0 = Math.min(z0, wz); z1 = Math.max(z1, wz);
  }
  return [x0, pos.y + box[1], z0, x1, pos.y + box[4], z1];
}

// Do two boxes overlap by more than the tolerance m?
export function overlaps(a, b, m = 0.25) {
  return a[0] < b[3] - m && a[3] > b[0] + m && a[1] < b[4] - m && a[4] > b[1] + m && a[2] < b[5] - m && a[5] > b[2] + m;
}

// Test diagnostics: what a segment that had to be placed regardless (nothing
// fitted) ran into. Should never happen; the fuzz tests check that it doesn't.
export function describeClash(nodes, parent, pick, box, yaw) {
  const hit = [...nodes.values()].find((n) => n !== parent && overlaps(box, n.box));
  const st = pick.env.stretch, hs = hit && hit.env.stretch;
  return {
    type: pick.def.type, after: parent.def.type, yaw: +yaw.toFixed(2), hit: hit ? hit.def.type : '?',
    rel: !hit ? '?' : hs === st ? 'same stretch' : 'other stretch',
    box: box.map((v) => +v.toFixed(1)), hitBox: hit ? hit.box.map((v) => +v.toFixed(1)) : null,
    sister: !!(st && hs && st.fromJunction && st.fromJunction === hs.fromJunction),
  };
}
