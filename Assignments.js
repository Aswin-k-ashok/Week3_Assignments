const r = require('readline-sync');

var limit = r.questionInt("enter the limit: ");

var sum=0;

for(var i=1;i<limit;i++){
    if(i%2!=0){
        sum+=i;
    }
}

console.log("sum of odd numbers is = "+sum);