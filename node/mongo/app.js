var databaseUrl = "mydb"; // "username:password@example.com/mydb"
var collections = ["users", "reports"]
var db = require("mongojs").connect(databaseUrl, collections);

db.users.insert({name:'vaibhav',company:'pubmatic'},function(error,success)
{
	console.log(arguments);
})