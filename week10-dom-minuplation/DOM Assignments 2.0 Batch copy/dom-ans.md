** FSJS 2.0 DOM ASSIGMENTS **

## First assigment code 
**about us minuplation **
  ### METHOD 1 
```javascript
let hiremeelement = document.createElement("li");
hiremeelement.innerText = "Hire Me";
let getul = document.querySelector("ul");
getul.append(hiremeelement);
```
###  METHOD 2 
```javascript
let hiremeelement = document.createElement("li");
hiremeelement.innerText = "Hire Me";
let ul =document.body.firstElementChild.firstElementChild.children[1]
ul.append(hiremeelement)
```


### Home  page social media icons hide 
## First assigment code part 2
   
```javascript 
let footer =document.querySelector("footer")
footer.lastElementChild.style.display="none"
```

## First assigment code part 3
### contact  page input minuplation 
```javascript
let main =document.querySelector("main")
let left_form = main.firstElementChild.children[1]
left_form.children[0].placeholder="FSJS 2.0"
left_form.children[1].placeholder="fsjs@ineuron.ai"
left_form.children[2].placeholder="HELLO WORLD"

let right_form =main.children[1].children[1]
right_form.children[0].placeholder="FSJS 2.0"
right_form.children[1].placeholder="fsjs@ineuron.ai"
right_form.children[2].placeholder="HELLO WORLD"
```




## project 4 cards minuplation 

```javascript
// getting all cardis 
let all_cards =document.querySelector(".slide-container")
// selecting cards one by one 
let firstcard=all_cards.children[0].firstElementChild
let secondcard=all_cards.children[1].firstElementChild
let thirdcard=all_cards.children[2].firstElementChild
let forthcard=all_cards.children[3].firstElementChild
let fifthcard=all_cards.children[4].firstElementChild

//  cahanging backrougnd color 

//  selecting parent element 

let firstcard_elements=firstcard.lastElementChild;
let secondcard_elemnts=secondcard.lastElementChild;
let thirdcard_elemnts=thirdcard.lastElementChild;
let forthcard_elemnts=forthcard.lastElementChild;
let fifthcard_elemnts=fifthcard.lastElementChild;



// function that change backgroundColor of parent and change color of all desired childerns color 
function cahnge (color,backrougnd ,array ,parent) {
    parent.style.backgroundColor=backrougnd;
    array.forEach((Element) => {
       Element.style.color=color;
})

}



cahnge( "#FFFFFF" ,"#EC9B3B" , [...firstcard_elements.children] ,firstcard_elements)
cahnge( "#FFFFFF" ,"#EE5487" , [...secondcard_elemnts.children] ,secondcard_elemnts)
cahnge( "#FFFFFF" ,"#F6901A" , [...thirdcard_elemnts.children] ,thirdcard_elemnts)
cahnge( "#FFFFFF" ,"#82BB30" , [...forthcard_elemnts.children] ,forthcard_elemnts)
cahnge( "#FFFFFF" ,"#4FACFF" , [...fifthcard_elemnts.children] ,fifthcard_elemnts)
```

### project 5 whole page minuplation 

```javascript
let nav =document.querySelector("nav")
let nav_parent=nav.firstElementChild.children[2]
let nav_element=document.createElement("a")
nav_element.innerText="Pro subscription"
nav_element.classList.add(`${nav_parent.firstElementChild.className}`)

nav_parent.append(nav_element)




let tag_container=document.querySelector(".tags-container")
let tag_parent = tag_container.lastElementChild
let tag_element=document.createElement("a")
       tag_element.innerText="chinees(7)"
        tag_element.style.color="brown"
tag_parent.append(tag_element)



// for cards 
let cards_parent=document.querySelector(".recipe-gallery")
let childs =cards_parent.children ;

[...childs].forEach((element) => {

    [...element.firstElementChild.children].forEach((element) => {
        element.style.color ="purple"
    })

})


// adding a new card 
function create_elements(...elements){
 let elm =   elements.map((elem) => {
        let elm = document.createElement(elem)
        return elm;

})

return elm
}


let elements = create_elements("div" ,"a" ,"img" ,"h5" ,'p')
let [div ,a ,img ,h5 ,p ] =elements

div.append(a)
a.append(img)
a.append(h5)
a.append(p)
div.classList.add(`${cards_parent.children[0].className}`)
img.setAttribute("src" ,`${childs[0].firstElementChild.firstElementChild.src}`)
img.classList.add(`${childs[0].firstElementChild.children[0].className}`)
h5.innerText="Bhunnah"
h5.style.color="purple"
p.innerText="prep:10min | Cook : 40min"
p.classList.add(`${childs[0].firstElementChild.children[2].className}`)
p.style.color="purple"

cards_parent.append(div)



// footer minuplation 

let footer =document.querySelector('footer')
footer.firstElementChild.children[1].innerText="m waqas"

```


### project 6 page minuplation 
```javascript 
// changing logo 
let header=document.querySelector("header")
header.firstElementChild.setAttribute("src" ,"./assets/ineuron-logo.png")

// changing price 
let appprice =document.querySelector(".app_price")
appprice.firstElementChild.innerText="$10"
```

### project 7 form minuplation 


```javascript 

 let form=document.querySelector("form") ;
    form.firstElementChild.disabled=false
    form.lastElementChild.disabled=false

    let submit =form.lastElementChild
      submit.addEventListener("click" ,(e) => {
      e.preventDefault()
      let left_card =document.querySelector(".main__languages");
      let spliced= [...left_card.children].splice(0,6)
      left_card.replaceChildren(...spliced)
    })
```
### project 8 navbar minuplation and scrollbar 

```javascript 
 let aside =document.querySelector(".col-lg-4")
 aside.style.overflow="scroll"

let tog=document.querySelector("#navbarTogglerDemo01")
let navbtn= document.querySelector(".navbar-toggler")
 navbtn.addEventListener("click" , () => {


if(tog.style.display==="none")
  {
    tog.style.display="block"
  }
  else{
        tog.style.display="none"
      }
 })
```


### project 9 card minuplation 

```javascript 


//  chanig heading color 
    let container =document.querySelector(".container")
    let title = container.querySelector(".title")
    title.style.color="red"


// changing button backrougnd color 
    let cart_btn=document.querySelector(".add-to-cart") 
    cart_btn.style.backgroundColor="#F33A6A"

```