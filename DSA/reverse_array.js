// Reverse Array 
var arr = [5,6,2,3,4,5,6]
let temp;
for (let i = 0; i < arr.length; i++) {

    // console.log(i,arr.length - 1);
    temp = arr[i];
    arr[i] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
    
}
// without loop using recursion 
function customReverse(arr, start, end) {

    if(start <= end) {

        temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp
        console.log(arr, start+1, end-1);
        customReverse(arr, start+1, end-1)
    }

}
customReverse(arr, 0, arr.length-1)

console.log(arr);