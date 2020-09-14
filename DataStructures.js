//Arrays --- Insert
let arr = [1, 2, 3, 4];
arr.push(5); //arr = [1, 2, 3, 4, 5]

//Arrays --- Delete
arr.pop();  //arr = [1, 2, 3, 4]
arr.pop();  //arr = [1, 2, 3]
arr.shift()  //remove first element and return it.  arr = [2, 3] return 1

//Arrays --- Access
let arr2 = [1, 2, 3, 4, 5, 6];
arr2[0];  //arr2 = return 1
arr2[1];  //arr2 = return 2
arr2[5];  //arr2 = return 6




//Linked List
class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
    addEndVal(value) {
        let el = this
        while(el.next) {
            el = el.next
        }
        el.next = new Node(value)
    }
    getVal(index) {
        let el = this
        while(index--) {
            el = el.next
        }
        return el.value
    }
}

const sLL = new Node(4); //First (0) node in linked list is 4
sLL.addEndVal(5)  //2nd node (1) is a 5
sLL.addEndVal(6)  //3rd node (2) is a 6

sLL.getVal(2)  //get value of (2) and return it



//Stack
class Stack {
    constructor() {
        this.count = 0;
        this.items = {};
    }
    //methods
    push(element) {
        this.items[this.count] = element;
        this.count++;
    }
    size() {
        return this.count;
    }
    isEmpty() {
        return this.count === 0;
    }
    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.count - 1];
    }
    clear() {
        while (!this.isEmpty()) {
            this.pop();
        }
    }
    toString() {
        if (this.isEmpty()) {
            return '';
        }
        let elemString = `${this.items[0]}`;
        for (let p = 1; p < this.count; p++) {
            elemString = `${elemString}, ${this.items[p]}`;
        }
        return elemString;
    }
}


const stack = new Stack();
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(6);


//Queue
class Queue {
    constructor(elements) {
        this.elements = elements;
    }
    enqueue(value) {
        this.elements.push(value);
    }
    dequeue() {
        return this.elements.shift();
    }
    peek() {
        return this.elements[0];
    }
}

const theQueue = new Queue([1, 2, 3, 4])
theQueue.enqueue(5);
console.log(theQueue.peek());