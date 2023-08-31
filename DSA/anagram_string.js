let str1 = "jk Hello"
let str2 = "ollHe kj"

// if(  str1.length != str2.length ) {
//     console.log('Can not be anagram')
// }

function checkCharInStr(char, string) {
    
    let flag = false
    for(let i =0; i<= string.length-1; i++ ) {
                //   console.log(string[i])

        if(char == string[i]) {
            return true;
            break
        }
    }    
    
    return flag;

}

let isNotExist = false;
for(let j=0; j<= str2.length-1; j++ ) {
                        // console.log(str2[j])

      let test = checkCharInStr(str2[j], str1)
      if(test == false) {
        //   console.log(str2[j])
          isNotExist = true
        //   console.log('Not Anagram')
          break
      }
}

if(isNotExist) {
    console.log("Not anagram")
} else {
    console.log("Anagram")
}