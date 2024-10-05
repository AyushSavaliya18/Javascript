// let sal = prompt("enter salary");
let sal = 12330;
console.log(`salary is :${sal}`);

if (sal <= 10000) {
  const hra = sal * 0.2;
  const da = sal * 0.8;
  console.log(`\nThe HRA:${hra} and the DA:${da}`);

  const gsal = sal + hra + da;
  console.log(`\nGross Salary is: ${gsal}`);
} else if (sal <= 20000) {
  const hra = sal * 0.25;
  const da = sal * 0.9;
  console.log(`\nThe HRA:${hra} and the DA:${da}`);

  const gsal = sal + hra + da;
  console.log(`\nGross Salary is: ${gsal}`);
} else {
  const hra = sal * 0.3;
  const da = sal * 0.95;
  console.log(`\nThe HRA:${hra} and the DA:${da}`);

  const gsal = sal + hra + da;
  console.log(`\nGross Salary is: ${gsal}`);
}
