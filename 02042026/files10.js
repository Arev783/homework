class Car{
    #speed;
    constructor(speed){
        this.speed = speed;
    }

    set speed(value){
        if(value >= 200) {
        console.log("Too fast");
        return;
        }
        this.#speed=value;
    }

    get speed(){
        return this.#speed;
    }
}

let obj = new Car(180);
obj.speed=250;
console.log(obj.speed);