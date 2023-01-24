let btn =document.querySelector("button")
btn.addEventListener("click" , function (e) {
    e.preventDefault() 
    btn.previousElementSibling.style.color="red"
})



btn.addEventListener("mouseover" , function (e) {
    e.preventDefault() 
    btn.previousElementSibling.textContent="mouser overd on button"
})

btn.addEventListener("mouseout" , function (e) {
    e.preventDefault() 
    btn.previousElementSibling.textContent="mouser out from button"
})


let ball =document.querySelector(".ball")
console.log(ball);
// event object

// mini projects 
// 1 following ball
document.addEventListener("click" , (e)=> {

ball.style.top=e.clientY + (-300) +  "px"
ball.style.left=e.clientX + (-100) +"px"
ball.style.backgroundColor= "#" + Math.floor(Math.random()*16777215).toString(16);
    
})


// 2 dropdown 

let span =document.querySelector(".span")
span.addEventListener("click", () => {
   console.log("hello");
})


