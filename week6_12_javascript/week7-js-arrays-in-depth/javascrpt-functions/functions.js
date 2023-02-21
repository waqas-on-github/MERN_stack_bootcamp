// Functions are one of the fundamental building blocks in JavaScript In JavaScript, a function is a block of code that
//  can be defined and then called by name. Functions allow you to reuse code and can make your code more organized and modular.
function log(x){
   console.log(x)
}




function myFunction() {
   console.log('hello');
  }
  
  myFunction();
  // calls the function once
  

// function with parameter and return keyword 

function square(num){
   return num*num
}

let sq=square(22)
console.log(sq)

// Function expressions      function expressions are not hoisted    


let makerandom = function (number) {
  
   return (Math.floor(Math.random() * number))

}

let getrandom=makerandom(22)
console.log(getrandom)


// Function parameters
// There are two special kinds of parameter syntax: default parameters and rest parameters.
// Default parameters

function multply (a,b=2) {

   return a*b
}


let getmt=multply(22)
log(getmt)


// In JavaScript, the rest parameter syntax allows you to represent an indefinite number of arguments as an array. The rest parameter syntax is denoted by three dots (...) followed by the name of the array that will contain the rest of the arguments.

// Rest parameter 
function sum( num,...numbers) {
   console.log('im num '+num)
   let result = 0;
   for (let i = 0; i < numbers.length; i++) {
     result += numbers[i];
   }
   return result;
 }
 
 console.log(sum(100, 2, 3)); // Output: 6
 console.log(sum(1, 2, 3, 4, 5)); // Output: 15
 



// arraow functions 

let addnums =(num1,num2 ) => {
   return  num1+num2
}

let getnum = addnums(2,5)
console.log(getnum)

