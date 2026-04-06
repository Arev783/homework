let arr = [{name: "A", age: 10}, {name: "B", age: 15}];
let numbers = arr.filter(num => num.age > 0);
let filtered = numbers.map(num => num.age)
console.log(filtered);