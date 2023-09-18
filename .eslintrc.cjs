module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:jsx-a11y/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: '.',
  },
  plugins: ['react-refresh', 'jsx-a11y', 'react-hooks'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'no-console': 'error',
    camelcase: ['error', { properties: 'never' }],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: ['dist', '.eslintrc.cjs'],
};
