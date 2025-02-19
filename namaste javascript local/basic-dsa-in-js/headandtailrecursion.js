function colors() {
  let data = 20;
  //   console.log(data);

  if (true) {
    // console.log(data * 20);
  } else {
    // console.log(data / 20);
  }
}

function days() {
  colors();
}

function fruits() {
  days();
}

function topFunction() {
  fruits();
}

topFunction();

function test(d) {
  console.log(d); // head recursion

  if (d > 0) {
    test(d - 1);
  }
  console.log(d); // Tail recursion
}

let k = 5;
test(k);
