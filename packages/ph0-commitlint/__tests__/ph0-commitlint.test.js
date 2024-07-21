'use strict';

const ph0Commitlint = require('..');
const assert = require('assert').strict;

assert.strictEqual(ph0Commitlint(), 'Hello from ph0Commitlint');
console.info('ph0Commitlint tests passed');
