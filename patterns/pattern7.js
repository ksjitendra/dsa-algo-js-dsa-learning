

function printPattern7(n) {

    for(let i =0; i< n; i++) {
         
         str = ''
         let spaceCount = parseInt(parseInt(n-i)- 1)
         let starCount = parseInt(parseInt(i*2)+1)
         
         
         for(let j =0; j< spaceCount; j++) {
             str +=" "
         }
         
         for(let k =0; k< starCount; k++) {
             str +='*'
         }
         
         
         for(let l =0; l< spaceCount; l++) {
             str +=" "
         }
         
         
         console.log(str+'\n')
        
        
    }
    
}


console.log(printPattern7(5))


//     *    
//    ***   
//   *****
//  *******
// ********