
// ist __proto__ is object
userFunctions={   
    sayName :function (){
        console.log(`hello im ${this.name}`);
    },
    increment:function() {
            return  this.score ++ 
    }
}
// subcalssing with factory functions 

// this is the normal factory function which is returning object and accessing method by binding newuser to userFunctions prototype
// its __proto__ is userFunctions prototype 
function userCreator(name, score){
    const newUser=Object.create(userFunctions); 
    newUser.name = name;
    newUser.score = score;
    return newUser;
}

console.log(userCreator())

// logic regarding to objects 


 // generating object
 // ist proto is same as its father 
 const user1=userCreator("phill" ,10)


 console.log(user1);
 




// // subclassing 
// // another factory function for gererating apid user objects

// function for user creater 
const paidUserFunctions = {
  increaseBalance : function () {
    this.accountBalance++
  }
}


 function paidUserCreator(paidName, paidScore, accountBalance) {
     //our motive here to generate object so we use usercreate insted of object.create() becuse we need funcationality of usercreate
     // in our paid user function 
     const newPaidUser = userCreator(paidName, paidScore)     
     // need to repoint the __proto__
     Object.setPrototypeOf(newPaidUser, paidUserFunctions)
     newPaidUser.accountBalance = accountBalance;
      return newPaidUser;
   }


   console.log(paidUserCreator())
   



  // first "extend" paidUserCreator 
// with the .prototype functions of userCreator
// remember, this happens before paidUserCreator is run
let paidUser1;
Object.setPrototypeOf(paidUserCreator,userFunctions)


console.log(paidUser1.sayName())
 paidUser1 = paidUserCreator('philp', 4, 12)
