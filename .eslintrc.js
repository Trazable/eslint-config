require('./packages/eslint-config-patch/build/index')

module.exports = {
  root: true,
  extends: [
    './packages/eslint-config-base/build/index',
    './packages/eslint-config-typescript/build/index',
    './packages/eslint-config-node/build/index',
  ],
  rules: {
    'import/no-anonymous-default-export': [
      'error',
      {
        allowObject: true,
      },
    ],
  },
}
