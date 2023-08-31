// Removing duplicate values from  an array 
var arr = [1,2,3,,4,4,4,5,6]

var newArr = [...new Set(arr)]

console.log(newArr +"removing duplicate values from array");


var uniqueArray = []

function removeDuplicates(arr){

}

arr.forEach(element => {

    if(!uniqueArray.includes(element)){
        uniqueArray.push(element)
    }
    return uniqueArray
});

console.log(uniqueArray+"uniqueArray---");


