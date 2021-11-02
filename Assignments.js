const r= require('readline-sync');
limit = r.questionInt("enter the array size: ");



var arry1=[];
var arry2=[];
var sum=[];
var disp="";

console.log ("enter the values of the first array: ");

for(var i=0;i<limit;i++){
    arry1[i] = [];
    for(var j=0;j<limit;j++){
        arry1[i][j]= r.questionInt(" ");
    }
}

console.log("enter the values of the second array: ");

for(var i=0;i<limit;i++){
    arry2[i]=[];
    for(var j=0;j<limit;j++){
        arry2[i][j]=r.questionInt(" ");
    }
}

for(var i=0;i<limit;i++){
    sum[i]=[];
    for(var j=0;j<limit;j++){
        sum[i][j] = arry1[i][j]+arry2[i][j];
        
    }
}


console.log(sum);

