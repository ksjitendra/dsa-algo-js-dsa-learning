const cart = ["shoes", "pants", "kurta"];

/**
 * Home work
 * createOrder
 * proceedToPayment
 * showOrderSummary
 * updateWallet
 */

// consumer part
const promise = createOrder(cart);
console.log(promise);
var test = false;
promise
  .then(function (orderID) {
    test = "Test Var";

    console.log(test, "testtest");

    return orderID;
  })
  // we are attaching the callback function to these block not passing
  .then(function (orderID) {
    return proceedToPayment(orderID);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo, "paymentInfo");
  })
  .catch(function (err) {
    console.log(err.message); // This catch will handle any error which will come in the chain
  })
  .then(function () {
    console.log("No matter what happens, I will be definetly called ");
  });
// we can put this catch in the middle of the chain as well, then it will be responsible only for the upper block of errors

function proceedToPayment(orderID) {
  return new Promise(function (resolve, reject) {
    const err = new Error("Payment issue");
    reject(err);
    // reject("Payment successfull");
  });
}

// production part
function createOrder(cart) {
  // resolve and reject functions are given by js with new promise constructor
  const pr = new Promise(function (resolve, reject) {
    // create order
    // validate cart
    // orderID

    // rejecting
    if (!validateCart()) {
      const err = new Error("Cart is not valid");
      reject(err);
    }

    // logic of success
    const orderID = "121211";
    if (orderID) {
      setTimeout(() => {
        resolve(orderID);
      }, 2000);
    }
  });

  return pr;
}

function validateCart() {
  return true;
}
