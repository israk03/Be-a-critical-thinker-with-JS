// simple total
const prices = [499, 799, 1299, 999];

const total = prices.reduce((acc, price) => {
  return acc + price;
}, 0);

console.log(total);

// reduce with objects
const products = [
  { name: "Laptop", price: 499 },
  { name: "Tablet", price: 799 },
  { name: "Smartphone", price: 1299 },
  { name: "Monitor", price: 999 },
];

//? want total price
const totalPrice = products.reduce((total, product) => {
  return total + product.price;
}, 0);
console.log(totalPrice);

// counting (frequency aggregation)
const colors = ["red", "blue", "green", "red", "blue", "red"];

const colorCount = colors.reduce((count, color) => {
  count[color] = (count[color] || 0) + 1;
  return count;
}, {});

console.log(colorCount);
