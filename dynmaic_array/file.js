export class DynamicArray {
    #arr;
    #size;
    #capacity;
    #GROWTH;
    #fill;
    constructor(capacity=8, fill=0) {
        if (!Number.isInteger(capacity)) throw new Error("Capacity must be an integer.");
        if (capacity <= 0) throw new Error("Capacity must be positiv number.");
        if (!Number.isInteger(fill)) throw new Error("Fill must be an integer.");
        this.#capacity = capacity;
        this.#size = 0;
        this.#GROWTH = 2;
        this.#fill = fill;
        this.#arr = new Int32Array(capacity);
    }

    size() {
        return this.#size;
    }

    capacity() {
        return this.#capacity
    }

    isEmpty() {
        return this.#size === 0;
    }

    clear() {
        this.#arr.fill(this.#fill);
        this.#size = 0;
    }

    at(index) {
        if (!Number.isInteger(index)) throw new Error("Index must be an integer.");
        if (index < 0 || index >= this.#size) throw new Error("Index Error: Out of range.");
        console.log("inside at", this.#arr);
        return this.#arr[index];
    }

    set(index, value) {
        if (!Number.isInteger(index)) throw new Error("Index must be an integer.");
        if (index < 0 || index >= this.#size) throw new Error("Index Error: Out of range.");
        if (!Number.isInteger(value)) throw new Error("Value must be an integer.");
        this.#arr[index] = value;
        console.log(this.#arr)
    }

    insert(index, value) {
        if (!Number.isInteger(index)) throw new Error("Index must be an integer.");
        if (index < 0 || index >= this.#size) throw new Error("Index Error: Out of range.");
        if (!Number.isInteger(value)) throw new Error("Value must be an integer.");
        if (this.#size === this.#capacity) {
            let newCap = this.#capacity * this.#GROWTH;
            this.#resize(newCap)
        }
        for (let i = this.#size ; i >= index; --i) {
            this.#arr[i] = this.#arr[i - 1] ;
        }
        this.#arr[index] = value;
        ++this.#size;
        console.log(this.#arr);
    }

    #resize(newCap) {
        if (newCap <= 0) throw new Error("newCap must be >= 0"); 
        if (!Number.isInteger(newCap)) throw new Error("newCap must be an integer");
        if (newCap < this.#size) this.#size = newCap;
        let newArr = new Int32Array(newCap).fill(this.#fill);
        for (let i = 0; i < this.#size; ++i) {
            newArr[i] = this.#arr[i];
        }
        this.#capacity = newCap;
        this.#arr = newArr;
    }

    front() {
        if (this.isEmpty()) return -1;
        return this.#arr[0];
    }

    back() {
        if (this.isEmpty()) return -1;
        return this.#arr[this.#size - 1];
    }

    pushBack(value) {
        if (!Number.isInteger(value)) throw new Error("Value must be an integer.");
        if (this.#size === this.#capacity) {
            let newCap = this.#capacity * this.#GROWTH;
            this.#resize(newCap);
        }
        this.#arr[this.#size++] = value;
    }

    popBack() {
        if (this.isEmpty()) throw new Error("Empty Array!");
        let res = this.#arr[--this.#size];
        this.#arr[this.#size] = this.#fill;
        return res;
    }

    toArray() {
        let newArr = new Array(this.#size);
        for (let i = 0; i < this.#size; ++i) {
            newArr[i] = this.#arr[i];
        }
        return newArr;
    }

    toString() {
        return this.toArray();
    }

    *entries() {
        for (let i = 0; i < this.#size; ++i) {
            yield [i, this.#arr[i]];
        }
    }

    reverse() {
        let i = 0;
        let j = this.#size - 1;
        while (i < j) {
            this.swap(i++, j--);
        }
    }

    swap(i, j) {
        if (this.at(i) || this.at(j));
        [this.#arr[i], this.#arr[j]] = [this.#arr[j], this.#arr[i]]
    }

    [Symbol.iterator]() {
        let i = 0;
        if (this.isEmpty()) return {value: undefined, done: true};
        return {value: this.#arr[i++], done: false};
    }

    sort(compareFn) {
        if (this.isEmpty()) throw new Error("Empty Array");
        const partitionLast = (low,  high) => {
            let pivot = this.#arr[high];
            let i = low - 1;
            for (let j = low; j < high; ++j) {
                if (compareFn(this.#arr[j], pivot) < 0) {
                    this.swap(++i, j);
                }
            }
            this.swap(i + 1, high);
            return i + 1;
        }

        const quickSortLast = (low, high) => {
            if (low < high) {
                let pi = partitionLast(low, high);
                quickSortLast(low, pi - 1);
                quickSortLast(pi + 1, high);
            }
        }
        quickSortLast(0, this.#size - 1);
        
    }
}