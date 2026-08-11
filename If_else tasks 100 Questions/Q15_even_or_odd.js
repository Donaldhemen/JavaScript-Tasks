const scanner = require("prompt-sync")();

const number = Number(scanner("Enter a number: "));

if(number % 1 !== 0){
    console.log('Invalid');
}
else if(number % 2 == 0){
    console.log('Even');
}
else {
    console.log('Odd');
}
