import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Shape } from "./Shape";

let myShape = new Shape(15, 20);
// console.log(myShape.getInfo());

let myCircle = new Circle(5,10,15);
// console.log(myCircle.getInfo());

let myRectangle = new Rectangle(10,20,30,40);
// console.log(myRectangle.getInfo());

let theShapes: Shape[] = [];

theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRectangle);

// theShapes.push(4) // Type mismatch.

for(let tempShape of theShapes){
    console.log(tempShape.getInfo());
}