//* Stateless vs Stateful

// Stateless
const counter = (amount) => {
  let count = 0;
  count += amount;

  return count;
};
console.log(counter(5)); // 5
console.log(counter(10)); // 10

// ---------------------------------------------

// Stateful
const counter1 = {
  count: 0,

  add(amount) {
    this.count += amount;
  },

  print() {
    console.log(this.count);
  },
};
counter1.add(5);
counter1.add(10);
counter1.print(); // 15
