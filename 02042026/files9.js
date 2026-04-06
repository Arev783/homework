class Cart{
    #total = 0;

    set total(item){
        this.#total += item;
    }

    get total(){
        return this.#total;
    }
}

let obj = new Cart();
obj.total = 2500;
console.log(obj.total);