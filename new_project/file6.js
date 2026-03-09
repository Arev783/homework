function indexOf(array,searchElement)
{
    for(let i = 0;i<array.length;++i)
    {
        if(array[i] === searchElement)
            return i;
    }
    return -1;
}

let arr = ["h",1,"l","l","o"];
let search = "l";
let ind = indexOf(arr,search);
console.log(ind);