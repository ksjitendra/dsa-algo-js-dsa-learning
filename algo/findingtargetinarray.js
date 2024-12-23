// Given an array of integers, return indices of two numbers such that they add up to a target.
// Variation: Return all pairs, handle duplicates.

const arr =  [-3, 4, 3, 90]
const target = 0
let indices = []
let currentWindowSum = 0

// for(let i =0; i< arr.length-1; i++){
    
//     let currentVal = arr[i]
//     for(let j =i+1; j < arr.length; j++){
        
//         let currentSum = currentVal + arr[j]
//         if(currentSum ==target ) {
            
//             let combination = []
//             combination.push(i)
//             combination.push(j)
//             indices.push(combination)
//         }
//     }
// }

const sortedArr = arr.sort((a,b) => a-b)
console.log(sortedArr, "Ttt")

let l = 0
let r = arr.length-1

let includedIndexs = []

for(let i =0; i < sortedArr.length; i++ ){
    
    let currentSum = parseInt(sortedArr[l] + sortedArr[r])
    if(currentSum < target) {
        l++
    }
    
    if(currentSum > target) {
        r--;
    }
    
    if(currentSum == target) {
        
        let currentArr  = []
        currentArr.push(l)
        currentArr.push(r)
        
        if( l != r) {
            if((!includedIndexs.includes(l)) && (!includedIndexs.includes(r)) ) {
                          indices.push(currentArr)   
                          includedIndexs.push(l)
                          includedIndexs.push(r)

            }
        }
        l++;
    }
    
}






console.log(indices, "answer")
 
 
