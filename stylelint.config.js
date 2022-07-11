module.exports = {
  customSyntax: 'postcss-html',
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-vue',
    'stylelint-config-prettier',
  ],
  ignoreFiles: [
    './assets/scss/reset/**/*'
  ],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'include',
          'use',
          'function',
          'return',
          'mixin',
          'each',
          'for',
          'if',
          'else',
        ],
      },
    ],
  },
}
