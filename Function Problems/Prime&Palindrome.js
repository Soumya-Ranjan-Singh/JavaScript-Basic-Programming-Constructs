let number;
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Enter the number between 1 to 100 : \n", function(userInput)
{
    number = userInput;

    if (checkPrime(number))
        console.log("Number is prime");
    else
        console.log("Number is not prime");

    if (checkPalindrome(number))
        console.log("Number is palindrome");
    else
        console.log("Number is not palindrome");

        function checkPalindrome(number) 
        {
            const reverseNumber = parseFloat(number.toString().split('').reverse().join(''));
            console.log("Palindrome of the number = " +reverseNumber);
            if (number == reverseNumber)
                return true;
            else
                return false;
        }
        
        function checkPrime(number) 
        {
            let flag = 0;
            for (let index = 2; index < number; index++) 
            {
                if (number % index == 0) 
                {
                    flag = 1;
                    break;
                }
            }
            if (flag == 1)
                return false;
            else
                return true;
        }
        
    rl.close();
});