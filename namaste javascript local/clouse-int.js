function outest() {
  let c = 15;
  function outer(b) {
    function inner() {
      console.log(a, b, c);
    }

    // var a = 10;
    // var a = 4000;
    return inner;
  }
  //   var a = 20;
  console.log(a, "T");
  return outer;
}

let a = 100;
var x = outest()("Test Argument");
x();

console.log(a, "Global");
