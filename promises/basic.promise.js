'use strict';

// Promises are now a part of ES6
// No need to use a library to create promises
// within your application

var prom = new Promise(function(resolve, reject){

    resolve('hello, Im a promise');

});

prom.then(function(res){

    console.log(res);

});

console.log(prom);