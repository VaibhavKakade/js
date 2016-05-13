function prototypeChain() {
    /**
     * [Person] Prototype chaining inheritance
     */
    function Person() {
        this.pColors = ["red", "green"];
        this.name = "A";
    }
    Person.prototype.getParentClassProperty = function() {
        return this.name;
    };

    function Student() {
        this.rollNumber = "B";
    }

    Student.prototype = new Person();
    Student.prototype.getChildClassProperty = function() {
        return this.rollNumber;
    };

    var obj = new Student();
    var obj2 = new Student();
    obj.pColors.push("blue");
    console.log(obj.constructor.name);
    console.log(obj.getChildClassProperty(), obj.getParentClassProperty());
    console.log(obj2);
}
