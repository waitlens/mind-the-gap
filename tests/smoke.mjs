// Headless smoke test: serves dist/, loads the page in Chrome, starts the game,
// lets it run for a few seconds and fails on any console error / page error.
//
//   npm run build && npm test
//
// Options:  --shot=out.png   save a screenshot at the end
//           --mobile         emulate a phone viewport with touch
//           --wait=ms        how long to let the game run (default 4000)
//           --eval="js"      run JS in the page after start (may be repeated)
//           --after="js"     run JS after the wait, just before the screenshot
//           --size=WxH       viewport size
// Skips (exit 0) if puppeteer-core or a Chrome binary is not available.
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const args = process.argv.slice(2);
const opt = (name, def) => {
  const hit = args.find((a) => a === `--${name}` || a.startsWith(`--${name}=`));
  if (!hit) return def;
  return hit.includes('=') ? hit.slice(hit.indexOf('=') + 1) : true;
};
const evals = args.filter((a) => a.startsWith('--eval=')).map((a) => a.slice(7));
const afters = args.filter((a) => a.startsWith('--after=')).map((a) => a.slice(8));

const MIME = {
  '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json',
  '.woff2': 'font/woff2', '.woff': 'font/woff', '.png': 'image/png', '.svg': 'image/svg+xml',
};

function serve() {
  const server = http.createServer((req, res) => {
    let p = decodeURIComponent(req.url.split('?')[0]);
    if (p.endsWith('/')) p += 'index.html';
    const file = path.join(dist, p);
    if (!file.startsWith(dist) || !fs.existsSync(file)) { res.writeHead(404); res.end('not found'); return; }
    res.writeHead(200, { 'Content-Type': MIME[path.extname(file)] || 'application/octet-stream' });
    fs.createReadStream(file).pipe(res);
  });
  return new Promise((resolve) => server.listen(0, '127.0.0.1', () => resolve(server)));
}

function findChrome() {
  const cands = [process.env.CHROME_PATH, '/usr/bin/google-chrome', '/usr/bin/google-chrome-stable',
    '/usr/bin/chromium', '/usr/bin/chromium-browser',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'];
  return cands.find((c) => c && fs.existsSync(c));
}

async function main() {
  if (!fs.existsSync(path.join(dist, 'index.html'))) {
    console.error('smoke: dist/ not found — run `npm run build` first'); process.exit(1);
  }
  let puppeteer;
  try { puppeteer = (await import('puppeteer-core')).default; } catch { console.log('smoke: puppeteer-core not installed — skipped'); return; }
  const exe = findChrome();
  if (!exe) { console.log('smoke: no Chrome binary found (set CHROME_PATH) — skipped'); return; }

  const server = await serve();
  const url = `http://127.0.0.1:${server.address().port}/`;
  const browser = await puppeteer.launch({
    executablePath: exe,
    headless: true,
    args: ['--no-sandbox', '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader',
      '--ignore-gpu-blocklist', '--autoplay-policy=no-user-gesture-required', '--mute-audio'],
  });
  const errors = [];
  let failed = false;
  try {
    const page = await browser.newPage();
    const mobile = !!opt('mobile', false);
    const [w, h] = String(opt('size', mobile ? '390x780' : '1280x720')).split('x').map(Number);
    await page.setViewport({ width: w, height: h, isMobile: mobile, hasTouch: mobile, deviceScaleFactor: mobile ? 2 : 1 });
    page.on('console', (m) => {
      if (m.type() === 'error') errors.push(`console.error: ${m.text()}`);
      else if (opt('verbose', false)) console.log(`[page ${m.type()}] ${m.text()}`);
    });
    page.on('pageerror', (e) => errors.push(`pageerror: ${e.message}`));
    page.on('requestfailed', (r) => errors.push(`requestfailed: ${r.url()}`));

    await page.goto(url, { waitUntil: 'load' });
    await page.waitForFunction(() => window.__game && typeof window.__game.start === 'function', { timeout: 20000 });
    const before = await page.evaluate(() => ({ started: !!window.__game.state.started }));
    if (before.started) throw new Error('game reports started before start() was called');

    if (opt('nostart', false)) {
      // title-screen check only: no start, just a screenshot
      await new Promise((r) => setTimeout(r, Number(opt('wait', 1500))));
      const shot0 = opt('shot', null);
      if (shot0) { await page.screenshot({ path: shot0 }); console.log('screenshot →', shot0); }
      if (errors.length) throw new Error('errors on the title screen');
      console.log('smoke: OK — title screen loaded without console errors');
      return;
    }
    await page.evaluate(() => window.__game.start());
    for (const code of evals) {
      const out = await page.evaluate(code);
      if (out !== undefined) console.log('eval →', JSON.stringify(out));
    }
    const t0 = await page.evaluate(() => window.__game.state.frame || 0);
    await new Promise((r) => setTimeout(r, Number(opt('wait', 4000))));
    for (const code of afters) {
      const out = await page.evaluate(code);
      if (out !== undefined) console.log('after →', JSON.stringify(out));
    }
    if (afters.length) await new Promise((r) => setTimeout(r, Number(opt('wait2', 700))));
    const st = await page.evaluate(() => {
      const s = window.__game.state;
      const out = {};
      for (const k of Object.keys(s)) {
        const v = s[k];
        if (v === null || ['number', 'string', 'boolean'].includes(typeof v)) out[k] = v;
      }
      return out;
    });
    console.log('state:', JSON.stringify(st));
    if (!st.started) throw new Error('state.started is false after start()');
    if (st.errors) throw new Error(`the game loop caught ${st.errors} runtime error(s)`);
    if (st.frame !== undefined && !(st.frame > t0)) throw new Error('frame counter did not advance');
    const shot = opt('shot', null);
    if (shot) { await page.screenshot({ path: shot }); console.log('screenshot →', shot); }
  } catch (e) {
    failed = true;
    console.error('smoke: FAILED —', e.message);
  } finally {
    await browser.close();
    server.close();
  }
  if (errors.length) {
    failed = true;
    console.error(`smoke: ${errors.length} page error(s):`);
    for (const e of errors.slice(0, 20)) console.error('  ' + e);
  }
  if (failed) process.exit(1);
  console.log('smoke: OK — page loaded and ran without console errors');
}

main().catch((e) => { console.error(e); process.exit(1); });
