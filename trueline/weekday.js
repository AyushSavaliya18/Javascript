var weekNumber = 2;

if (weekNumber >= 1 && weekNumber <= 7) {
  var day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",  
  ];
  console.log(`The day of the week is ${day[weekNumber - 1]}`);
} else {
  console.log("Invalid week number. Please enter a number between 1 and 7.");
}
