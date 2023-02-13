

let main=document.querySelector("main")
// main.style.backgroundImage=  `url()`
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


// code for nabvar 

let humburger= document.querySelector(".bar")
let navelemnts=document.querySelector(".navul")

humburger.addEventListener("click" ,() => {
navelemnts.classList.remove("hide")

   navelemnts.classList.add("show")
   console.log(navelemnts);

})



// hiding side menue for mobile 
let crossicon =document.querySelector(".crossicon")
crossicon.addEventListener( "click",() => {
  console.log(navelemnts);
navelemnts.classList.remove("show")
navelemnts.classList.add("hide")

})




// link clicking and sidebar gonna be hide 

let alllis =navelemnts.querySelectorAll("li");
[...alllis].forEach((e) => {
  e.addEventListener("click" ,(event) => {
navelemnts.classList.add("hide")

    
  })
})
