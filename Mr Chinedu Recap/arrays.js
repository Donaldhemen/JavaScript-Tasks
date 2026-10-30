// let items = [1,3,4,5,6,7];

// console.log(items.push(8));
// console.log(items.shift());
//console.log(items.pop());
// console.log(items.unshift(5));

//Objects are a collection of properties, where each property is defined as a key-value pair. The key is a string (or symbol) that serves as the identifier for the property, and the value can be any data type, including other objects or functions. Objects are used to represent real-world entities and their attributes, making them a fundamental part of JavaScript programming.
// const student = {
//     name: "Donald",
//     age: 40,
//     gender: "male",
//     hobbies: ["reading", "swimming", "coding", "traveling"],
//     isMarried: false
// }

// student.name = "Trump";

// console.log(student);

// console.log(student.hobbies[3]);

//ForEach, Map, Filter, Reduce are array methods that allow you to perform operations on arrays in a more functional programming style. They provide a way to iterate over elements, transform data, filter elements based on conditions, and accumulate values. These methods are commonly used in JavaScript for working with arrays and can lead to cleaner and more expressive code.
// let array = [1, 2, 3, 4, 5, 6];
// let newArray = [];

// array.forEach((number) => {
//     newArray.push(number * 2);
// });

// console.log(newArray);

let array = [1, 2, 3, 4, 5, 6];

// let result = array.map(number => number * number);
let result = array.filter(number => number % 2 === 0);

console.log(result);