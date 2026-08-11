const scanner = require("prompt-sync")();

const numberOne = Number(scanner("Enter first number: "));

const numberTwo = Number(scanner("Enter second number: "));

if(numberOne < numberTwo){
    console.log('increasing');
}
else if(numberOne > numberTwo){
    console.log('decreasing');
}
else {
    console.log('equal');
}
