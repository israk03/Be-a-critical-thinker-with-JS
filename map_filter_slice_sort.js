const rawApiData = [
  {
    id: 1,
    productName: "iPhone 14 Pro",
    category: "Smartphones",
    price: 999,
    rating: 4.8,
  },
  {
    id: 2,
    productName: "Samsung Galaxy S23",
    category: "Smartphones",
    price: 899,
    rating: 4.7,
  },
  {
    id: 3,
    productName: "MacBook Air M2",
    category: "Laptops",
    price: 1199,
    rating: 4.9,
  },
  {
    id: 4,
    productName: "Dell XPS 13",
    category: "Laptops",
    price: 1099,
    rating: 4.6,
  },
  {
    id: 5,
    productName: "Sony WH-1000XM5",
    category: "Headphones",
    price: 399,
    rating: 4.8,
  },
  {
    id: 6,
    productName: "Apple Watch Series 9",
    category: "Wearables",
    price: 499,
    rating: 4.7,
  },
  {
    id: 7,
    productName: "iPad Pro 12.9",
    category: "Tablets",
    price: 1099,
    rating: 4.9,
  },
  {
    id: 8,
    productName: "Asus ROG Zephyrus G14",
    category: "Laptops",
    price: 1499,
    rating: 4.8,
  },
  {
    id: 9,
    productName: "Bose QuietComfort 45",
    category: "Headphones",
    price: 329,
    rating: 4.6,
  },
  {
    id: 10,
    productName: "Google Pixel 8",
    category: "Smartphones",
    price: 799,
    rating: 4.7,
  },
  {
    id: 11,
    productName: "Nintendo Switch OLED",
    category: "Gaming",
    price: 349,
    rating: 4.8,
  },
  {
    id: 12,
    productName: "Oppo Find X6 Pro",
    category: "Smartphones",
    price: 499,
    rating: 4.9,
  },
  {
    id: 13,
    productName: "Logitech MX Master 3S",
    category: "Accessories",
    price: 99,
    rating: 4.8,
  },
  {
    id: 14,
    productName: "Apple AirPods Pro (2nd Gen)",
    category: "Headphones",
    price: 249,
    rating: 4.9,
  },
  {
    id: 15,
    productName: "Amazon Echo Dot (5th Gen)",
    category: "Smart Home",
    price: 49,
    rating: 4.5,
  },
  {
    id: 16,
    productName: "GoPro HERO12 Black",
    category: "Cameras",
    price: 449,
    rating: 4.7,
  },
  {
    id: 17,
    productName: "Canon EOS R10",
    category: "Cameras",
    price: 979,
    rating: 4.8,
  },
  {
    id: 18,
    productName: "HP",
    category: "Smartphones",
    price: 899,
    rating: 4.5,
  },
  {
    id: 19,
    productName: "Xiaomi Mi Band 8",
    category: "Wearables",
    price: 59,
    rating: 4.6,
  },
  {
    id: 20,
    productName: "DJI Mini 4 Pro",
    category: "Drones",
    price: 999,
    rating: 4.9,
  },
];

//? Output: [{name: "Smartphones"}, {name: "Smartphones"}]

//TODO: filter => category
//TODO: sort => rating
//TODO: slice => first 3
//TODO: map => {name: productName}

const topSmartphones = rawApiData
  .filter((item) => item.category === "Smartphones")
  .sort((a, b) => b.rating - a.rating)
  .slice(0, 3)
  .map((item) => ({ name: item.productName }));

console.log(topSmartphones);
