function tryout()
{
	Function.prototype.extendClass = function(parent)
	{
		this.prototype = Object.create(parent.prototype);
		// this.prototype.constructor = this;
	}
	function Person(name)
	{
		this.name = name;
	}
	Person.prototype.age = 10;
	Person.prototype.getName = function()
	{
		return this.name;
	}
	function Developer(name,expertise)
	{
		Person.call(this,name);
		this.expertise = expertise;
	}
	// Developer.prototype = new Person();
	Developer.extendClass(Person);
	Developer.prototype.getExpertise = function()
	{
		return this.expertise;
	}
	var devObj = new Developer("Vaibhav","JS");
	var devObj2 = new Developer("Vaibhav","JS");

	delete devObj2.age;
	console.log(devObj2);


	/*console.log("Constructor of Person -> "+Person.prototype.constructor.name);
	console.log("Constructor of Developer -> "+Developer.prototype.constructor.name);
	console.log(devObj);
	console.log(devObj.getExpertise());
	console.log(devObj.getName());
	console.log(devObj.age);*/
}