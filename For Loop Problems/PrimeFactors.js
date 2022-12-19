let number;
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Enter the number : \n", function(userInput)
{
    number = userInput;
    while (number % 2 == 0)
    {
        console.log(2 + " ");
        number = Math.floor(number / 2);
    }
    for(let i = 3; i <= Math.floor(Math.sqrt(number)); i = i + 2)
    {
        while (number % i == 0)
        {
            console.log(i + " ");
            number = Math.floor(number / i);
        }
    }
    if (number > 2)
        console.log(number + " ");
    rl.close();
});