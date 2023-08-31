// let name = {
//     firstname : "Jesse",
//     lastname: "Jitendra",
//     printFullName : function() {
//         console.log(`${this.firstname}  ${this.lastname}`);
//     }
// }

// name.printFullName()

// let name2 = {
//     firstname : "MS",
//     lastname: "Dhoni",

// }

// // function borrowing 

// name.printFullName.call(name2);

// Another way 

let name = {
    firstname : "Jesse",
    lastname: "Jitendra",
    
}

let printFullName = function(hometown, state) {
    console.log(`${this.firstname}  ${this.lastname} from  ${hometown} in ${state}`);
}


let name2 = {
    firstname : "MS",
    lastname: "Dhoni",

}

// function borrowing 

// Call method
printFullName.call(name, "Dehradun", "Uttarakhand")

// Apply method 
printFullName.apply(name, ["Dehradun", "Uttarakhand"])


// Bind method 
// it just bind the method and keep the copy and can use it later 
 let printMyname = printFullName.bind(name, "Dehradun","Uttarakhand")

 console.log(printMyname(), "TTTT");

 printMyname()


 var z = 8
 

console.log('Global z ', z);

function ztest(name, y) {

    name.firstname="Viren"
    var z = 4
    y = 005
    console.log('Inside function z', z, y);
}

ztest(name, z);

console.log(name);

// This keyword behaviour 
// inside a regular function it will point - window object 
// inside a function that is inside another function it will point - window object 
// inside a arrow function always points to window object 
// js call function is there just to change the this behaviour of any js function 

function testThis() {
    var name = "Kumar"

    console.log(this+" Test");

    function r() {
        console.log(this+ "Function r");
    }

    r()
}

testThis()

// Js call method 
// By using call(), you can invoke a function with a specific this value, even if the function is not a method of an object.
// This is particularly useful when you want to reuse a function that was originally defined as a method of one object, 
// but you want to call it with a different object as the context.


const testObject = {
    name: "Jitendra",
    age: 25, 
    objFunction() {
        // const testName = testT = () => {
        //     return this.name+" Kumar"
        // }

        // console.log(testName());
        console.log(this.name);
    }
}


const testO2 = {
    name: "Jesse",
    profession : "Engineer"
}

testObject.objFunction.call(testO2)


function getFullName(myArray) {
    console.log('My name is- '+this.fname+' '+this.lname+". I am working as a "+myArray[0]+". My age is "+myArray[2]+". and My company is "+myArray[1]+" .");
}

var dbObj1 = {
    fname: "jitendra",
    lname: "kuamr"
}

var dbObj2 = {
    fname: "Jack",
    lname: "Gutwein"
}

var myArray = ['Engineer', 'Tech', '25']


getFullName.apply(dbObj2, myArray)


// Js apply method 
//The call() method takes the arguments to the function as separate arguments, 
//whereas the apply() method takes the arguments to the function as an array. 

// the main benifit of using apply method over the call method is as we can pass the array in the argument 
// so we can modify that array  dynamically and can change the value of array any time, but our function will behave same as they are 

var newArr = [1,2,4,44]

var newOb = {
    operation : "Sum"
}

function sum(a,b,c,d) {

    const sum = parseInt(a) + parseInt(b)

    console.log( a );

    console.log(`The operation is ${this.operation} and the result is - ${sum}`);

}

function sum2(newArr) {

    console.log(newArr[1]+"ddd");

}

sum2.apply(newOb, myArray)

// Bind method in js 
// The bind() method can be useful in situations where you
// want to create a new function that has a specific this value or partially bound arguments, without modifying the original function.




