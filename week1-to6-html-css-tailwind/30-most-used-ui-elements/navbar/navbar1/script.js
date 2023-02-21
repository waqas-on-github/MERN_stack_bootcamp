let bar =document.querySelector(".bars")
let ul =document.querySelector("ul")
console.log(ul);

bar.addEventListener("click" ,(e) => {
  bar.classList.toggle("something")
  bar.children[0].classList.toggle("bar1")
  bar.children[1].classList.toggle("bar2")
  bar.children[2].classList.toggle("bar3")


  ul.classList.toggle("show")
    
})