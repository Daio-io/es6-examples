'use strict';

export function getNumber() {

    return Math.floor(Math.random());

}

export var someValue = 'hello';

export var someObject = {

    numberGet: getNumber,
    value: someValue

};