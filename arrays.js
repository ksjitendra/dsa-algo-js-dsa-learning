
var arr1  =  [1,2,3,4]
var arr2  = ['a','b','y','h']
var arr3 = [4,5,5,6,7]
var arr5 = [9,10,11,12,23]

var arr4 = arr1.concat(arr2, arr3, arr5);


console.log('arr4', arr4);

var testSet = new Set([...arr4])

console.log(testSet);