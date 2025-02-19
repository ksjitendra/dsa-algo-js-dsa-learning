// Purpose: The spread operator expands or "spreads" the elements of an iterable (like an array, string, or object) into individual elements.

// Common Uses:

// Array Literals: To copy or concatenate arrays.
// Object Literals: To shallow copy or merge objects.
// Function Calls: To pass an array of arguments as individual arguments to a function.

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

console.log(arr2); // Output: [1, 2, 3, 4, 5]



const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }

console.log(obj2); // Output: { a: 1, b: 2, c: 3 }


function sum(x, y, z) {
    return x + y + z;
  }
  
  const numbers = [1, 2, 3];
  console.log(sum(...numbers)); // Output: 6
  