// This is the constructor function in js and it's still forming the closure and performing
// the counter
function Counter() {
  var count = 0;
  this.incrementCounter = function () {
    count++;
    console.log(count);
  };

  this.decrementCounter = function () {
    count--;
    console.log(count);
  };
}

var counter1 = new Counter();

counter1.incrementCounter();
