class BankAccount{
    #balance;
    constructor(balance){
        this.#balance=balance;
    }

    set balance(value){
        if(value<=0) return;
        this.#balance+=value;
    }

    get balance(){
        return this.#balance;
    }
}

let obj = new BankAccount(2365);
obj.balance = 5548;
console.log(obj.balance);