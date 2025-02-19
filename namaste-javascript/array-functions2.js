
// Every function checking in all the elements are less then 40

var arr = [1,2,2,4,5,6,7]


var arr1  = arr.every((x) => {
    return x<40;
})

console.log(arr1);

// Flatmap function to apply a callback function condition to each element of any array 

var arr2  = [2,3,4,[5,6,7], 9]

arr2.flatMap((x) => {
    return [x,x*4]
})

console.log(arr2, 'arr2');

// splice function is used to add / remove or replace any element from an array using by mentioning the index of elemetn 
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');

// entries() creates the key value pair of given elements in a array 

arr2.fill(0,2,6)

console.log(arr2, 't');

// join method creates an string by concatinating all the elements of array 

// example 

var testArray = [1,2,2,4,5,6]

console.log( testArray.join('\'') );

// keys function gives you the keys of entire array 

// values method giving all the values of an array 

var arrValues = testArray.values()

for (const iterator of arrValues) {

    console.log( iterator );
    
}

