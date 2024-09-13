const arr = [1, 3, 0, 4, 5, 6, 7];
// console.log(arr);

// arr.sort();
// console.log(arr.sort());

// arr.reverse()
// console.log(arr);

// arr.pop(); //last delete
// console.log(arr.pop());
// console.log(arr);

// console.log(arr.push(10));
// console.log(arr);

// console.log(arr.shift());
// console.log(arr);

// console.log(arr.unshift(13));
// console.log(arr);

// console.log(arr.concat(3));
// console.log(arr);
// arr.join()
// console.log(arr.join(" fuck you \n"))

// arr.slice()
// console.log(arr.slice(0,6));

// arr.splice()
// console.log(arr.splice(0, 4));

// let a = 321;
// console.log(Array.isArray(arr));
// console.log(Array.isArray(a));

// indexof ()
const arr1 = [" surat", "ayush", "savaliya"];
// console.log(arr1.indexOf("patel", 1));

// arr1.lastIndexOf();
// console.log(arr1.lastIndexOf("ayush", 1));

// console.log(arr1.includes("ayush"));

// function check(age) {
//     return age >= 18;
// }
// console.log(arr.some(check));
// console.log("arr.every(check)", arr.every(check));

// console.log(arr.find(check));
// console.log(arr.filter(check));
arr.forEach((element) => {
  return element >= 18;
});

arr.toString();
arr.fill("0");
console.log(arr.fill(0));
// console.log(arr.fill("0", 2));
// console.log(arr.fill("0", 2, 4));
