var r = require("readline-sync");

var mark= r.questionInt("enter your mark: ");

if (mark>50){
    console.log("you have passed");
}
else{
    console.log("you have failed");
}
