const r = require('readline-sync');
var limit = r.questionInt("enter the array size: ");
var ary1 = [];
var ary2 = [];

for(var i=0;i<limit;i++){
    ary1.push(r.questionInt("enter the 1st array elements "));
}

console.log(" ");

for(var i=0;i<limit;i++){
    ary2.push(r.questionInt("enter the 2nd array elements "));
}

var temp;

for(var i=0;i<limit;i++){
    temp=ary1[i];
    ary1[i]=ary2[i];
    ary2[i]=temp;
}

console.log("array 1 = ",ary1);
console.log("array 2 = ",ary2);