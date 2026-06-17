// const { version } = require("react");

class BucketedDeque {
    // === State ===
    #everyBucketsLength;
    #bucketSize;
    #buckets;
    #frontBucket;
    #backBucket;
    #frontIndex;
    #backIndex;
    #size;

    /**
     * @param {number} [everyBucketsLength]
     */
    constructor(everyBucketsLength) {
        this.#everyBucketsLength = everyBucketsLength;
    this.#buckets = [ new Array(everyBucketsLength)];
    this.#bucketSize = 1;
    this.#frontBucket = 0;
    this.#backBucket = 0;
    const mid = Math.floor(everyBucketsLength / 2);

    this.#frontIndex = mid;
    this.#backIndex = mid;

    this.#size = 0;
    
    }

    // === Core operations ===
    
    /**
     * @param {*} value 
     */
    push_front(value) {
this._ensureBucket(true);
this.#frontIndex--;
this.#buckets[this.#frontBucket][this.#frontIndex] = value;
this.#size++;

    }

    /**
     * @param {*} value 
     */
    push_back(value) {
            this._ensureBucket();
 this.#buckets[this.#backBucket][this.#backIndex] = value;
         this.#backIndex++;
            this.#size++
    }

    /**
     * @returns {*}
     * @throws {RangeError} If the deque is empty.
     */
    pop_front() {

        if(this.isEmpty()) {
            throw new Error("Array is empty");
        }
        let val = this.#buckets[this.#frontBucket][this.#frontIndex];
        this.#frontIndex++;
        this.#buckets[this.#frontBucket][this.#frontIndex - 1] = undefined;
        this.#size--;
        if(this.#frontIndex === this.#everyBucketsLength){
          this.#frontBucket++;
          this.#frontIndex = 0;
        }
        return val;

    }

    /**
     * @returns {*}
     * @throws {RangeError} If the deque is empty.
     */
    pop_back() {

 if(this.isEmpty()) {
            throw new Error("Array is empty");
        }
          this.#backIndex--;
        let val = this.#buckets[this.#backBucket][this.#backIndex];
        this.#buckets[this.#backBucket][this.#backIndex] = undefined;
        this.#size--;
        if(this.#backIndex === 0 && this.#backBucket > 0){
            this.#backBucket--;
                 this.#backIndex = this.#everyBucketsLength;
        }
        return val;
    }

    // === Access ===

    /**
     * @returns {*|undefined}
     */
    front() {

if(this.isEmpty()) {
            throw new Error("Array is empty");
        }

        return this.#buckets[this.#frontBucket][this.#frontIndex];
        
    }

    /**
     * @returns {*|undefined}
     */
    back() {

        if(this.isEmpty()) {
            throw new Error("Array is empty");
        }

        return this.#buckets[this.#backBucket][this.#backIndex - 1];
    }

    // === Utilities ===

    /**
     * @returns {void}
     */
    clear() {

          this.#buckets = [ new Array(this.#everyBucketsLength)];
    this.#bucketSize = 1;
    this.#frontBucket = 0;
    this.#backBucket = 0;
    const mid = Math.floor(this.#everyBucketsLength / 2);

    this.#frontIndex = mid;
    this.#backIndex = mid;

    this.#size = 0;
    }

    /**
     * @returns {number}
     */
    size() {
        return this.#size;
    }

    /**
     * @returns {boolean}
     */
    isEmpty() {

        return  this.#size === 0;
    }

    /**
     * @returns {Array}
     */
    toArray() {

        let arr = [];
        for(let i = 0;i<this.#buckets.length;++i){
            for(let j = 0;j<this.#everyBucketsLength;++j){
                if((this.#buckets[i][j])!==undefined){
                  arr.push(this.#buckets[i][j]);
                }
            }
        }
        return arr;
    }

    /**
     * @param {number} globalIndex 
     * @returns {*|undefined}
     */
    at(globalIndex) {
if(globalIndex < 0 || globalIndex >= this.#size) return undefined;

let localidx = this.#frontIndex + globalIndex;
let buckIdx = this.#frontBucket + Math.floor(localidx / this.#everyBucketsLength);
localidx = localidx % this.#everyBucketsLength;

return this.#buckets[buckIdx][localidx];

    }

    // === Iterator ===

    /**
     * @returns {Iterator}
     */
    *[Symbol.iterator]() {
      for(let i = 0;i<this.#size;++i){
         yield this.at(i);
      }
        
       
    }

    // === Internal methods (optional) ===

    /**
     * @param {boolean} [front=false] 
     */
    _ensureBucket(front = false) {
        if(front === true){
if(this.#frontIndex === 0){
    this.#buckets.unshift(new Array(this.#everyBucketsLength));
    this.#bucketSize++;
    this.#backBucket++;
    this.#frontIndex = this.#everyBucketsLength;
}
        }
else 
    {
        if(this.#backIndex === this.#everyBucketsLength){
    this.#buckets.push(new Array(this.#everyBucketsLength));
     this.#bucketSize++;
      this.#backBucket++;
    this.#backIndex = 0;
    }
}
    }

    /**
     * @param {number} globalIndex 
     * @returns {{localIdx: number, buckIdx: number}|undefined}
     */
    _bucketIndex(globalIndex) {
   if(globalIndex < 0 || globalIndex >= this.#size ) return undefined;

        let localIdx = this.#frontIndex + globalIndex;
        let buckIdx = this.#frontBucket + Math.floor(localIdx / this.#everyBucketsLength);
        localIdx = localIdx % this.#everyBucketsLength;
        return {'buckIdx':buckIdx,'localIdx':localIdx};

    }
}

let s1 = new BucketedDeque(4);
s1.push_front(5);
s1.push_back(15);
s1.push_front(165);
s1.push_front(68);
s1.push_back(11);
console.log(s1.toArray());
console.log(s1.pop_back());
console.log(s1.toArray());
console.log(s1.pop_front());
console.log(s1.toArray());
console.log(s1.at(0));
console.log(s1._bucketIndex(2));