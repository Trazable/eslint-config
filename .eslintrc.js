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
  plugins: [
    'unicorn',
    'prettier',
  ],
  extends: [
    'standard',
    'plugin:unicorn/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    config: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'prefer-template': ERROR,
    'no-var': ERROR,
    'no-console': ERROR,
    'comma-dangle': [ERROR, {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'ignore',
    }],
    'no-multiple-empty-lines': [ERROR, {
      max: 2,
      maxEOF: 1,
    }],
    'unicorn/prevent-abbreviations': [ERROR, {
      whitelist: {
        env: true,
        req: true,
        res: true,
        ref: true,
        passReqToCallback: true,
      },
    }],
  },
}
