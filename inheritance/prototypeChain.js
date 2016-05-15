/*

ADVANTAGES:-
1] Methods on prototype are accessible.

DISADVANTAGES:-
1] Reference types are shared and can by modified by any object of child class. Example, address is shared and s2's modification will be reflected on s1.
2] Cannot pass data to parent's constructor.

*/
function prototypeChain() {
    "use strict";

    function Person() {
        this.name = "Red-X";
        this.address = ["street 1", "street 2"];
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.getAddress = function () {
        return this.address;
    };

    function Student() {
        this.rollNumber = 10;
    }

    Student.prototype = new Person();
    Student.prototype.constructor = Student;
    Student.prototype.getRollNumber = function () {
        return this.rollNumber;
    };

    var s1 = new Student();
    var s2 = new Student();

    console.log(s1.constructor.name);
    console.log(s1);
    s2.address.push("street 3");
    console.log(s1.address);
}