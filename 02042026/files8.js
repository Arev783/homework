class Email {
    #email;
    constructor(email){
        this.email = email;
    }

    set email(value){
        if(value.includes('@')){
            this.#email = value;
        }else{
        console.log("Invalid email");
        }
    }

    get email(){
        return this.#email;
    }
}
let obj = new Email("test@gmail.com");
obj.email = 'example@gmail.com';
console.log(obj.email);