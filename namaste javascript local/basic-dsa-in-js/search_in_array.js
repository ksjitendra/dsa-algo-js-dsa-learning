// Search in array elements
// using linear search
var arr = [12,34,293,32,12,23,10];

let testValues = 23 
let isExist = false

for (let i = 0; i < arr.length; i++) {

    if(  arr[i] == testValues) {
        isExist = true;
        break;

    }
    
}

console.log( isExist );
console.log( arr.indexOf(testValues) );