module.exports = {
  env: {
    jest: true, // Recognize Jest globals
  },
  extends: [
    'expo',
    'prettier',
    'plugin:react-native-a11y/all',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:prettier/recommended',
    'plugin:jest/recommended',
  ],
  plugins: ['simple-import-sort', 'jest'],
  rules: {
    'prettier/prettier': 'error',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    '@typescript-eslint/no-var-requires': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react-native-a11y/has-valid-accessibility-ignores-invert-colors': [
      'error',
      {
        invertableComponents: ['FastImage'],
      },
    ],
    'react-native-a11y/has-accessibility-props': [
      'error',
      {
        touchables: ['TouchableCustom'],
      },
    ],
    'react-native-a11y/has-valid-accessibility-descriptors': 1,
    'react-native-a11y/has-valid-accessibility-states': 2,
    'react-native-a11y/has-accessibility-hint': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'max-lines': ['error', { max: 400, skipBlankLines: true, skipComments: true }],
  },
  overrides: [
    {
      files: ['*.test.tsx', 'jest-setup.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        'max-lines': ['error', { max: 500, skipBlankLines: true, skipComments: true }],
      },
    },
    {
      files: ['**mock-data.ts'], // Adjust the pattern to match files you want to skip
      rules: {
        'max-lines': 'off', // Disable the rule for these files
      },
    },
  ],
};