

function printInverseDiamond(n) {
    
    for(let i =0; i< n; i++) {
        
        let str = ''
        let starCount = parseInt(parseInt((n-i)*2) - 1)
        
        for(let j = 0; j< i; j++){
            str+=" "
        }
        
        for(let l = 0; l< starCount; l++){
            str+='*'
        }
        
        for(let k = 0; k< i; k++){
            str+=" "
        }
        
        console.log(str+'\n')
    }
}

printInverseDiamond(5)

