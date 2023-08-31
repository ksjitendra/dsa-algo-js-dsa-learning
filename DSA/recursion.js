// Recursion 

function apple(x) {

    // logic part 
    x++;
    console.log(x);


    // recursion part 
    if(x < 2) {
        apple(x)
    }
}

// let data =0 
// apple(data)

// function getTata(y) {

//     if(y == 0) {
//         return 1;
//     }

//     return y  * getTata(y-1); 


// }

// console.log(  getTata(5));

// indirect recursion ,when calling a different function from another function and doing vice versa

let money = 100
let totalApple = 0; 

function buyApple(x) {

    if(x > 0) {
        console.log('Purchasing Apple');
        buyMore(x)

    } else {

        console.log(`I have already purchased ${totalApple}`);

    }

}

function buyMore(x) {
    totalApple++;
    buyApple(x-10);
}

buyApple(money)


// Interview question
function test(d) {

    console.log(d);
    if(d > 0) {
        console.log(d);
        test(d-1)
        console.log(d);
    }
}

let k = 5 
test(k)