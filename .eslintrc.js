module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
  },
  plugins: ['@typescript-eslint'],
  rules: {
    // 禁止硬编码颜色值
    'no-restricted-syntax': [
      'error',
      {
        selector: 'Literal[value=/^#([0-9A-Fa-f]{3}){1,2}$/]',
        message: '禁止硬编码颜色值，请使用 CSS 变量（如 var(--color-primary-500)）',
      },
    ],
    // 建议使用 CSS 变量
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE'],
        leadingUnderscore: 'allow',
      },
    ],
  },
  ignorePatterns: [
    'node_modules/',
    'dist/',
    '*.css',
    '*.d.ts',
  ],
};
