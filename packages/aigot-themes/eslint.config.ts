export default {
  extends: ['../../eslint.config.ts'],
  ignorePatterns: ['dist', 'node_modules'],
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
