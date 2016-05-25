/*function sleep(time)
 {
 var startTime = new Date().getTime();
 while(new Date().getTime() <= startTime + time);
 }*/

var exec = require("child_process").exec;
var query = require("querystring");
var fs = require('fs');
/*function start(response)
 {
 console.log("request handler for 'start' is called");
 var content = "empty";
 exec('dir', {
 timeout: 10000,
 maxBuffer: 20000 * 1024
 },
 function(error, stdout, stderr) {
 console.log("exec ->" + stdout);
 content = stdout;
 response.writeHead(200, {
 "Content-Type": "text/plain"
 });
 response.write(content);
 response.end();
 });

 return content;
 }*/
function start(response) {
    var body = '<html>' +
        '<head>' +
        '<meta http-equiv="Content-Type" content="text/html; ' + 'charset=UTF-8" />' +
        '</head>' +
            '<body>' +
                '<form action="/upload" method="post">' +
                    '<textarea name="text" rows="20" cols="60"></textarea>' +
                    '<input type="submit" value="Submit text" />' +
                '</form>' +
            '</body>' +
        '</html>';
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();

}
function upload(response, data) {
    console.log("request handler for 'upload' is called");
    response.writeHead(200, {"Content-Type": "text/plain"});
    // response.write("Upload");
    response.write("You have sent :- " + query.parse(data).text);
    response.end();
}
exports.start = start;
exports.upload = upload;
