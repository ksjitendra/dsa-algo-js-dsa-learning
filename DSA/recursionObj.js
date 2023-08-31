

// function sum(obj, sub = 0) {
//     console.log(sub, "sub");
//     let total = sub;
//     for (item in obj) {
//       if (typeof obj[item] == "number") {
//         total = total + obj[item];
//         console.log(total, "total", sub, "sub");
//       }
  
//       if (typeof obj[item] == "object") {
//         console.log(total + "j");
//         sum(obj[item], total);
//       }
//     }
  
//     return total;
//   }

function sum(obj) {
    let total = 0;
  
    for (item in obj) {
      if (typeof obj[item] == "number") {
        total += obj[item];
      }
  
      if (typeof obj[item] == "object") {
        total += sum(obj[item], total);
      }
    }
  
    return total;
  }

  console.log(sum({ a: 1, b: 4, c: { d: 4, e: 19, j: { z: 5, m: 8 } } }))

//   function sumAllValues(obj) {
//     let sum = 0;
    
//     // Iterate over all keys in the object
//     for (let key in obj) {
//       if (typeof obj[key] === 'object') {
//         // If the value is an object, recursively call the function
//         sum += sumAllValues(obj[key]);
//       } else {
//         // If the value is a number, add it to the sum
//         sum += obj[key];
//       }
//     }
    
//     return sum;
//   }
  
//   // Example usage
//   const obj = {
//     a: 1,
//     b: 4,
//     c: {
//       d: 4,
//       e: 19,
//       j: {
//         z: 5,
//         m: 8
//       }
//     }
//   };
  
//   const result = sumAllValues(obj);
//   console.log(result); // Output: 41
  