module.exports = {
  plugins: ['import', 'prettier'],
  extends: ['next/core-web-vitals', 'plugin:prettier/recommended'],
  rules: {
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        pathGroups: [
          {
            group: 'internal',
            position: 'before',
            pattern: '@/**',
          },
        ],
        'newlines-between': 'always',
        pathGroupsExcludedImportTypes: ['builtin'],
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      },
    ],
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  },
  ignorePatterns: ['node_modules/'],
};
