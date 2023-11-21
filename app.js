/*console.log(" Hello world !This is Node JS test ");
var a= 3;
var b= 5;
console.log(a+b);*/

var http = require('http')

http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type':'text'})
    res.write("Hello Aliens ! Did you find something?")
    res.end()
}).listen(5000)

