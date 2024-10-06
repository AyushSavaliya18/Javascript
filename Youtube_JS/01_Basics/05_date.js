let date = new Date();
console.log(typeof date);
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toLocaleString());
console.log(date.toLocaleDateString());
console.log("\n");
// let newdate = new Date(2023, 0, 23);
// console.log(newdate.toDateString());
// let newdate = new Date(2023, 0, 23, 5, 4, 34);
// let newdate = new Date("2023-01-23");
let newdate = new Date("1-19-24");
// console.log(newdate.toLocaleString());

var ts = Date.now();
// console.log(ts);
// console.log(newdate.getTime());
// console.log(Date.now());
// console.log(Math.floor(Date.now() / 1000));

newdate.toLocaleString("defult", {});
