const pages = [

{
day:"Day 0",

text:`
<p>
Friday 10th July 2026
<br>
Dearest,
<br>
I hope you are doing pretty well today babe. I know this hectic internship must be very tiring for you so I will try my best 
to make you smile, laugh and brathe in moments where it will be difficult for you to do so.
<br>
<br>
I rarely gift you anything, so thought to give one by making this website for you to make you smile and giggle and laugh.
I love the way you smile and laugh, honey. I love those cute dimples you get when you give me a big smile. I love it.
I love the way you look at me with those puppy eyes of yours.
<br>
<br>
This website is a small gift from my side. It is a series of 30 lines(for 30 days) about me, about you, about us.
<br>
<br>
*Lots oF Hugs and Kisses For My Prakhuuu Babyy*
<br>
<br>
Yours,
<br>
Himalika | Kikuu 
<br>
Keep beep-blooping & Keep loving me
<br>
hehe!
</p>
`
},

{
day:"Day 1",

text:`
<p> I fell in love with you again in July knowing fully well you never went out of my heart in the first place.
<br>
Yours
<br>
Himalika | Kikuu </p>
`
},

{
day:"Day 2",

text:`
<p> you know, for a long time, I was afraid to call it 'love'. what did love mean? what did 'finding somenone' mean? what did 'admiring someone' mean?

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
