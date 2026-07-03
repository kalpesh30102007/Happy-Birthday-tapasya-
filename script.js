// Open Birthday Letter
function showLetter() {
    const letter = document.getElementById("letter");
    if (letter) {
        letter.style.display = "block";
        letter.scrollIntoView({
            behavior: "smooth"
        });
    }

    startConfetti();
}

// Floating Hearts
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    const hearts = ["❤️","💖","💕","💗","🌹"];

    heart.innerHTML = hearts[Math.floor(Math.random()*hearts.length)];

    heart.style.left = Math.random()*100+"vw";

    heart.style.animationDuration = (Math.random()*4+4)+"s";

    heart.style.fontSize = (Math.random()*20+18)+"px";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },8000);
}

setInterval(createHeart,350);

// Typewriter Effect
const text =
`Dear Tapasya,

Happy Birthday ❤️

I made this little website only for you.

Every memory with you is special to me.

May your smile always stay the same.

Have an amazing birthday.

— Tushar ❤️`;

let i=0;

function typeWriter(){

const target=document.getElementById("typing");

if(!target) return;

if(i<text.length){

target.innerHTML+=text.charAt(i);

i++;

setTimeout(typeWriter,40);

}

}

// Start typing after page loads
window.onload=function(){

typeWriter();

}

// Confetti
function startConfetti(){

for(let i=0;i<120;i++){

const conf=document.createElement("div");

conf.innerHTML="🎉";

conf.style.position="fixed";

conf.style.left=Math.random()*100+"vw";

conf.style.top="-20px";

conf.style.fontSize=(Math.random()*20+15)+"px";

conf.style.animation=`fall ${Math.random()*3+3}s linear`;

document.body.appendChild(conf);

setTimeout(()=>{

conf.remove();

},6000);

}

}

// Music Button
function toggleMusic(){

const music=document.getElementById("music");

if(!music) return;

if(music.paused){

music.play();

}else{

music.pause();

}

}
