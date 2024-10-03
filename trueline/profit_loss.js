let cost = 100;
let sell = 120;
let profit;

console.log(`The cost price is: ${cost} and \n The selling price is: ${sell}`);

if (sell > cost) {
  profit = sell - cost;
  console.log(`\n The profit is: ${profit}\n`);
} else if (cost > sell) {
  let loss = cost - sell;
  console.log(`\n The loss is:${loss}\n`);
  profit = -loss;
}

if (profit > 0) {
  console.log(`You have made a profit of rupees ${profit}\n`);
} else if (profit < 0) {
  console.log(`You have made a loss of rupees ${Math.abs(profit)}\n`);
} else {
  console.log(`You have not made any profit or loss`);
}
