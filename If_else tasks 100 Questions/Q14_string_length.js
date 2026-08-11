
const scanner = require("prompt-sync")();

const word = String(scanner("Enter a word: "));

if(word.length < 5){
    console.log('short');
}
else if(word.length <= 10){
    console.log('medium');
}
else {
    console.log('long');
}
