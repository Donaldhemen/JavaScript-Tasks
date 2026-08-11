// Pythagoras Theorem c = math.sqrt(a*a + b*b)

const scanner = require("prompt-sync")();

const sideOne = Number(scanner("Enter first side: "));

const sideTwo = Number(scanner("Enter second side: "));

const sideThree = Number(scanner("Enter third side: "));

if((sideOne === Math.sqrt(sideTwo*sideTwo + sideThree*sideThree)) || (sideTwo === Math.sqrt(sideOne*sideOne + sideThree*sideThree)) || (sideThree === Math.sqrt(sideOne*sideOne + sideTwo*sideTwo))){
    console.log("Right Triangle");
}
else {
    console.log("Not Right");
}
