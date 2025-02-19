function x() {
  //   var i = 1;

  // In case of having i variable in the global scope it, will reserve the memmory space and each
  // call back function defined in setTimeout will refer to this variable
  for (var i = 1; i <= 5; i++) {
    // const element = array[i];

    setTimeout(function () {
      console.log(i);
    }, i * 1000);

    // setTimeout(() => {
    //   console.log(i);
    // }, i * 1000);
  }

  console.log("Testing console");
}

function y() {
  for (var i = 0; i < 5; i++) {
    function z(i) {
      setTimeout(() => {
        console.log(i);
      }, i * 1000);
    }

    z(i);
  }
}

// it will work with let varaible, because let is the block scoped and it creats the new copy of
// variable everytime when it runs

// x();
y();
