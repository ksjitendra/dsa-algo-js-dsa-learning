setTimeout(() => {
  console.log("Timer");
}, 5000);

// what is the callback function in js
// The function which you pass in another function is known as call back function

function x(y) {
  console.log("called x");
  y();
}

// When we have given the responsibility to call a specific function to another function is
// called as callback function
x(function y() {
  console.log("called y");
});

// Javascript is a syncronous and single-threaded language

// Blocking the main thread

// Callstack - javascript has the callstack everything executed in js program it's only from this callstack
// javascript has only the single callstack or we can call it as main thread
// everything whatever executed on the browser from js page, everything executed through the callstack only

// if any operation stop this callstack working or block the callstack that is known as blocking the mail thred

// Power of callback?

// deep about Event listeners

// Closures demo with event listener

// Scope demo with event listerens

// Garbage collection & removeEventListeners

function AttachEventListener() {
  let count = 0;
  document.getElementById("clickme").addEventListener("click", function xy() {
    console.log("Button is Clicked", count++);
  });
}

AttachEventListener();
