//1.
// function  myIsNaN(value)
// {
//     if(value !== value) return true;
//     return false;
    

// }
// const number = undefined;
// console.log(myIsNaN(number));

//2.
// function  myIsFinite(value)
// {
//     if(!isNaN(value) && value !== +Infinity && value !== -Infinity && typeof(value) === "number") return true;
//     return false;
    
// }

// const num = "25";
// console.log(myIsFinite(num));

//3.
// function myIsInteger(value)
// {
//    if(typeof(value) === "number" && (value - Math.floor(value)) === 0 ) return true;
//    return false;
// }
// const num = 10;
// console.log(myIsInteger(num));

//4.
// function myIsSafeInteger(value)
// {
//   if(typeof(value) === "number" && value >= (-2)**53 - 1 && value <=2**53 - 1 && (value - Math.floor(value)) === 0 ) return true;
//   return false;
// }
// const num = 9007199254740992;
// console.log(myIsSafeInteger(num));

//string 
//1.
// function myStartsWith(str, search)
// {
//   let count = search.length;
//   if(typeof(str) !== "string" && typeof(search) !== "stirng") return false;
//   for(let i=0;i<count;i++)
//   {
//     if(str[i] === search[i]) return true;
//   }
//   return false;
// }
// const str = "hello";
// const search = "he";
// console.log(myStartsWith(str,search));

//2.
// function myEndsWith(str, search)
// {
//      if(typeof(str) !== "string" && typeof(search) !== "stirng") return false;
//      let count1 = str.length;
//      let count2 = search.length;
//      j=0;
//      for(let i= count1 - count2;i<count1;i++)
//      {
//         if(str[i] === search[j]) return true;
//         j++;
//      }
//      return false;
// }
// const str = "javascript";
// const search = "java";
// console.log(myEndsWith(str,search));

//3.
// function  myIndexOf(str, search)
// { let count = str.length;
//     let count_t = search.length;
//   let found = false;
// for(let i = 0;i<=count - count_t;i++)
// {
// 	let find =true;
// 	for(let j = 0;j<count_t;j++)
// 	{
// 		if(str[i+j] !==search[j])
// 		{
// 			find = false;
// 			break;
// 		}
// 	}
// 	 if(find) return i;
// }
//  return -1;
// }
// const str = "hello world";
// const search = "abc";
// console.log(myIndexOf(str,search));

//4.
function  mySlice(str, start, end)
{ 
	// if(typeof(str) !== "string" && typeof(start)!=="number" && typeof(end)!=="number") return -1;
 	let res ="";
	for(let i= start ;i < end;++i)
		{
			res+=str[i];
		} 
		return res;
}

const str = "hello";
const start = 1;
const end = 4;
console.log(mySlice(str,start,end));

//5.
// function myRepeat(str, count) 
// {
//     let res ="";
//     for(let i = 0;i<count;i++)
//     {
//       res+=str;
//     }
//     return res;
// }
// let str = "a";
// let count = 5;
// console.log(myRepeat(str,count));