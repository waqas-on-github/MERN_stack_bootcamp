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




