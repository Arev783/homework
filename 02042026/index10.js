let arr =[
 {name: "Anna", age: 17},
 {name: "John", age: 20}
];

let res = arr.filter(num => num.age >= 18);
for(key in res){
console.log(`${res[key].name} is ${res[key].age} years old`);
}