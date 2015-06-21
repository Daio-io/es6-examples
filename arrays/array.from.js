'use strict';
/*
 Array.from allows you to create a new array 
 from an array-like object or iterable type object
 note: if using iojs you will need to run these examples 
 with the array harmony flag:
 iojs --harmony_arrays
 */

// an array like object is an
// object with indexed elements and a length property
let obj = {

  0: 'value1',
  1: 'value2',
  length: 2

};

let arr = Array.from(obj);

console.log(arr); //  ['value1', 'value2'];

/*
 Array.from also takes an optional map 
 function to call on each element of the array
 */

let mapArr = Array.from(obj, function(key, value) {

  return key + value;

});

console.log(mapArr);
