'use strict';

/*
  Array.find allows for finding values in an array
  Array.findIndex allows for finding the index of a value
 */


// Array.find takes a comparative 
// function as a parameter

function findFive(element, index, arr){

  // element is the current element in the array
  // index is the current index of the array
  // arr is the array the find function is called on

  // find 5 is in the array
  return element === 5;

}

let found = [1, 2, 3, 4, 5].find(findFive);

console.log(found); // 5

let found2 = ['hello', 'world', 1, 2, 3, 4, 6].find(findFive);

console.log(found2); // returns undefined if not found

let foundIndex = [1, 2, 5, 2, 1].findIndex(findFive);

console.log(foundIndex); // 2

let foundIndex2 = [1, 2, 2, 1].findIndex(findFive);

console.log(foundIndex2); // -1 if no index

