
const names = ["Youtube", "facebook", "Instagram", "Netflix", "Amazon"]

// majorly for of loop is used for arrays
for (const n of names) {
    // console.log(n);
}

const symbols = {
    yt: "Youtube",
    ig: "Instagram",
    fb: "Facebook"
}


for (const j of names) {
    // console.log(j, 'Test');
}

// it is used for objects
for (const n in symbols) {
    // if (Object.hasOwnProperty.call(object, key)) {
    //     const element = object[key];
        
    // }
    // console.log(symbols[n]);
}

var arr = [1,2,3,4,5]

var arr2 = arr.reduce((acc, x) => {
    return x+acc;

}, 5)

var arr3  = arr.map( (x) => {
    return x+1
})

console.log('Reduce ', arr3
);