let number;
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Enter the number between 1 to 100 : \n", function(userInput)
{
    number = userInput;
    if (number > 1 && number < 100)
    {
        max = 100;
        min = 1;
        console.log("Given number: "+number);
        let mid=50;
        do{
            mid=Math.floor(((min+max)/2));
            if(number<mid)
            {
                max=mid;
                console.log(number+" is less than "+mid);
            }
            else if(number>mid)
            {
                min=mid;
                console.log(number+" is more than "+mid);
            }
        }
        while(number != mid);
        console.log("Found "+mid);
    }
    else
    {
        console.log("Provide a valid number");
    }
    rl.close();
});