class Rectangle{
    #width;
    #height;
    constructor(width,height){
        this.width=width;
        this.height=height;
    }
set width(value){
     if(value <= 0) return;
     this.#width = value;
}

set height(value){
     if(value <= 0) return;
    this.#height = value;
}

get area(){
    return this.#width * this.#height;
}
}

let obj = new Rectangle(25,26);
console.log(obj.area);
