'use strict';

// You can also use generators to delegate
// into other generators or iterable objects
// where calls to next() will continue in the other iterable
// to do this you use the yield*

var firstGen = function *(){

    yield 1;
    // delegate to another generator
    // calls to next() will now be in the second generator
    yield* secondGen();
    yield 'now the second gen has finished I will continue';
    yield 10;

};

var secondGen = function *(){

    yield 'welcome to the second gen';
    yield 10;
    // you can delegate to any iterable type object
    yield* ['some array', 3, 7, 'end of array'];
    // string is an iterable type - returns 1, 2, 3
    yield* '123';
    yield 'finished now so carry on with the first gen';

};

var gen = firstGen();

console.log(gen.next().value); //  1 (firstGen)
console.log(gen.next().value); // 'welcome to the second gen' (secondGen)
console.log(gen.next().value); // 10 (secondGen)
console.log(gen.next().value); // 'some array' (secondGen - array)
console.log(gen.next().value); // 3 (secondGen - array)
console.log(gen.next().value); // 7 (secondGen - array)
console.log(gen.next().value); // 'end of array' (secondGen - array)
console.log(gen.next().value); // '1' (secondGen - string)
console.log(gen.next().value); // '2' (secondGen - string)
console.log(gen.next().value); // '3' (secondGen - string)
console.log(gen.next().value); // 'finished now so carry on with the first gen' (secondGen)
console.log(gen.next().value); // 'now the second gen has finished I will continue' (firstGen)
console.log(gen.next().value); // 10 (firstGen)
