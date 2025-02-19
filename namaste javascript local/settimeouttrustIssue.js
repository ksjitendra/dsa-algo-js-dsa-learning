// This function I want to run in the last of program

function cb() {
  console.log("Cb functon");
}

setTimeout(() => {
  cb();
}, 0);

console.log("Start");

setTimeout(() => {
  console.log("Callback function");
}, 5000);

console.log("End");

let startDate = new Date().getTime();
let endDate = startDate;

while (endDate < startDate + 10000) {
  endDate = new Date().getTime();
}

console.log("While expires");
