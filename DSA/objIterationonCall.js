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
}

obj = {a:1, b:2, c:3, d:4, e:5}

console.log( creatObj(obj, checkEven()) )