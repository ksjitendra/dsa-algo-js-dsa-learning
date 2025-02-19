const nestedArray = [1, 2, [3, 4], 5, [6, [7, 8]]];

function toMakeflatAray(nestedArray) {
    
    var flatArr = []
    // const mainArrLen = nestedArray.length
    
    for(let i=0; i< nestedArray.length; i++) {
        if(typeof nestedArray[i] == 'object') {
             const newItems = toMakeflatAray(nestedArray[i])
            //  console.log("concat result", flatArr.concat(newItems))
            //  flatArr = 
             flatArr.concat(newItems) // 1,2,3,4
        } else {
            flatArr.push(nestedArray[i])
        }
    }
    
    return flatArr;
}