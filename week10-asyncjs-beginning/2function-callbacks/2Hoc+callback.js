// requirment = create generilased array method 

//add and multply numbers 


function copyarrayandminuplate(array,operation) {    //------>  getting aray and function as parameter
 
    let output=[] // ---> creating empty bucket for storing result 

    for(let i=0 ; i<array.length; i++ ){
         output.push(operation((array[i] )))
    }
       
    return output
}

let res=copyarrayandminuplate([1,2,3] ,minuplate)
console.log(res);


function minuplate(input) {
    return input *23
}  



// i also can inject my code into core javascript enine and use it for later purposes





Array.prototype.mymap=function ( fun ) {
    let output=[]
     for(let i=0;i<this.length ;i++ ){
         output.push(fun(this[i]))
     }
     return output
}



let arr =[1,2,3,4]
let rus=arr.mymap(function (element) {
    return element*10
})

console.log(rus);
