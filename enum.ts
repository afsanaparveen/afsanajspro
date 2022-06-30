enum Days{
    sunday=10,monday,tuesday,wednesday,friday,saturday,  //here is is in the form of array
}
/*
let whichDay:Days;
whichDay=Days.monday;
console.log(whichDay);
whichDay=Days.tuesday;
console.log(whichDay);
whichDay=Days.wednesday;
console.log(whichDay);*/
function whichDay(day:Days)
{
    return "today is" +day;
}
console.log(whichDay(Days.saturday));

