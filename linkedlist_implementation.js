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

  // append a new node
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

  // print the linked list
  print() {
    let currentList = this.head;
    while (currentList !== null) {
      console.log(currentList.value);
      currentList = currentList.next;
    }
  }
}

// Example usage:
const myLinkedList = new LinkedList();
myLinkedList.append(10);
myLinkedList.append(20);
myLinkedList.append(30);
myLinkedList.print();
