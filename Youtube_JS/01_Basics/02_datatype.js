// let score = null;
// console.log(typeof score);
// console.log(typeof score);

// let value = Number(score);
// console.log(typeof value);
// console.log(value);

// let log = 1;
// console.log(typeof log);
// let log1 = Boolean(log);
// console.log(typeof log1);
// console.log(log1);

let s1 = "hello";
let s2 = "world";
let s3 = s1 + " " + s2;
// console.log(s3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + (2 + 2));

//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n

// Reference (Non primitive)

// Array, Objects, Functions

// const heros = ["shaktiman", "naagraj", "doga"];
// let myObj = {
//   name: "hitesh",
//   age: 22,
// };

// const myFunction = function () {
//   console.log("Hello world");
// };

// console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// stack
let name = "ayush";
let name1 = name;
name1 = "ayushdvjhvbh";
// console.log(name);
// console.log(name1);

let user1 = {
  email: "user.@google.com ",
  name: "ayush",
  age: 22,
};
let user2 = user1;
user2.email = "ayush18@gmail.com";
console.log(user1.email);
console.log(user2.email);
 // console.log(user1 === user2);