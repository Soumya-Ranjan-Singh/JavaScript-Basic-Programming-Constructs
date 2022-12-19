let number;
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Enter the number : \n", function(userInput)
{
    number = userInput;
    let isPrime = true;
    if (number == 1 || number == 0)
    {
        console.log("Given number : "+number+" is neither prime nor composite number.")
    }
    else if (number > 1) 
    {
        for (let i = 2; i < number; i++) 
        {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) 
        {
            console.log(`${number} is a prime number`);
        } 
        else 
        {
            console.log(`${number} is a not prime number`);
        }
    }
    rl.close();
});