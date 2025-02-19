let arr = [1, 2, 6, 8, 9, 0, 67];
let newArr = [];

let position = 2;
let newVal = 31;

console.log(arr);

for (let i = arr.length - 1; i >= 0; i--) {
  if (i >= position) {
    arr[i + 1] = arr[i];

    if (i == position) {
      arr[i] = newVal;
    }
  }
}

console.log(arr);

// using splice to add an array
arr.splice(2, 1, 55);

console.log(arr);
