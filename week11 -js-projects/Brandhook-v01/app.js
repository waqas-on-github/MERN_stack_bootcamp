

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





