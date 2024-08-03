import path from 'path';

import eslintPlugin from '@nabla/vite-plugin-eslint';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
// eslint-disable-next-line import/no-default-export
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    eslintPlugin(),
    {
      name: 'entry-point-by-mode',
      transformIndexHtml: {
        enforce: 'pre', // Tells Vite to run this before other processes
        async transform(html) {
          const entryPointByMode = {
            e2e: '/e2e/main.tsx',
            development: '/src/main.development.tsx',
            production: '/src/main.production.tsx'
          };
          const src = entryPointByMode[mode as keyof typeof entryPointByMode];
          return html.replace('<!-- ENTRY_POINT_BY_MODE -->', `<script type="module" src="${src}"></script>`);
        }
      }
    }
  ],
  server: {
    port: 3001
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src')
    }
  }
}));
