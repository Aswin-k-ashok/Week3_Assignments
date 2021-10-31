const r = require ("readline-sync");
var multi = r.questionInt("enter the multiplier: ");
var limit = r.questionInt("enter the limit: ");

for(var i=1;i<=limit;i++){
    console.log(i,"x",multi,"=",i*multi);
}