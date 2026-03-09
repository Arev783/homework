function map(array, callback)
{ 
    let res =[];
    for(let i=0;i<array.length;++i)
    {
      res.push(callback(array[i],i,array));
    }
    return res;
}
let arr = [1,2,3];
let doubled = map(arr, function(value){ return value * 2; });
console.log(doubled);
