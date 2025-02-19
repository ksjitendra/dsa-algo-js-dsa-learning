// Encapsulation or data hiding example
function counter() {
  // this variable is hided now
  var count = 0;
  return function increasecounter() {
    count++;
    console.log(count, "test");
  };
}

var counter1 = counter();
counter1();
counter1();

// whenever we call the function it creates the new copy of function and work independently
var counter2 = counter();
counter2();
counter2();

// It will give you the reference error because you can not access the variable defined inside a function
// console.log(count);
