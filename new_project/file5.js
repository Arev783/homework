function every(array,callback)
{
    let count = 0;
    for(let i=0;i<array.length;++i)
    {
        if(callback(array[i],i,array))
        {
            count++;
        }
    }
    if(count === array.length) return true;
    return false;
}
let arr = [8,2,26,4,78];
let res = every(arr,function(value)
{
  return value % 2 === 0;
});
console.log(res);