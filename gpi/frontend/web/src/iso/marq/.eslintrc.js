// https://eslint.org/docs/user-guide/configuring

module.exports = {
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    mocha: true,

  },
  globals: {
  },
  rules: {
    'no-unused-expressions': 'off',
    'camelcase': 'off',
  }
}
