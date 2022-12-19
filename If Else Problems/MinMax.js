const userInput = process.argv;
const argv = userInput.slice(2);
let max = 0;
let min = 0;
for (let i = 0; i < argv.length; i++)
{
    if (argv[i] > 99 && argv[i] < 1000)
    {
        if (i == 0)
        {
            max = argv[0];
            min = argv[0];
        }
        else if (argv[i] > max)
        {
            max = argv[i];
        }
        else if (argv[i] < min)
        {
            min = argv[i];
        }
    } 
}
console.log("Maximum Number = " + max);
console.log("Minimum Number = " + min);
 