// Purpose: The rest operator collects multiple elements and "rests" them into a single array or object. It's used to group arguments or properties together.

// Common Uses:

// Function Parameters: To capture all remaining arguments in a function.
// Destructuring Assignment: To gather the remaining elements of an array or object after some have been assigned to variables.

function multiply(multiplier, ...numbers) {
    return numbers.map(num => num * multiplier);
}
  
console.log(multiply(2, 1, 2, 3)); // Output: [2, 4, 6]

const [first, ...rest] = [10, 20, 30, 40];
console.log(first); // Output: 10
console.log(rest);  // Output: [20, 30, 40]

  
const { a, ...others } = { a: 1, b: 2, c: 3 };
console.log(a);      // Output: 1
console.log(others); // Output: { b: 2, c: 3 }
