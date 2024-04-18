"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
const Shape_1 = require("./Shape");
let myShape = new Shape_1.Shape(15, 20);
// console.log(myShape.getInfo());
let myCircle = new Circle_1.Circle(5, 10, 15);
// console.log(myCircle.getInfo());
let myRectangle = new Rectangle_1.Rectangle(10, 20, 30, 40);
// console.log(myRectangle.getInfo());
let theShapes = [];
theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRectangle);
// theShapes.push(4) // Type mismatch.
for (let tempShape of theShapes) {
    console.log(tempShape.getInfo());
}
