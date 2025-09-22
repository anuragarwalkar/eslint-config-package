# eslint-config

A shareable ESLint configuration for React Native projects with TypeScript, designed to provide consistent code quality and style across multiple repositories.

## Features

- **React Native support** with Expo configuration
- **TypeScript** linting with recommended rules
- **Jest** testing framework support
- **Accessibility** rules for inclusive app development
- **Prettier** integration for consistent formatting
- **Import sorting** for clean, organized imports
- **Customizable** rules for different file types

## Installation

```bash
npm install --save-dev eslint-config-anurag eslint
```

Or with yarn:

```bash
yarn add --dev eslint-config-anurag eslint
```

## Usage

Add the configuration to your `.eslintrc.js` file:

```javascript
module.exports = {
  extends: ['eslint-config-anurag'],
  // Add any project-specific overrides here
};
```

Or in your `package.json`:

```json
{
  "eslintConfig": {
    "extends": ["eslint-config-anurag"]
  }
}
```

## What's Included

This configuration extends and configures the following ESLint plugins and configurations:

- **Base configurations:**
  - `expo` - Expo-specific React Native rules
  - `prettier` - Prettier integration
  
- **Plugin configurations:**
  - `@typescript-eslint/recommended` - TypeScript linting
  - `react-hooks/recommended` - React Hooks best practices
  - `react-native-a11y/all` - Accessibility rules for React Native
  - `eslint-comments/recommended` - ESLint directive comments
  - `prettier/recommended` - Prettier formatting rules
  - `jest/recommended` - Jest testing best practices

- **Additional plugins:**
  - `simple-import-sort` - Automatic import sorting
  - `jest` - Jest-specific linting rules

## Customization

You can override any rules in your local ESLint configuration:

```javascript
module.exports = {
  extends: ['eslint-config-anurag'],
  rules: {
    // Override specific rules for your project
    'max-lines': ['error', { max: 500 }],
    '@typescript-eslint/no-explicit-any': 'error',
  },
};
```

## File-specific Rules

The configuration includes special rules for:

- **Test files** (`*.test.tsx`, `jest-setup.js`): Relaxed rules for testing
- **Mock data files** (`**mock-data.ts`): Disabled line limits

## Development

To contribute to this configuration:

1. Clone the repository
2. Install dependencies: `npm install`
3. Make your changes to `index.js`
4. Test with a sample project
5. Submit a pull request

## Publishing

To publish a new version:

```bash
npm version patch  # or minor/major
npm publish
```

## License

MIT