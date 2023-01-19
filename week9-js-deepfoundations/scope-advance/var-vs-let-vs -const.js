// var is hoisted and assigned with undefiend 
//  let is also hoisted but in TDZ (temporal ded zone)
console.log(d)

var d=10;
var d=200; // var can be reintilized and reasigned  


// console.log(r) // reference error 
let r= 2000;
// let r=3444;  not allowed
 r= 3000;   // let can be reassigned but can not be  reintilized 








// 1 var is not block scoped 

if (true)
{
    var x=100;
}


console.log(x);


   // let is block scoped 

if(true) {
    let y=200
}

// console.log(y)  //  reference error `