let dice = new Map();
dice.set(1,0);
dice.set(2,0);
dice.set(3,0);
dice.set(4,0);
dice.set(5,0);
dice.set(6,0);
let limit = 1;
while (limit == 1 ) {
    let rollDice = (Math.floor(Math.random()*10) %6 )+ 1;
    console.log("Dice rolls comming: "+rollDice);
    dice.set(rollDice,dice.get(rollDice)+1);
    for(let key of dice.keys())
    {
        if (dice.get(key)  == 10) 
        {
            limit = 0;
            console.log(dice);
            console.log("The maximum time repeated number is " +key);
        }
    } 
}
let min = 10;
for (let key of dice.keys())
{
    if (dice.get(key) < min)
    {
        min = dice.get(key);
        var min_key = key;
    }
}
console.log("The minimum time repeated number is "+min_key);