// Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
// Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]


function checkOp(arr) {
    
    let newArr = []
    for(let i =0; i<= arr.length-1; i++) {
        
        let subArr = []
        subArr.push(arr[i])
        for(let j=i+1; j<= arr.length-1; j++) {
             
            let isStrSame = checkStr(arr[i], arr[j])
            if(isStrSame) {
                subArr.push(arr[j])
                temp = arr[arr.length-1]
                arr[j] = temp
                arr.length = arr.length-1
            }
        }
        
        newArr.push(subArr)
        
   }
   
   return newArr
    
}


function checkChar(char, str) {
    
     for(let i=0; i<= str.length; i++) {
         if(char ==  str[i]) {
             return true; 
             break;
         }
    }
    
    return false
}
 
function checkStr(str1, str2) {
    
    for(let i=0; i<= str1.length-1; i++) {
         let result = checkChar(str1[i], str2 )
         if(result == false) {
             return false;
             break;
         }
    }
    
    return true;
}

console.log(checkOp(arr))

// Solution with inbuilt function 
function groupAnagrams(arr) {
    const anagramMap = new Map();
  
    for (const str of arr) {
      const sortedStr = [...str].sort().join('');
      if (anagramMap.has(sortedStr)) {
        anagramMap.get(sortedStr).push(str);
      } else {
        anagramMap.set(sortedStr, [str]);
      }
    }
  
    return Array.from(anagramMap.values());
  }
  
  const inputArr = ["eat", "tea", "tan", "ate", "nat", "bat"];
  const groupedAnagrams = groupAnagrams(inputArr);
  console.log(groupedAnagrams);


   
// let obj = {a:1,b:[2,4,5,6], t:9,h:2 }
// let arr = []
// arr.push(Object.values(obj))

// console.log( arr   )

// let str = "jesse"
// let ar = ['g','f', 'r', 'c']

// console.log( ar.sort() )


function groupAnagrams(arr) {
    const anagramMap = {};
  
    for (let i = 0; i < arr.length; i++) {
      const str = arr[i];
      const sortedStr = sortString(str);
      console.log(sortedStr)
  
      if (anagramMap.hasOwnProperty(sortedStr)) {
        anagramMap[sortedStr].push(str);
      } else {
        anagramMap[sortedStr] = [str];
      }
    }
  
    console.log(anagramMap)
    return Object.values(anagramMap);
  }
  
  function sortString(str) {
    return str.split('').sort().join('');
  }
  
  const inputArr = ["eat", "tea", "tan", "ate", "nat", "bat"];
  const groupedAnagrams = groupAnagrams(inputArr);
  console.log(groupedAnagrams);
  