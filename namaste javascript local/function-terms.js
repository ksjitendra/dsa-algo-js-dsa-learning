a();
console.log(b, "test");

// function statement also known as function declaration
function a() {
    console.log("a called");
}

// function expression

var b = function() {
    console.log("b called");
};

// Anonymous function- a function without a name is a anonymos function
// Anonymos functions are used only when they are used as values

// function () {
//     console.log("Anonymos function");

// }

// Named function Expression, when we have created a named function and assigned it to a variable
// it called as named function expression
var c = function xyz() {
    console.log("c called");
    console.log(xyz); // we can access it here only inside
};
c();
// xyz();

// Difference between parameter and Argument?

// when we are defining function and getting parameters
function testfunction(param1, param2) {
    console.log(param1);
}

// When we are calling a function so we are passing arguments
testfunction("argument1", 2);

// first class functions
// ability to pass a nonymos or named function as a argument or return a function from the function
/// This ability is called  fisrt class function in js
// First class citizens it is the same thing first class functions

function india(param1) {
    console.log(param1);
}

function up() {
    return function zay() {};
}

india(function xyz() {});
console.log(up());

// Arrow functions
// introduced in es6 or ecma script 2015

// Experiment