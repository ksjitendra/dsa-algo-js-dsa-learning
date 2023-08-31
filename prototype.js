

// we can create a new property to any data type prototype and we need to access that in the same manner 
// like string - arr.string and array - arr.array()
Array.prototype.getFirstIndex = function(){
    return this[this.length-1]
}

var arr = [9,00,08,2,3,3]

arr.every((item) => {
    console.log(item*3);
    return item*3
})


console.log(arr.getFirstIndex());
