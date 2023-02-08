

let main=document.querySelector("main")
main.style.backgroundImage=  `url(./assets/hero.jpeg)`
main.classList.add("main")



let img =document.querySelector(".gallery img")
console.log(img);
img.addEventListener("mouseover" ,(e)=> {
  img.previousElementSibling.style.display="block"
  
} )


img.addEventListener("mouseleave" ,() => {
  img.previousElementSibling.style.display="none"
})

