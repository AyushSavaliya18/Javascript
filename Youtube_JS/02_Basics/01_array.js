let arr = [1, 2, 3, 4, 5];
// console.log(arr);
let marvel_heros = ["One Above All", "Living Tribunal", "Beyonder"];
// console.log(marvel);
console.log("");
// console.log(marvel[1]);

// arr.push(6);
// arr.push(8);
// arr.pop();
// // arr.unshift(9);
// console.log(arr);
// console.log(arr.includes(5));
// console.log(arr.indexOf(3));

// const newarr = arr.join();
// console.log(newarr);
// const newarr2 = arr.join(" ");
// console.log(newarr2);

// console.log(newarr);

// console.log("A ", arr);
const arrs = arr.slice(1, 3); //slice methd can olny give sliced array it cannot change the main array
// console.log(arrs);

// console.log("B", arr);

const arrs2 = arr.splice(1, 3); //splice method can change an array and removes splice content from array
// console.log(arrs2);
// console.log("c", arr);
// console.log("");

/************************************** Array part :- 2 ************************************/

const marvel1 = ["One Above All", "Living Tribunal", "Beyonder"];
const marvel2 = ["Galactus", "Eternity", "The Fulcrum", "Celestials"];
// marvel1.push(marvel2);
// console.log(marvel1);

// const all = marvel1.concat(marvel2);
// console.log(all);

const all1 = [...marvel1, ...marvel2];
// console.log(all1);

const another_arr = [1, 2, 3, [1, 2, 3, 4, 5, [6, 7, 8, 9]]];
// console.log(another_arr);

const another_arr1 = another_arr.flat(Infinity);
console.log(another_arr1);

console.log(Array.isArray("Ayush"));
console.log(Array.from("Ayush"));
console.log(Array.from({name: "ayush"}));

let m1 = 100;
let m2 = 200;
let m3 = 300;
let m4 = 400;
let m5 = 500;

console.log(Array.of(m1, m2, m3, m4, m5));
