var c = 100;

x();
console.log(c + "jj");

function x() {
  c = 30;
  console.log(window.c);
  window.c = 20;
  console.log(c);
}

// var a = 100
// {
//     var a = 10
//     let b= 20
//     const c = 30

//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// console.log(a);
