const r = require('readline-sync');


class Area{
    circle(r){
        let area = 3.14*r*r;
        console.log(area);
    }
    square(a){
        let area = 4*a;
        console.log(area);
    }
    rectangle(l,b){
        let area = l*b;
        console.log(area);
    }
    triangle(b,h){
        let area = b*h/2;
        console.log(area);
    }
}

class MyClass extends Area{
    main(){
        console.log("1: circle\n2: square\n3: rectangle\n4: triangle");
        var choice = r.questionInt("enter a choice: ");

        switch(choice){
            case 1:
                let rad=r.questionInt("enter the radius: ");
                obj.circle(rad);
            break;

            case 2:
                let sid=r.questionInt("enter the length: ");
                obj.square(sid);
            break;

            case 3:
                let len=r.questionInt("enter the length: ");
                let bre=r.questionInt("enter the bredth: ");
                obj.rectangle(len,bre);
            break;
            
            case 4:
                let hei=r.questionInt("enter the height: ");
                let bas=r.questionInt("enter the base: ");
                obj.triangle(hei,bas);
            break;


        }
        
    }
}

let obj = new MyClass;

obj.main();



