const scanner = require("prompt-sync")();

const valueOne = Boolean(scanner("Enter true or false: "));

const valueTwo = Boolean(scanner("Enter true or false: "));

const valueThree = Boolean(scanner("Enter true or false: "));

if((valueOne && valueTwo && !valueThree) || (valueOne && !valueTwo && valueThree) || (!valueOne && valueTwo && valueThree)){
    console.log(true);
}
else {
    console.log(false);
}
