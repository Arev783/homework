//Object Entry Manipulation: Use `Object.entries()` to convert an object into an array of key-value pairs, 
// then manipulate it by filtering based on a condition before converting it back to an object.
let obj = {
    name:"Anna",
    age:23
}
let arr = Object.entries(obj);
const filtArr = arr.filter(([key, value]) => typeof value === "number");
const obj1 = Object.fromEntries(filtArr);
console.log(obj1);
