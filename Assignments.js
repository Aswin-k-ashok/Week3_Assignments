var r = require('readline-sync');

var length = Number(r.question("enter the array limit: "));
var myArray= [];

console.log('enter the array elements : ')

for (let i=0;i<length;i++){
    myArray.push(Number(r.question()))
}

var sum =0;

function sumArray(myArray){
    for(var i=0;i<length;i++){
        sum=sum+myArray[i];
    }
    return sum;
}

function myFilter(myArray,callback){
    var x=0
    var sum=sumArray(myArray);
    console.log(sum);
    if(sum%2==0){
        x++
        console.log(Boolean(x))
    }
    else{
        console.log(Boolean(x))
    }

}

myFilter(myArray,sumArray);