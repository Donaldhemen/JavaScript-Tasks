
const scanner = require("prompt-sync")();

const numberOne = scanner("Enter first integer: ");

const numberTwo = scanner("Enter second integer: ");

const numberThree = scanner("Enter third integer: ");

if((numberOne < 0 && numberTwo < 0) || (numberOne < 0 && numberThree < 0) || (numberTwo < 0 && numberThree < 0) || (numberOne > 0 && numberTwo > 0 && numberThree > 0)){
    console.log('+')
}
else {
    console.log('-')
}
