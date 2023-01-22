
//  ist __Proto__ is userFunction object 

function userCreator(name, score){ const newUser = Object.create(userFunctions);
    newUser.name = name;
    newUser.score = score; 
    return newUser;

}



userFunctions = {
    sayName: function (){ console.log("I'm "+this.name);},
    increment: function() {   console.log(this.score ++ );    },
    
}

userFunctions.__proto__ ={hippo:'memx'}
console.log(userFunctions);
const user1 = userCreator("Phil",5);
user1.increment()
user1.increment()
user1.increment()
























