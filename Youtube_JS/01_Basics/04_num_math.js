const score = 400;
// console.log(score);

const balance = new Number(400);
// console.log(typeof balance);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const othernumber = 23.845563;
// console.log(othernumber.toPrecision(3));
let num = 1000000;
// console.log(num.toLocaleString("en-IN")); //to print number in indian format

// console.log(Math);
// console.log(Math.abs(-6));
// console.log(Math.round(8.7));
// console.log(Math.ceil(6.7));
// console.log(Math.floor(8.7));
// console.log(Math.max(1, 2, 3, 4, 5));
// console.log(Math.min(1, 2, 3, 4, 5));

console.log(Math.random());
console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 100) + 1); //print random number between "0 to 100"

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);