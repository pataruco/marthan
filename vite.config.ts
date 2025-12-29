import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { UserConfig } from 'vite';
import Sitemap from 'vite-plugin-sitemap';

const __dirname = dirname(fileURLToPath(import.meta.url));

const hostname = 'https://pedromarthan.com';

export default {
  plugins: [
    Sitemap({
      hostname,
      generateRobotsTxt: true,
      dynamicRoutes: [
        '/',
        '/galeria/',
        '/cronicas-y-relatos/el-ensayo-frustrado.html',
        '/cronicas-y-relatos/pasado-y-presente.html',
        '/cronicas-y-relatos/armitana-ahora-habita-en-la-ciudad.html',
      ],
    }),
  ],
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
        'cronicas-y-relatos/armitana-ahora-habita-en-la-ciudad': resolve(
          __dirname,
          'cronicas-y-relatos/armitana-ahora-habita-en-la-ciudad.html',
        ),
      },
    },
  },
} satisfies UserConfig;
