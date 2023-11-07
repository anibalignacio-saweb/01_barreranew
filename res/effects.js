//VARIABLES GLOBALES

const first = document.querySelector('div.gallery-fixer.first');
const second = document.querySelector('div.gallery-fixer.second');
const gallery = document.querySelector('div.gallery');
const navSelector = document.querySelector('nav');
const menuSelector = document.querySelector('ul#main-menu');
const navOpen = document.querySelector('button.open');
const navClose = document.querySelector('button.close');

let ypos = 0;

let firstWidth = first.offsetWidth;
let secondWidth = second.offsetWidth;
console.log(firstWidth)
console.log(secondWidth)



//FUNCIONES

setInterval(()=>{
    ypos = window.scrollY;
}, 10);

let x = 0;

//function first

setInterval(()=>{
    x += 1;
}, 10);


function horizontalScrollBottom(){  
    let n = Math.floor(ypos/5);
    let value = 'translateX('+ n +'px)';
    second.style.transform = value;
}

function horizontalScrollTop(){
    let n = Math.floor(ypos/5);
    let value = 'translateX(-'+ n +'px)';
    first.style.transform = value;
}


function openNav(){
    menuSelector.className = "open";
    navSelector.className = "open";
}

function closeNav(){
    menuSelector.className = "close";
    navSelector.className = "close";
}


//CALLS

setInterval(horizontalScrollBottom, 10);
setInterval(horizontalScrollTop, 10);


navOpen.onclick = openNav;
navClose.onclick = closeNav;