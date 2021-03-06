module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'react/no-array-index-key': 'off',
    'react/jsx-no-bind': 'off',
    'import/prefer-default-export': 'off',
    'import/no-anonymous-default-export': 0,
    'import/named': 0,
    'import/namespace': 0,
    'import/default': 0,
    'import/no-named-as-default-member': 0,
    'import/no-named-as-default': 0,
    'import/no-cycle': 0,
    'import/no-unused-modules': 0,
    'import/no-deprecated': 0,
    '@typescript-eslint/indent': 0,
    semi: 'off',
    '@typescript-eslint/semi': ['off'],
  },
};
