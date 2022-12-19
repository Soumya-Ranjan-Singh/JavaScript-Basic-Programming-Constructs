let gamblerRs = 100;
let bet = 1;
let timesWon = 0;
let numberOfBet = 0;

while (gamblerRs < 200 && gamblerRs > 0 ) 
{
    let gamblerPlay = Math.floor(Math.random() * 10) % 2;
    if (gamblerPlay == 1) 
    {
        gamblerRs++;
        timesWon++;
    } 
    else 
    {
        gamblerRs--;
    }
    numberOfBet++;
    if (gamblerRs == 200)
        console.log("Gambler won");
    else if (gamblerRs == 0 || gamblerRs < 0)
        console.log("Gambler loss");
}
console.log(`Times own ${timesWon} and Number of bets ${numberOfBet}`);