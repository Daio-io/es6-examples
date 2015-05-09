'use strict';

// In a generator you can call
// yield as many times as you want
// this just returns the value and
// pauses execution at this point
// saving the current context of the generator too

var yieldGen = function *() {

    let i = 10;
    // First call to next() will return this yield
    yield i += 10; // 20 - done: false
    // Second call to next() will carry on from here
    yield i += 5; // 25 - done: false
    // Third call will carry on from here
    yield i += 1; // 26 - done false

    // any further calls will return undefined
    // with done set to true

};

// Calling the generator returns the generator
var gen = yieldGen();

console.log(gen.next().value); // 20
console.log(gen.next().value); // 25
console.log(gen.next().value); // 26
console.log(gen.next().value); // undefined
console.log(gen.next().done); // true


