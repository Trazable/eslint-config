import { severity } from '../../../shared'

export default {
  env: {
    browser: true,
  },
  extends: ['react-app', 'react-app/jest'],
  plugins: ['react', 'redux-reselect'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    useJSXTextNode: true,
  },
  rules: {
    // eslint base rules
    'jsx-quotes': [severity.ERROR, 'prefer-single'],

    'jest/no-mocks-import': severity.OFF,

    // eslint-unicorn rules
    'unicorn/prevent-abbreviations': [
      severity.ERROR,
      {
        allowList: {
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

    // eslint-react rules
    'react/jsx-filename-extension': [
      severity.ERROR,
      {
        extensions: ['.tsx'],
      },
    ],
  },
}
