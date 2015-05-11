'use strict';

// Weakmaps are very similar to Maps
// However the references to key objects
// are hed weekly. therefore they can be garbage
// collected if there are no further references to those keys

// Keys must be of type object
// Because the map is week and
// key objects can be garbage collected
// the WeakMap is not enumerable
// i.e. there is no list of keys function

// Create a new WeakMap
var weakMap = new WeakMap();

var k1 = {};
var k2 = function(){};

weakMap.set(k1, 'v1');
weakMap.set(k2, 'v2');

// Get value with key
console.log(weakMap.get(k1));

// Just like a Map, check the WeakMap has a key
console.log(weakMap.has(k1));
console.log(weakMap.has(k2));


// You can delete as well
weakMap.delete(k1);
console.log(weakMap.has(k1)); // false
