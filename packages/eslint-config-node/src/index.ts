import { severity } from '../../../shared'

export default {
  env: {
    node: true,
    mocha: true,
  },
  rules: {
    // eslint-unicorn rules
    'unicorn/prevent-abbreviations': [
      severity.ERROR,
      {
        allowList: {
          req: true,
          res: true,
        },
      },
    ],
  },
}
