let myAnswer;

switch (true) {
  case 10 < 20:
    myAnswer = "red color";
    break;

  case 20 > 30:
    myAnswer = "green color";
    break;

  case 50 < 20:
    myAnswer = "orange color";
    break;

  case 100 == 200:
    myAnswer = "black color";
    break;

  default:
    myAnswer = "None of the above";
}

console.log(myAnswer);
