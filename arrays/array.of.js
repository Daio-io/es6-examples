'use strict';

/*
 Array.of creates an array from any set of params of any type
 note: if using iojs you will need to run these examples 
 with the array harmony flag:
 iojs --harmony_arrays
 */

let arr1 = Array.of(1, 2, 3);

console.log(arr1); // [1, 2, 3]

// Can create array from any types
let arr2 = Array.of([1, 2, 3], {hello: 'world'});
let arr3 = Array.of(undefined, null, '');
// or using rest parameters
let arr4 = Array.of(...arr1, [4, 5, 6], 7);

console.log(arr2);
console.log(arr3);
console.log(arr4);