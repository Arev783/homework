//1.    
function  isEven(n)
{
    if(!(n&1)) return true;
    else return false;
}
console.log(isEven(0));

//2.
function sumUpTo(n)
{
    let sum = 0;
    for(let i=0;i<=n;i++)
    {
        sum+=i;
    }
    return sum; 
}
console.log(sumUpTo(10));

3.
function minInArray(arr)
{
  let min = arr[0];
  for(let i=0;i<arr.length;i++)
  {
    if(arr[i]<min) min = arr[i];
  }
  return min;
}
console.log(minInArray([7]));

//4.
function countDigits(n)
{
    let count = 0;
    if(n < 0) n*=-1;
    if(n === 0) return 1;
    while(n>0)
    {
        count++;
        n=Math.floor(n/10);
    }
    return count;
}
console.log(countDigits(0));

//5.
function sumArray(arr)
{
    let sum = 0;
    for(let i=0;i<arr.length;i++)
    {
        sum+=arr[i];
    }
    return sum;
}
console.log(sumArray([5]));

//6.
function average(arr)
{
    let sum = 0;
    for(let i= 0;i<arr.length;i++)
    {
        sum+=arr[i];
    }
    return sum/arr.length;
}
console.log(average([5]));

//7.
function countChar(str, char)
{
    let count = 0;
    for(let i=0;i<str.length;i++)
    {
        if(str[i] === char) count++;
    }
    return count;
}
console.log(countChar("abc","d"));

//8.
function  removeFirstChar(str)
{
    let result = "";
    for(let i=1;i<str.length;i++)
    {
        result+=str[i];
    }
    return result;
}
console.log(removeFirstChar(""));

//9.
function power(base, exp)
{
    return base**exp;
}
console.log(power(3,2));

//10.
function contains(arr, value)
{
    let count = 0;
    for(let i=0;i<arr.length;i++)
    {
       if(arr[i] === value)  
        count++;
   
    }
    if(count) return true;
    else return false;
}
console.log(contains([],1));

//11.
function repeatString(str, n)
{
   let result = "";
   for(let i=0;i<n;i++)
   {
    result += str;
   }
   return result;
}
console.log(repeatString("x",0));

//12.
function firstAndLast(arr)
{
    if(arr.length === 0) return [];
    return [arr[0] ,arr[arr.length - 1]];
}
console.log(firstAndLast([]));