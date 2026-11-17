import { defineConfig } from 'vite';

// base './' keeps every asset URL relative, so dist/ works from any subpath
// (e.g. https://user.github.io/some-repo/).
export default defineConfig({
  base: './',
  build: {
    target: 'es2020',
    outDir: 'dist',
    assetsInlineLimit: 0,
    chunkSizeWarningLimit: 900,
  },
  server: { host: true },
});
