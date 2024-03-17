module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'prettier',
    'airbnb-base',
    'airbnb-typescript/base',
  ],
  parserOptions: {
    project: ['tsconfig.json', 'tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    'prettier',
    '@typescript-eslint',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'max-len': ['error', { code: 120 }],
    'prefer-destructuring': 'off',
  },
};
