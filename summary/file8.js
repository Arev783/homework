let weakmap = new WeakMap();
function heavyCalc(obj){
    if(weakmap.has(obj)){
        return `(Returns instantly) -> ${weakmap.get(obj)}`;
    }
    else{
         let sum = 0;
    for(let i=0;i<1000000;++i){
        sum+=i;
    }
        weakmap.set(obj,sum);
    return `(Script pauses for 1-2 seconds...) ${sum}`;
    }
    
}



const dataObj = { value: 10 };

// Expected Output
console.log(heavyCalc(dataObj)); 
// (Script pauses for 1-2 seconds...) -> 100

console.log(heavyCalc(dataObj)); 
// (Returns instantly) -> 100