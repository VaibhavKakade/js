var app = require('http').createServer(),
	io = require('socket.io').listen(app);
/*fs = require('fs'),
	clientPage = fs.readFileSync(__dirname + '/client.html');*/

app.listen(8989);

/*function connectionHandler(req, res) {
	console.log("request received");
	res.writeHead(200, {"Content-Type": "text/html"});
	res.end(clientPage);
}*/

io.sockets.on('connection', function (socket) {
	console.log("client connected");
	socket.emit("clientId", Math.round(Math.random() * 10));
	socket.on('chatMessage', function (message) {
		console.log('client has sent', message);
		socket.broadcast.emit('clientMessage', message);
	});
});
