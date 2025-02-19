

function printZ(n) {
    
    for(let i =1; i <=n ; i++) {
        
        let str =''
        
        if(i ==1 || i ==n) {
            for(let j =0; j< n; j++) {
                str +='*'
            }
        } else {
            
            let leftspaceCount = parseInt(n-i)
            let rightSpaceCount = parseInt(i-1)
            let starCount = 1
            for(let k =0; k< leftspaceCount; k++ ) {
                str+=" "
            }
            
            str+='*'
            
            for(let l =0; l< leftspaceCount; l++ ) {
                str+=" "
            }
        }
        console.log(str+'\n')
    }
}

printZ(5)


// *****

//    *   

//   *  

//  * 

// *****