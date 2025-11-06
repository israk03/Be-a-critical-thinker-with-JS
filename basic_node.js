// basic node structure
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// creating nodes
const node1 = new Node(10);
const node2 = new Node(20);
const node3 = new Node(30);

// linking nodes
node1.next = node2;
node2.next = node3;

console.log(node1);

let temp = node1;
while (temp !== null) {
  console.log(temp.value);
  temp = temp.next;
}
