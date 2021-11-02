const r = require('readline-sync');

var arry=[];
arry=getArray(arry);

displayArray(arry);


function getArray(arry){
    var lmt= r.questionInt("enter the array size: ");
    console.log("enter the array elements: ");
    for(var i=0;i<lmt;i++){
        arry.push(r.questionInt(" "));
        
    }
    return arry;
}
 
function displayArray(arry){
    console.log(arry);
}