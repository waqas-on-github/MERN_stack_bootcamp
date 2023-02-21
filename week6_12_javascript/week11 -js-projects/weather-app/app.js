
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




// clear the input 
cityName.addEventListener(("focus") ,()=> {
    cityName.value =""

})
// getting weather data function 
 function getweatherdata(city){
     fetch(`http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&dt=2023-03-04`)
     .then((res) => res.json())
     .then((data) => {
        displaytoui(data)
     }).catch((error) => {
        displayerror(error)
     })
    
 }


function displaytoui (data) {

 displayheader(data)
 displayForcast(data.forecast.forecastday[0].hour)

  
}

function displayheader(data,){
let header=document.querySelector(".headcomponent")
header.children[0].textContent=data.location.name 
header.children[1].firstElementChild.textContent=data.forecast.forecastday[0].day.mintemp_c 
header.children[2].firstElementChild.firstElementChild.textContent=`H:${data.forecast.forecastday[0].day.maxtemp_c}`
header.children[2].children[1].firstElementChild.textContent=`L:${data.forecast.forecastday[0].day.mintemp_c}`
}



function displayForcast(forforcast){
    

    clearui()
    let hourComponent=document.querySelector('.hourlyforcast')
    let elements = forforcast.map((element) => {

        let time =document.createElement("p")
        let icon= document.createElement("img")
        let h2 =document.createElement("h2")
//    time  formatting logic 
        const date = moment(element.time, 'YYYY-MM-DD HH:mm');
        const formattedDate = date.format('h:mm a');
//    time formatting logic 
       time.textContent=formattedDate
       icon.src=element.condition.icon
       h2.textContent=element.temp_c
             return [time ,icon,h2]
    })
    
     elements.forEach(element => {
        let div =document.createElement("div")
        div.classList.add("childerflex")
        div.append(...element)
        hourComponent.append(div)     
    });
}


function clearui() {
   

    let hourComponent = document.querySelector('.hourlyforcast')
    console.log(hourComponent.children);
    for (let i = hourComponent.children.length - 1; i >= 0; i--) {
        hourComponent.removeChild(hourComponent.children[i])
    }
}

function displayerror(error){
    console.log(error +"by display error ");
}
