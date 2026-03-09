 //1.Write a function that takes a string as an argument and returns the number of characters in the string.

// function ch_count(str)
// {
//     if(typeof str !== "string")
//         return 0;
	
// 	let count = 0;
// 	while(str[count]!= undefined)
// 	{
// 		count++;
// 	}
// 	return count

// }

// let str = "Hello world!";
// console.log(ch_count(str));

//2.Create a function that converts a given string to uppercase.

// function upper(str)
// {
//    let result = "";
//    let count = 0;

//    while(str[count]!=undefined)
//    {

// 	let code = str.charCodeAt(count);
// 	if(code>=97 && code <= 112)
// 	{
// 		result+=String.fromCharCode(code - 32);
// 	}
// 	else
// 	{
//        result += str[count];
// 	}
// 	  count++;
//    }
//    return result;
// }

// let str = "Hello";
// console.log(upper(str));

//3.Write a function that accepts two numbers and returns their sum.
// function sum(num1,num2)
// {
//    return num1 + num2;
// }

// let num1 = 15;
// let num2 = 56;
// console.log(sum(num1,num2));

//4.Reverse the string "hello" without using a built-in function.

// function reverse(str)
// {
// 	let result ="";
// 	let count = 0;
// 	while(str[count]!=undefined)
// 	{
// 		count++;
// 	}
// 	while(count - 1 >= 0)
// 	{
// 	result+=str[count-1];
// 	count--;
// 	}
// 	return result;

// }

// let str = "hello";
// console.log(reverse(str));

//5.Check if the string "Learning JavaScript" contains the substring "Java"

// let str = "Learning JavaScript";
// let st = "Java";
// let count = 0;
// let count_t = 0;
// while(str[count]!=undefined)
// {
// 	count++;
// }

// while(st[count_t]!=undefined)
// {
// 	count_t++;
// }

// let found = false;
// for(let i = 0;i<=count-count_t;i++)
// {
// 	let result = true;
// 	for(let j = 0;j<count_t;j++)
// 	{
// 		if(str[i+j]!=st[j])
// 		{
// 			result = false;
// 			break;
// 		}
// 	}
// 	if(result)
// 	{
// 		found = true;
// 		break;
// 	}

// }
// console.log(found);

	
//6.Find the index of the value 9 in the array let numList = [3, 6, 9, 12];.

//  function index(numList)
//  {
//  for(let i = 0;i<numList.length;i++)
//  {
// 	if(numList[i] == 9)
// 		return i;
//  }
//  }
//   let numList = [3, 6, 9, 12];
//   console.log(index(numList));

//7.Compute the sum of all elements in the array let expenses = [50, 75, 100];

// let expenses = [50, 75, 100];
// let sum = 0;
// for(let i = 0;i<expenses.length;i++)
// {
// 	sum+=expenses[i];
// }
// console.log(sum);

//8.Write a function to check if a given string contains another substring.

// function check(str,st)
// {
	
// 	let count_st = 0;
// while(st[count_st]!=undefined)
// {
// 	count_st++;
// }
// let count = 0;
// while(str[count]!=undefined)
// {
// 	count++;
// }
// if(count_st > count)
// {
// 	return false;
// }
// for(let i=0;i<=count-count_st;i++)
// {
// 	let result =true;
// 	for(let j = 0; j<count_st;j++)
// 	{
// 		if(str[i+j]!=st[j])
// 			{result =false;
// 		break;}
// 	}
// 	if(result)
// {
// 	return true;
// }
// }
// return false;
// }

// let str = "Learning JavaScript";
// let st = "Java";
// console.log(check(str,st));

//9.Write a function that returns the sum of all elements in an array of numbers.

// function Sum(arr)
// {
// 	let sum = 0;
// 	for(let i = 0;i<arr.length;i++)
// 	{
// 		sum+=arr[i];
// 	}
// 	return sum;
// }

// let arr = [5,15,26,89];
// console.log(Sum(arr));

//10.Create a function that accepts a number and returns whether it is even or odd.
// function check(num)
// {
// 	if(num & 1)
// 	{
// 		return "odd";
// 	}
// 	else{
// 		return "even";
// 	}
// }
// let num = 75;
// console.log(check(num));

//11.Write a function that returns the exact type of a given value and correctly 
// handles null, arrays, objects, and functions (typeof alone is not sufficient).

// function type(val)
// {
// 	if(val === null) return "Null";
//     if(Array.isArray(val)) return "Array";
//     if(typeof(val) === "object") return "object";
//     else if(typeof(val) === "function") return "Function";
//     else return typeof(val);
// }
// console.log(type(5));           
// console.log(type("Hello"));     
// console.log(type(true));        
// console.log(type(null));       
// console.log(type([]));         
// console.log(type({}));          
// console.log(type(()=>{}));      
// console.log(type(undefined)); 


//12.Write a function that returns true if a given value is falsy and false otherwise;
//  test it with 0, "", null, undefined, NaN, and false.

// function check(val)
// {
// 	return !val;
// }

// let val = NaN;
// console.log(check(val));

//13.Write a function that compares two values and returns an object
//  containing the results of both loose (==) and strict (===) comparison.

// function check(num1,num2)
// {
// return {
// 	loose:num1 == num2,
// 	 strict:num1 === num2
// };
// }
// let num1 = 5;
// let num2 = "5";
// console.log(check(num1,num2));

//14.Write a function that returns true only if a value is a number, not NaN, finite, and a safe integer.

// function check(val)
// {
// 	if(typeof val === "number" && !isNaN(val) && isFinite(val) && val <= 2**53 -1 && val >= (-2)**53 - 1)
// 	{
// 		return true;
// 	}
// 	else{
// 		return false;
// 	}
// }

// let val = 5;
// console.log(check(val));

//15.Write a function that attempts to convert a value to a number and returns null if the result is NaN.

// function convers(val)
// {
// 	let num = Number(val);
//     if(isNaN(num))
// 	{
// 		return null;
// 	}
// 	return num;
// }

// let val = "Hello";
// console.log(convers(val));

//16.Write a function that explicitly converts any value to a boolean without using if statements.

// function convert(val)
// {
// 	let res = Boolean(val);
// 	return res;
// }

// let val = 0;
// console.log(convert(val));

//17.Write a function that returns true only for plain objects and false for arrays, null, and functions.

// function check(val)
// {
// 	if(Object.prototype.toString.call(val) === "[object Object]" )
// 	{
// 		return true;
// 	}
// 	else 
// 		{
// 			return false;
// 		}
// }
// let val = {
// 	name:"Anna",
// 	age:21
// };
// console.log(check(val));

//18․Write a function that returns true if a value is a primitive type and false otherwise.

// function check(val)
// {
// 	let type = typeof(val);
//     if(val === null) return true; 
// 	if(type === "number" || type === "string" ||type === "boolean" || type === "undefined" || type === "bigint" || type === "symbol")
// 	{
// 		return true;
// 	}
// 	else 
// 	{
// 		return false;
// 	}
// }
// let val = NaN;
// console.log(check(val));

//19.Write a function that returns the sum of two values only if both are numbers; otherwise return the string "Invalid input".

// function Sum(num1,num2)
// {
	
//    if(typeof(num1) === "number" && typeof(num2) === "number")
//    {
//       return num1 + num2;
//    }
//    else 
//    {
// 	return "Invalid input";
//    }
// }

// let num1 = 5;
// let num2 = "Hello";
// console.log(Sum(num1,num2));

