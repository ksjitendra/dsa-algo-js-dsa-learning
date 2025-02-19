// using bubble sort 
 var arr = [2,6,1,5,3,4,56]
 // to bubble sort we need loop iteration numbeofItem*numberofItems

 for (let i = 0; i < arr.length; i++) {

    for (let j = 0; j < arr.length; j++) {
      
        if(arr[j]  >  arr[j+1]) {
            let test = arr[j];
            arr[j] = arr[j+1] 
            arr[j+1] = test
        }
        
    }
    
    
    
 }

 console.log(arr);