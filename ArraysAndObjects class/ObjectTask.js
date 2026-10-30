

function deepEqual(a, b) {
    return JSON.stringify(a) === JSON.stringify(b);
}

const obj1 = {a: 1, b: {c: 2}};
const obj2 = {a: 1, b: {c: 2}};
const obj3 = {a: 1, b: {c: 3}};

console.log(deepEqual(obj1, obj2)); // true
console.log(deepEqual(obj1, obj3)); // false    

function highScorers(students) {
    const highScorersArray = [];
    for (const student of students) {
        if (student.score > 80) {
            highScorersArray.push(student.name);
        }
    }
    return highScorersArray;
}

const students = [
    {name: "Ada", score: 90},
    {name: "Tunde", score: 75},
    {name: "Zainab", score: 85}
];

console.log(highScorers(students)); 

function countWords(words) {
    const wordCount = {};
    for (const word of words) {
        if (wordCount[word]) {
            wordCount[word]++;
        } else {
            wordCount[word] = 1;
        }
    }
    return wordCount;
}

const wordsArray = ["a", "b", "a"];
console.log(countWords(wordsArray)); 
