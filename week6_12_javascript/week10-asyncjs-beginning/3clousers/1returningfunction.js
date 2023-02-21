// building blocks of clouser 

// function returning another functions funcationalty 

function getnumber() {  //---> step(1) initlized getnumber function 

     function doublenumber(num) {
        return num *2
     }

     return doublenumber;
}

let getdbnumfun=getnumber()  
// ---> step(2) brand new excution context create for function and  in his memory doublenumber function  get
//---->intitlized but not excuted and return to a getdbnumfun as a function and getnumber is poped of from call stack 
let result = getdbnumfun(3)  
//----> a brand new excucation context created in global  memory   so the variable result excutses getdbnumfun which
//  is (new name of doublenumber)  its give  resule =6
console.log(result);






