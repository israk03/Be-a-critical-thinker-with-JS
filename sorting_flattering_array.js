const groupedProducts = [
  {
    category: "Smartphones",
    items: [
      { name: "iPhone 14 Pro", rating: 4.8, price: 999 },
      { name: "Pixel 8", rating: 4.7, price: 799 },
    ],
  },
  {
    category: "Laptops",
    items: [
      { name: "MacBook Air M2", rating: 4.9, price: 1199 },
      { name: "Dell XPS 13", rating: 4.6, price: 1099 },
    ],
  },
  {
    category: "Headphones",
    items: [
      { name: "Sony WH-1000XM5", rating: 4.8, price: 399 },
      { name: "AirPods Pro 2", rating: 4.9, price: 249 },
    ],
  },
];

//TODO: flatten the array
//TODO: sort by rating in descending order
//TODO: slice top 5
//TODO: combined in one chain

// flattering
const allProducts = groupedProducts.flatMap((category) => category.items);

console.log(allProducts);

// sorting
const sortedProducts = allProducts.sort((a, b) => b.rating - a.rating);

console.log(sortedProducts);

// slicing
const topThreeProducts = sortedProducts.slice(0, 3);
console.log(topThreeProducts);
