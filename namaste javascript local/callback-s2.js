const cart = ["shoes", "pants", "kurta"];

// callback hell
// when we have so many callbacks dependend on other functions
// This structure is called as pyramid of doom

// Asyncronouse programming is exist in js because of callback is exist

// now the responsibility to complete the cart db transaction and  call proceedToPayment funtion back
api.createOrder(cart, function () {
  api.proceedToPayments(function () {
    api.showOrderSummary(function () {
      api.updateWallet();
    });
  });
});

// inversion of control
// when we pass a callback function in another function we are giving the control of our function
// to another function
