//LOOPS

//Activity - 1

//Task - 1
let output = " ";
for (i = 1; i <= 10; i++) {
  output += i + " ";
}
console.log(output.trim());

//output
//1 2 3 4 5 6 7 8 9 10

//Task - 2
for (i = 1; i <= 10; i++) {
  console.log(`5 * ${i} = ${5 * i}`);
}

//output
// 5 * 1 = 5
// 5 * 2 = 10
// 5 * 3 = 15
// 5 * 4 = 20
// 5 * 5 = 25
// 5 * 6 = 30
// 5 * 7 = 35
// 5 * 8 = 40
// 5 * 9 = 45
// 5 * 10 = 50



//Activity - 2

//Task - 3
let sum = 0;
let num = 1;
while (num <= 10) {
  sum += num;
  num++;
}
console.log(sum); //55

//Task - 4
let outpt = " ";
let num1 = 10;
while (num1 >= 1) {
  outpt += num1 + " ";
  num1--;
}
console.log(outpt.trim()); //10 9 8 7 6 5 4 3 2 1




//Activity - 3

//Task - 5
let numbr = 1;
let output1 = " ";
do {
  output1 += numbr + " ";
  numbr++;
} while (numbr <= 5);
console.log(output1); //1 2 3 4 5

//Task - 6
function factorial(num5) {
  let f = 1;
  let i = 1;
  do {
    f *= i;
    i++;
  } while (i <= num5);
  console.log(f);
}

factorial(5); //120




//Activity - 4

//Task-7
function pattern(n) {
  for (let i = 1; i <= n; i++) {
    let output2 = " ";
    for (let j = 1; j <= i; j++) {
      output2 += "*";
    }
    console.log(output2);
  }
}
pattern(5);

//output
// *
// **
// ***
// ****
// *****




//Activity - 5

//Task - 8
let newOutput = " ";
for (let i = 1; i <= 10; i++) {
  if (i == 5) continue;
  else {
    newOutput += i + " ";
  }
}
console.log(newOutput); //1 2 3 4 6 7 8 9 10

//Task - 9
let newOutput2 = " ";
for (let i = 1; i <= 10; i++) {
  if (i == 7) break;
  else {
    newOutput2 += i + " ";
  }
}
console.log(newOutput2); //1 2 3 4 5 6
