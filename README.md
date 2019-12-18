# listjs

[![Build Status](https://travis-ci.org/helio-frota/listjs.svg?branch=master)](https://travis-ci.org/helio-frota/listjs) [![Greenkeeper badge](https://badges.greenkeeper.io/helio-frota/listjs.svg)](https://greenkeeper.io/)

Display all JS files of a Node.js project.

## Install

```
npm install listjs -S
```

## Usage

```js
const listJS = require('./listjs');

const ignore = ['bower_components', 'foo', 'test'];

listJS('project/path/here', ignore)
.then((files) => {
  console.log(files);
})
.catch((e) => {
  console.error(e);
});
```