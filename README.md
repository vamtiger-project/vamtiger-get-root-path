# VAMTIGER Get Root Path
[VAMTIGER VAMTIGER Get Root Path](https://github.com/vamtiger-project/vamtiger-get-root-path) will return a a root path for a defined array of paths.

## Installation
[VAMTIGER VAMTIGER Get Root Path](https://github.com/vamtiger-project/vamtiger-get-root-path) can be installed using [npm](https://www.npmjs.com/) or [yarn]():
```bash
npm i --save vamtiger-get-root-path
```
or
```bash
yarn add vamtiger-get-root-path
```

## Usage
[Import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) or [require](https://nodejs.org/api/modules.html#modules_require) a referece to [VAMTIGER VAMTIGER Get Root Path](https://github.com/vamtiger-project/vamtiger-get-root-path):
```javascript
import getRootPath from 'vamtiger-get-root-path';
```
or
```javascript
const getRootPath = require('vamtiger-get-root-path').default;
```

[VAMTIGER VAMTIGER Get Root Path](https://github.com/vamtiger-project/vamtiger-get-root-path) will return a a root path for a defined array of paths.
```javascript
const getRootPath = require('vamtiger-get-root-path').default

const paths = [
    'some/root/path/file.ext',
    'not/some/root/path/file.ext'
];
const rootPath = getRootPath({ html })
// 'some/root/path/file.ext'
```