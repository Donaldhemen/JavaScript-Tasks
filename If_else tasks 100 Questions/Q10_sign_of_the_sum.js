const scanner = require("prompt-sync")();

const numberOne = Number(scanner("Enter first integer: "));

const numberTwo = Number(scanner("Enter second integer: "));

const sum = numberOne + numberTwo;

if(sum > 0){
    console.log('positive');
}
else if(sum < 0){
    console.log('negative');
}
else {
    console.log('zero');
}
