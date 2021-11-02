const r = require('readline-sync');
 
var ary = [];
var temp;
var limit = r.questionInt("enter the array size: ");
 
console.log("enter the array elements: ");
 
for (var i=0;i<limit;i++){
    ary.push(r.questionInt(""));
}
 
for(var i=0;i<limit;i++){
    for(var j=i+1;j<limit;j++){
        if (ary[j]>ary[i]){
            temp=ary[j];
            ary[j]=ary[i];
            ary[i]=temp;
        }
    }
}
 
console.log(ary);