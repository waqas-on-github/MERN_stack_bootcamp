// subcalssing with factory functions 

// this is the normal factory function which is returning object and accessing method by binding newuser to userFunctions prototype
function userCreator(name, score){
    const newUser=Object.create(userFunctions); 
    newUser.name = name;
    newUser.score = score;
    return newUser;
}


// logic regarding to objects 

userFunctions={
    sayName :function (){
        console.log(`hello im ${this.name}`);
    },
    increment:function() {
            return  this.score ++ 
    }
}

// generating object
const user1=userCreator("phill" ,10)


console.log(user1);
user1.sayName()




// subclassing 
// another factory function for gererating apid user objects

function paidUserCreator(paidName, paidScore, accountBalance) {
    //our motive here to generate object so we use usercreate insted of object.create() becuse we need funcationality of usercreate
    // in our paid user function 
    const newPaidUser = userCreator(paidName, paidScore)     
    // need to repoint the __proto__
    Object.setPrototypeOf(newPaidUser, paidUserFunctions)
    newPaidUser.accountBalance = accountBalance;
     return newPaidUser;
  }

// function for user creater 
  const paidUserFunctions = {
    increaseBalance : function () {
      this.accountBalance++
    }
  }



  // first "extend" paidUserCreator 
// with the .prototype functions of userCreator
// remember, this happens before paidUserCreator is run
Object.setPrototypeOf(paidUserCreator,userFunctions)
console.log(paidUserCreator())

const paidUser1 = paidUserCreator('phil', 4, 12)


