const obj = {
 value: 100,
 get() {
   function inner() {
     return this.value;
   }
   return inner.call(obj);
 }
};
console.log(obj.get());
