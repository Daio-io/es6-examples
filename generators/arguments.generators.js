'use strict';

// Just like normal functions
// generators can take arguments

var argGen = function *(someArray){

    for (let i = 0; i < someArray.length; i++){

        yield someArray[i];

    }

};

var gen = argGen(['hello', 'go', 'foo', 'ba', 42]);

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);