
const scanner = require("prompt-sync")();

const temperature = scanner("Enter temperature in celsius: ");

if(temperature < 0){
    console.log('Freezing');
}
else if(temperature <= 15){
    console.log('Cold');
}
else if(temperature <= 25){
    console.log('Warm');
}
else {
    console.log('Hot');
}
