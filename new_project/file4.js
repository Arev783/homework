function some(array,callback)
{
    for(let i=0;i<array.length;++i)
    {
        if(callback(array[i],i,array))
        {
            return true;
        }
    }
    return false;
}
let arr = [1, 2, 3, 7, 5];

let even = some(arr, function(value) {
    return value % 2 === 0; 
});

console.log(even);
