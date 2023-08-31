// Write a function that takes an object and a callback function as input. The function should return a new 
// object containing only the key-value pairs for which the callback function returns true. For example, if the input object is {a: 1, b: 2, c: 3} 
// and the callback function returns true for even values, the output should be {b: 2}.


function checkEven(num) {
    
    return ( num%2  == 0 ) ? true : false;
}

function creatObj(obj, checkEven) {
    
    let newObj = {}
    for(item in obj) {
        if( checkEven(obj[item]) ) {
            newObj[item] = obj[item]
        }
    }
    
    return newObj;
    
}

obj = {a:1, b:2, c:3, d:4, e:5}

console.log( creatObj(obj, checkEven ))

// Write a function that takes an object as input and calculates the sum of all numeric values, including nested objects.
//  For example, {a: 1, b: {c: 2, d: 3}, e: 4} should return 10 (1 + 2 + 3 + 4).


function calculateSum(obj) {
    
    let sum = 0
    
    for(item in obj) {
        
        if(typeof(obj[item]) == 'number') {
            sum += obj[item]
        }
        
        if(typeof(obj[item]) == 'object' ) {
            
            sum += calculateSum(obj[item])
        }
        
        // if(ty)
    }
    
    return sum;
}

obj = {a: 1, b: {c: 2, d: 3}, e: 4,f:[1,2,3,4] }

console.log( calculateSum(obj))

Input: "Hello World"
Output: "olleH dlroW"


function reverseStr(str) {
    
    let newArr = []
    let strArr = str.split(" ")
    
    for(let i=0; i< strArr.length; i++ ) {
        
        let newStr  = (strArr[i]).split("").reverse('').join('')
        newArr.push(newStr)
    }
    
    return newArr
    
}

console.log(reverseStr("Hello World"))
