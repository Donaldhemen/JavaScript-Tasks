
function mergeArray(firstNumbers, secondNumbers) {
    const result= [];
    result.length = firstNumbers.length + secondNumbers.length;

    for(let index = 0; index < result.length; index++){
        if(index < firstNumbers.length){
            result[index] = firstNumbers[index];
        } 
        else {
            result[index] = secondNumbers[index - firstNumbers.length];
        }
    }
    return result;
}
function sortMergedArray(firstArray, secondArray) {
    const array = mergeArray(firstArray, secondArray);
    for (let index = 0; index < array.length; index++) {
        for (let count = 0; count < array.length; count++) {
            if (array[index] < array[count]) {
                const temp = array[index];
                array[index] = array[count];
                array[count] = temp;
            }
        }
    }
    return array;
}
module.exports = {
    mergeArray,
    sortMergedArray
};

// const firstArray = [2, 4, 1];
// const secondArray = [3, 2, 6];
// console.log(sortArray(firstArray, secondArray));