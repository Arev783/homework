import {DynamicArray} from '../dynmaic_array/file.js'
class CircularQueue {
 #data;
 #front;
 #size;
 constructor(capacity = 8,fill = 0) {
    if (!Number.isInteger(capacity)) throw new Error("Capacity must be an integer.");
        if (capacity <= 0) throw new Error("Capacity must be positiv number.");
      this.#data = new DynamicArray(capacity,fill);
      this.#size = 0;
      this.#front = 0;
 }

 /* ================= Basic State ================= */

 size() {
   return this.#size;
 }

 capacity() {
return this.#data.capacity();
 }

 isEmpty() {
     return this.#size === 0;
 }

 clear() {
     
   this.#data = new DynamicArray(this.#data.capacity(),0);
      this.#size = 0;
      this.#front = 0;
 }

 /* ================= Core Queue Operations ================= */

 enqueue(value) {
   
        if (!Number.isInteger(value)) throw new Error("Value must be an integer.");
     if(this.#size === this.#data.capacity()){
        this.#grow();
     }
this.#data[(this.#front + this.#size) % this.#data.capacity()]= value;
++this.#size;

 }

 dequeue() {
if(this.isEmpty()) throw new Error("Its is empty");
     let val = this.#data[this.#front];
     this.#front = (this.#front + 1) % this.#data.capacity();
     --this.#size;
     return val;
 }

 front() {
if(this.isEmpty()) throw new Error("Its is empty");
     return this.#data[this.#front];
 }

 back() {
if(this.isEmpty()) throw new Error("Its is empty");
let rare = (this.#front + this.#size - 1 ) % this.#data.capacity();
return this.#data[rare];
 }

 /* ================= Internal Resize ================= */

 #grow() {
   let cap =  this.#data.capacity() * 2;
 let newArr = new DynamicArray(cap);
for(let i = 0;i<this.#size;++i){
let rare = (this.#front + i) % this.#data.capacity();
newArr.push(this.#data[rare]);
}
this.#data = newArr;
this.#front = 0;
 }

 /* ================= Utilities ================= */

 toArray() {
     let newarr = [];
for(let i = 0;i<this.#size;++i){
    let rare = (this.#front + i) % this.#data.capacity();
    newarr[i] = this.#data[rare];
}
   
     return newarr;
 }

 toString() {
     return `${this.toArray()}`;
 }

 *[Symbol.iterator]() {
for(let i = 0;i<this.#size;++i){
    let rare = (this.#front + i) % this.#data.capacity();
    yield this.#data[rare];
}
   
 }
}

let s1 = new CircularQueue();
s1.enqueue(14);
s1.enqueue(75);
s1.enqueue(56);
s1.enqueue(17);
s1.enqueue(89);
console.log(s1.front());
console.log(s1.back());
console.log(s1.dequeue());
console.log(s1.toArray());
console.log(s1.size());
console.log(s1.toString());
for(let el of s1){
    console.log(el);
}

