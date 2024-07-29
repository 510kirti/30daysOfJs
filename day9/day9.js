//Activity - 1

//Task 1
let a1=document.getElementById("a1");
a1.innerText="Books";


//Task 2
let b1=document.querySelector(".info");
b1.style.backgroundColor="green";


//Activity - 2

//Task 3
let body = document.querySelector("body");
let div1 = document.createElement("div");
div1.style.height="fit-content";
div1.style.width="110px";
div1.innerText="Hi! I was added to the body";
div1.style.backgroundColor="red";
div1.style.textAlign="center";
body.append(div1);


//Task 4
let l1=document.getElementById("l1");
let li=document.createElement("li");
li.innerText="ABC";
l1.append(li);



//Activity - 3

//Task 5
let btn2=document.querySelector('#btn2');
btn2.remove();

//Task 6
body.lastChild.remove();



//Activity - 4

//Task 7
let link=document.getElementsByTagName("a");
for(let i of link)
    i.href="https://github.com/510kirti/30daysOfJs";


//Task 8
li.classList.add('item');  //added a CSS class
li.classList.remove('item'); // removed the CSS class



//Activity - 5
//Task 9
let btn1=document.getElementById("btn1");
btn1.addEventListener("click",()=>{
    p1.innerText="Here is a list of some of the amazing books by renowned authors."
});


//Task 10
p1.addEventListener("mouseover",()=>{
    p1.style.border="solid";
    p1.style.borderColor="black";
});