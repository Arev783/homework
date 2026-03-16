//Conditional Property Addition: Create an object and conditionally add a property based on whether a variable is truthy or falsy

let obj = {
    color: "red"
};
let variable = "Hello";
if(variable){
    obj.padding = "10px";
}
console.log(obj);