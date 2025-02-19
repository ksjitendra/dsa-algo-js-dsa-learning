function a() {
  //   console.log(b);
  var b = 8;
  c();
  // c is lexically sitting inside the a function
  function c() {
    console.log(b);
  }
}

// var b = 7;

a();

// console.log(a);

// var a = 7;

// function test() {
//   var x = 6;
// }

// test();
// // console.log(x);
