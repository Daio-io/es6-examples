'use strict';

// convert an iterable into a set

var myArray = [1,2,3,4,5,6];

// Adds the contents of an array as individual values in the set
// You can pass in any iterable object type
var mySet = new Set(myArray);

console.log(mySet.has(myArray[0])); // true

// Iterate through each value in the set
for (let i of mySet) {

    console.log(i);
}
// you can use foreach and other iterations as well

mySet.forEach(function(value){

    console.log(value);

});



