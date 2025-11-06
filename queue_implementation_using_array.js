class Queue {
  constructor() {
    this.items = [];
  }

  // enqueue element
  enqueue(element) {
    this.items.push(element);
  }

  // dequeue element
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items.shift();
  }

  // peek at the front element
  peek() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[0];
  }

  // check if queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // get size of queue
  size() {
    return this.items.length;
  }

  // clear the queue
  clear() {
    this.items = [];
  }
}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.peek()); // 10

console.log(queue.size()); // 3

console.log(queue.dequeue()); // 10 removed

console.log(queue.size()); // 2

queue.clear();

console.log(queue.isEmpty()); // true
