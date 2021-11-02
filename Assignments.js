const r = require("readline-sync");

var wt = r.questionInt("enter the written text mark: ");
var le = r.questionInt("enter the lab exam marks: ");
var as = r.questionInt("enter the assignmet mark: ");

var grade =(wt*70)/100 + (le*20)/100 + (as*10)/100;

console.log("grade of the student: ",grade);