var Customers = /** @class */ (function () {
    function Customers(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }
    Object.defineProperty(Customers.prototype, "getFirstName", {
        get: function () {
            return this._firstName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customers.prototype, "setFirstName", {
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customers.prototype, "getLastName", {
        get: function () {
            return this._lastName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customers.prototype, "setLastName", {
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customers;
}());
var myCustomers = new Customers("sia", "Raichik");
// myCustomer.firstName = "Ram";
// myCustomer.lastName = "Rathod";
console.log(myCustomers.getFirstName, myCustomers.getLastName);
