'use strict';
/*
 Destructure means to dismantle it into values
 This example will focus on array dismantling
 */

let someArray = [1, 2, 3];

// A simple destructure looks like this

let [a, b, c] = someArray; // assigns each value in an array to a new variable 

console.log(a, b, c); // 1 2 3

// Nested arrays can also be destructed in the same way

let arr = [
  ['hello', 'world'],
  'bye'
];
let [[d, e], f] = arr;

console.log(d, e, f); // hello world bye

// You can also use destructuring to 
// swap variables elements im an array

let [x, y] = ['value1', 'value2'];
[x, y] = [y, x];

console.log([x, y]); // ['value2', 'value1']

// Chained assignments can be done as follows

let g, h;
let [i, j] = [g, h] = [1, 2];

console.log(i, j, g, h); // 1 2 1 2


// destructuing can also be done as part of
// a for of loop
let k, l;
for ([k, l] of [1, 2, 3]) {}

console.log(k ,l); // 1 2

// the use of leading commas can get 
// to an exact location in the array

let leadArr = [1, 2, 3, 4];

let [,,z] = leadArr;

console.log(z); // 3