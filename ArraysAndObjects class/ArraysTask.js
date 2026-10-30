function range(first, last) {
    let result = [];
    for (let index = first; index <= last; index++) {
        result.push(index);
    }
    return result;
}

function sum(callback) {
    const numbers = callback;
    let total = 0;
    for (let index = 0; index < numbers.length; index++) {
        total += numbers[index];
    }
    return total;
}

function reverseArray(array) {
    let reversed = [];
    for (let index = array.length - 1; index >= 0; index--) {
        reversed.push(array[index]);
    }
    return reversed;
}

function reverseArrayInPlace(array) {
    let leftIndex = 0;
    let rightIndex = array.length - 1;

    while (leftIndex < rightIndex) {
        let temp = array[leftIndex];
        array[leftIndex] = array[rightIndex];
        array[rightIndex] = temp;

        leftIndex++;
        rightIndex--;
    }
    return array;
}

console.log(range(1, 5)); 
console.log(sum(range(1, 10))); 

console.log(reverseArray([1, 2, 3, 4, 5])); 

let array = [1, 2, 3, 4, 5];
console.log(reverseArrayInPlace(array)); 

