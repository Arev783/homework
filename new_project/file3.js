function filter(array, callback)
{
   let res = [];
   for(let i = 0 ;i< array.length;++i)
   {
    if(callback(array[i],i,array))
    {
        res.push(array[i]);
    }
   }
   return res;
}

let arr = [1, 2, 3, 4, 5];

let even = filter(arr, function(value) {
    return value % 2 === 0; 
});

console.log(even);
