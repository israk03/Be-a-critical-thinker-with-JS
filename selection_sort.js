function selectionSort(arr) {
  const n = arr.length;

  // Loop through the array
  for (let i = 0; i < n - 1; i++) {
    // Assume the current index is the smallest
    let minIndex = i;

    // Find the index of the smallest element in the remaining array
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j; // update the index if smaller element found
      }
    }

    // Swap the smallest element with the current index element
    if (minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }

  return arr;
}

// Example
const numbers = [5, 3, 8, 4, 2];
console.log(selectionSort(numbers)); // [2, 3, 4, 5, 8]
