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

/*
 Array.keys returns an array iterator object
 which contains the key values of the array
 */


let arrIter2 = someArr.keys();

console.log(arrIter2.next().value); // 0
console.log(arrIter2.next().value); // 1
console.log(arrIter2.next().value); // 2
console.log(arrIter2.next().value); // undefined

/*
 Array.values returns an array iterator object
 which contains the values of the array
 */

let arrIter3= someArr.values();

console.log(arrIter3.next().value); // 0
console.log(arrIter3.next().value); // 1
console.log(arrIter3.next().value); // 2
console.log(arrIter3.next().value); // undefined