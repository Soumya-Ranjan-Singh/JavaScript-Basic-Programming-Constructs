let year;
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Enter a year : \n", function(userInput){
    year = userInput;
    if (year % 400 == 0 || year % 100 != 0 && year % 4 == 0)
    {
        console.log("It is leap year");
    }
    else
    {
        console.log("It is not leap year");
    }
    rl.close();
});
