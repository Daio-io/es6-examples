'use strict';

// ** GENERATORS ** //

// Allows for simplified iterator
// Declared with function *() {}
// Generator has a function next which executes the
// function until it hits a yield
// Where it then returns that value and pauses in its
// current context until next is called again
// the next() call returns an object which has the value returned
// and a boolean done, to confirm the generator has complete

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

// Calling the generator function returns the generator
// which you can then call next() on
var gen = endlessGen();

// Call next starts and runs until it
// hits yield where it returns an object {value: 'the returned value', done: boolean}
console.log(gen.next().value);
// Second call to next begins from the yield statement
// The context and state the generator was left in stay the same
console.log(gen.next().value);
// And so it continues
console.log(gen.next().value);
