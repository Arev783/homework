
function factorial(a) {
 let res = 1;
 for (let i = 2; i <= a; ++i) {
   res *= i;
 }
 return res;
}

function memoize(cb) {
    let memeo = [];
    return function(x){
        if(x in memeo){
            return memeo[x];
        }
        return memeo[x] = cb(x);
    }

 }

const foo = memoize(factorial);
console.log(foo(5)); // 120
console.log(foo(5)); // 120


