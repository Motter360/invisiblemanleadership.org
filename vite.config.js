import legacy from '@vitejs/plugin-legacy'
import ViteRestart from 'vite-plugin-restart';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default ({ command }) => ({
  base: command === 'serve' ? '' : '/dist/',
  build: {
    emptyOutDir: true,
    manifest: true,
    outDir: './web/dist/',
    rollupOptions: {
      input: {
        app: './assets/js/main.js',
      }
    },
  },
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11']
    }),
    ViteRestart({
      reload: [
          './templates/**/*',
      ],
    }),
  ],
  resolve: {
    alias: {
      '@/fonts': resolve('./assets/fonts'),
    },
  },
  server: {
    host: '0.0.0.0',
  },
});

