var net = require('net');
var connection = net.createConnection({
    port: '8787',
    host: '127.0.0.1'
}, function () {
    console.log("connected successfully");
    this.write('Hello');
});

connection.on('data', function (data) {
    console.log("client received = ", data.toString());
});
connection.on('error', function (error) {
    console.log(error);
});
connection.on('end', function () {
    console.log('disconnected');
});