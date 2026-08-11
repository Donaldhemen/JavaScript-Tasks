const scanner = require("prompt-sync")();

const age = scanner("Enter your age: ");

if (age <= 12){
    console.log("Child");
}
else if (age <= 19){
    console.log("Teen");
}
else if (age <= 59){
    console.log("Adult");
}
else {
    console.log("Senior");
}
