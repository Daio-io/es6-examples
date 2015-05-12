'use strict';

// Symbols are a primitive type that can be used
// to hide object state properties
// a symbol is always unique

let sym = Symbol();

// optional description parameter can be passed in
// but this is not resolved as an identifier for the symbol
// only to aid debugging. Symbols are unique.
let sym2 = Symbol('my symbol');
let sym3 = Symbol('my symbol');

console.log(sym2 === sym3); // false

let accNum = Symbol('Bank Account Number Is Private');
let balSym = Symbol('Account Balance');

class BankAccount {
    constructor(name, accNumber, balance) {
        this.name = name;
        this[accNum] = accNumber;
        this[balSym] = balance;
    }
    get getName() {
        return this.name;
    }
    get getBalance() {
        return this[balSym];
    }
}

let bankAccount = new BankAccount('Kev', 12345, 10);

console.log(bankAccount['name']);
console.log(bankAccount.name);
console.log(bankAccount.getBalance); // 10
console.log(bankAccount['accNum']); //  undefined
console.log(bankAccount.accNum); // undefined

// Only if you have access to the symbol can you get the value
console.log(bankAccount[accNum]); // 12345

// They can be used to hide properties but are not
// considered private as you can obtain all symbols
let symbols = Object.getOwnPropertySymbols(bankAccount);
console.log(symbols); // an array of symbols is returned

console.log(bankAccount[symbols[0]]); // 12345

