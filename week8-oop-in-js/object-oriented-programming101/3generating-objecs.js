// so the requirment is put our functions somewhere  where  we can refrence them when we need 

// The problem with previous method was  about funcations 


// lets cteare objects first 

// function createUser(name ,score )  {
//     let user =Object.create()    // this will create new empty  object  
//     // lets fiil in this object

//     user.name =name ;
//     user.score =score ;

//    return user
//  }
 
//  function increment(obj) {
//     return {...obj, score: obj.score+1}
//  }

// let incremenruser1= increment(user1)
// console.log(incremenruser1);


// There is again some enhencemnts we need to do with our funcation  
//  our appropate data and funcatinality is not bundeled up its scatred in large code base it can cuse confusions 
// id i need to increment one more i've to write same code agan so code is so much repatative 



//  INTRODUCING    "PROTOTYPE"
// in javascript every object has property prototype which is itself objcts 



function createUser(name ,score )  {
         let user =Object.create(userFunction)    // this will create new empty  object bu linked with userfuncation object 
         // lets fiil in this object
    
         user.name =name ;
         user.score =score ;
    
        return user
      }


 let userFunction={
    incremnet:function(){
      return (this.score++)
    }
  }

  // here some how we budeld up appropate data and logic 
// ............... what is  "THIS" keyword 
   //  this is simpily reference to  instence  whos calling  it like user1 user2 .... so on  
 
let user1=createUser("waqas" ,26) ;
let user2=createUser("usman" ,20)
console.log(user1.incremnet()); 
console.log(user1.incremnet()); 
    

// so now we solved techinicle like memory efficency  bundling approprate data  but theres thing which can automate out whole process \
// like hand crafting our objects  whth object.assing keword 

//............... Introducing "NEW" keyword   and "CONSTROCTOR" ..............  


function createplayer(name ,score) {
  this.name=name ,
  this.score=score

}
// so we  create objects but with 
// the next target is bundle up  appropate logic with  every generated object 
// as we know every object have a property callled "PROTOTYPE "  we can lavarage it for that purpose  

// but we genereted our object with funcations 
// FUNCTIONS ARE NOT FUNCTION IN JAVASCRIPT :)  BASICLLY  THEY ARE OBJECTS 

// AS WE KNOW  JavaScript functions are objects, so they have properties and methods like any other object. 
// For example, every function has a prototype property, which is used to add properties and methods to the function's instances.

createplayer.prototype.incremnet=function (){
    return this.score++ ;
}

// what we do here we injectde increment function to create  player (function + objects) combo prototype 
// so every instance can acess increments function seemesly 






// generating Objects

let player1= new createplayer("imran" ,80)
let player2=new createplayer("usman" ,100)
console.log(player1) 
console.log(player2);
// ..........  NEW KEYWORD MUTATE EXCUATION CONTEXT OF CONSTROCTER FUNCTION 
// lets talk leiitle bit more about the "NEW" keyword  3 things new keyword automating for us 
// 1  create new empty object and assign  it to  "this" keyword so when we create object with new keyword get parameters from 
// function call and put in empty object created by this keyword 
// 2 so this generated objects has "prototye"  so the "new" keyword will bind  generated object or we can say instence to constructor 
//  prototype 

// return created instance 

console.log(player1.incremnet());
console.log(player1.incremnet());
console.log(player1.incremnet());
console.log(player1.incremnet());

console.log(player2.incremnet());
console.log(player2.incremnet());
console.log(player2.incremnet());
console.log(player2.incremnet());




