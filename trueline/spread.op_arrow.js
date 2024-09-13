let hello = (name) => `${name}`;
const a = hello("ayush");
console.log(a);
function sum(x, y, z) {
  return x + y - z;
}
const numbers = [1, 2, 6];
console.log(sum(...numbers));