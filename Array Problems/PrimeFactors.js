let array = new Array();
let number;
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Enter a no : \n", function(userInput){
  number = userInput;
	for (let factor = 2; factor <= number; factor++) {
    let isPrime = 1;
    let num = number;
    for (let count = 2; count < factor; count++) {
      let remainder = factor % count;
      if (remainder == 0) {
        isPrime--;
        break;
      }
    }
    if (isPrime) {
     
      while (num % factor == 0) {
        array.push(factor)
        num = num / factor;
      }
    }
  }
  console.log("The factors of "+number+" are "+array);
  rl.close();
});
// const userInput = process.argv;
// const argv = userInput.slice(2);
// const number = parseInt(argv[0]);