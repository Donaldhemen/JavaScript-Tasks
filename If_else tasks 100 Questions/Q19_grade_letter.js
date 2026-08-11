const scanner = require("prompt-sync")();

const grade = String(scanner("Enter a grade(A-F): "));

switch(grade){
    case 'A':   case 'a':
    case 'B':   case 'b':  
    case 'C':   case 'c':
    case 'D':   case 'd':
        console.log("Pass");
        break;
    case 'F':   case 'f':
        console.log("Fail");
        break;
    default:
        console.log('Invalid');
        break;
}
