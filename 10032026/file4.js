//Dynamic Property Names: Create an object where the property names are dynamically created from an array of strings,
//  then log the resulting object

let arr = ["Hello","a","World","Apple","Orange"];
let obj = {};
for(let i=0;i<arr.length;++i)
{
    obj[arr[i]] = "Hello";
}
console.log(obj);