"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
class Shape {
    // private _x: number;
    // private _y: number;
    constructor(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }
    set x(value) {
        this._x = value;
    }
    set y(value) {
        this._y = value;
    }
    getInfo() {
        return `x=${this._x}, y=${this._y}`;
    }
}
exports.Shape = Shape;
