Function.prototype.myBind = function(thisArg, ...args) {
      
    const original = this;
    return function(...arg)
    {
        let newThis = thisArg ?? globalThis;
        let sym = Symbol(42);
        newThis[sym] = original;
        let res = newThis[sym](...args,...arg);
        delete newThis[sym];
        return res; 
    }
}

const user = { name: "Joe Doe" };

function showInfo(city, country) {
    return `${this.name} lives in ${city}, ${country}`;
}

const boundShowInfo = showInfo.myBind(user, "New York");
console.log(boundShowInfo("USA"));