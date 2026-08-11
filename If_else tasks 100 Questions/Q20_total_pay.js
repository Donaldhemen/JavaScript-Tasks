const scanner = require("prompt-sync")();

const hoursWorked = Number(scanner("Enter hours worked: "));

const hourlyRate = Number(scanner("Enter hourly rate: "));

if(hoursWorked <= 40){
    const totalPay = hoursWorked * hourlyRate;
    console.log('Total pay is ', totalPay);
}
else {
    const totalPay = hoursWorked * hourlyRate * 1.5;
    console.log('Total pay is ', totalPay);
}
