// function Calculate() {
// function add(firstNumber, secondNumber) {
//     return firstNumber + secondNumber;
// }

//     return {
//         add
//     };
// }
function Calculate() {
    function add(firstNumber, secondNumber) {
        return firstNumber + secondNumber;
    }

    function subtract(firstNumber, secondNumber) {
        return firstNumber - secondNumber;
    }

    function getEven(arr) {
        let newArray = [];
        for (const number of arr) {
            if (number % 2 === 0) {
                newArray.push(number);
            }
        }
        return newArray;
    }

    return {
        add,
        subtract,
        getEven
    };

}




module.exports = Calculate();