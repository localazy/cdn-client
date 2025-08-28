import { localazy } from '@localazy/eslint-config';

/** @type {import('@localazy/eslint-config').LocalazyOptions} */
const options = {
  ignoreDefinitions: ['.gitignore'],
  features: {
    forcePathAliases: true,
    forceJsExtensions: true,
  },
  userConfigs: [
    {
      ignores: [
        'tests/fixtures/file-types-metafile/file15-js/',
        'tests/fixtures/file-types-metafile/file14-ts/',
        'docs/code-examples/',
        'docs/.vitepress/',
      ],
    },
    {
      rules: {
        '@typescript-eslint/no-unnecessary-condition': 'off',
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        '@typescript-eslint/no-extraneous-class': 'off',
        '@typescript-eslint/no-redundant-type-constituents': 'off',
      },
    },
  ],
};

export default localazy(options);
