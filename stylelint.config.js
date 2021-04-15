module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'function',
          'return',
          'mixin',
          'include',
          'if',
          'else',
          'at-root',
        ],
      },
    ],
    'no-empty-source': null,
  },
}
