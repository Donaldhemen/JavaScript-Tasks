
const scanner = require("prompt-sync")();

const account_balance = Number(scanner("Enter a account balance: "));

if(account_balance < 100){
    console.log('Low');
}
else if(account_balance <= 1000){
    console.log('Medium');
}
else {
    console.log('High');
}
