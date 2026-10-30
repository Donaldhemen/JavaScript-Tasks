function createValidator(minLength) {
    return function(value) {
        return value.length >= minLength;
    };
}
let minLengthValidator = createValidator(5);
console.log(minLengthValidator("Hello")); // true
console.log(minLengthValidator("Hi")); // false

const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;

const celsiusToFahrenheit = (celsius) => (celsius * 9/5) + 32;

function convertTemperature(value, unit, conversionFunction) {
    let result = conversionFunction(value);
    console.log(`${value} ${unit} is equal to ${result}`);
}

convertTemperature(32, 'Fahrenheit', fahrenheitToCelsius); 
convertTemperature(0, 'Celsius', celsiusToFahrenheit);     
