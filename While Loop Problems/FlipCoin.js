let countHead = 0;
let countTail = 0;

while (countHead < 11 || countTail < 11) 
{
    let coinfliped = Math.floor(Math.random() * 10) % 2;
    if (coinfliped == 1) 
    {
        countHead++
    } 
    else 
    {
        countTail++
    }
}
if (countHead > countTail) 
{
    console.log("Head wins");
} 
else 
{
    console.log("Tail wins");
}