const scanner = require("prompt-sync")();

const attendance_percentage = Number(scanner("Enter student's attendance percentage': "));

const average_score = Number(scanner("Enter average score: "));

if(attendance_percentage >= 75 && average_score >= 75){
    console.log('Eligible');
}
else {
    console.log('Not Eligible');
}
