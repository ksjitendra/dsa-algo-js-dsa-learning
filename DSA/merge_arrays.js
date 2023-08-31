var arr1 =   [1, 2, 3, 4]
var arr2 =   [5, 6, 7, 8]

var arr3 = [];

arr2.push(10)

for (let i = 0; i < arr1.length; i++) {

    arr3[i] = arr1[i] 
}

for (let i = 0; i < arr2.length; i++) {

    // arr3.push(arr2[i]); //

    arr3[arr1.length+i] = arr2[i]  ;
    
}

console.log(arr3 );



var t3 = [...arr1,...arr2]

console.log(t3);