// Funtional programming

// DRY principle - don't repeat yourself

function x() {
    console.log("Namaste");
}

// Y-  higher order function
// x- callback function
function y(x) {}

const radius = [3, 2, 1, 4];

// calculate the area of each circle

const area = function(radius) {
    return Math.PI * radius * radius;
};

const circomfrance = function(radius) {
    return 2 * Math.PI * radius;
};

const calculate = function(radius, logic) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]));
    }

    return output;
};

// calculate through prototype
Array.prototype.calculateTest = function(logic) {
    const output = [];
    for (let i = 0; i < this.length; i++) {
        output.push(logic(this[i]));
    }
};

// This map function map the whole array with some logic which we will pass here
// it just map each element with some logic
console.log(radius.map(area));
console.log("using prototype", radius.calculateTest(area));

console.log("Calculate the Area", calculate(radius, area));
// console.log("Calcualte the circumfrance", calculate(radius, circomfrance));

var sum = function(a, b) {
    return parseInt(a + b);
};

function calculateNumbers(a, b, logic) {
    return logic(a, b);
}

var output = calculateNumbers(2, 3, sum);

console.log(output + "Last");