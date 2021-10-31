const r = require("readline-sync");

var mark= r.questionInt("enter your mark percentage: ");

if (mark>100){
    console.log("enter a valid mark");
}
else if(mark>89){
    console.log("A grade");
}
else if(mark>79){
    console.log("B grade");
}
else if(mark>69){
    console.log("C grade");
}
else if(mark>59){
    console.log("D grade");
}
else if(mark>49){
    console.log("E grade");
}
else{
    console.log("you have failed");
}

