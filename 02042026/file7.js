function show() {
return this.name;
}
const obj = { name: "Test" };
const bound = show.bind(obj);
console.log(bound.call({ name: "Wrong" })); // Its print Test because the first we bind(obj);