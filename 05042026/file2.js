function myNew(Constructor, ...args){

    let newObj = {};
    newObj.__proto__  = Constructor.prototype;
   let res =  Constructor.call(newObj,...args);
    if(res!==null && (typeof res === "object" || typeof res === "function")) return res;
    else 
        return newObj;
      
    
}

function User(name) {
 this.name = name;
}

function Car(model) {
 this.model = model;
 return { custom: "returned object" };
}

const user = myNew(User, "Alex");
console.log(user.name); // Alex
console.log(Object.getPrototypeOf(user) === User.prototype); // true
console.log(user.constructor === User); // true

const car = myNew(Car, "BMW");
console.log(car.custom); // returned object

function Empty() {}

const obj = myNew(Empty);
console.log(Object.getPrototypeOf(obj) === Empty.prototype); // true

function Test() {
 return 123;
}

const test = myNew(Test);
console.log(Object.getPrototypeOf(test) === Test.prototype); // true

