
let obj1= {
    name :"waqas" , 
    age:26,
    getinfo :function (){ console.log(` name = ${this.name} and  ${this.age}`)}
 }


let obj2 = {
    name :"imran " ,
    age:28
}


obj1.getinfo.call(obj2)
