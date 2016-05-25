var http = require("http");
var url = require("url");

function onRequest(request, response) {
		var pathName = url.parse(request.url).pathname,
			postData = "";
		console.log("request received for " + pathName);

		request.setEncoding("utf8");
		request.addListener("data", function (dataChunk) {
			postData += dataChunk;
			console.log("data received = " + dataChunk);
		});
		request.addListener("end", function () {
			router(handle, pathName, response, postData);
		});
		/*var content = router(handle,pathName);
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write(content);
		response.end();*/
	}

function createHttpServer(router, handle) {
	http.createServer(onRequest).listen(8888);
	console.log("Server started");
}
exports.start = createHttpServer;
