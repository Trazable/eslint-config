import { severity } from '../../../shared'

export default {
  env: {
    es2021: true,
  },
  plugins: ['unicorn', 'prettier'],
  extends: ['standard', 'prettier'],
  parserOptions: {
    ecmaVersion: 2021,
  },
  rules: {
    // eslint base rules
    'prefer-template': severity.ERROR,
    'no-var': severity.ERROR,
    'no-console': severity.ERROR,
    'comma-dangle': [
      severity.ERROR,
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
      },
    ],
    'no-multiple-empty-lines': [
      severity.ERROR,
      {
        max: 2,
        maxEOF: 1,
      },
    ],

    // eslint-unicorn rules
    'unicorn/prevent-abbreviations': [
      severity.ERROR,
      {
        allowList: {
          env: true,
          ref: true,
          passReqToCallback: true,
        },
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
      },
    ],
  },
}
