let Account ={
    balance:1000,
    currency:"USD"
}
Object.defineProperty(Account,Symbol.toPrimitive,{
 value: function(hint){
if(hint === "number") return this.balance;
else if(hint === "string") return "Account Balance: " + this.balance + " " + this.currency;
else  return this.balance;
}
})


console.log(+Account);
console.log(String(Account));
console.log(Account + 500);