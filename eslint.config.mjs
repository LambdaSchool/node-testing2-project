import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginJest from 'eslint-plugin-jest';

export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'commonjs',
    },
  },
  {
    files: ['**/*.test.js'], // Apply Jest settings only to test files
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jest, // Include Jest globals
      },
    },
    plugins: {
      jest: pluginJest,
    },
    rules: {
      ...pluginJest.configs.recommended.rules, // Apply recommended Jest rules
    },
  },
  pluginJs.configs.recommended,
];