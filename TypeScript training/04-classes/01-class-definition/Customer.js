var Customer = /** @class */ (function () {
    function Customer(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Customer;
}());
var myCustomer = new Customer("sia", "Raichik");
myCustomer.firstName = "Ram";
myCustomer.lastName = "Rathod";
console.log(myCustomer.firstName, myCustomer.lastName);
