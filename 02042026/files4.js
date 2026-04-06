 class Counter{
    #count
    constructor(){
        this.#count=0;
    }

    increment(){
        this.#count++;
    }

    get count(){
        return this.#count;
    }
    
 }

 let obj = new Counter();

 obj.increment();
 obj.increment();
 console.log(obj.count);
