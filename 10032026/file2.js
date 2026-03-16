//Object Freezing: Create an object `student` and freeze it using `Object.freeze()`. 
// Then attempt to modify one of its properties and log the outcome.

let student = {
    name:"Jack",
    age:24
}
Object.freeze(student);
student.age = 25;
console.log(student);