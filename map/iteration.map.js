'use strict';

// Create a simple Map

let map = new Map();

map.set('k1', 'v1');
map.set('k2', 'v2');
map.set('k3', 'v3');
map.set('k4', 'v4');

// Iterate just the values
for(let i of map.values()){
    console.log(i);
}

// Iterate through just the keys
for(let i of map.keys()){
    console.log(i);
}

// Using for each with callback
map.forEach(function(key, value) {

    console.log('Key:', key);
    console.log('Value:', value);
});