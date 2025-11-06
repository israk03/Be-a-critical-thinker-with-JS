class Stack {
  constructor() {
    this.items = [];
  }

  // push element onto stack
  push(element) {
    this.items.push(element);
  }

  // pop element from stack
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items.pop();
  }

  // peek at the top element of stack
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items[this.items.length - 1];
  }

  // get size of stack
  size() {
    return this.items.length;
  }

  // clear the stack
  clear() {
    this.items = [];
  }

  // check if stack is empty
  isEmpty() {
    return this.items.length === 0;
  }
}

// Example usage:
const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek()); // 30

console.log(stack.size()); // 3

console.log(stack.pop()); // 30 removed

console.log(stack.size()); // 2

stack.clear();

console.log(stack.isEmpty()); // true
