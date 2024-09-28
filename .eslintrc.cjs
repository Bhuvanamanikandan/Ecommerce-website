module.exports = {
  root: true,
  env: { browser: true, es2020: true},
  extends: [
    'eslint:recommended',
    'plugin:react/recommanded',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommanded',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parseOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-unused-vars': 0,
  },
}