function sum(a,b,c){
    return a+b+c;
}

function execute(fn,arr){
console.log(fn.apply(null,arr));
}
execute(sum,[2,4,6]);