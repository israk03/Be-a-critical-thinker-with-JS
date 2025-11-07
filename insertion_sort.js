function insertionSort(arr) {
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    let current = arr[i];
    let j = i - 1;

    // Shift elements greater than current to the right
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    // Insert the current element into the right position
    arr[j + 1] = current;
  }

  return arr;
}

// Example
const numbers = [5, 3, 8, 4, 2];
console.log(insertionSort(numbers)); // [2, 3, 4, 5, 8]
