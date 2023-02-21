
// simple constoctor function 

function userCreator(name ,score ) {
    this.name =name ,
    this.score=score

}

// methods on  cionstroctor 
userCreator.prototype.sayName =function() {
    return (`i'm ${this.name}` )
}
userCreator.prototype.increment=function() {
     return this.score++ ;
}

// generating instances /objects 
const user1  = new userCreator("phill" ,5)
const user2 =new userCreator ("Tim" ,4)


console.log(user1.sayName())



function  paiduseCreator(paidname ,paidscore ,accountBalance ){
userCreator.call( this ,paidname ,paidscore)
// userCreator.apply(this ,[paidname,paidscore])
this.accountBalance=accountBalance;

}
















