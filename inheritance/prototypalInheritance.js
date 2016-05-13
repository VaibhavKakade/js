function prototypalInheritance() {
    function createObject(obj) {
        function F() {}
        F.prototype = obj;
        return new F();
    }

    var person = {
        name: "vaibhav",
        company: "pubmatic",
        games: ['diablo3', 'cod3', 'dota2']
    };

    /*function Person()
        {
            this.name = "vaibhav";
            this.company = "pubmatic";
            this.games = ['diablo3','cod3','dota2']
        }
        var person = new Person();*/

    //        var obj = createObject(person);
    var obj = Object.create(person);
    obj.name = "obj1";
    obj.games.push('batman');

    var obj2 = createObject(person);
    obj2.name = "obj2";
    obj2.games.push('ac4');

    console.log(obj, obj2);
    console.log(person);
}