function a() {
  var x = 0;
  // smartly collected garbage collector, when it returns the functiuon b and it look that
  // z variable is not used, it just remove it from the memory and make free the memory

  var z = 20;
  return function b() {
    console.log(x);
  };
}

// if we are not using function defined inside function a but still it will form the closure and use the memory

var y = a();
