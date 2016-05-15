function combinationInheritance() {
    "use strict";

    function Person(name) {
        this.name = name;
    }
    Person.prototype.getName = function () {
        return this.name;
    };

    function Student(name, rollNumber) {
        Person.call(this, name);
        this.rollNumber = rollNumber;
    }
    Student.prototype = new Person();
    Student.prototype.getRollNumber = function () {
        return this.rollNumber;
    };

    var obj = new Student("Student 1", 10);
    console.log(obj.getName(), obj.getRollNumber());
}