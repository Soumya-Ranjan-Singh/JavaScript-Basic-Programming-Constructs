const userInput = process.argv;
const argv = userInput.slice(2);

let no1 = argv[0];
let no2 = argv[1];

checkPalindrome(no1,no2);

function checkPalindrome(no1,no2) 
{
    var remainder, temp, reversedNumber = 0;

    var number = no1;
    while(number > 0)
    {
        remainder = number % 10;
        number = parseInt(number / 10);
        reversedNumber = reversedNumber * 10 + remainder;
    }
    if (reversedNumber == no2) 
    {
        console.log("Number is palindrome");
    } 
    else 
    {
        console.log("Number is not palindrome");
    }
}