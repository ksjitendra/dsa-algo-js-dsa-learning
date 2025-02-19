function x() {
    var a = 7;
    function y() {
        // a is taking the referene where it is defined not the value of it, if it has changed the value later 
        // it will return the updated value 
        console.log(a);
    }

    // only returing the function not invoking or initializing 
    // when a function is returned not only the function code is returned , function along with it lexical environemnt returned 
    a = 100;
    return y;
}

var z = x();
// console.log(z);

// invoking the fuction which got in return 
z()
x()