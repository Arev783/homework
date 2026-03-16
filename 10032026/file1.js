//Object Merging: Create two objects, `person1` and `person2`, with some overlapping properties. 
// Use `Object.assign()` to merge them into a new object called `mergedPerson`.

let person1 = {
    name:"Jhon",
    lastname:"Smith",
    age:25
};
let person2 = {
    city:"New York",
    car:"BMW",
};
let mergedPerson ={};
Object.assign(mergedPerson,person1,person2);
console.log(mergedPerson);