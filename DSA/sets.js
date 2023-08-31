let data = new Set([1,3,4,4,4])

data.add("Hello")
data.delete("4")
data.clear()

console.log(data);

let arr = [2,4,5,56,6,6,6,6,66,]

let newArr = new Set(arr)

console.log(newArr);

let s = new Set([2,3,4,5,5,6])

let arrS  = [...s]

console.log(arrS);

// https://bobbyhadz.com/blog/javascript-get-first-element-of-set