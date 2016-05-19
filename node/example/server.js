var net = require('net');
var server = net.createServer(function (connectionListener) {
    console.log("connected");
    console.log(this.address());

    this.getConnections(function (error, count) {
        if (error) {
            console.log("Error occured");
        }
        connectionListener.on('data', function (data) {
            console.log("server received = " + data);
            connectionListener.write("Hey client");
        });
        connectionListener.on('end', function () {
            console.log("disconnected");
        });
        connectionListener.on('error', function () {
            console.log("server error");
        });
    });
});
server.on('error', function () {
    console.log('server error');
});
server.on('data', function (data) {
    console.log(data);
});
server.listen(8787, function () {
    console.log('server listening');
});