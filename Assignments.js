
const r =require('readline-sync');

class arrydisp{
     getArray(arry,size){
        for(var i=0;i<size;i++){
            arry[i]=[];
            for(var j=0;j<size;j++){
                arry[i][j]=r.questionInt(" ")
            }
        }
        return arry;
    }
    
     displayArray(arry1,size){
        for(var i=0;i<size;i++){
            for(var j=0;j<size;j++){
                process.stdout.write(" "+arry1[i][j]);
            }
            console.log();
        }
    }
}

var arry1 = [];

var obj = new arrydisp;

var size=r.questionInt("enter the array size: ");

console.log("enter the array elements: ");

arry1=obj.getArray(arry1,size);

console.log("enterd array is: ");
obj.displayArray(arry1,size);
