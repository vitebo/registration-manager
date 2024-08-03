import path from 'path';

import eslintPlugin from '@nabla/vite-plugin-eslint';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { injectScripts, publicTypescript } from 'vite-plugin-public-typescript';

// https://vitejs.dev/config/
// eslint-disable-next-line import/no-default-export
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    eslintPlugin(),
    publicTypescript(),
    injectScripts(() => [
      {
        injectTo: 'body',
        attrs: {
          type: 'module',
          src: mode === 'e2e' ? '/e2e/main.tsx' : '/src/main.tsx'
        }
      }
    ])
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
