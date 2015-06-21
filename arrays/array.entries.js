'use strict';

/*
  Array.entries returns an array iterator objects
  which contains the key value pairs of each index 
  in the array
 */

let someArr = ['value1', 'value2', 'value3'];

let arrIter = someArr.entries();

console.log(arrIter.next().value); // [ 0, 'value1' ]
console.log(arrIter.next().value); // [ 1, 'value2' ]
console.log(arrIter.next().value); // [ 2, 'value3' ]
console.log(arrIter.next().value); // undefined