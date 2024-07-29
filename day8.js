//ES-6 + FEATURES

//Activity - 1

//Task-1
let pName="Rohan";
let age=31;
let info=`Hi ${pName}, you are ${age} years old.`;
console.log(info);
// output : Hi John, you are 34 years old.


//task 2
let str=`Hi
I am Kirti
from NIT Kurukshetra.`;
console.log(str);
// output : 
// Hi
// I am Kirti
// from NIT Kurukshetra.


//Activity - 2

//task 3
const arr1=[1,2,3,4,5];
let [first,second,...args1]=arr1;
console.log(`First element : ${first} ; Second element : ${second}`);
// output : First element : 1 ; Second element : 2


//task 4
const book={
    name:"The Wings",
    author:"XYZ",
    price:200,
    genre: "motivational"
};
const {name,author,...args2}=book;
// here args2 is an object not an array
console.log(name);
console.log(author);
//output:
// The Wings
// XYZ


//Activity - 3

//task 5
const origArray=[1,2,3,4,5];
const newArray = [...origArray,6,7,8,9,10];
console.log(`Original array : ${origArray}`);
console.log(`Updated array : ${newArray}`);
// output:
// Original array : 1,2,3,4,5
// Updated array : 1,2,3,4,5,6,7,8,9,10


//task 6
function sum(...args3)
{
    let total=0;
    for(let i of args3)
    {
        total=total+i;
    }
    return total;
}

let res=sum(1,2,3,4,5);
console.log(res);
//output : 15


//Activity - 4

//task 7
function multiply(a,b=2)
{
    return a*b;
}
console.log(multiply(5,4));
//output : 20


//Activity - 5

//task 8
const myArray = {
  items: [],
  add(item) {
    this.items.push(item);
  },
  
  remove(item) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  },
  
  display() {
    console.log(this.items);
  },

  ['getLength']() {
    return this.items.length;
  }
};

// Usage
myArray.add('apple');
myArray.add('banana');
myArray.display(); // Output: ['apple', 'banana']

myArray.remove('apple');
myArray.display(); // Output: ['banana']

console.log(myArray.getLength()); // Output: 1


//task 9
let var1="fName";
let var2="lName";
const obj={
    [var1]:"Kirti",
    [var2]:"Goyal"
};
console.log(obj);
//output : { firstName: 'Kirti', lastName: 'Goyal' }