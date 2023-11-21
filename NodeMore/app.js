//const http = require("http");

const express= require("express");
const app= express();  // request handle function 

app.use("/",(req, res, next)=>{
    console.log("Middleware 1");
    next();
})

app.use("/yoyo",(req, res, next)=>{
    console.log("Middleware 2");
    res.send("<h1>Hello it is me express<h2>");
});

app.use("/course",(req, res, next)=>{
    console.log("Middleware 2")
    res.send("<form method=\"POST\"><input type=\"text\" name=\"title\"><button type=\"submit\">Submit</button></form>");
});


app.use("/abc",(req, res, next)=>{
    //console.log("Middleware 2")
    console.log(" Middle of nowhere");
    res.redirect("/yoyo");
});

//const server= http.createServer(app);

app.listen(3000); 