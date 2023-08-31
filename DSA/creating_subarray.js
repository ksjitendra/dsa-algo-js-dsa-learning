// creating 
// const originalArray = [1, 2, 3, 4, 5, 6, 7, 8];

// function splitArray(arr, size) {
    
//     let newArr = []
//     for(let i=0; i<= arr.length-1; i+=size) {
//          newArr.push( arr.slice(i,i+size) )
//     }
//     return newArr;
// }

// console.log(splitArray(originalArray, 2))

function createSubarrays(array, subarraySize) {
    const subarrays = [];
    let startIndex = 0;
  
    while (startIndex < array.length) {
      const endIndex = Math.min(startIndex + subarraySize, array.length);
      const subarray = [];
  
      for (let i = startIndex; i < endIndex; i++) {
        subarray.push(array[i]);
      }
  
      subarrays.push(subarray);
      startIndex += subarraySize;
    }
  
    return subarrays;
  }
  
  const originalArray = [1, 2, 3, 4, 5, 6, 7, 8];
  const subarrays = createSubarrays(originalArray, 3);
  console.log(subarrays);
  