function parasiticInheritance() {
    function augmentObj(obj) {
        var clone = Object.create(obj);
        clone.sayName = function() {
            console.log(this.name);
        };
        return clone;
    }
    var person = {
        name: "vaibhav",
        company: "pubmatic",
        games: ['diablo3', 'cod3', 'dota2']
    };

    var obj = augmentObj(person);
    obj.name = "obj";
    obj.games.push('batman');
    obj.sayName();

    var obj2 = augmentObj(person);
    console.log(obj2);
    obj2.sayName();

    console.log(person);
}