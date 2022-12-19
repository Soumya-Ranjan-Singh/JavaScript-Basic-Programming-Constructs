function dateCheck(date)
{
    if (date >= new Date("March 20") && date <= new Date("June 20"))
    {
        console.log("True");
    }
    else
    {
        console.log("False");
    }
}
dateCheck(new Date("March 25"));
dateCheck(new Date("March 20"));
dateCheck(new Date("March 15"));
dateCheck(new Date("Feb 25"));
dateCheck(new Date("June 20"));
dateCheck(new Date("June 22"));
dateCheck(new Date("June 01"));
dateCheck(new Date("July 25"));
dateCheck(new Date("April 12"));