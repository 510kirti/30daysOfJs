//CONTROL STRUCTURES


//Activity - 1

//Task - 1
let num1 = -4;
if (num1 > 0) console.log("num1 is positive");
else if (num1 == 0) console.log("num1 is equal to 0");
else console.log("num1 is negative");

//output
//num1 is negative


//Task - 2
let age = 23;
if (age >= 18) console.log("person is eligible to vote");
else console.log("person is not eligible to vote");

//output
//person is eligible to vote


//Activity - 2
//Task - 3
let var1 = 5;
let var2 = 1;
let var3 = 7;
if (var1 >= var2) {
  if (var1 >= var3) console.log("var1 is largest");
  else console.log("var3 is largest");
} else {
  if (var2 >= var3) console.log("var2 is largest");
  else console.log("var3 is largest");
}

//output
//var3 is largest



//Activity - 3

//Task - 4
function dayOfWeek(input) {
  switch (input) {
    case 1:
      console.log("Monday");
      break;

    case 2:
      console.log("Tuesday");
      break;

    case 3:
      console.log("Wednesday");
      break;

    case 4:
      console.log("Thursday");
      break;

    case 5:
      console.log("Friday");
      break;

    case 6:
      console.log("Saturday");
      break;

    case 7:
      console.log("Sunday");
      break;
  }
}

//output
dayOfWeek(2); //Tuesday
dayOfWeek(7); //Sunday


//Task - 5
function grade(marks)
{
    switch(marks)
    {
        case (marks >= 85 && marks <= 100):
            console.log('A');
            break;
        
        case (marks >= 75 && marks < 85):
            console.log('B');
            break;
        
        case (marks >= 65 && marks < 75):
            console.log('C');
            break;
        
        case (marks >= 55 && marks < 65):
            console.log('D');
            break;
        
        case (marks < 55):
            console.log('F');
            break;

        default: 
            console.log("Invalid marks");
    }
}

grade(86); //A
grade(67); //C




//Activity - 4

//Task - 6

let num4 = 5;
(num4 % 2 == 0) ? console.log("num4 is even"):console.log("num4 is odd");

//output
//num4 is odd



//Activity - 5

//Task - 7

function checkLeapYear(year)
{
    if((year % 400 == 0) || ((year % 4 == 0) && (year % 100 != 0)))
        console.log("leap Year");

    else 
        console.log("not a leap year");
}

checkLeapYear(2020); //leap year 
checkLeapYear(2021); // not a leap year
