function car(name,mileage, max_speed){
    this.name=name
    this.mileage=mileage
    this.max_speed=max_speed
    this.display=function(){
        console.log("name: "+name+" "+"milage: "+mileage+" "+"max-speed: "+max_speed)
    }
}
 
var obj1=new car("fiat",18,140)
var obj2=new car("civic",17,180)
obj1.display()
obj2.display()