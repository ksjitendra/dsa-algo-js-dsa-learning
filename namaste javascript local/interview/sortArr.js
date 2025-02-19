const length = 5;
let arr = [2, 0, 1, 0, 2];

console.log("Original " + arr);
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < i; j++) {
    if (arr[j] > arr[j + 1] || arr[j] == 0) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}

console.log("Sorted Arr " + arr);
