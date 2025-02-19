
function maxSubArray (nums) {

    let maxSum = -Infinity
    let total = 0
    
    let startInd = 0
    let endInd = 0

    for(let i =0; i< nums.length; i++) {
        
        if(total == 0) {
            startInd = i
        }

        total = total + nums[i]

        if(total > maxSum) {
            endInd = i;
            maxSum = total;
        }

        if(total < 0) {
            total = 0
        }
    }
    
    return {maxSum, startInd, endInd };

  
};

const arr = [-2,1,-3,4,-1,2,1,-5,4]
console.log(maxSubArray(arr))

