let dob = new Map()
for(month = 1 ; month <= 12 ; month++ )
{
    dob.set(month,0)
}
let count  = 0
while(count<=50)
{
    let birthMonth = (Math.floor(Math.random()*100) % 12 )+1 
    let year = "199"+Math.floor(Math.random()*10)%10  
    if (year == "1992" || year == "1993") 
    {
        dob.set(birthMonth,dob.get(birthMonth)+1)    
        count++
    }
}
console.log(dob)
console.log("Number of people having birthday in same month are printed below :\n");
console.log("month : count");
for(key of dob.keys())
{
    console.log(key+" : "+dob.get(key))
}