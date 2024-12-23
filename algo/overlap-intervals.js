
const arr = [[1,3],[9,11], [2,4],[15,18]]

arr.sort((a,b) => a[0] - b[0])

const res = []

for(let i =0; i< arr.length; i++) {
    let start = arr[i][0]
    let end = arr[i][1]
    
    if(res.length> 0 && res[res.length-1][1] >= end) {
        continue;
    }
    
    for(let j =i+1; j < arr.length; j++) {
        if(arr[j][0] <= end ) {
            end = Math.max(end, arr[j][1])
        }
    }
    res.push([start, end]);
}

console.log(res, "res")