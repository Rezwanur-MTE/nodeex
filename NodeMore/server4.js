const http= require("http");
const fs= require("fs");
const server= http.createServer((req, res)=>{
   const url = req.url;
   if(url=="/"){
    res.setHeader("Content-Type","text/html");
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write("<body><h1>My first page</h1></body>");
    res.write("</html>");
    return res.end();
   }
   if(url=="/file1"){
    fs.writeFileSync("NewFile.txt","Buy our product from website.");
   res.statusCode=302;
   res.setHeader("Location","/");
   return res.end();
}

res.setHeader("Content-Type", "text/html");
res.write("<html>");
res.write("<head><title>My Second Page</title></head>");
res.write("<body><h1>My Second page</h1></body>");
res.write("</html>");
res.end();


}).listen(5050);