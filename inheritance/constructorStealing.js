/*

ADVANTAGES:-
1] Reference types are NOT shared.
2] Can pass data to parent's constructor.

DISADVANTAGES:-
1] Methods on prototype are NOT accessible.

*/

function constructorStealing() {
    "use strict";

    function Person(name, address) {
        this.name = name;
        this.address = address;
        this.getName = function () {
            return this.name;
        };
    }
    Person.prototype.getAddress = function () {
        return this.address;
    };

    function Student(name, rollNumber, address) {
        Person.call(this, name, address);
        this.rollNumber = rollNumber;
    }
    Student.prototype.getRollNumber = function () {
        return this.rollNumber;
    };

    var s1 = new Student("A", 1, ["addr 1", "addr 2"]);
    var s2 = new Student("B", 2, ["addr 3"]);
    console.log(s1);
    s2.address.push("addr 4");
    console.log(s1.address, s2.address);
}