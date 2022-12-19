const userInput = process.argv;
const argv = userInput.slice(2);

let temp = argv[0];
let choice = argv[1];

getTemp(choice,temp);

function getTemp(choice,temp)
{
    let convertedTemp=0;
    switch(choice)
    {
        case '1' :
            console.log("Converting to Fahrenheit");
            convertedTemp=(temp*(9/5)) +32;
            console.log(temp+" deg C = "+convertedTemp+" deg F");
            break;
        case '2' :
            console.log("Converting to Celcius");
            convertedTemp=((temp-32)*(5/9));
            console.log(temp+" deg F = "+convertedTemp+" deg C");
            break;
    }
}