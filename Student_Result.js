// Student_Result

let name = prompt("Please enter your name");
let marks = Number(prompt("Enter your marks")); // convert to number
let result;

switch (true) {
  case marks > 90 && marks <= 100:
    result = "Great! You are the Topper 🎉";
    break;

  case marks > 65 && marks <= 90:
    result = "Congratulations! You got First Class";
    break;

  case marks > 40 && marks <= 65:
    result = "You got Second Class";
    break;

  case marks >= 30 && marks <= 40:
    result = "You got Third Class";
    break;

  case marks < 30:
    result = "Sorry, you are Failed. Better luck next time";
    break;

  default:
    result = "Please enter valid marks (0 - 100)";
}

console.log(name + " : " + result);
