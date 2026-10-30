function repeatAction(times, callback) {
    for (let count = 1; count <= times; count++) {
        callback(count);
    }
}
function repeat(count) {
    console.log(`This is repetition number ${count}`);
}
repeatAction(5, repeat);


function multiply(number){
    return function add(digit){
        return number * digit;
    }
}

let question = multiply(3)(4);
let question2 = multiply(5)(5);

// console.log(question(4)); // Output: 12
// console.log(question2(5)); // Output: 25

