module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    "jest": true
  },
  "extends": [
    'plugin:react/recommended',
    'google',
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended"
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    'react',
  ],
  'rules': {
    "react/react-in-jsx-scope": "off",
    "require-jsdoc":"off"
  },
};
