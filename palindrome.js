
// using inbuilt reverse function 
const str = 'madaggugiugihium'

if(str == str.split('').reverse().join('')) {
    console.log('Yes');
} else {
    console.log('No');
}

// using while loop 

function toCheckPalindrome(str){
    let leftIndex = 0
    let rightIndex  = str.length - 1

    // this loop is just to check in case any character is not equal otherwise it's considdered that this is a an palindrome 
while(leftIndex < rightIndex) {
    if(str[leftIndex] != str[rightIndex]) return false
    leftIndex++
    rightIndex--
}

return true;
}

// str = 'madam'

console.log(toCheckPalindrome(str));

