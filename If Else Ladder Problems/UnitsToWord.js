let number;
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Enter a unit : \n", function(userInput)
{
    number = userInput;
    if (number == 1) console.log("Unit");
    else if (number == 10) console.log("Ten");
    else if (number == 100) console.log("Hundred");
    else if (number == 1000) console.log("Thousand");
    else if (number == 10000) console.log("Ten Thousand");
    else if (number == 100000) console.log("Lakh");
    else console.log("Invalid Number");
    rl.close();
});