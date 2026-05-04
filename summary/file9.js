



const mixedMap = new Map([
  [1, 'num'],
  ['str', 'text'],
  [true, false]
]);


let memb = mixedMap.entries();
let res = memb.next();
while(!res.done){

    if(typeof res.value[1] === "string")
        console.log(res.value);
   res = memb.next();
}



// Expected Output in console
// [1, 'num']
// ['str', 'text']