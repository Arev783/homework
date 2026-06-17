import { Deque } from "../deque/index.js"
class Queue {
  #data;
  #size;

  constructor(initialCapacity = 16) {
    this.#data = new Deque(initialCapacity);
    this.#size = 0;
  }

  enqueue(value) {

    this.#data.push_back(value);
    this.#size++;
  }

  dequeue() {
    if(this.isEmpty()) return undefined;
    this.#data.pop_front();
    this.#size--;
  }

  front() {
     if(this.isEmpty()) return undefined;
   return this.#data.front();

  }

  back() {
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
    if(this.isEmpty()) return undefined;
return this.#data.toArray();
  }

  *[Symbol.iterator]() {

     yield * this.#data;
  }
}

// let s1 = new Queue();

// s1.enqueue(15);
// s1.enqueue(12);
// s1.enqueue(65);
// s1.enqueue(625);
// s1.dequeue();
// console.log(s1.toArray());
// for(const el of s1){
//     console.log(el);
// }
// console.log(s1.front());
// console.log(s1.back());
// console.log(s1.isEmpty());
// console.log(s1.size());