const http = require("http");

http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write("HELLO People. \n This is Code Eater Node Test");
  console.log("Hello from console");
  console.log("URL: ",req.url,"Method: ",req.method,"Header: ",req.headers);
  res.end();
}).listen(8000);

