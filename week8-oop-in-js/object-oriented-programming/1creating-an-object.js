// object oriented programming 
// goal  the main goal is to put appropreate data and logic bundeld up to gather 

// lets stsrt with simple example we wanna create character in game and and ites few action he can do 

 const user1={
     name: "phile",
     score:4,
    incrementscore:function(){
          return this.score ++ ;
       }

}

 console.log(user1.incrementscore())
 console.log(user1.incrementscore())
 console.log(user1.incrementscore())
 


// so whats happning here we encapsulated data and logic     
//  but this approch has two main problem
//  repatative (every time we need object we need to handcraft it )




// the second way to create object   "THE DOT NOTATION"

 const user2={};
 user2.name ="ethan";
 user2.score =10;

 user2.incrementscore=function () {
     return this.score ++ 
    
 }

 console.log(user2.incrementscore());
 console.log(user2.incrementscore());
 console.log(user2.incrementscore());
 

 // same problem here also 


//  Third method "object.create "

 const user3 =Object.create(null)
 user3.name ="eva" ;
 user3.score=20;
 user3.increment =function() {
     return this.score++
 }

 console.log(user3.increment());
 console.log(user3.increment());
 console.log(user3.increment());
 console.log(user3.increment());



// now we have a another problem 
  // we can not repeate our selfs again and again cuz its useless our programm will not be memory efficent 

//   so we know  functions in js . their job is simply reusabilty of any logic so we can use function here also 


function createUser(name ,score  ){
 const  user =Object.create(null)
 user.name=name;
 user.score =score; 
 user.increm =function(){
     return (user.score ++); 
  }

     return user
    }
 

let newuser=createUser("stephnee" ,30 )
console.log(newuser.increm());
console.log(newuser.increm());
console.log(newuser.increm());


let blueuser=createUser("blue" ,40)

console.log(blueuser.increm())
console.log(blueuser.increm())
console.log(blueuser.increm())
console.log(blueuser.increm())




// with this approch we can generate  as many objects we want but this approch also have some perfomance  issues

// as you can see we are returning whole object always in real world seniros this can be 100s properties and 100s of methods so 
// for just one event like button press its so costy for memory to run 100s of lines of code rather then a single funcation we need  so
// we must have to find some another more  memorey efficent way 








 

