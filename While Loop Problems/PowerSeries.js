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
    let i = 0;
    while (i < number)
    {
        if (value > 256)
        {
            console.log("Power reaches maximum")
            break;
        }
        console.log("2^" + i + " = " + value);
        value = value*2;
        i++;
    }
    rl.close();
});