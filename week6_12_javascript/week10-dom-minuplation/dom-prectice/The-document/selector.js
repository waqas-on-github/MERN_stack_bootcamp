
// reading 

//   document.getElementById

// make button backrougnd color red 

let btn =document.getElementById("main-btnx")
btn.style.backgroundColor="green"

// document.getElementsByClassName

// make  home li text color red 
let home_li =document.getElementsByClassName("li-home")
home_li[0].style.color='red'



// alternative of both above 
let bntx=document.querySelector(".main-btn")
bntx.style.padding="10px"
bntx.style.border="none"
bntx.style.color="white"



// make all lis fonts size 20 px and border red 
let all_lis= document.querySelectorAll("li")

for(let li of all_lis){
    li.style.fontSize="20px"
    li.style.border="2px solid red "
}


// CREATE 


// creating elements with js dom 


let create_list=document.createElement("div")
create_list.classList.add("created")
let text=document.createTextNode("hello wrold")
create_list.append(text)
console.log(create_list);
document.body.append(create_list)


// remove contact us in footer sec 

// remove element 


let footer =document.getElementsByTagName("footer")
console.log(
    footer[0].firstElementChild
);





bntx.remove()




