module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: '16.13'
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx']
      },
      alias: {
        map: [
          ['@backend/db', './backend/packages/db'],
          ['@backend/graphql', './backend/packages/graphql'],
          ['@backend/utils', './backend/packages/utils'],
          ['@backend/config', './backend/config/index.ts'],
          ['@web/assets', './web/src/assets'],
          ['@web/config', './web/src/config'],
          ['@web/constants', './web/src/constants'],
          ['@web/global', './web/src/global'],
          ['@web/layout', './web/src/layout'],
          ['@web/graphql', './web/src/graphql'],
          ['@web/pages', './web/src/pages'],
          ['@web/theme', './web/src/theme'],
          ['@web/utils', './web/src/utils']
        ],
        extensions: ['.ts', '.tsx']
      }
    }
  },
  env: {
    es6: true,
    browser: true,
    node: true
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript'
  ],
  rules: {
    // JS/TS RULES
    quotes: ['error', 'single'],
    camelcase: 'error',
    'prefer-const': 'error',
    'no-var': 'error',
    'no-dupe-else-if': 'off',
    'import/no-unresolved': 'off',
    'import/newline-after-import': ['error', { count: 1 }],
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/semi': ['error', 'always'],
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'no-multiple-empty-lines': ['error', { max: 2, maxBOF: 0, maxEOF: 1 }],
    'no-trailing-spaces': 'error',
    '@typescript-eslint/type-annotation-spacing': ['error'],
    'object-curly-spacing': ['error', 'always'],
    'key-spacing': ['error', { beforeColon: false }],
    'object-shorthand': ['error', 'always'],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    // JSX RULES
    'jsx-quotes': ['error', 'prefer-single'],
    'react/jsx-boolean-value': 'error',
    'react/jsx-closing-bracket-location': 'error',
    'react/jsx-equals-spacing': 'error',
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-indent': ['error', 2],
    'react/jsx-max-props-per-line': ['error', { maximum: 4 }],
    'react/jsx-no-bind': 'error',
    'react/jsx-no-literals': 'off',
    'react/jsx-tag-spacing': ['error', { beforeSelfClosing: 'always' }]
  }
};
