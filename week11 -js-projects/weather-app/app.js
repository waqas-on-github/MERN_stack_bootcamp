

const key="620549b806f64268a5c221842231102"
//  selecting elements 
let form =document.querySelector("form")
let cityName =form.children[0]
let weather=document.querySelector(".weather")



// when user will click on submit button event will be triggerd and send request to weather api 

form[1].addEventListener('click',(e) => {
    e.preventDefault() 
    if(cityName.value.length!==0){
        getweatherdata(cityName.value)
    }
    else{
        
        console.log("enter city name please")
   }
})

// getting weather data function 
 function getweatherdata(city){
     fetch(`http://api.weatherapi.com/v1/future.json?key=${key}&q=${city}&dt=2023-03-04`)
     .then((res) => res.json())
     .then((data) => {
        displaytoui(data)
     })
    
 }





function displaytoui (data) {

 displayheader(data)


  
}

function displayheader(data,){
let header=document.querySelector(".headcomponent")
console.log(header.children);
header.children[0].textContent=data.location.region
header.children[1].firstElementChild.textContent=data.forecast.forecastday[0].day.mintemp_c 
header.children[2].firstElementChild.firstElementChild.textContent=`H:${data.forecast.forecastday[0].day.maxtemp_c}`
header.children[2].children[1].firstElementChild.textContent=`H:${data.forecast.forecastday[0].day.mintemp_c}`
console.log();



console.log();





}



