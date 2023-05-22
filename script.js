const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let id = 0;

function carrossel(){
  id++;

  if(id > img.length - 1)
    id = 0;

  imgs.style.transform = `translateX(${-id * 500}px)`;
}

setInterval(carrossel, 1800);