

const arr = [1,2,3,4,5,6,7]
function rotateArrbyOne(arr, d) {
    const arrLen = arr.length
    let rotationNum = 0
    if(d > arrLen) {
       rotationNum = parseInt(d/arrLen)
    }
    if(d == arrLen) {
        return arr;
    } 
    if(d < arrLen) {
        rotationNum = d
    }
    
    // Step 1 making Temp Array
    const tempArr = arr.slice(0,rotationNum)
    
    // Step 2 shifting the rest items of the array 
    for(let i = d; i< arrLen; i++) {
        arr[i-d] = arr[i]
    }
    
    // Step 3 puting the temp values 
    for(let j =0; j< tempArr.length; j++){
        arr[arrLen-rotationNum+j] = tempArr[j]
    }
    
    // console.log(rotationNum)
    return arr;
}


console.log(rotateArrbyOne(arr, 3))