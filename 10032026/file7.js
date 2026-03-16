//Object Comparison: Write a function `isEqual` that takes two objects and returns `true` if they are deeply equal (same properties and values).
// (Use one of the methods of the JSON object.)

function isEqual(obj1,obj2)
{
   return JSON.stringify(obj1) === JSON.stringify(obj2)
}

let obj1 = {
    color:"red",
    padding:"10px"
}
let obj2 = {
    color:"red",
    padding:"10px"
}
console.log(isEqual(obj1,obj2));