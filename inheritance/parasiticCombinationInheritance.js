function parasiticCombinationInheritance() {
    function extendPrototype(parent, child) {
        var prototype = parent.prototype;
        prototype.constructor = child;
        child.prototype = prototype;
    }

    function deepCopy(p, c) {
        var c = c || {};
        for (var i in p) {
            if (typeof p[i] === 'object') {
                c[i] = (p[i].constructor === Array) ? [] : {};
                deepCopy(p[i], c[i]);
            } else {
                c[i] = p[i];
            }
        }
        return c;
    }
    Function.prototype.extend = function(parent) {
        // 'this' refers to child
        var child = this;
        var parentPrototype = parent.prototype;
        child.prototype = Object.create(parentPrototype);
        child.prototype.constructor = child;

        // copy methods on existing prototype
        /*
            var childPrototype = this.prototype;
            var childExistingPrototype = deepCopy(childPrototype);

            var key,existingProtoLength = Object.keys(childExistingPrototype).length;
            if(existingProtoLength.length!=0)
            {
                for(key in childExistingPrototype)
                {
                    child.prototype[key] = childExistingPrototype[key];
                    // parentPrototype[key] = childPrototype[key];
                }
            }*/
    };

    function Parent(name) {
        this.name = name;
    }
    Parent.prototype.getName = function() {
        return this.name;
    };

    function Child(name, company) {
        Parent.call(this, name);
        this.company = company;
    }
    Child.extend(Parent);
    Child.prototype.getCompany = function() {
        return this.company;
    };
    //        extendPrototype(Parent,Child);

    // console.log(Parent.prototype);
    var obj = new Child("Vaibhav", "Pubmatic");
    console.log("Parent constructor pointing to -> " + Parent.prototype.constructor.name);
    console.log(obj);
    console.log(obj.getCompany());
    console.log(obj.getName());
}