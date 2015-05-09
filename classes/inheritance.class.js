'use strict';

var Person = require('./person.class.js');

// Extend Person Class
class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentid = studentId;
    }
    // Overide
    get getName() {
        return super.getName
    }
    get getStudentId() {
        return this.studentid;
    }
}

// Class
var pers = new Person('John', 20);

console.log(pers.getName);
console.log(pers.getAge);
console.log(pers.intro());

// Static Method Call
var persTwo = Person.createInstance('Bill', 50);

console.log(persTwo.getName);
console.log(persTwo.getAge);

// Inheritance
console.log('--------Inheritance--------');
var stud = new Student('Bob', 24, 11223);

console.log(stud.getName);
console.log(stud.getStudentId);
console.log(stud.intro());