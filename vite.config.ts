/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import dts from 'vite-plugin-dts'; // Generate index.d.ts file
import terser from '@rollup/plugin-terser'; // Minify output
import Replace from 'unplugin-replace/vite'; // Replace variables in files
import pkg from './package.json';

const banner: string = `/* ${pkg.name}@${pkg.version}
 * (c) ${new Date().getFullYear()} ${pkg.author}
 * @license MIT */\n`;

export default defineConfig({
  resolve: {
    alias: {
      '@/': `${resolve(__dirname, '')}/src/`,
    },
  },

  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
    },
    minify: false,
    sourcemap: true,
    rollupOptions: {
      output: [
        // Node ES Module
        {
          format: 'esm',
          entryFileNames: 'localazy-cdn-client.js',
          banner,
        },
        // Node CommonJS
        {
          format: 'cjs',
          dir: 'dist/node',
          entryFileNames: 'localazy-cdn-client.cjs',
          banner,
        },
        // Browser ES Module
        {
          format: 'esm',
          entryFileNames: 'localazy-cdn-client.min.js',
          banner,
          plugins: [
            terser(),
          ],
        },
        // Browser UMD + JS CDNs
        {
          format: 'umd',
          dir: 'dist/browser',
          entryFileNames: 'localazy-cdn-client.umd.min.js',
          banner,
          name: 'LocalazyCDN',
          esModule: false,
          plugins: [
            terser(),
          ],
        },
      ],

      external: [
        ...Object.keys(pkg.devDependencies || {}),
      ],
    },
  },

  plugins: [
    dts({ rollupTypes: true }),

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    Replace({
      values: {
        __CLIENT_VERSION__: pkg.version,
      },
    }),
  ],
});
