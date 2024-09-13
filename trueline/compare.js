let num1 = 10;
let num2 = 20;
let num3 = 30;
let num4 = 40;
let num5 = 50;

if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5) {
  console.log(` \n The First number ${num1} is the largest number`);
} else if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5) {
  console.log(`\nThe Second number ${num2} is the largest number`);
} else if (num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5) {
  console.log(`\nThe Third number ${num3} is the largest number`);
} else if (num4 > num1 && num4 > num3 && num4 > num2 && num4 > num5) {
  console.log(`\nThe Fourth number ${num4} is the largest number`);
} else if (num5 > num1 && num5 > num3 && num5 > num4 && num5 > num2) {
  console.log(`\nThe Fifth number ${num5} is the largest number`);
} else {
  console.log("All numbers are equal");
}
