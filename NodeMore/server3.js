const http= require("http");
const server= http.createServer((req, res)=>{
    const url= req.url;
    if(url=="/")
    {
        res.setHeader("Content-Type","text/html");
        res.write("<html>");
        res.write("<head><title>My First Page</title></head>");
        res.write("<body><h1> This is page one</h1><body>");
        res.write("</html>");
        return res.end();
    }
    res.setHeader("Content-Type","text/html");
        res.write("<html>");
        res.write("<head><title>My Second Page</title></head>");
        res.write("<body><h1> This is page Two</h1><body>");
        res.write("</html>");
         res.end();

});

server.listen(8080);   