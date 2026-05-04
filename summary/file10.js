let weakmap = new WeakMap();

function trackAccess(obj){
       let counter = 0;
    return new Proxy(obj,{
        get(target,prop){
            counter++;
weakmap.set(obj,counter);
           return target[prop];
        }
    })
}

function getStats(obj){
    return weakmap.get(obj);
}


const original = { a: 1, b: 2 };
const proxy = trackAccess(original);

// Actions (reading properties via proxy):
console.log(proxy.a);
console.log(proxy.b);
console.log(proxy.a);

// Expected Output
console.log(getStats(original)); 
// 3