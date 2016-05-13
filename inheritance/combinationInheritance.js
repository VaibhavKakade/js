function combinationInheritance() {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.getName = function() {
        return this.name;
    };

    function Student(name, rollNumber) {
        Person.call(this, name);
        this.rollNumber = rollNumber;
    }
    Student.prototype = new Person();
    Student.prototype.getRollNumber = function() {
        return this.rollNumber;
    };

    var obj = new Student("parent", "child");
    console.log(obj);
    console.log(obj.getName());
    console.log(obj.getRollNumber());
}
