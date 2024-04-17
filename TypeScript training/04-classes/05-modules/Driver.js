"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Customers_1 = require("./Customers");
var myCustomers = new Customers_1.Customers("sia", "Raichik");
// myCustomer.firstName = "Ram";
// myCustomer.lastName = "Rathod";
console.log(myCustomers.getFirstName, myCustomers.getLastName);
