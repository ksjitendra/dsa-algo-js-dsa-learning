
const arr = [2,4,0,3,0,0,0,1,3,5]
function moveZerotoEnd(arr) {
    let index = 0
    let arrLen = arr.length

    for(let i =0; i<arrLen; i++) {
        if(arr[i] == 0) {
            index = i
            break;
        }
    }
    
    for(let i = index+1; i< arrLen; i++) {
        if(arr[i] != 0) {
            let temp = arr[i]
            arr[i] = 0
            arr[index] = temp;
            index++
        }
        console.log(arr, "each iteration")
    }
    
    return arr;
    
}




console.log(moveZerotoEnd(arr))