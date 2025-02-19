// Map filter reduces are the higher order functions in js

// Map function is used to transforn an array for example
// definition - map function is used to call a function on each element of an array and create a new array
// by calling a specific function on each element

// map function iterates over the given array elements and doesn't change the existing array
// it returns the new array

function getSum(num) {
  return parseInt(num + 10);
}
var newArr = [1, 2, 3, 4, 5, 6];

var newArr2 = newArr.map((item) => {
  // let test = "";

  if (item > 2) {
    return item;
  }

  // return test;
});

console.log(newArr + "First Array");
console.log(newArr2 + "transformed array");

/// filter function is used to filter the array elements based on certain condition, it creates the new array
// it doesn't change the existing array actually

var firstArray = [1, 2, 3, 3, 4, 4, 45, 5, "t", "y", "l", "p"];

function checkforString(test) {
  return typeof test == "string" ? test : "";
}

var firstFilterArray = firstArray.filter(checkforString);

console.log(firstArray + "First array without filter");
console.log(firstFilterArray + "firstFilterArray");

// Reduce function
// reduce function is used to create a single value from the entire array

var firstReduceArr = [4, 2, 2, 22, 2, 2];

const sumOfArray = firstReduceArr.reduce((sum, item) => sum + item, 10);

const MaxValue = firstReduceArr.reduce((max, item) => {
  if (max < item) {
    max = item;
  }
  return max;
}, 1);

var jukk = [1, 2, 3, 4, 5];

console.log(MaxValue, "MaxValue");

// need to find min value from any array using reduce function

// reduce , filter and map in all three functions we can use these without return keyword if
// we are not using curly braces with in the function in that perticular case

console.log(sumOfArray, "SumofArray");

var examArray = [1, 2, 3, "t1", 4, "i2", 4, "g3", 33, "e4", 6, "r5"];

var filteredArray = examArray
  .filter((item) => {
    return typeof item == "string";
  })
  .map((item) => {
    return item[0];
  });

const newString = "testt";
console.log(filteredArray.join(""));
console.log(newString.split(""));

console.log(newArr2);

const arr = [5, 1, 3, 2, 4];

// double - [10,2,6,4,8]

// Triple - [15,3,9,6,12]

// Binary  - ["101", "1", "11", "10", "110"]

// transformation function
function double(x) {
  return x * 2;
}

function binary(x) {
  return x.toString(2);
}
const output = arr.map(binary);

const out2 = arr.map((x) => x.toString(2));

console.log(output, "Output---");

// filter

function isOdd(x) {
  return x % 2;
}

function isEven(x) {
  return x % 2 === 0;
}

console.log(arr.filter(isEven));

const test = arr.filter((x) => {
  return x > 4;
});

console.log(test);

// Reduce function
// REduce is used where we have take all the array and need to come up with single specific value

const array = [2, 3, 5, 7, 8, 9];

// we can pass an initial value as well in this,
const sum = array.reduce((acc, curr) => {
  return (acc = acc + curr);
}, 20);

const maxValue = array.reduce((max, curr) => {
  if (max < curr) {
    max = curr;
  }
  return max;
}, 0);

console.log("Sum of array", sum);
console.log("Maximum ", maxValue);

// more examples of using these methods
const users = [
  { firstname: "Jitendr", lastname: "kumar", age: 25 },
  { firstname: "Jack", lastname: "night", age: 35 },
  { firstname: "Todd", lastname: "waldo", age: 25 },
];

const newArray = [];
const formatted = users.map((x) => {
  newArray.push(x.firstname + " " + x.lastname);
});

// let total = 0;
// const usersWithSameAge = array.reduce((age, curr) => {
//   if (age == curr.age) {
//     total++;
//   }

//   return total;
// }, 25);

// {26:1, 27:2, 35:1}

console.log(users);

const ageofObject = users.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

// Need to review again
const t = {};
const ageob = users.map((x) => {
  if (t[x.age]) {
    t[x.age] = ++t[x.age];
  } else {
    t[x.age] = 1;
  }
  return t;
});

console.log(ageofObject);
console.log(ageob, "ppp");

// Method chaining
// getting the first name of people who have age less then 30

const people = users
  .filter((x) => {
    x.age < 30;
  })
  .map((x) => x.firstname);

console.log(people);

// need to find out all the people having age less then 30 and having firstname of them
// using reduce

// polyfills
