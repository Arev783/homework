let digits = [1,2,3];
let extraNumbers ={
    0:"0",
    1:"1",
    length:2,
    [Symbol.isConcatSpreadable]: true
};

let bonus = [4,5,6];
bonus[Symbol.isConcatSpreadable] = false;

let res = digits.concat(extraNumbers,bonus);

console.log(res);
console.log(digits);
console.log(bonus);