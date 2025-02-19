

function printZPattern(num) {
    for(let i= 0; i< num; i++) {
        
        let str = ''
        let firstLoopCount = (i ==0 || i == num-1) ? 0 : (num-i)
        let lastLoopCount = (i ==0 || i == num-1) ? 0 : i
        // First Loop for space
        for(let j = 0; j<firstLoopCount; j++) {
            str=' '
        }
        
        // Second lopp for the star to print
        if(i ==0 || i == num-1) {
            for(let k =0; k< num; k++) {
                str+= '* '
            }
        }else{
            str+='* '
        }
        
        // third loop to print space 
        for(let l=0; l< lastLoopCount; l++) {
            str+=' '
        }
        
        console.log(str+'\n')
    }
    return false;
}

printZPattern(7);