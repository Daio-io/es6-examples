'use strict';

/*
 Array.fill lets you fill all elements in 
 an array with a single value
 */

let arr = new Array(10);

console.log(arr); // array of 10 empty values

arr.fill(1);

console.log(arr); // [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ]

// Array .fill also takes an 
// optional start and end index

arr.fill(2, 5, arr.length);

console.log(arr);