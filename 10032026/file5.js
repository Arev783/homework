//For-Of Loop: Create an object with numeric properties and use a `for...of` loop (with `Object.keys()`) to log each property value.
let obj = {
    1:"Hello",
    2:"45",
    3:32
}
for(let key of Object.keys(obj))
{
    console.log(obj[key]);
}