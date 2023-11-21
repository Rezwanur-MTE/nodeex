const express = require('express');

const app = express();

app.get('/', function(req,res){
    res.send('Hello World....')
})

app.get('/alien', function(req, res){
   res.send('Welcome Back Aliens')
})

app.get('/alien/20', function(req, res){
    res.send('Welcome Fahim to this world')
 })

app.listen(5000, function(req, res){
    console.log('Running......');
});

