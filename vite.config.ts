import path from 'path';

import eslintPlugin from '@nabla/vite-plugin-eslint';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const configByMode = {
  e2e: {
    entryPoint: '/e2e/main.tsx',
    base: '/'
  },
  development: {
    entryPoint: '/src/main.development.tsx',
    base: '/'
  },
  production: {
    entryPoint: '/src/main.production.tsx',
    base: '/registration-manager/'
  }
};

type validMode = keyof typeof configByMode;

// https://vitejs.dev/config/
// eslint-disable-next-line import/no-default-export
export default defineConfig(({ mode }) => ({
  base: configByMode[mode as validMode].base,
  plugins: [
    react(),
    eslintPlugin(),
    {
      name: 'entry-point-by-mode',
      transformIndexHtml: {
        enforce: 'pre', // Tells Vite to run this before other processes
        async transform(html) {
          const src = configByMode[mode as validMode].entryPoint;
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
