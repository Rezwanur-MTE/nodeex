function add(a,b){
    return a+b;
}
function sub(a,b){
   return a-b;
}
module.exports.add= add
module.exports.sub=sub

// there is another way
exports.mul = function mul(a,b){
    return a*b;
}
console.log(" Appending file from another module")
