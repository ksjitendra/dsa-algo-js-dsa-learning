

// "use strict"

// For all the regular functions this points to window object


function z() {
    console.log('Function z is called');
    // console.log(window, 'LLLL');

    function r() {
        console.log(this, 'Test');
    }

    return r;
}

z()();


// const xz  = z();

// xz();





var a = 10;

function test() {

    let b = 12;
    // console.log(this.a, 'Test of this ');

    function test2() {
        let c = 23;
        console.log(this, 'Test of b variable ');

    }

    test2();
}

test()


// when we are using the this keyword inside a js object that will reference to a perticular object 
const testObj  = {
    firstName : "Jitendra",
    lastName: "Kumar",
    testFunc() {
        console.log(this);
    }
    // testFunc: () =>  {    // arrow function always reference to global object 
    //     console.log(this);
    // }
}

testObj.testFunc(); 

var array = [1,2,2,2,4,5];

if(array instanceof Number ) {
    console.log('That\'s true ');
}

function car() {
    var verna = "verna"
}

var Icar = new car()

if(Icar instanceof car) {
    console.log('Yes');
}

