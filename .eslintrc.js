export const rules = {
  parser: '@typescript-eslint/parser', // Add the parser for TypeScript
  parserOptions: {
    ecmaVersion: 2020, // Or whatever version you're using
    sourceType: 'module', // Allow imports
  },
  extends: [
    'plugin:@typescript-eslint/recommended', // Add the TypeScript plugin
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
