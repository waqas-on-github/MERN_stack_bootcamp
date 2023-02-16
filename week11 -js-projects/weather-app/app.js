
const key="620549b806f64268a5c221842231102"
let data =fetch(`http://api.weatherapi.com/v1/current.json?key=${key}&q=London`)

data.then((data) => data.json()).then((data) => {
    console.log(data);
})


// get input for serching 

let form =document.querySelector('form')
console.log(form);