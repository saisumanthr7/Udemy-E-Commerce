"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customers = void 0;
var Customers = /** @class */ (function () {
    // private _firstName: string;
    // private _lastName: string;
    //     constructor(firstName: string, lastName: string){
    //      this._firstName = firstName;
    //      this._lastName = lastName;
    //  }
    function Customers(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
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
exports.Customers = Customers;
