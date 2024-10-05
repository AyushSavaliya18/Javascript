// let m1 = prompt("Enter the Marks of First Subject:");
// let m2 = prompt("Enter the Marks of Second Subject:");
// let m3 = prompt("Enter the Marks of Third Subject:");
// let m4 = prompt("Enter the Marks of Fourth Subject:");
// let m5 = prompt("Enter the Marks of Fifth Subject:");
let m1 = 90;
let m2 = 95;
let m3 = 99;
let m4 = 96;
let m5 = 95;

console.log(`The Marks of First subject is : ${m1}`);
console.log(`The Marks of Second subject is : ${m2}`);
console.log(`The Marks of Third subject is : ${m3}`);
console.log(`The Marks of Fourth subject is : ${m4}`);
console.log(`The Marks of Fifth subject is : ${m5}`);

let total = m1 + m2 + m3 + m4 + m5;
console.log(`\nThe total marks of The subjects is : ${total}`);

let per = total / 5;
console.log(`\nThe percentage of The subjects is : ${per}`);

if (per >= 90) {
  console.log("\nGrade A+");
} else if (per >= 80) {
  console.log("\nGrade A");
} else if (per >= 70) {
  console.log("\nGrade B");
} else if (per >= 60) {
  console.log("\nGrade C");
} else if (per >= 50) {
  console.log("\nGrade D");
} else {
  console.log("\nFail!!");
}