function constructorStealing() {
    function Person(name) {
        this.parentArr = ["red", "green"];
        this.parentName = name;
        this.getName = function() {
            return this.parentName;
        }
    }
    /*Person.prototype.getName = function()
        {
            return this.parentName;
        }*/
    function Student(parentName, childName) {
        Person.call(this, parentName);
        this.childName = childName;
    }

    var obj1 = new Student("parent", "child");
    var obj2 = new Student("parent", "child");
    obj1.parentArr.push("black");
    // console.log(obj1,obj2);
    console.log(obj2.getName());
}
