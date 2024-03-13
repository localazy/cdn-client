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
          format: 'es',
          entryFileNames: 'localazy-cdn.js',
          banner,
        },
        {
          format: 'es',
          entryFileNames: 'localazy-cdn.min.js',
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
          dir: 'dist/cjs',
          entryFileNames: 'localazy-cdn.cjs',
          banner,
        },
        {
          format: 'cjs',
          dir: 'dist/cjs',
          entryFileNames: 'localazy-cdn.min.cjs',
          plugins: [
            // minify output
            // @ts-expect-error plugin is compatible
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call
            terser(),
          ],
        },
        {
          format: 'umd',
          dir: 'dist/umd',
          entryFileNames: 'localazy-cdn.umd.cjs',
          banner,
          name: 'LocalazyCDN',
          globals: {
            axios: 'axios',
          },
        },
        {
          format: 'umd',
          dir: 'dist/umd',
          entryFileNames: 'localazy-cdn.umd.min.cjs',
          name: 'LocalazyCDN',
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
        // node internals
        // 'https',
      ],
    },
  },

  plugins: [
    // Generate index.d.ts file.
    dts({ rollupTypes: true }),
  ],
});
