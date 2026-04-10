function myInstanceOf(obj, Constructor){
  if(obj === null || obj === undefined) return false;
  if(typeof obj !== "object" && typeof obj !== "function") return false;
  let proto = obj.__proto__;
    while(proto){
        if(proto === Constructor.prototype) return true;
        proto= proto.__proto__;
    }
    return false;
}

function Animal() {}
function Dog() {}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

const dog = new Dog();

console.log(myInstanceOf(dog, Dog)); // true
console.log(myInstanceOf(dog, Animal)); // true
console.log(myInstanceOf(dog, Array)); // false

console.log(myInstanceOf(null, Object)); // false
console.log(myInstanceOf(123, Number)); // false
console.log(myInstanceOf("hello", String)); // false