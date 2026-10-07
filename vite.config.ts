import fs from 'fs';
import path from 'path';
import { defineConfig, loadEnv, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Dev only: make the static year archives in public/ (e.g. /2025/) behave like on Cloudflare —
// serve <dir>/index.html for directory URLs instead of the SPA, and fully decode mirrored Wix
// asset paths (they contain %2c etc., which Vite's static server leaves encoded).
const publicDirIndex = (): Plugin => ({
  name: 'public-dir-index',
  configureServer(server) {
    server.middlewares.use((req, _res, next) => {
      const [url, query] = (req.url ?? '').split('?');
      if (!url || url === '/') return next();
      let decoded: string;
      try { decoded = decodeURIComponent(url).normalize('NFC'); } catch { return next(); }
      const file = path.join(server.config.publicDir, decoded);
      if (url.endsWith('/') && fs.existsSync(path.join(file, 'index.html'))) {
        req.url = encodeURI(decoded) + 'index.html';
      } else if (decoded !== decodeURI(url) && fs.existsSync(file)) {
        req.url = encodeURI(decoded) + (query ? '?' + query : '');
      }
      next();
    });
  },
});

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [publicDirIndex(), react(), tailwindcss()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
