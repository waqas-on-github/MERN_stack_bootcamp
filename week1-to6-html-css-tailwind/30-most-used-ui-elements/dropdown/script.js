
let icon =document.querySelector(".icon") 


icon.addEventListener("click" ,() => {
    icon.classList.toggle("move")
    icon.parentElement.nextElementSibling.classList.toggle("show") ;
})