let data = [];
let currentSize = data.length;

const testVar = 10;

console.log(testVar);

// function push(newVal) {
//   data[currentSize] = newVal;
//   currentSize + 1;
// }

function pop() {
  currentSize -= 1;
  data.length = currentSize;
}

function reverseStr(strArray) {
  for (let i = strArray.length - 1; i >= 0; i--) {
    data.push(strArray[i]);
  }
  console.log(strArray);
}

let str = "teststr";
let strArray = str.split("");

reverseStr(strArray);

let againStr = strArray.join("");

console.log(strArray);
console.log(againStr);
console.log(data);
