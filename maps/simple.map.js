'use strict';

// A Map is a simple key/value pair object
// Any value, including objects and other types can be used
// as either key or value
// It differs from a javascript object in several ways
// 1. Maps do not have a prototype
// 2. Objects use strings as keys
// 3. Map has a size value
var map = new Map();

// Set keys and values as what ever you want
map.set('array', ['value', 3]);
map.set(['value', 3], 'array');
map.set({anObj:'object is the key'}, 'some value');
map.set(function functionIsAKey() { console.log('Hello')}, 'some value');

// Get the map size easily
console.log(map.size);

for (let i of map) {

    console.log(i)
}

console.log(map.get('array'));

map.delete('array'); // delete something

console.log(map.get('array')); // undefined


