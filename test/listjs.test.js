'use strict';

const listJS = require('../index');
const path = require('path');

test('two JS files found.', () => {
  expect.assertions(1);
  return listJS('.')
    .then(data => {
      expect(data).toEqual(['index.js', `test${path.sep}listjs.test.js`]);
    })
    .catch(e => expect(e).toMatch('error'));
});

test('one JS file found (ignoring test directory).', () => {
  expect.assertions(1);
  return listJS('.', ['test'])
    .then(data => {
      expect(data).toEqual(['index.js']);
    })
    .catch(e => expect(e).toMatch('error'));
});

test('the search fails with an error.', () => {
  expect.assertions(1);
  return listJS('', {})
  .catch(e => expect(e.toString())
  .toMatch('Error: ENOENT: no such file or directory, scandir \'\''));
});
