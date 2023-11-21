var calculation = require('./calc.js')

//import {add} from './calc.js'

var result1= calculation.add(5,15);
console.log("The output of add is  "+result1);
var result2= calculation.sub(3,9);
console.log("The output of sub is "+result2);

var result3= calculation.mul(3,10);
console.log("The output of mul is "+result3);

// file system module - a in built module 

var fs=require('fs')
fs.readFile('calc.js','utf-8',function(err, data){
    console.log(data);
})

/*var pdf_iot=require('fs')
pdf_iot.readFile('IOT.pdf','ascii',function(err, data){    // later asci to unicode converter is needed
    console.log(data);
})*/

var fs1= require('fs');
fs1.writeFile('calc1.js','console.log(" Writing file from another module")', function(err){
   console.log("Data is saved");
});

var fs2= require('fs');
fs2.appendFile('calc.js','console.log(" Appending file from another module")', function(err){
   console.log("Data is saved");
});

// to delete file we have no built in delete function 
// we have to use .unlink('file name', function(err){})
