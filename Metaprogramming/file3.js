let OddValidator ={}
OddValidator[Symbol.hasInstance]=function (instance){
if(typeof instance === "number" && !isNaN(instance) && instance%2===1)return true;
return false;
}

console.log(5 instanceof OddValidator);
console.log(10 instanceof OddValidator);
console.log("7" instanceof OddValidator);