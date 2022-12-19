const userInput = process.argv;
const argv = userInput.slice(2);

let a = argv[0];
let b = argv[1];
let c = argv[2];

let eq1 = a+b*c ;
let eq2 = c+a/b ;
let eq3 = a%b+c ;
let eq4 = a*b+c ;

if (eq1 < eq2 && eq1 < eq3 && eq1 < eq4)
{
    min = eq1;
}
else if (eq2 < eq3 && eq2 < eq4)
{
    min = eq2;
}
else if (eq3 < eq4)
{
    min = eq3;
}
else
{
    min = eq4;
}
if (eq1 > eq2 && eq1 > eq3 && eq1 > eq4)
{
    max = eq1;
}
else if (eq2 > eq3 && eq2 > eq4)
{
    max = eq2;
}
else if (eq3 > eq4)
{
    max = eq3;
}
else
{
    max = eq4;
}

console.log("Maximum value ="+max);
console.log("Manimum value ="+min);