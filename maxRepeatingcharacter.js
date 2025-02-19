

const str = 'icecream'

function getMaxOccurance(str) {
    
    let obj = {}
    let maxRepeatChar;
    let maxRepeatNum = 1
    const len = str.length
    for(let i =0; i< len; i++) {
        
        if(obj[str[i]]) {
            obj[str[i]] +=1
        } else {
            obj[str[i]] = 1
        }
        
        if(obj[str[i]] > maxRepeatNum ) {
            maxRepeatNum = obj[str[i]]
            maxRepeatChar = str[i]
        }
    }
    
    return maxRepeatChar;
}

console.log(getMaxOccurance(str))