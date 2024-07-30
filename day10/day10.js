//ACTIVITY 1 

//task 1 : 
let task1 = document.querySelector("#task1");
let btn1 = document.querySelector("#btn1");
btn1.addEventListener("click",()=>{
    task1.innerText = "Text changes";
});


//task 2 
let btn2=document.querySelector("#btn2");
let img1=document.querySelector("#img1");
btn2.addEventListener("dblclick",function(){
    if(img1.style.visibility=="hidden")
    {
        img1.style.visibility="visible";
    }
    else
    {
        img1.style.visibility="hidden";
    }      
});

//ACTIVITY 2 

//task 3 
let head1= document.querySelector("#head1");
head1.addEventListener("mouseover",()=>{
    head1.style.backgroundColor="yellow";
})


// task 4
head1.addEventListener("mouseout",()=>{
    head1.style.backgroundColor="white";
})

//ACTIVITY 3 

//task 5
let input1=document.querySelector("#input1");
input1.addEventListener("keydown",(event)=>{
    console.log(event.key); // The event.key returns value of the key pressed during a keyboard event
})

//task 6

input1.addEventListener("keyup",()=>{
    console.log(input1.value);
});

//ACTIVITY 4 

//task 7
let test=document.querySelector("#test");
let dropdown1=document.querySelector("#dropdown1");
let dropdown2=document.querySelector("#dropdown2");
test.addEventListener("submit",(event)=>{
    event.preventDefault(); // to prevent default submission
    console.log(dropdown1.value);
    console.log(dropdown2.value);
});


//task 8
let para2=document.querySelector("#para2");
dropdown1.addEventListener("change",()=>{
    para2.innerText=`Selected Option : ${dropdown1.value}`;
});


//ACTIVITY 5 

//task 9
let list1=document.querySelector("#list1");
list1.addEventListener("click",function(event){
    let listItem=event.target;
    if(listItem.tagName=="LI")
    {
        console.log(listItem.textContent);
    }
});


//task 10
let btn3=document.querySelector("#btn3");
btn3.addEventListener("click",()=>{
    let li=document.createElement("LI");
    let input3=document.querySelector("#input3");
    li.innerText=input3.value;
    list1.append(li);
    list1.addEventListener("click",(event)=>{
    if(event.target.tagName=="LI")
        console.log(event.target.innerText);
});
});