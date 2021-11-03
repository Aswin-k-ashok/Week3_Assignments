const r = require('readline-sync');

let my_string = r.question("enter a string: ");
let my_num = r.questionInt("enter a number: ");

try{
    console.log(my_string.split('').reverse().join(''));
    console.log(my_num.split('').reverse().join(''));
}
catch(err){
    console.log("numbers are not allowd: ")
}
finally{
    console.log(typeof my_string);
}