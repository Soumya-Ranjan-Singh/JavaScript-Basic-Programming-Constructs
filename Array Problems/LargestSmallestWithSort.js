let array = new Array();
for(let count = 0 ; count <10 ; count++)
{
    let randomNumber = (Math.floor(Math.random() * (999-100+1)+100));
    array.push(randomNumber);
}
console.log("The Generated numbers are "+array);
array.sort()
console.log(`The Second largest value is ${array[8]}`);
console.log(`The Second smallest value is ${array[1]}`);