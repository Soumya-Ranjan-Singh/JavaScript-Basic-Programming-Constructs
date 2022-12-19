let number;
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Enter the number : \n", function(userInput)
{
    number = userInput;
    let harmonic = 0
    for (let n = 1; n <= number ; n++) 
    {
        harmonic += 1/n
    }
    console.log("Required harmonic numbar is : "+harmonic);
    rl.close();
});