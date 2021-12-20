import { severity } from '../../../shared'

export default {
  extends: ['plugin:@typescript-eslint/recommended'],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  rules: {
    '@typescript-eslint/ban-ts-comment': [
      severity.ERROR,
      {
        'ts-ignore': false,
      },
    ],

    // eslint prettier rules
    'prettier/prettier': [
      severity.ERROR,
      {
        printWidth: 100,
        tabWidth: 2,
        useTabs: false,
        semi: false,
        singleQuote: true,
        quoteProps: 'as-needed',
        jsxSingleQuote: true,
        trailingComma: 'es5',
        bracketSpacing: true,
        jsxBracketSameLine: false,
        arrowParens: 'avoid',
        parser: 'typescript',
      },
    ],

    '@typescript-eslint/no-extra-semi': severity.OFF,
  },
}
