import { Deque } from "../deque/index.js"
class Stack {
  #data;
  #size;

  constructor(initialCapacity = 16) {
    this.#data = new Deque(initialCapacity);
    this.#size = 0;
  }

  push(value) {  
    this.#data. push_back(value);
    this.#size++;
  }

  pop() {
    if(this.isEmpty()) return undefined;
   let val = this.#data.pop_back();
    this.#size--;
    return val;
  }

  peek() {
    if(this.isEmpty()) return undefined;
    return this.#data.back();
  }

  size() {
    return this.#size;
  }

  isEmpty() {
    return this.#size === 0;
  }

  clear() {
    this.#data.clear();
    this.#size = 0;
  }

  toArray() {
    return this.#data.toArray();
  }

  *[Symbol.iterator]() {
        yield* this.#data;
  }
}

let s1 = new Stack();
s1.push(14);
s1.push(17);
s1.push(116);
s1.pop();
console.log(s1.isEmpty());
console.log(s1.toArray());
console.log(s1.size());
for(let val of s1) {
    console.log(val);
}


