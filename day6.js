//Activity - 1

//Task - 1
let arr = [1,2,3,4,5];
console.log(arr); //[1,2,3,4,5]

//Task - 2
console.log(arr[0]); //1
let len = arr.length;
console.log(arr[len-1]); //5



//Activity - 2

//Task - 3
arr.push(6);
console.log(arr); //[1,2,3,4,5,6]

//Task - 4
arr.pop();
console.log(arr); //[1,2,3,4,5]

//Task - 5
arr.shift();
console.log(arr); //[2,3,4,5]

//Task - 6
arr.unshift(1);
console.log(arr); //[1,2,3,4,5]



//Activity - 3

//Task - 7
let arr2 = arr.map(function(element){
    return element*2;
});
console.log(arr2); //[ 2, 4, 6, 8, 10 ]

//Task - 8
let arr3 = arr.filter(function(element){
    return element % 2 === 0;
})
console.log(arr3); //[2,4]

//Task - 9
let s = 0;
let sum = arr.reduce(function(acc, currentVal){
    return acc+currentVal;
},0);
console.log(sum); //15



//Activity - 4

//Task - 10
let output = " ";
for(let i = 0; i < len; i++)
{
    output += arr[i] + " ";
}
console.log(output); //1 2 3 4 5

//Task - 11
arr.forEach(function(element){
    console.log(element);
});
//output
// 1
// 2
// 3
// 4
// 5



//Activity - 5

//Task - 12
let arr2d = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

console.log(arr2d);//[ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]

//Task - 13
console.log(arr2d[1][0]); //4
console.log(arr2d[2][2]); //9