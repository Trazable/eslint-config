# @trazable/eslint-config

[![Trazable Standards](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![Semantic Versioning](https://img.shields.io/badge/semver-2.0.0-brightgreen)](https://semver.org/spec/v2.0.0.html)

> This project was bootstrapped with [Lerna](https://lerna.js.org/).

@trazable/eslint-config is a collection of useful ESLint configs for much more convenient project developing:

- 🧩 Modular usage. Easily combine presets for the different technologies.
- 🔗 Almost conflict free.

Here is the example for TypeScript React project:

```json
.eslintrc
{
  "extends": [
    "@trazable/patch",
    "@trazable/base",
    "@trazable/typescript",
    "@trazable/react"
  ],
  "parser": "@typescript-eslint/parser"
}
```

## Usage

`@trazable/eslint-config` consists of many ESLint presets. They are designed to work with each other without any conflicts. In most cases, you only need to specify [extends](#presets) and [parser](#parsers) fields. `@trazable/eslint-config` will take care of composing it.
There are two basic presets - patch and base.
Almost every `@trazable/eslint-config` preset has some plugins in its dependencies and uses them from there. Default ESLint module resolution behavior doesn't allow doing it this way. The patch preset fixes this problem. It uses `@rushstack/eslint-patch` under the hood.
The base preset encapsulates some base plugins and rules. It is required for using other `@trazable/eslint-config` presets.
The other presets are optional. Select them depending on your goals and project stack.
For example, the config for React + TypeScript project:

``` json
// .eslintrc
{
  "extends": [
    "@trazable/patch",
    "@trazable/base",
    "@trazable/typescript",
    "@trazable/react",
  ],
  "parser": "@typescript-eslint/parser"
}
```

## <a id="presets"></a>Presets

- `@trazable/eslint-config-patch`
- `@trazable/eslint-config-base`
- `@trazable/eslint-config-node`
- `@trazable/eslint-config-typescript`
- `@trazable/eslint-config-react`

## <a id="parsers"></a>Parsers

In most cases, you need [`@babel/eslint-parser`](https://www.npmjs.com/package/@babel/eslint-parser) for JavaScript, and [`@typescript-eslint/parser`](https://www.npmjs.com/package/@typescript-eslint/parser) for Typescript.

## Common issues

### Errors from @rushstack/eslint-patch

Most often happens in monorepos.
Rename your .eslintrc to .eslintrc.js and move patch config in the following way:
```js
// .eslintrc.js
require("@trazable/eslint-config-patch")

module.exports = {
  extends: [
    "@trazable/base",
  ],
  parser: "@babel/eslint-parser",
}
```

### Errors related to `"parserOptions.project"`

Specify your tsconfig.json location manually:
```json
// .eslintrc
{
  "extends": [
    "@trazable/patch",
    "@trazable/base",
    "@trazable/typescript"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": ["./tsconfig.json"]
  }
}
```

If it doesn't work, try this:
```js
// .eslintrc.js
const path = require('path')

module.exports = {
  extends: [
    '@trazable/patch',
    '@trazable/base',
    '@trazable/typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: [path.resolve(__dirname, './tsconfig.json')]
  },
}
```

## Contributing

### Documentation

Steps to contribute:
- Fork the repo.
- Checkout to a new branch.
- Make changes, commit them.
- git push to your fork.
- Create a pull request into the main repo.

## Publish

### Documentation

Steps to publish new version to npm:
- Clone the repo.
- Run `npm i`.
- Run `npm run bootstrap`.
- Run `npm run build`.
- Run `lerna publish`

