const rd = require('readline-sync') 

var p = rd.questionInt("enter the principle amount")
var n = rd.questionFloat("enter the number of terms")
var r = rd.questionFloat("enter a the rate of interest")

var si=(p*r*n)/100;

console.log("simple interest is: "+si)