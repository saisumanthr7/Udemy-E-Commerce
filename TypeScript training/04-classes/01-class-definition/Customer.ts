class Customer {


    firstName: string;
    lastName: string;


    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let myCustomer = new Customer("sia", "Raichik");

// myCustomer.firstName = "Ram";
// myCustomer.lastName = "Rathod";

console.log(myCustomer.firstName, myCustomer.lastName);