const products = [
  { id: 1, name: "iPhone 14 Pro", price: 999 },
  { id: 2, name: "MacBook Air", price: 1199 },
  { id: 3, name: "AirPods Pro", price: 249 },
];

const productById = products.reduce((acc, item) => {
  acc[item.id] = item;
  return acc;
}, {});

console.log(productById);
