module.exports = {
  extends: ['eslint:recommended', 'plugin:import/recommended', 'plugin:import/typescript', 'plugin:react/recommended', 'plugin:import/recommended', 'plugin:jsx-a11y/recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended', 'eslint-config-prettier', 'plugin:storybook/recommended'],
  plugins: ['@typescript-eslint', 'import'],
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      typescript: {},
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/no-named-as-default': 0,
    'import/no-unresolved': ['error', { ignore: ['^@/'] }],
    'react/display-name': 'off',
    '@typescript-eslint/ban-types': 'off',
    'import/named': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'import/no-internal-modules': [
      'error',
      { allow: ['~/*', '~/pages/*', '~/components/*', 'react-dom/client', 'react-icons/hi', '~~/**/*'] }
    ],
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: ['builtin', 'external', 'internal', 'index'],
        warnOnUnassignedImports: true,
        alphabetize: {
          order: 'asc',
          orderImportKind: 'asc',
          caseInsensitive: false
        }
      }
    ],
    'no-restricted-imports': ['error', { patterns: ['../*'] }],
    'import/no-default-export': ['error'],
    'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
    'import/default': ['off']
  },
  overrides: [
    {
      files: ['*.test.ts'],
      settings: {
        'import/resolver': {
          typescript: {
            project: './tsconfig.test.json'
          },
          node: {
            paths: ['src', 'test'],
            extensions: ['.js', '.jsx', '.ts', '.tsx']
          }
        }
      }
    },
    {
      files: ['e2e/**/*.ts'],
      settings: {
        'import/resolver': {
          typescript: {
            project: './e2e/tsconfig.json'
          },
          node: {
            paths: ['src', 'test', 'e2e'],
            extensions: ['.js', '.jsx', '.ts', '.tsx']
          }
        }
      }
    }
  ]
};
