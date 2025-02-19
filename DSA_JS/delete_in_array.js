var arr = [2, 3, 4, 5, 12, 30, 20];

let position = 2;
// let newArr = []

console.log(arr);

for (let i = 0; i < arr.length; i++) {
  if (i >= 2) {
    arr[i] = arr[i + 1];
  }
}

arr.length = arr.length - 1;
console.log(arr);
