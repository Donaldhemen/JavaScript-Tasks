
const scanner = require("prompt-sync")();

const number = Number(scanner("Enter a number: "));

if(number > 0 && number % 2 === 0){
    console.log("Positive Even");
}
else if(number > 0 && number % 2 !== 0){
    console.log("Positive Odd");
}
else if(number < 0 && number % 2 === 0){
    console.log("Negative Even");
}
else if(number < 0 && number % 2 !== 0){
    console.log("Negative Odd");
}
else {
    console.log("Zero");
}
