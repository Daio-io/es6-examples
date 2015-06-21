'use strict';
/*
  Array.from allows you to create a new array 
  from an array-like object or iterable type object
  note: if using iojs you will need to run these examples 
  with the array harmony flag:
  iojs --harmony_arrays
 */

// From an array like object object
let obj = {
  
  0: 'value1',
  1: 'value2',
  length: 2
  
};

let arr = Array.from(obj);

console.log(arr); //  ['value1', 'value2'];
