exports.route = function (handle, pathName, response, postData) {
	if (typeof handle[pathName] === "function") {
		handle[pathName](response, postData);
	} else {
		// console.log("No handler found");
		response.writeHead(200, {
			"Content-Type": "text/plain"
		});
		response.write("404 No handler found");
		response.end();
	}
};
