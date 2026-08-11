const scanner = require("prompt-sync")();

const number = Number(scanner("Enter a number: "));

const len = String(Math.abs(number)).length;

if(len === 1){
    console.log('single-digit');
}
else if(len === 2){
    console.log('double-digit');
}
else if(len === 3){
    console.log('triple-digit');
}
else {
    console.log('larger');
}
