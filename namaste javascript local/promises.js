// const cart = ["shoes", "pants", "kurta"];

// // create order and proceed to payment using only callback
// createOrder(cart, function () {
//   proceedToPayment(orderID);
// });

// // using promises

// const promises = createOrder(cart);

// promises.then(function () {
//   proceedToPayment(orderID);
// });

// Before executing it just assigned value undefined tn the promise as used for fetch function
// When we got data from api then it will fullfilled the data in object
// Each promis have three things
// prototype
// promiseState - there can be only three state in a promies - pending, rejected, fullfillled/resolved
// promiseValue

// Immutable data of promises, no one can mutate the data of promises
const GITHUB_API = "https://api.github.com/users/wnuser";

const user = fetch(GITHUB_API);

console.log(user);

user.then(function (data) {
  console.log(data);
});

// Interview
// promise is a container for the future value
// Promise - promise is an object represending the eventual completition of an async operation

// prmise chain example in the replacement of callback hell
// need to remember to add return keyword when using promise chain

createOrder(cart)
  .then(function (orderID) {
    return proceedToPayment(orderID);
  })
  .then(function (paymentInfo) {
    return showOrderSummary(paymentInfo);
  })
  .then(function (paymentInfo) {
    return updateWallet(paymentInfo);
  });
