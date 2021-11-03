const r = require('readline-sync');
var arry1=[];
var arry2=[];

var limit = r.questionInt("enter the array size: ");
 
console.log("enter the array elements: ");

for(var i=0;i<limit;i++){
    arry1.push(r.questionInt(" "))
}

for(var i=1,j=i+1;i<limit;i++,j++){
    arry2.push(i*j);
}

console.log(arry2);


