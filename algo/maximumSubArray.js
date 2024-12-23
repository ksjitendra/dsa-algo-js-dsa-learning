const arr = [ -2, 1, -3, 4, -1, 2, 1, -5, 4 ]
let currentMaxSum = 0
let answer = 0
// [ -2, 1, -3, 4, -1, 2, 1, -5, 4 ]

for(let i =0; i < arr.length; i++) {
    
     currentMaxSum = currentMaxSum + arr[i]
     currentMaxSum = Math.max(currentMaxSum, arr[i])
     
     answer = Math.max(answer, currentMaxSum)
}

console.log(answer, "currentMaxSum")


