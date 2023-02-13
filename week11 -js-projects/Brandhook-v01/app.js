

let main=document.querySelector("main")
main.style.backgroundImage=  `url(./assets/hero.jpeg)`
main.classList.add("main")





const slider = document.querySelector('.services');
const slides = document.querySelectorAll('.img-sec-serv');
let index = 0;

function changeSlide() {
  index++;
  if (index >= slides.length) {
    index = 0;
  }
  slider.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(changeSlide, 2000);




let hum=document.querySelector(".humbergur")
let ul=document.querySelector(".navul")



hum.addEventListener('click' ,() => {

  if( hum.children[0].className==="show"){
    hum.children[0].classList.add("hide")
    hum.children[1].classList.remove("hide")
    hum.children[1].classList.add("show")
    ul.classList.remove("navul")
    ul.classList.add("showul")
    
  }
  
  else if ( hum.children[1].className==="show" ) {
    hum.children[1].classList.add("hide")
    hum.children[0].classList.remove("hide")
    hum.children[0].classList.add("show")
    ul.classList.remove("showul")
    ul.classList.add("navul")
  }
  

 
  



})






