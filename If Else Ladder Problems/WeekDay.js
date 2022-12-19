let day;
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Enter a Week Day No : \n", function(userInput)
{
    day = userInput;
    if (day == 1) console.log("Sunday");
    else if (day == 2) console.log("Monday");
    else if (day == 3) console.log("Tuesday");
    else if (day == 4) console.log("Wednesday");
    else if (day == 5) console.log("Thursday");
    else if (day == 6) console.log("Friday");
    else if (day == 7) console.log("Saturday");
    else console.log("Invalid Number");
    rl.close();
});