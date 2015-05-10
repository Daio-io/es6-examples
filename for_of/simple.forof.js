'use strict';

// For of is used to iterate over property values
// of any iterable object - Array, Map, Set,
// arguments object, generators etc
// in comparison for in iterates over property names

// ** FOR OF EXAMPLE ** //

var array = ['word', 9, {test: 'example'}];

for (let i of array){

    console.log(i); // prints 'word', 9, {test: 'example'}

}

// ** FOR IN COMPARISON ** //
// In comparison a For In loop will print the index's

for (let i in array) {

    console.log(i); // prints 0, 1, 2

}

