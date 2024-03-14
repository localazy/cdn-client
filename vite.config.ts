/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import dts from 'vite-plugin-dts';
import { terser } from 'rollup-plugin-terser';
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
        {
          format: 'esm',
          entryFileNames: 'localazy-cdn-client.js',
          banner,
        },
        {
          format: 'esm',
          entryFileNames: 'localazy-cdn-client.min.js',
          banner,
          plugins: [
            // minify output
            // @ts-expect-error plugin is compatible
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call
            terser(),
          ],
        },
        {
          format: 'cjs',
          dir: 'dist/node',
          entryFileNames: 'localazy-cdn-client.cjs',
          banner,
        },
        {
          format: 'cjs',
          dir: 'dist/node',
          entryFileNames: 'localazy-cdn-client.min.cjs',
          banner,
          plugins: [
            // minify output
            // @ts-expect-error plugin is compatible
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call
            terser(),
          ],
        },
        {
          format: 'umd',
          dir: 'dist/browser',
          entryFileNames: 'localazy-cdn-client.umd.js',
          banner,
          name: 'LocalazyCDN',
          esModule: false,
          globals: {
            axios: 'axios',
          },
        },
        {
          format: 'umd',
          dir: 'dist/browser',
          entryFileNames: 'localazy-cdn-client.umd.min.js',
          banner,
          name: 'LocalazyCDN',
          esModule: false,
          globals: {
            axios: 'axios',
          },
          plugins: [
            // minify output
            // @ts-expect-error plugin is compatible
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call
            terser(),
          ],
        },
      ],

      external: [
        ...Object.keys(pkg.dependencies || {}),
        ...Object.keys(pkg.devDependencies || {}),
      ],
    },
  },

  plugins: [
    // Generate index.d.ts file.
    dts({ rollupTypes: true }),
  ],
});
