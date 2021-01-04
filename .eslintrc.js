//   ╔═╗╔═╗╦  ╦╔╗╔╔╦╗┬─┐┌─┐
//   ║╣ ╚═╗║  ║║║║ ║ ├┬┘│
//  o╚═╝╚═╝╩═╝╩╝╚╝ ╩ ┴└─└─┘
const ERROR = 2

module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
    mocha: true,
  },
  plugins: ['unicorn', 'prettier'],
  extends: ['standard', 'prettier', 'prettier/standard', 'prettier/unicorn'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    config: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    // eslint base rules
    'prefer-template': ERROR,
    'no-var': ERROR,
    'no-console': ERROR,
    'comma-dangle': [
      ERROR,
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
      },
    ],
    'no-multiple-empty-lines': [
      ERROR,
      {
        max: 2,
        maxEOF: 1,
      },
    ],

    // eslint-unicorn rules
    'unicorn/prevent-abbreviations': [
      ERROR,
      {
        whitelist: {
          env: true,
          req: true,
          res: true,
          ref: true,
          passReqToCallback: true,
        },
      },
    ],

    // eslint prettier rules
    'prettier/prettier': [
      ERROR,
      {
        printWidth: 120,
        tabWidth: 2,
        useTabs: false,
        semi: false,
        singleQuote: true,
        quoteProps: 'as-needed',
        trailingComma: 'es5',
        bracketSpacing: true,
        arrowParens: 'avoid',
      },
    ],
  },
}
