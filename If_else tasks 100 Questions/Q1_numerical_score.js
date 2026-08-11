
const scanner = require("prompt-sync")();

const numerical_score = scanner("Enter score: ");

if(numerical_score >= 90){
    console.log('A')
}
else if(numerical_score >= 80){
    console.log('B')
}
else if(numerical_score >=70){
    console.log('C')
}
else if(numerical_score >=60){
    console.log('D')
}
else {
    console.log('F')
}
