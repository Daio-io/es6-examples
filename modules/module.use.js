'use strict';

// Import all exports from the file as mod
import * as mod from 'module.use';

console.log(mod.getNumber());

console.log(mod.someValue);

console.log(mod.someObject.numberGet());

console.log(mod.someObject.value);

// Import individual exports
import {getNumber, someValue} from 'module.use';

console.log(getNumber());
console.log(someValue);
