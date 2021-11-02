const r = require('readline-sync');

console.log("enter 2 numbers: ");

var num1 = r.questionInt("");
var num2 = r.questionInt("");


class result {

    add(num1, num2) {
        var res = num1 + num2;
        return res;
    }
    sub(num1, num2) {
        var res = num1 - num2;
        return res;
    }
    mul(num1, num2) {
        var res = num1 * num2;
        return res;
    }
    div(num1, num2) {
        var res = num1 / num2;
        return res;
    }
}

var obj = new result();
console.log("1:addition \n2:subtraction\n3:multiplication\n4:division")
var choice=r.questionInt("enter your choice: ");


switch(choice){
    case 1:
        var sum = obj.add(num1, num2);
        break;

    case 2:
        var sum =obj.sub(num1,num2);
        break;

    case 3:
        var sum =obj.mul(num1,num2);
        break;
    case 3:
        var sum =obj.div(num1,num2);
        break;
}



console.log(sum);