
const str = 'ardnetij'
// const rStr = str.split('').reverse().join('')

// console.log(rStr)

// const test = 'gugugiugi,hhih'

// console.log(  test.split('').join('')    )

// const str = 'jitendra'
const newArr = []
const len = str.length

console.log('lenght ', len);
//k > 0; - this condition of the loop should be the true everytime the only loop will run 
let emptyStr = ''
for(let k = len-1; k >= 0; k-- ) {
    console.log('test');
    emptyStr+= str[k]
    // newArr.push(str[k])
}

// console.log(newArr.join(''))
console.log(emptyStr);