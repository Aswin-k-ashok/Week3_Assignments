const r = require('readline-sync');

let my_height = r.question("enter a your height: ");

try{
    if(isNaN(my_height)) throw "must be a number"
    else if(my_height>250) throw "Huge height error"
    else if(my_height<50) throw "Tiny height error"
    else console.log(my_height);
}
catch(err){
    console.log(err)
}