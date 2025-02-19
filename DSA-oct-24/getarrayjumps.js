// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.

// Example 1:

// Input: nums = [2,3,1,1,4]

// Output: true

// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

// Example 2:

// Input: nums = [3,2,1,0,4]

// Output: false

// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

 

// Constraints:

// 1 <= nums.length <= 104
// 0 <= nums[i] <= 105


// (function main() {
//   const readline = require("readline");
//   const r1 = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });
  
//   var solution = function(s) {
//     // write your solution here..
//      return s;
//   };
 
//   var n, k;
//   r1.on("line", (input) => {
//     n = input;
//   }).on("close", () => {
//     console.log(solution(n));
//   });
// })();




const arr  = [2, 0, 2, 0, 2, 0, 2, 0, 1, 0]


// 

function validateArr(arr) {
    const arrLen = arr.length
    let isCorrect = false
    let currentCounter = 0

    for(let i =0; i< arrLen; i++) {

            console.log(currentCounter, "first counter")

        if(currentCounter> 0) {
            currentCounter = currentCounter-1
            continue;
        }
         let restElements = arrLen - (i+1)
        console.log("details", arr[i], restElements, i)
        
        if((restElements > arr[i])  && (arr[i] > 0)) {
            // console.log('ff', arr[i])
            currentCounter = arr[i]-1
            
            console.log(currentCounter, "current counter")
        }
        
        if(arr[i] > restElements) {
                        console.log(restElements, arr[i], "pppp>>")
            break;
        }
        
        if(arr[i] == 0 && i != arrLen-1) {
            return false;
            break;
        }
            // console.log(currentCounter,'lll')

        

        if(restElements  == arr[i]) {
            console.log(restElements, arr[i], "pppp<<")
            isCorrect = true;
            break;
        }

    }

    return isCorrect;
}

console.log(validateArr(arr))













































