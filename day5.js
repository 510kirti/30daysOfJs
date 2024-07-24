//FUNCTIONS

//Activity - 1

//Task - 1
function check(num)
{
    if(num % 2 == 0) return (`${num} is even`);
    return (`${num} is odd`);
}
let res1 = check(5);
console.log(res1); //5 is odd


//Task - 2
function square(num1)
{
    return (num1**2);
}

let res2 = square(4); 
console.log(res2); //16



//Activity - 2

//Task - 3
function maximum(num1, num2)
{
    if(num1 > num2) return (`${num1} is maximum`);
    return (`${num2} is maximum`);
}
let res3 = maximum(5,7); 
console.log(res3);//7 is maximum


//Task - 4
function concatenate(str1, str2)
{
    let str3 = str1 +" " + str2;
    return str3;
}
let res4 = concatenate("hi", "hello"); 
console.log(res4);//hi hello



//Activity - 3

//Task - 5
let add = (num1, num2) => {
    return (num1+num2);
}
let res5 = add(2,3);
console.log(res5); //5


//Task - 6
let checkString = (str, ch) => {
    if(str.includes(ch))
        return true;
    return false;
}
let res6 = checkString("Hello World", 'c');
console.log(res6); //false




//Activity - 4

//Task - 7
function product(num1, num2 = 5)
{
    return num1*num2;
}
let res7 = product(4);
console.log(res7); //20


//Task - 8
function greeting(name, age = 15)
{
    return (`hi i am ${name} and my age is ${age}`);
}
let res8 = greeting("Ram");
console.log(res8);



//Activity - 5

//Task - 9
function f1(f2, times)
{
    for(let i = 0; i < times; i++)
    {
        f2();
    }
}

function sayHello()
{
    console.log("Hello !");
}

f1(sayHello,5);


//Task - 10
function applyFunctions(firstFunc, secondFunc, value) {
  let firstResult = firstFunc(value);
  
  let finalResult = secondFunc(firstResult);
  
  return finalResult;
}

function double(x) {
  return x * 2;
}

function addFive(x) {
  return x + 5;
}

let value = 10;
let result = applyFunctions(double, addFive, value);
console.log(result); // Output: 25