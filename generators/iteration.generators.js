'use strict';

// Because a generator returns and iterator object
// when called
// it can be iterated using for of

var simpleGen = function *() {

    let i = 0;

    while (i < 30){
        yield i += 2;
    }

};

// Each loop hits the yield and returns the value
for (let i of simpleGen()) {

    console.log(i); // prints 2, 4, 6, 8, 10 ... 30

}