
const scanner = require("prompt-sync")();

const year = scanner("Enter year: ");

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log("True")
} 
else {
    console.log("False")
}
