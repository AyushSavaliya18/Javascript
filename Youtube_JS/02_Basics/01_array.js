let arr = [1, 2, 3, 4, 5];
// console.log(arr);
let marvel = ["One Above All", "Living Tribunal", "Beyonder"];
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

console.log("A ", arr);
const arrs = arr.slice(1, 3); //slice methd can olny give sliced array it cannot change the main array
console.log(arrs);

console.log("B", arr);

const arrs2 = arr.splice(1, 3); //splice method can change an array and removes splice content from array
console.log(arrs2);
console.log("c", arr);
console.log("");