let number;
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Enter the power of 2 : \n", function(userInput)
{
    number = userInput;
    let value=1;
    for (var i = 0; i <= number; i++) 
    {
        console.log("2^" + i + " = " + value);
        value = value*2;
    }    
    rl.close();
});