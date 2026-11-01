import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const root = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: resolve(root, 'index.html'),
        aqone: resolve(root, 'aqone/index.html'),
        devguild: resolve(root, 'devguild/index.html'),
        credentials: resolve(root, 'credentials/index.html'),
      },
    },
  },
});
