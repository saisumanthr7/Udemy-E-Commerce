"use strict";
class Customers {
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }
    get getFirstName() {
        return this._firstName;
    }
    set setFirstName(value) {
        this._firstName = value;
    }
    get getLastName() {
        return this._lastName;
    }
    set setLastName(value) {
        this._lastName = value;
    }
}
let myCustomers = new Customers("sia", "Raichik");
// myCustomer.firstName = "Ram";
// myCustomer.lastName = "Rathod";
console.log(myCustomers.getFirstName, myCustomers.getLastName);
