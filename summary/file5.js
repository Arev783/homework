
function filterSpam(text, badWordsArray){
    const set = new Set(badWordsArray);
    let arr = text.split(" ");
    for(let i=0;i<arr.length;++i){
        if(set.has(arr[i])){
            arr[i] = "***";
          
        }
    }
     arr = arr.join(" ");
    return arr;
}



const text = "buy our new cheap product";
const badWords = ["cheap", "buy"];

// Expected Output
console.log(filterSpam(text, badWords));
// "*** our new *** product"

