let arr = [4,5,6,7,8];
let filtered = arr.filter(num => num%2===0);
let res = filtered.map(num => num*num );
console.log(res);