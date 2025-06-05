import js from '@eslint/js';
import global from 'globals';
import prettier from 'eslint-config-prettier';
import reactPlugin from 'eslint-plugin-react';
import plugin from '@tanstack/eslint-plugin-query';
/** @type {import('eslint').Linter.Config[]} */

export default [
  js.configs.recommended,
  {
    ...reactPlugin.configs.flat.recommended,
    settings: {
      react: {
        version: "detect",  
      }
    }
  },
  reactPlugin.configs.flat['jsx-runtime'],
  ...plugin.configs['flat/recommended'],
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      globals: {
        ...global.browser,
        ...global.node,
      },
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
      },
    },
    rules: {
      'react/no-unescaped-entities': 'off', 
      'react/prop-types': 'off',
    }
  },
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      globals: {
        ...global.browser,
        ...global.node,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        }
      },
    },
    rules: {
      'react/no-unescaped-entities': 'off', 
      'react/prop-types': 'off',
    }
  },
  prettier
]