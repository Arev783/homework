  let myRange = {
    from:1,
    to:10
 }
myRange[Symbol.iterator] = function(){
let current = this.from;
let last = this.to;
return{

 next(){
    if(last >= current){
        return {value: last--, done:false};
    }
    else{
        return {value:undefined,done:true};
    }
}
    }
};

 for(const val of myRange){
    console.log(val);
 }