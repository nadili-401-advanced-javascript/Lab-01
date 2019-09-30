'use strict';

const validator = require('./lib/validator.js');

let str = 'однажды в студеную зимнюю пору';
//let str = [1, 2, 3];
console.log ('string validation => ' + str, validator.isValid(str, 'string') );