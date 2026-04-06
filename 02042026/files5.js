class Product{
    #price;
    constructor(price){
        this.price=price;
    }

    set price(value){
        if(value <=0) return;
        this.#price = value*0.9;
    }

    get price(){
        return this.#price;
    }
}

let obj = new Product(25);
console.log(obj.price);