//   ╔═╗╔═╗╦  ╦╔╗╔╔╦╗┬─┐┌─┐
//   ║╣ ╚═╗║  ║║║║ ║ ├┬┘│
//  o╚═╝╚═╝╩═╝╩╝╚╝ ╩ ┴└─└─┘
const OFF = 0
const ERROR = 2

module.exports = {
  env: {
    browser: true,
  },
  extends: ['./typescript', 'react-app', 'react-app/jest'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    useJSXTextNode: true,
  },
  rules: {
    // eslint base rules
    'jsx-quotes': [ERROR, 'prefer-single'],
    'no-console': [ERROR, { allow: ['debug'] }],


    'jest/no-mocks-import': OFF,

    // eslint-unicorn rules
    'unicorn/prevent-abbreviations': [
      ERROR,
      {
        whitelist: {
          env: true,
          tsconfigRootDir: true,
          rankDir: true,
          param: true,
          params: true,
          Params: true,
          props: true,
          Props: true,
          src: true,
          ref: true,
          Ref: true,
          i18n: true,
          'react-i18next': true,
        },
      },
    ],

    // eslint prettier rules
    'prettier/prettier': [
      ERROR,
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
    
    // eslint-react rules
    'react/jsx-filename-extension': [
      ERROR,
      {
        extensions: ['.tsx'],
      },
    ],

    '@typescript-eslint/no-extra-semi': OFF
  },
  
}
