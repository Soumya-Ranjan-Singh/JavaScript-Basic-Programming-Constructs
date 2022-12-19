const userInput = process.argv;
const argv = userInput.slice(2);

let value = argv[0];
let choice = argv[1];

switch (choice)
{
    case '1' : 
        console.log("Feet to Inch");
        let convert1 = value * 12;
        console.log(choice+" ft = "+convert1+" inch.");
        break;
    case '2' :
        console.log("Feet to Meter");
        let convert2 = value / 3.281;
        console.log(choice+" ft = "+convert2+" meter.");
        break;
    case '3' :
            console.log("Inch to Feet");
            let convert3 = value / 12;
            console.log(choice+" inch = "+convert3+" ft.");
            break;
    case '4' :
        console.log("Meter to Feet");
        let convert4 = value * 3.281;
        console.log(choice+" meter = "+convert4+" ft.");
        break;
    default :
        console.log("Invalid choice")
}