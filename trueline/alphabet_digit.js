var char = "4";

if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
  console.log("The character is an alphabet");
} else if (char >= "0" && char <= "9") {
  console.log("The character is a digit");
} else {
  console.log("The character is a special character");
}
