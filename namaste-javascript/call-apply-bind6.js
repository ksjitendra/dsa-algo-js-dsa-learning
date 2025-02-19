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
 let printMyname = printFullName.bind(name, "Dehradun, Uttarakhand")

 console.log(printMyname, "TTTT");

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