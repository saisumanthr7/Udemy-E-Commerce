"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CricketCoach_1 = require("./CricketCoach");
const GolfCoach_1 = require("./GolfCoach");
// let myShape = new Shape(15, 20);
// console.log(myShape.getInfo());
let myCricketCoah = new CricketCoach_1.CricketCoach();
// console.log(myCircle.getInfo());
let myGolfCoach = new GolfCoach_1.GolfCoach();
// console.log(myRectangle.getInfo());
let theShapes = [];
// theShapes.push(myShape);
theShapes.push(myCricketCoah);
theShapes.push(myGolfCoach);
// theShapes.push(4) // Type mismatch.
for (let tempShape of theShapes) {
    console.log(tempShape.getDailyWorkout());
}
