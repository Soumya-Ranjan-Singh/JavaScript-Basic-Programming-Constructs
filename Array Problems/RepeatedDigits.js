let digits = new Array();
for(let  number  = 0 ; number <= 100 ; number ++)
{
    if (number%11 == 0 && number !=0) {
        digits.push(number);
    }
}
console.log("The reapeated numbers are : "+digits);