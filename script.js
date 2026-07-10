const pages = [

{
day:"Day 0",

text:`
<p>Dearest,
<br>
hieeeee
<br>
Yours
<br>
Himalika | Kikuu </p>
`
},

];

let current=0;

const content=document.getElementById("content");

const day=document.getElementById("day");

function showPage(){

content.innerHTML=pages[current].text;

day.innerHTML=pages[current].day;

}

showPage();

document.getElementById("home").onclick=function(){

current=0;

showPage();

}

document.getElementById("prev").onclick=function(){

if(current>0){

current--;

showPage();

}

}

document.getElementById("next").onclick=function(){

if(current<pages.length-1){

current++;

showPage();

}

}

document.getElementById("end").onclick=function(){

current=pages.length-1;

showPage();

}