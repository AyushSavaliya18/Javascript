
const units = parseFloat(prompt("Enter the electricity unit charge: "));


let totalBill = 0;


if (units <= 50) {
  totalBill = units * 0.50;
} else {
  totalBill = 50 * 0.50;
  let runits = units - 50;


  if (runits <= 100) {
    totalBill += runits * 0.75;
  } else {
    totalBill += 100 * 0.75;
    runits -= 100;


    if (runits <= 100) {
      totalBill += runits * 1.20;
    } else {
      totalBill += 100 * 1.20;
      runits -= 100;


      totalBill += runits * 1.50;
    }
  }
}


totalBill *= 1.20;

alert(`The total electricity bill is Rs. ${totalBill.toFixed(2)}`);