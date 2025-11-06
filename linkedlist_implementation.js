class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //* append a new node
  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      // if list is empty
      this.head = newNode;
      this.tail = newNode;
    } else {
      // if list is not empty
      (this.tail.next = newNode), (this.tail = newNode);
    }

    this.length++;
  }

  //* prepend a new node
  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      // if list is empty
      this.head = newNode;
      this.tail = newNode;
    } else {
      // if list is not empty
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  //* insert at any position
  insert(index, value) {
    // if index is 0, prepend
    if (index === 0) {
      this.prepend(value);
      return;
    }

    // if index is greater than length, append
    if (index >= this.length) {
      this.append(value);
      return;
    }

    // insert at given index
    const newNode = new Node(value);

    let previousNode = this.head;

    for (let i = 0; i < index - 1; i++) {
      previousNode = previousNode.next;
    }

    // relink nodes
    newNode.next = previousNode.next;
    previousNode.next = newNode;

    this.length++;
  }

  // print the linked list
  print() {
    const arr = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(arr.join(" -> "), "-> null ");
  }
}

// Example usage:
const myLinkedList = new LinkedList();
myLinkedList.append(10);
myLinkedList.append(20);
myLinkedList.append(30);
myLinkedList.print();

myLinkedList.prepend(5);
myLinkedList.prepend(6);
myLinkedList.prepend(7);
myLinkedList.print();

myLinkedList.insert(3, 15);
myLinkedList.print();
