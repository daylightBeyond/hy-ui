module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: require.resolve('@umijs/lint/dist/config/eslint'),
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/no-unresolved': 0,
    'react/require-default-props': 0,
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['off'],
    'generator-star-spacing': 0,
  },
};
