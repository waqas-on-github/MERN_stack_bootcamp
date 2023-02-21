


function outer ()   // --->  step(1) function  outer declaered  
//---> step 3 outer function crete new excution context 
//steps in outer function 
// --->  step(4) counter variable declared 
// ---> step(5) incrementcounter function declared  as this declared ittl get hidden property [[scope]]
//----->  which is refrence too its trelated data 
{
    let counter =0;
    function incremebtcounter() {
        return counter ++;
    }
console.log(incremebtcounter)
    return incremebtcounter;     //----> step (6)   refrence of incrementcounter returned with its  RELATED DATA 
}


let  mynewfun=outer()  // --->  step(2) mynewfun varibale declared and  calling outer  function  +

mynewfun()   //--->step(7) mynewfun function called and which is basically reference to incrementcounter function which was in outer
//functio but now itll create its own excution context in global scope 

console.log(mynewfun());
