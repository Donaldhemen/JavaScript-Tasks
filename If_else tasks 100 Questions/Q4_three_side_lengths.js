 
const scanner = require("prompt-sync")();

const sideOne = scanner("Enter length of first side: ");

const sideTwo = scanner("Enter length of second side: ");

const sideThree = scanner("Enter length of third side: ");

if(sideOne === sideTwo && sideOne === sideThree && sideTwo === sideThree){
    console.log("Equilateral")
}
else if(sideOne !== sideTwo && sideOne !== sideThree && sideTwo !== sideThree){
    console.log("Scalene")
}
else {
    console.log("Isosceles")
}
