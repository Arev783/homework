let arr = [{
name: "Aram", 
age: 18
},
{
    name: "Arsen", 
age: 25
},
{
    name: "Davit", 
age: 8
},
{
    name: "Lilit", 
age: 16
}
];

let filtered = arr.filter(num => num.age >=18);
for(key in filtered){
console.log(filtered[key].name);
}