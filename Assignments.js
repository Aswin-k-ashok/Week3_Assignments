// get arry()
// add arry()
// display arry()

const r =require('readline-sync');
var arry1 = [];
var arry2 = [];
var sum=[];
var size=r.questionInt("enter the array size: ");

console.log("enter the 1st array elements: ");
arry1=getArray(arry1,size);
console.log("enter the 2nd array elements: ");
arry2=getArray(arry2,size);

sum=addArry(arry1,arry2,size);

console.log("sum of the arrays:")

displayArray(sum,size);



function getArray(arry,size){
    for(var i=0;i<size;i++){
        arry[i]=[];
        for(var j=0;j<size;j++){
            arry[i][j]=r.questionInt(" ")
        }
    }
    return arry;
}




function addArry(arry1 ,arry2,size){
    for(var i=0;i<size;i++){
        sum[i]=[];
        for(var j=0;j<size;j++){
            sum[i][j]=arry1[i][j]+arry2[i][j];
        }
    }
    return sum;
}

function displayArray(sum,size){
    for(var i=0;i<size;i++){
        for(var j=0;j<size;j++){
            process.stdout.write(" "+sum[i][j]);
        }
        console.log();
    }
}

