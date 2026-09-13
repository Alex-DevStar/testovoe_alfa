import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import importPlugin from 'eslint-plugin-import';
import eslintComments from 'eslint-plugin-eslint-comments';
import prettierRecommended from 'eslint-plugin-prettier/recommended';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,

  {
    files: ['./src/**/*.{js,jsx,ts,tsx}'],

    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'jsx-a11y': jsxA11y,
      import: importPlugin,
      'eslint-comments': eslintComments,
    },

    settings: {
      react: {
        version: 'detect',
      },
    },

    rules: {
      quotes: [2, 'single', { avoidEscape: true }],

      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error'],
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',

      'react/prop-types': 'off',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',

      'react-refresh/only-export-components': 'warn',
    },
  },

  prettierRecommended,

  {
    ignores: [
      'node_modules/**',
      'public/**',
      'storybook-static/**',
      'build/**',
      'dist/**',
      'webpack/*.js',
      'package*.json',
      '**/*.d.ts',
      'eslint.config.js',
    ],
  },
);
