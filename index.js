// Write your solution in this 
var customerName = "bob";
var bestCustomer;

function upperCaseCustomerName () {
    customerName = customerName.toUpperCase();
}

function setBestCustomer () {
  bestCustomer = "not bob"
}

function overwriteBestCustomer () {
    bestCustomer = "maybe bob";
}

function changeLeastFavoriteCustomer () {
    const leastFavoriteCustomer = "ben";
    leastFavoriteCustomer = "Ben"
}