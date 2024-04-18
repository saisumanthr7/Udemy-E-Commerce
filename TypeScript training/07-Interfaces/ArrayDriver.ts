import { Coach } from "./Coach";
import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";

// let myShape = new Shape(15, 20);
// console.log(myShape.getInfo());

let myCricketCoah = new CricketCoach();
// console.log(myCircle.getInfo());

let myGolfCoach = new GolfCoach();
// console.log(myRectangle.getInfo());

let theShapes: Coach[] = [];

// theShapes.push(myShape);
theShapes.push(myCricketCoah);
theShapes.push(myGolfCoach);

// theShapes.push(4) // Type mismatch.

for(let tempShape of theShapes){
    console.log(tempShape.getDailyWorkout());
}