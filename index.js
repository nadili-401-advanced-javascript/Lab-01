'use strict';

const validator = require('./lib/validator.js');

const print = (boo) => {
  if (boo){
    console.log ('Hoorray! :) Input is valid!'+ '\n');
  }else {
    console.log (':( Sorry! Input is invalid.'+ '\n'+ '\n');
  }
};

let str = 'однажды в студеную зимнюю пору';
let num = 3544;
let arr = [1, 2, 3, 4];
let obj = {x: 'y'};
let boo = false;
let func = () => {};

// Validate if variable is a string
console.log('Validate if variable is a string: ', '"'+str+'"');
print(validator.isValid(str, 'string'));
console.log('Validate if variable is a string: ', obj);
print(validator.isValid(obj, 'string'));

// Validate if variable is number
console.log('Validate if variable is a number: ', num);
print(validator.isValid(num, 'number'));
console.log('Validate if variable is an number: ', '['+arr+']');
print(validator.isValid(arr, 'number'));

// Validate if variable is an Array
console.log('Validate if variable is an Array: ', '['+arr+']');
print(validator.isValid(arr, 'array'));
console.log('Validate if variable is an Array: ', obj);
print(validator.isValid(arr, 'object'));

// Validate if variable is an Object
console.log('Validate if variable is an Object: ', obj);
print(validator.isValid(obj, 'object'));
console.log('Validate if variable is an Object: ', boo);
print(validator.isValid(boo, 'object'));

// Validate if variable is a boolean
console.log('Validate if variable is a boolean: ', boo);
print(validator.isValid(boo, 'boolean'));
console.log('Validate if variable is a boolean: ', '['+arr+']');
print(validator.isValid(arr, 'boolean'));

// Validate if variable is a function
console.log('Validate if variable is a function: ', func.toString());
print(validator.isValid(func, 'function'));
console.log('Validate if variable is a function: ', boo);
print(validator.isValid(boo, 'function'));

///////    complex validations    ////////

const obj1 = { 
  a: {g: {e: 13}},
  b: 'blah',
  c: 3};

const arr1 = ['yellow', 'blue', 'green'];
const arrFromApprovedList1 = ['yes', 'no', 'Yes', 'No'];
const arrFromApprovedList2 = ['yes', 'no', 'yes', 'no'];
const approvedList = ['yes', 'no'];

// Validates the presence of required object properties at any level

console.log('Validate if propery \'b\' is part of an object: ' + JSON.stringify(obj1));
print(validator.isObjectHasProperty(obj1, 'b'));
console.log('Validate if propery \'blah\' is part of an object: ' + JSON.stringify(obj1));
print(validator.isObjectHasProperty(obj1, 'blah'));

// Validates the proper types of object properties
console.log('Validate if propery \'a\' of: ' + JSON.stringify(obj1)) + ' is an object';
print(validator.isObjectPropertyCorrect (obj1, 'a', 'object'));

console.log('Validate if propery \'b\' of: ' + JSON.stringify(obj1)) + ' is an object';
print(validator.isObjectPropertyCorrect (obj1, 'b', 'object'));

// Validates the types of values contained in an array
console.log('Validate if values contained in an array: ' + '['+arr1+']' + ' are strings');
print (validator.isArrayValueHasCorrectType(arr, 'string'));

console.log('Validate if values contained in an array: ' + '['+arr1+']' + ' are numbers');
print (validator.isArrayValueHasCorrectType(arr, 'numbers'));

// Validates a value array against an approved list
console.log('Validate if values contained in an array: ' + '['+arrFromApprovedList2+']' + ' are are from approved list: ' + '['+approvedList+']');
print (validator.isArrayValueHasApprovedType(arrFromApprovedList2, approvedList));

console.log('Validate if values contained in an array: ' + '['+arrFromApprovedList1+']' + ' are are from approved list: ' + '['+approvedList+']');
print (validator.isArrayValueHasApprovedType(arrFromApprovedList1, approvedList));