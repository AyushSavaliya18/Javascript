let a = 10;
let b = 20;


  switch (true) {
    case a > b:
      console.log(`${a} is Grather than ${b}`);
      return a;
    case a < b:
      console.log(`${b} is Greater than ${a}`);
      return b;
    default:
      return "Both numbers are equal";
  }

