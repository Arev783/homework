//1.
function forEach(array, callback)
{
    for(let i=0;i<array.length;++i)
    {
        callback(array[i],i,array);
    }
}

let arr = [1,2,3];

forEach(arr, function(value, index){
    console.log(value, index);
});