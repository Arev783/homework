function intersection(set1, set2){
let set = new Set();

for (const el of set1) {
        if(set2.has(el))
            set.add(el);
}
return set;

}

function difference(set1, set2){
let set = new Set();

for (const el of set1) {
        if(!set2.has(el))
            set.add(el);
}
return set;
}



const setA = new Set(['reading', 'games', 'music']);
const setB = new Set(['games', 'sports']);

// Expected Output
console.log(intersection(setA, setB)); 
// Set(1) { 'games' }

console.log(difference(setA, setB)); 
// Set(2) { 'reading', 'music' }