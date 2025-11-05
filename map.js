//* Map methods
const map = new Map();

// set key-value pairs
map.set("name", "Israk");
map.set("age", 23);
map.set("city", "Dhaka");

console.log(map);

// get value by key
console.log(map.get("name"));

// check if key exists
console.log(map.has("age"));
console.log(map.has("country"));

// remove specific key-value pair
map.delete("city");
console.log(map.has("city"));

// remove all key-value pairs and get the size
map.clear();
console.log(map.size);

// iterate over map
const users = new Map();
users.set("id1", "Israk");
users.set("id2", "Rafi");
users.set("id3", "Sakib");

users.forEach((value, key) => {
  console.log(key, "=>", value);
});

// map.keyss(), map.values(), map.entries()
for (let key of users.keys()) {
  console.log(key);
}
for (let value of users.values()) {
  console.log(value);
}

for (let entry of users.entries()) {
  console.log(entry);
}

// convert map to array
const userArray = Array.from(users);
console.log(userArray);

// convert array to map
const newMap = new Map(userArray);
console.log(newMap);
