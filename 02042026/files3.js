class Temperature{
    #celsius
    constructor(celsius){
        this.celsius=celsius;
    }

    set celsius(cel){
        if(typeof cel !== "number"){
            console.log("It is not a number");
            return;
        }
        this.#celsius=cel;
    }

    get Fahrenheit (){
        return this.#celsius* 9/5 + 32;
    }

    get celsius(){
        return this.#celsius;
    }
}

const tem = new Temperature(20);
console.log(tem.celsius); 
console.log(tem.Fahrenheit);