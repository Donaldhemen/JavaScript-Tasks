//var;
//let;
//const;

const scanner = require("prompt-sync")();

const age = scanner("Enter your age: ");

if (age > 18){
    console.log("Celebrate");
}
else if(age <= 0){
    console.log("No try am again. Oga, type a positive number")
}
else {
   console.log("Nothing for you"); 
}
