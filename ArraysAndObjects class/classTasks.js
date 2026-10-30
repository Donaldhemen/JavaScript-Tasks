// const scores1 = [70, 85, 92];

// console.log(scores1[0]);
// console.log(scores1[2]);
// console.log(scores1.length);
// console.log(scores1[3]);

// const queue = ["Ada", "Tunde"];
// queue[queue.length] = "Zainab";
// console.log(queue);
// // console.log

// const q = ["Ada", "Tunde"];
// q.push("Zainab");
// console.log(q.shift());
// q.unshift("Ife");
// console.log(q.pop());
// console.log(q);

// const names = ["Ada", "Tunde", "Zainab"];
// console.log(names.includes("Tunde"));
// console.log(names.indexOf("Zainab"));
// console.log(names.indexOf("Elder"));
// console.log(names.slice(1,3));
// console.log(names.concat(["Ife", "Elder"]));

// const scores = [70, 85, 92];
// for (let i = 0; i < scores.length; i++) {
//     console.log(scores[i] + 1);
// }
// for (const score of scores) {
//     console.log(score * 2);
// }

// const a = ["Ada", "Tunde"];
// const b = a;
// b.push("Zainab");
// console.log(a);
// console.log(b);

// const a = ["Ada", "Tunde"];
// const copy = [...a];
// copy.push("Zainab");
// console.log(a);
// console.log(copy);
// const same = a;
// console.log(same === a, copy === a);

//Objects
// const student = {
//     name: "Ada",
//     age: 19,
//     course: "Javascript"
// };

// console.log(student.name);
// console.log(student.age);
// console.log(student.grade);

//Dot vs bracket, add property, delete property.
// const student = {name: "Ada", age: 19};
// const field = "age";
// console.log(student.field,student[field]);
// student.grade = "A";
// delete student.age;
// console.log("age" in student, "grade" in student);
// console.log(student);

//Methods: Functions in objects
// const student = {
//     name: "Ada",
//     greet() {
//         console.log("Hi, I am " + this.name);
//     }
// };

// student.greet();
// console.log(typeof student.greet);

//Problem: Many students, many details. Solution: Array of objects
// const students = [
//     {name: "Ada", score: 19},
//     {name: "Tunde", score: 20}
// ];
// console.log(students[1].name);
// for (const student of students) {
//     console.log(student.name + ": " + student.score);
// }

//Object methods: Object.keys, Object.values, Object.entries
// const marks = {math: 80, english: 65};
// console.log(Object.keys(marks));
// console.log(Object.values(marks));
// for (const [subject, mark] of Object.entries(marks)) {
//     console.log(subject + ": " + mark);
// }  

// Problem: equal objects are not equal. Solution: JSON.stringify
const a = {x: 1};
const b = {x: 1};
const c = a;
console.log(a === b);
console.log(a === c);
console.log(JSON.stringify(a) === JSON.stringify(b));
