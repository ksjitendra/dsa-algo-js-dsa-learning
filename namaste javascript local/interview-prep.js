// subsstring

var w = (l = 5);

function multiply(a) {
  return function (b) {
    return a * b;
  };
}

console.log(multiply(5)(6));

console.log(l);
console.log(w);

var string1 = "Jitendra";

var string2 = string1.substring(2, 5);

console.log(string2);

// slice and splice

var arr = [1, 2, 3, 4, "Test"];
var arr2 = [3, 4, 5, 6, "Test2"];

console.log(arr.slice(0, 4));
console.log(arr);

console.log(arr2.splice(0, 4));
console.log(arr2);

// eval() function
// The eval() function evaluates the expression passed into it as a parameter and returns the result after evaluation.

var num1 = 8;
var num2 = 12;

var total = eval("num1+num2");

console.log(eval(new String("2+2")));
console.log(total + " Total");

// <noscript> tag - is used to show elements given within it, when browser has disabled the Js means browser
// is not supporting script tag any more
// Example

{
  /* <html>
                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                               <body>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                   <h1>GeeksforGeeks</h1>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                   <h2>HTML noscript Tag</h2>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                   <script>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                       document.write("GeeksforGeeks!")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                   </script>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                   <!-- noscript tag starts -->
                                                                                                                                                                                                                                                                                                                                                                                                                                                                   <noscript>A computer science portal</noscript>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                   <!-- noscript tag ends -->
                                                                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                               </body>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                               </html> */
}

function solve(arr, rotations) {
  if (rotations == 0) return arr;
  for (let i = 0; i < rotations; i++) {
    let element = arr.pop();
    arr.unshift(element);
  }
  return arr;
}
solve([44, 1, 22, 111], 5);

var x = null;
var y = +x;

console.log(y + "gfg");

// destructing
var testArr = ["ronaldo", "messi", "sunil"];
var [r, g] = testArr;

var testObj = [
  { name: "Jitendra", age: 26, profession: "Software Engineer" },
  { name: "Jitendra", age: 26, profession: "Software Engineer" },
];
var [h] = testObj;
var { name } = h;
console.log(name);

function dog() {
  return "Rat";
  print("I am a dog.");
}
dog.sound = "Bark";

console.log(dog());
console.log(dog.sound);

// Spread operator
// spread operator is used to copy the elements of any object or any array to another array or object
// Before this operator array reference was copied not the actuall elements

// we can use it where we have to pass all the elements of array to an function as an argument

function doSum(...items) {
  let sum = 0;
  for (let item of items) {
    sum += item;
  }
  return sum;
}

doSum(1);
doSum(1, 2);
doSum(1, 2, 3, 4);

// we can extra parameter as well
// doSum(temp, ...items)

// if we have same key in multiple arrays or objects and we merge it, in the final result we will get the key position
// from the first entiry and value we will got from second entity

var jkArr = [1, 2, 34, 4, 4];
var kkr = [...jkArr, 9.0, 2, 3];
console.log(kkr + " First One");

jkArr.push(9);

console.log(kkr + " Second one");

var testObj1 = { name: "Jitendra", age: 25 };
var testObj2 = { company: "Rubico", designation: "Software Engineer" };

var kkr = { ...testObj1, ...testObj2 };

var spArray = ["hello", "World"];
var spString = "Helloworld";

console.log(...spArray);
console.log(...spString);

// console.log(kkr);

// it will return us the first positive value from the whole condition
const result = false || [] || {};
console.log(result);

//# Quest - 17
// when it will not get any positive value it will get the last mentioned value from the conditition
const res = false || null || "";
console.log(res);

// Qess
// when returning promis with resolve state
const pTest = Promise.resolve(5);
console.log(pTest);

// Ques - when we compare two emojis in js it will give you true

// testObj1.forEach((element) => {
//   console.log(element.name);
// });

for (const key in testObj1) {
  // if (Object.hasOwnProperty.call(object, key)) {
  //   const element = object[key];
  // }s

  console.log(testObj1[key]);
}

console.log(testObj1.name);

// Questions - JSON.parse and JSON.stringfy()

// var testJSON = { name: "Jitendra", age: "25" };
// var trans = JSON.parse(testJSON);
// console.log(trans);
// console.log(testJSON, "testJSON");

let text =
  '{ "employees" : [' +
  '{ "firstName":"John" , "lastName":"Doe" },' +
  '{ "firstName":"Anna" , "lastName":"Smith" },' +
  '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

console.log(JSON.parse(text), "text");

var userData = {
  firstname: "Jitendra",
  lastname: "Kumar",
  age: 25,
};

var userDataString = JSON.stringify(userData);
console.log(userDataString);

let yname = "Jitendra";

function getName() {
  let yname = "Kumar";
  console.log(yname);
}

getName();

((y) => console.log(y))("Test Arrow");

console.log(`${((x) => x)("I love")} to program`);

//# Execution of multiple operators in a single expression in js
// when we have multiple expression in a single expression in js it performs the execution from left to right

var varSt = "Jitendra";

console.log(!typeof varSt);

console.log(!typeof varSt === "string");
console.log(!typeof varSt == false);

var testObj = { name: "Jitendra" };
// Object.seal(testObj);

// testObj.age = 23;
console.log(testObj);

console.log(delete testObj.name);
console.log(testObj);

var neArray = [1, 2, 3, 4, 5];

var filterneArray = neArray.filter((item) => item > 1);

console.log(filterneArray);

neArray.pop(0);

console.log(neArray);

const fruits = ["Banana", "Orange", "Apple", "Mango"];

let removedElement = fruits.shift();
let removedLast = fruits.pop();

console.log(fruits);

console.log(removedElement);
console.log(removedLast);

fruits.unshift("grapes", "lichy");

console.log(fruits);

var v = 1;

function test1() {
  console.log(v);
}

function test2() {
  var v = 2;
  console.log(v + "hh");
}
test2();
console.log(v);

var a = ["dog", "cat", "hen"];
a[100] = "fox";

console.log(a.length);
console.log(a);

var vowels = "aeiou";
// var vowels = { a, e, i, o, u };

for (let index = 0; index < vowels.length; index++) {
  const element = vowels[index];
  console.log(element);
}

class Animal {
  static belly = [];
  eat() {
    Animal.belly.push("food");
  }
}

let k = new Animal();
k.eat();

console.log(Animal.belly[0]);

class X {
  get Y() {
    return 42;
  }

  static hh = 60;
}

var n = new X();

n.hh = 80;

console.log(n.Y);

const pobject = {
  test: "jitendr",
  test2() {
    console.log("test2");
  },
};

console.log(pobject);

var sound = "grunt";
var bear = { sound: "roar" };

function roar() {
  console.log(this.sound);
}

roar.apply(bear);

let rainforest = ["a", "b", "c", "d"];

rainforest.splice(0, 2);

console.log(rainforest);

X.hh = 800;
console.log(X.hh);

let animal = ["dog", "cat"];

console.log(animal.pop());

const desset = { type: "pie" };

desset.type = "pudd";

const se = desset;
se.type = "fruit";

console.log(desset.type);

var teData = {
  name: "Jitendra",
};

delete teData.name;

console.log(teData);

console.log(navigator.platform);
