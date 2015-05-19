'use strict';
// A set allows for storing unique
// values of any type
// This can be primitive types or references to objects

// create a simple set

var someSet = new Set();

// add values
someSet.add(10);
someSet.add('hello');

// Add an object
var myObj = Object.create(null);
someSet.add(myObj);

// Get the size
console.log(someSet.size); // 3

// test if values exist
console.log(someSet.has(myObj)); // true
console.log(someSet.has('goodbye')); // false

// delete values
someSet.delete(10);
console.log(someSet.has(10)); // false
console.log(someSet.size); // 2


