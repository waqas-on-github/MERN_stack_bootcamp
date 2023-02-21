console.clear()


// free user creater 

function free_user_creater (name ,age ){
    // its __proto__ will be on freasher previliges 
    let user=Object.create(freeuser_priviliges) 

    user.name=name;
    user.age=age
    return user
}


let freeuser_priviliges={    // its __proto__ will be Object
    can_fly:true
}


console.log(freeuser_priviliges)   

// Its __proto wi be same as his generator/factoryfunction 
let userx=free_user_creater("mrx" ,100)









//  its  __proto__ will be object 

 let paid_user_Priviligis ={   
     canDestroyship :true
} 



function paid_user_creater(pname ,page ,paiedfee ) {
let puser=free_user_creater(pname ,page)
Object.setPrototypeOf(puser,paid_user_Priviligis)
puser.paiedfee=true
return puser;
    
    
}




Object.setPrototypeOf(paid_user_creater,freeuser_priviliges)

let userp=paid_user_creater("usman" ,27)

console.log(userp.canDestroyship);
