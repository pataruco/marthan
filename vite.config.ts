import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { UserConfig } from 'vite';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default {
  build: {
    minify: 'terser',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        galeria: resolve(__dirname, 'galeria/index.html'),
        'cronicas-y-relatos/el-ensayo-frustrado': resolve(
          __dirname,
          'cronicas-y-relatos/el-ensayo-frustrado.html',
        ),
        'cronicas-y-relatos/pasado-y-presente': resolve(
          __dirname,
          'cronicas-y-relatos/pasado-y-presente.html',
        ),
      },
    },
  },
} satisfies UserConfig;
