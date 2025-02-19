

function createBracket(N, str='', open=0, closed=0) {
    
    if(str.length == 2*N) {
        console.log(str, '  ')
        return;
    }
    
    if(open < N) {
        str = str+'('
        createBracket(N, str,open+1, closed)
        str.substring(0, str.length - 1)
    }
    
    if(closed < open) {
        str = str+ ")"
        createBracket(N, str, open, closed+1)
        str.substring(0, str.length - 1)
    }
}
    

console.log(createBracket(2, '', 0, 0))


// function removeCharacter(str) {
//     let newString = str.substring(0, str.length - 1);
//     return newString;

// }
// let str = "Geeksforgeeks";
// console.log(removeCharacter(str)); 
