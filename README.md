# babel-plugin-dynamic-import-to-require

Well.. It seemed like a good idea at the beginning, but turned out it is not. Didn't solve my problem as well. But since i did it, it will stay here.

Babel plugin to transpile `import()` to `require()`, for node.

**NOTE:** Babylon >= v6.12.0 is required to correct parse dynamic imports.

## Installation

```sh
$ npm install babel-plugin-dynamic-import-to-require --save-dev
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["dynamic-import-to-require"]
}
```

### Via CLI

```sh
$ babel --plugins dynamic-import-to-require script.js
```

### Via Node API

```javascript
require('babel-core').transform('code', {
  plugins: ['dynamic-import-to-require']
});
```

