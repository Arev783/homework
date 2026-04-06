class Account{
    #password;
    constructor(password){
        this.password=password;
    }

    set password(word){
         if(word.length<=6)
           {console.log("Password too short"); return;}
          this.#password = word;
    }
    
    get password(){
        return this.#password;
    }
}
const acc = new Account("1234567");
console.log(acc.password); 