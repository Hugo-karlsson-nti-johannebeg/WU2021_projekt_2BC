let layer = document.querySelector(".fade-layer");
layer.addEventListener("click",showMenu)

let button = document.querySelector(".menu-button");
button.addEventListener("click",showMenu)



function showMenu(){
    let menu = document.querySelector("nav.menu")
    menu.classList.toggle("show");

    let layer = document.querySelector(".fade-layer");
    layer.classList.toggle("visible")
}

var i = 0;
var txt = 'Our Goal is to make space travel available to anyone at anytime" - Elon Musk'; 
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("article1").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}


function myFunction(x) {
  x.classList.toggle("change");
}