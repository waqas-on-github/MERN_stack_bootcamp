
function outer()  //---->  step(1) initlizing function delaration in global excuation context  
{
    let counter=0;  //--->step(4) initlizing counter identifire and assigning it value zero 

    function incrementcounter() {    // ----> step(5) declaring function with incremebtcounter  
        return ++counter ;
    }
   
   
 
    return incrementcounter(); // ---> step(6)calling incrementcounter   itll create brnad new excution context inside outerfunction excution
   //context    
}

let res= outer();   // ---->  step (2) initlizing variable  and assigning it to res variable excuting outer function 
// creating brand new excution 

console.log(res);


