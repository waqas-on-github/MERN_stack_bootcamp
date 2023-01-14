console.clear()


function free_user_creater (name ,age ){
    let user=Object.create(freeuser_priviliges)
    user.name=name;
    user.age=age
    return user
}


let freeuser_priviliges={
    can_fly:true
}




console.log(freeuser_priviliges)
let userx=free_user_creater("mrx" ,100)




let paid_user_Priviligis ={
    canDestroyship :true

}

function paid_user_creater(pname ,page ) {
    let puser=free_user_creater(pname ,page)
    return puser;

}

console.log(paid_user_creater())






let userp=paid_user_creater("usman" ,27)
console.log(userp);
