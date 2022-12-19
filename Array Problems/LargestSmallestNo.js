let array = new Array();
for(let count = 0 ; count <10 ; count++)
{
    let randomNumber = (Math.floor(Math.random() * (999-100+1)+100));
    array.push(randomNumber);
}
console.log("The Generated numbers are "+array);
let firstLargest = array[0];
let secondLargest = array[0];
let firstSmallest = array[0];
let secondSmallest = array[0];
for (var i = 0; i < array.length; i++) 
{
    if (array[i] > firstLargest) 
    {
        firstLargest = array[i];
    }
    else if (array[i] < firstSmallest) 
    {
        firstSmallest = array[i];
    } 
}
for (var i = 0; i < array.length; i++)
{
    if (array[i] > secondLargest && firstLargest > array[i])
    {
        secondLargest = array[i];
    }
    else if (array[i] < secondSmallest && firstSmallest < array[i])
    {
        secondSmallest = array[i];
    }
}
console.log("Second Largest Element: "+secondLargest);
console.log("Second Smallest Element: "+secondSmallest);