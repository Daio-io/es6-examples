'use strict';

// ** GENERATORS ** //

// Allows for simplified iterator
// Declared with function *() {}
// Generator has a function next which runs until it hits a yield
// Where it then returns that value

// Simple example of endless gen function
var endlessGen = function *() {
    // it starts here when you first
    // call next() on the generator
    var i = 0;
    while(true){

        // When yield is reached the function
        // is paused and returns the value
        yield i++;
        // the next call to next() will start here
        // and then head to the top of the loop
        i += 10;

    }

};

var gen = endlessGen();

// Call next starts and runs until it hits yield where it returns
console.log(gen.next());
// Second call to next begins from the yield statement
// The context and state the generator was left in stay the same
console.log(gen.next());
// And so it continues
console.log(gen.next());
