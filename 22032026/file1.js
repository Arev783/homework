Function.prototype.myCall = function(thisObj,...args)
{
    let newThis = thisObj ?? globalThis;
    let sym = Symbol(42);
    newThis[sym] = this;
    let res = newThis[sym](...args);
    delete newThis[sym];
    return res;
}
function showInfo(city, country) {
 return `${this.name} lives in ${city}, ${country}`;
}

const user = { name: "Joe Doe" };
console.log(showInfo.myCall(user, "New-York", "USA"));