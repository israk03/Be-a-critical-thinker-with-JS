const arr1 = [1, 2, [3, 4]];
const arr2 = [5, 6, [7, 8, [9, 10]]];
const arr3 = [11, 12, [13, 14, [15, 16, [17, 18]]]];

// Flattening the arrays
const flatArr1 = arr1.flat();
const flatArr2 = arr2.flat(2);
const flatArr3 = arr3.flat(Infinity);

console.log(flatArr1); // [1, 2, 3, 4]
console.log(flatArr2); // [5, 6, 7, 8, 9, 10]
console.log(flatArr3); // [11, 12, 13, 14, 15, 16, 17, 18]
