//Underweight: Below 18.5Healthy Weight: 18.5 to 24.9Overweight: 25.0 to 29.9Obesity (Class 1): 30.0 to 34.9

const scanner = require("prompt-sync")();

const height = Number(scanner("Enter height(cm): "));

const weight = Number(scanner("Enter weight(kg): "));

const bmi_index = weight / (height * height);

if(bmi_index < 18.5){
    console.log("Underweight");
}
else if(bmi_index <= 24.9){
    console.log("Healthy Weight");
}
else if(bmi_index <= 29.9){
    console.log("Overweight");
}
else {
    console.log("Obesity");
}
