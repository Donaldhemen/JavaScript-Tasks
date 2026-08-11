const scanner = require("prompt-sync")();

const age = scanner("Enter your age: ");

const voterID = scanner("Do you have a voterID?(yes/no): ");

const citizenship = scanner("Are you a citizen?(yes/no): ");

if (age > 18 && voterID === 'yes' && citizenship === 'yes'){
    console.log("true");
}
else {
   console.log("false"); 
}
