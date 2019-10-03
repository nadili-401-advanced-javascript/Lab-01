'use strict';

const validator = require('../lib/validator.js');

describe('validator module performs basic validation of', () => {

  // TODO: Make this series of tests less repetitive ... DRY it out

  let str = 'yes';
  let num = 1;
  let arr = ['a'];
  let obj = {x:'y'};
  let func = () => {};
  let bool = false;


  it('strings', () => {
    expect(validator.isString(str)).toBeTruthy();
    expect(validator.isString(num)).toBeFalsy();
    expect(validator.isString(arr)).toBeFalsy();
    expect(validator.isString(obj)).toBeFalsy();
    expect(validator.isString(func)).toBeFalsy();
    expect(validator.isString(bool)).toBeFalsy();
  });

  it('numbers', () => {
    expect(validator.isNumber(num)).toBeTruthy();
    expect(validator.isNumber(str)).toBeFalsy();
    expect(validator.isNumber(arr)).toBeFalsy();
    expect(validator.isNumber(obj)).toBeFalsy();
    expect(validator.isNumber(func)).toBeFalsy();
    expect(validator.isNumber(bool)).toBeFalsy();
  });

  it('arrays', () => {
    expect(validator.isArray(arr)).toBeTruthy();
    expect(validator.isArray(num)).toBeFalsy();
    expect(validator.isArray(str)).toBeFalsy();
    expect(validator.isArray(obj)).toBeFalsy();
    expect(validator.isArray(func)).toBeFalsy();
    expect(validator.isArray(bool)).toBeFalsy();
  });

  it('objects', () => {
    expect(validator.isObject(obj)).toBeTruthy();  
    expect(validator.isObject(arr)).toBeFalsy();
    expect(validator.isObject(num)).toBeFalsy();
    expect(validator.isObject(str)).toBeFalsy();
    expect(validator.isObject(func)).toBeFalsy();
    expect(validator.isObject(bool)).toBeFalsy();
  });

  it('booleans', () => {
    expect(validator.isBoolean(bool)).toBeTruthy();
    expect(validator.isBoolean(obj)).toBeFalsy(); 
    expect(validator.isBoolean(arr)).toBeFalsy();
    expect(validator.isBoolean(num)).toBeFalsy();
    expect(validator.isBoolean(str)).toBeFalsy();
    expect(validator.isBoolean(func)).toBeFalsy();
  });

  it('functions', () => {
    expect(validator.isFunction(func)).toBeTruthy();
    expect(validator.isFunction(obj)).toBeFalsy(); 
    expect(validator.isFunction(arr)).toBeFalsy();
    expect(validator.isFunction(num)).toBeFalsy();
    expect(validator.isFunction(str)).toBeFalsy(); 
    expect(validator.isFunction(bool)).toBeFalsy();
  });

});

describe('validator module performs complex validations', () => {

  const obj = {
    a: {g: {e: 13}},
    b: 'blah',
    c: 3,
  };

  const arr = ['yellow', 'blue', 'green'];
  const arrFromApprovedList1 = ['yes', 'no', 'Yes', 'No'];
  const arrFromApprovedList2 = ['yes', 'no', 'yes', 'no'];
  const approvedList = ['yes', 'no'];

  it('validates the presence of required object properties at any level', () => {
    // i.e. does person.hair.color exist and have a good value, not just person.hair
    expect(validator.isObjectHasProperty(obj, 'b')).toBeTruthy();
    expect(validator.isObjectHasProperty(obj, 'g')).toBeTruthy();
    expect(validator.isObjectHasProperty(obj, 'e')).toBeTruthy();
    expect(validator.isObjectHasProperty(obj, 'blah')).toBeFalsy();
  });

  it('validates the proper types of object properties', () => {
    // i.e. person.name must be a string, etc.
    expect(validator.isObjectPropertyCorrect (obj, 'a', 'object')).toBeTruthy();
    expect(validator.isObjectPropertyCorrect (obj, 'b', 'string' )).toBeTruthy();
    expect(validator.isObjectPropertyCorrect (obj, 'e', 'number')).toBeTruthy();
    expect(validator.isObjectPropertyCorrect (obj, 'b', 'number')).toBeFalsy();
    expect(validator.isObjectPropertyCorrect (obj, 'blah', 'number')).toBeFalsy();
  });

  it('validates the types of values contained in an array', () => {
    // i.e. an array of all strings or numbers
    expect(validator.isArrayValueHasCorrectType(arr, 'string' )).toBeTruthy();
    expect(validator.isArrayValueHasCorrectType(arr, 'number')).toBeFalsy();
    expect(validator.isArrayValueHasCorrectType(arr, 'object')).toBeFalsy();
    expect(validator.isArrayValueHasCorrectType(obj, 'string')).toBeFalsy();
  });

  it('validates a value array against an approved list', () => {
    // i.e. a string might only be allowed to be "yes" or "no"
    expect(validator.isArrayValueHasApprovedType(arrFromApprovedList2, approvedList)).toBeTruthy();
    expect(validator.isArrayValueHasApprovedType(arrFromApprovedList1, approvedList)).toBeFalsy();
    expect(validator.isArrayValueHasApprovedType(arrFromApprovedList1, approvedList)).toBeFalsy();
  });

  

});

