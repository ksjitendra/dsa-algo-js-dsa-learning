
// getting anagram 
const str1 = 'heart' 
const str2 = 'thaerdd'


const firstArr = new Array(26).fill(0)
const secondArr = new Array(26).fill(0)


if(str1.length != str2.length) { 
    console.log('Not an anagram');
}

for (let i = 0; i < str1.length; i++) {
    const charCode1 = str1.charCodeAt(i) - 97
    const charCode2 = str2.charCodeAt(i) - 97
    firstArr[charCode1]++
    secondArr[charCode2]++  
}

for(let i =0; i< 26; i++) {
    if( firstArr[i] != secondArr[i]) {
         console.log('Not an anagram');
        //  return false;
    } 
}

console.log('Yes an anagram');




// function areAnagrams(str1, str2) {
//     if (str1.length !== str2.length) {
//       return false;
//     }
  
//     const freqCount1 = new Array(26).fill(0);
//     const freqCount2 = new Array(26).fill(0);
  
//     for (let i = 0; i < str1.length; i++) {
//       const charCode1 = str1.charCodeAt(i) - 97; // 97 is the ASCII value of 'a'
//       const charCode2 = str2.charCodeAt(i) - 97;
//       freqCount1[charCode1]++;
//       freqCount2[charCode2]++;
//     }
  
//     for (let i = 0; i < 26; i++) {
//       if (freqCount1[i] !== freqCount2[i]) {
//         return false;
//       }
//     }
  
//     return true;
//   }




// Self written code 


const str1 = 'silentjjj'
const str2 = 'listjjjen'

const firstStrIndexing = new Array(26).fill(0)
const secondStrIndexing = new Array(26).fill(0)

for(let i =0; i < str1.length; i++) {
    
    let currentLetterIndexStr1 = str1.charCodeAt(i) - 97
    let currentLetterIndexStr2 = str2.charCodeAt(i) - 97
    
    firstStrIndexing[currentLetterIndexStr1]++
    secondStrIndexing[currentLetterIndexStr2]++
}

let isAnagram = true

for(let k =0; k< 26; k++) {
    if(firstStrIndexing[k] !=  secondStrIndexing[k]) {
        isAnagram = false
    }
}

if(!isAnagram) {
 console.log("This is not the anagram")
} else {
 console.log("This is  the anagram")
}