module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'airbnb',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest', 'prettier'],
  rules: {
    'import/no-default-export': 1,
    'import/prefer-default-export': 0,
    '@typescript-eslint/explicit-function-return-type': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
  },
  env: {
    'jest/globals': true,
    browser: true,
    node: true,
  },
  overrides: [
    {
      files: ['**/*.test.ts'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        'dot-notation': 'off',
        'import/no-extraneous-dependencies': 'off',
      },
    },
    {
      files: ['**/scripts/*.ts'],
      rules: {
        'no-console': 'off',
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
  globals: {
    __static: true,
  },
  settings: {
    'import/core-modules': ['electron'],
  },
};
