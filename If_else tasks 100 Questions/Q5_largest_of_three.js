const scanner = require("prompt-sync")();

const numberOne = scanner("Enter first integer: ");

const numberTwo = scanner("Enter second integer: ");

const numberThree = scanner("Enter third integer: ");

if(numberOne > numberTwo && numberOne > numberThree){
    console.log("Largest number is ", numberOne)
}
else if(numberTwo > numberOne && numberTwo > numberThree){
    console.log("Largest number is ", numberTwo)
}
else {
    console.log("Largest number is ", numberThree)
}
