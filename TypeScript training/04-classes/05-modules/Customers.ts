export class Customers {


    // private _firstName: string;
    // private _lastName: string;
 
    //     constructor(firstName: string, lastName: string){
    //      this._firstName = firstName;
    //      this._lastName = lastName;
    //  }

    constructor(private _firstName: string,
        private _lastName: string
    ){}
 
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
 