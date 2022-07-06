module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'no-undef': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/no-unused-state': 'off',
    'react/jsx-filename-extension': 'off',
    'react/destructuring-assignment': 'off',
    'max-len': 'off',
    'react/prefer-stateless-function': 'off',
    'react/prop-types': 'off',
    'react/function-component-definition': 'off',
    'import/prefer-default-export': 'off',
  },
};
