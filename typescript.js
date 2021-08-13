//   ╔═╗╔═╗╦  ╦╔╗╔╔╦╗┬─┐┌─┐
//   ║╣ ╚═╗║  ║║║║ ║ ├┬┘│
//  o╚═╝╚═╝╩═╝╩╝╚╝ ╩ ┴└─└─┘
const ERROR = 2

module.exports = {
  extends: [ './common', 'plugin:@typescript-eslint/recommended' ],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  rules: {
    '@typescript-eslint/ban-ts-comment': [
      ERROR,
      {
        'ts-ignore': false,
      },
    ],
  }
}
