'use strict';

// Maps can turn a 2D Array (key, values)
// Into a map object

var twoDArr = [['k1', 'v1'],['k2', 'v2'], ['k3', 'v3']];

// Pass the iterable 2D array into the map constructor
var map = new Map(twoDArr);

map.forEach(function(key, value){

    console.log('Key:', key);
    console.log('Value:', value);

});
