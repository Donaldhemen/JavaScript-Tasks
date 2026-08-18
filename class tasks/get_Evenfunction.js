const numbers = [1,2,3,4,5,6];

const getEvenNumber = (array)=> {
    let newArray = [];
    for(let number of numbers){
        if(number % 2 == 0){
          newArray.push(number);
        }
    }
    return newArray;
}

console.log(getEvenNumber(numbers));
