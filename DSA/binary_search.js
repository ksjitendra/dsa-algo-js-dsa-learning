
// binary algo only work with sort data 
// we can sort array first then can apply 

let arr = [3,4,5,1,8,4,9,7,2,9]

arr.sort(function(a,b) { return (a-b) })

let find = 2
let start = 0 
let end = arr.length-1
let position = undefined

while(start <= end) {

    let mid = Math.floor((start+end)/2)
    // console.log(mid);

    if(arr[mid] === find) {
        position = mid
        break
    }else if(arr[mid] < find ) {
        start = mid+1
    } else {
        end = mid -1
    }
    // break;
}

console.log(arr[position], position);

// console.log(arr.sort(function(a,b){ return (a-b) } ));