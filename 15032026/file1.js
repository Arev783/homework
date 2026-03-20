function curry(cb) {
    let sizeofCallback = cb.length;
    let CallbackArgs = [];
    return function cruied(...args){
    CallbackArgs.push(...args);
    if(CallbackArgs.length >= sizeofCallback){
        let res = cb(...CallbackArgs);
        CallbackArgs.length = 0;
        return res;
    }
    return cruied;
    }
}


const sum = (a, b, c) => a + b + c;
const product = (a, b, c, d) => a * b * c * d;


const sumFunc = curry(sum);
const prodFunc = curry(product);


console.log(sumFunc(1)(2, 3)); //6
console.log(sumFunc(1, 2)(3)); //6
console.log(sumFunc(1, 2, 3));   //6
console.log(prodFunc(1, 2, 3, 4));   //24
console.log(prodFunc(1)(2, 3, 4));   //24
console.log(prodFunc(1, 2)(3, 4));   //24
console.log(prodFunc(1, 2, 3)(4));   //24
