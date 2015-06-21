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

let mappedArr = Array.from(obj, function(value, index) {

  return value + ' is index: '+ index;

});

console.log(mappedArr); // [ 'value1 is index: 0', 'value2 is index: 1' ]

// The final optional parameter is the 'this' context

let mappedArr2 = Array.from(obj, function(value, index) {

  return this.hello + ' ' + value + ' is index: '+ index + ';'

}, {hello: 'hi there'});

console.log(mappedArr2);
/*
 Other iterable objects include Set and Map
 */

// -- SETS --

let someSet = new Set();

// add values
someSet.add('setval1');
someSet.add('setval2');

let setArr = Array.from(someSet);

console.log(setArr); // [ 'setval1', 'setval2' ]

// -- MAPS --

let map = new Map();

// Set keys and values as what ever you want
map.set('key1', 'value1');
map.set({objkey: 'object is the map key'}, 'value2');

let mapArr = Array.from(map);

console.log(mapArr); // [ [ 'key1', 'value1' ], [ { objkey: 'object is the map key' }, 'value2' ] ]
