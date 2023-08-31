let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

let arr2 = [-1, -2, -3, -4, -5];

function findMaxSum(arr) {
  let currentSum = 0;
  let maxSum = 0;

  for (let i = 0; i <= arr.length; i++) {
    currentSum = arr[i] + currentSum;

    if (currentSum > maxSum) {
      maxSum = currentSum;
    }

    if (currentSum < 0) {
      currentSum = 0;
    }
  }

  return maxSum;
}

console.log(findMaxSum(arr));