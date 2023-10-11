module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb', 'plugin:prettier/recommended'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    // 'import/no-unresolved': 'off',
    // 'import/extensions': 'off',
    'object-curly-newline': 'off',
    'no-console': 'off',
    'react/jsx-props-no-spreading': 'off',
  },
  // settings: {
  //   'import/resolver': {
  //     alias: {
  //       map: [['@', './src']],
  //       extensions: ['.js', '.jsx'],
  //     },
  //   },
  // },
};
