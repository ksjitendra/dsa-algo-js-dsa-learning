


const arr = [1,2,3,4,5]
const arr1 = [1,1,2,3,4,5,6]

const setArr = new Set()

for(let i =0; i< arr.length; i++) {
    setArr.add(arr[i])
}

for(let i =0; i< arr1.length; i++) {
    setArr.add(arr1[i])
}

console.log([...setArr])

