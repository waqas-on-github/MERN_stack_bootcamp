
//order of invokation (code running ) in js program

console.log("me first");   //---> setp(1)  javascript excution thred come and log "me first into console "

function show_name(){     //  step(2) define a function 
    console.log("waqas")
}

setTimeout(show_name,0)   // step(3) defien settime out function but its browser api is'nt part of js so itll be go to browser
// features then--> call back qeue and then into call stack 

for(let i=0;i<1000 ;i++ ){   //step(4) for loop defined and excutes 
    console.log(i)
}



// logging order
//1----> "me first"
// 2----> loop resullt (1....1000)
//3----> settime out will be excuted when call stack will be empty after running core js tehn itll aloow outside api to excute so 
//"waqas" will be printed at the end 


// THE EVENT loop will take care between callback qeue and call stack itll check call stack in every nano second if call stack 
//empty and all core javascript runned then it will allow outside world like web apis to execute 

 
