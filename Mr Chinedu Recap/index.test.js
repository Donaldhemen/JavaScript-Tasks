//Destructuring is a way of unpacking values from arrays or properties from objects into distinct variables. It allows for more concise and readable code when working with complex data structures.
const {add, subtract, getEven} = require('./index');
//const { add, subtract } = Calculate();

test('that I can add two numbers', () => {
    let numberOne = 2;
    let numberTwo = 7;
    let result = add(numberOne, numberTwo);
    expect(result).toBe(9);
});

test('that I can subtract two numbers', () => {
    let numberOne = 10;
    let numberTwo = 3;
    let result = subtract(numberOne, numberTwo);
    expect(result).toBe(7);
});

test("that getEven function retuns an array of even numbers", () => {
    let arrayOfNumbers = [1, 2, 3, 4, 5, 6];
    let expected = [2, 4, 6];
    let result = getEven(arrayOfNumbers);
    expect(result).toEqual(expected);
});

