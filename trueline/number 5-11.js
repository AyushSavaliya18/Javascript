let number = 110;
if (number % 5 == 0 && number % 11 == 0) {
  console.log(`${number} is divisible by both 5 and 11`);
} else if (number % 5 == 0) {
  console.log(`${number} is divisible by only 5 `);
} else if (number % 11 == 0) {
  console.log(`${number} is divisible by only 11 `);
} else {
  console.log(`${number} is not divisible by 5 and 11`);
}
