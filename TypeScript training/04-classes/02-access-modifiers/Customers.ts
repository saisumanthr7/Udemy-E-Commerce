class Customers {


   private _firstName: string;
   private _lastName: string;

       constructor(firstName: string, lastName: string){
        this._firstName = firstName;
        this._lastName = lastName;
    }

    public get getFirstName(): string {
        return this._firstName;
    }

    public set setFirstName(value: string) {
        this._firstName = value;
    }

    public get getLastName(): string {
        return this._lastName;
    }
    public set setLastName(value: string) {
        this._lastName = value;
    }
}

let myCustomers = new Customers("sia", "Raichik");

// myCustomer.firstName = "Ram";
// myCustomer.lastName = "Rathod";

console.log(myCustomers.getFirstName, myCustomers.getLastName);