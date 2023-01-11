// so the requirment is put our functions somewhere  where  we can refrence them when we need 

// The problem with previous method was  about funcations 


// lets cteare objects first 

function createUser(name ,score )  {
    let user =Object.create(userFunction)    // this will create new empty  object bu linked with userfuncation object 
    // lets fiil in this object

    user.name =name ;
    user.score =score ;

   return user
 }

 
 
 
 

 
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






 let userFunction={
    incremnet:function(){
      return (this.score++)
    }
  }

  

    




let user1=createUser("waqas" ,26) ;
let user2=createUser("usman" ,20)
console.log(user1.incremnet()); 
console.log(user1.incremnet()); 
    


