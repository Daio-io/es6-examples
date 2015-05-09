'use strict';

// Class is syntactic sugar over
// the classic prototype based OOP
// This example should be self explanatory
// Support for static, super calls, getters and setters as well
// as instance methods

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    intro() {
        return 'My name is ' + this.name;
    }
    get getName() {
        return this.name;
    }
    get getAge() {
        return this.age;
    }
    set setAge(age) {
        this.age = age;
    }
    static createInstance(name, age) {
        return new Person(name, age);
    }
}

// Export the class so we can demonstarte inheritance
module.exports = Person;