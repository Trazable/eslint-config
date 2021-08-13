# Trazable ESlint Config

[![NPM](https://img.shields.io/badge/NPM-red)](https://www.npmjs.com/)

## Description

Trazable global config ESlint repository.

## How to use

To use the eslint trazable module you must follow the next steps:

- Step 1:
  - In your new project, download the module with the next command:
  `npm install @trazable/eslint-config`
- Step 2:
  - Put in to your package.json the next property with the module downloaded:

  ```javascript
    "eslintConfig":{
      "extends": ["@trazable/eslint-config"]
    }
  ```

To use specific eslint configurations:
```javascript
  "eslintConfig":{
    "extends": ["@trazable/eslint-config/typescript", "@trazable/eslint-config/backend" ...]
  }
```
